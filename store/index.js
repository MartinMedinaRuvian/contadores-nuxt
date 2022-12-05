export const state = () => ({
  MAXIMO_CONTADORES: 20,
  MAXIMO_CARACTERES_NOMBRE_CONTENEDOR: 20,
  contadores: [],
  configFiltro: {
    formaFiltro: 'NOMBRE',
    tipoFiltro: 'ASCENDENTE'
  },
  totalSumaContadores: 0
})

export const mutations = {
  eliminarContador (state, payload) {
    let contadores = state.contadores
    let contadoresRetornar = contadores.filter(contador => contador.nombre !== payload)
    state.contadores = contadoresRetornar
    localStorage.setItem('contadores', JSON.stringify(state.contadores))
  },
  agregarContador (state, payload) {
    let contadores = state.contadores
    let contenedor = contadores.filter(contador => contador.nombre == payload.nombre)
    if (contenedor.length <= 0) {
      state.contadores.push(payload)
    }
    localStorage.setItem('contadores', JSON.stringify(state.contadores))
  },
  realizarAccionBotonContador (state, payload) {
    let contadores = state.contadores
    for (let contador of contadores) {
      if (contador.nombre == payload.nombre) {
        if (payload.accion === 'RESTAR') {
          contador.numero --
        } else {
          contador.numero ++
        }
        break
      }
    }
    state.contadores = contadores
    localStorage.setItem('contadores', JSON.stringify(state.contadores))
  },
  asignarContadoresDeLocalStorage (state, payload) {
    state.contadores = payload
  },
  ordenarContadores (state) {
    const contadores = state.contadores
    let contadoresOrdenados = contadores
    if (state.configFiltro.formaFiltro == 'ASCENDENTE') {
      if (state.configFiltro.tipoFiltro == 'NOMBRE') {
        contadoresOrdenados = contadores.sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1
          } else if (a.nombre > b.nombre) {
            return 1
          } else {
            return 0
          }
        })
      } else {
        contadoresOrdenados = contadores.sort((a, b) => {
          return a.numero - b.numero
        })
      }
    } else {
      if (state.configFiltro.tipoFiltro == 'NOMBRE') {
        contadoresOrdenados = contadores.sort((a, b) => {
          if (b.nombre < a.nombre) {
            return -1
          } else if (b.nombre > a.nombre) {
            return 1
          } else {
            return 0
          }
        })
      } else {
        contadoresOrdenados = contadores.sort((a, b) => {
          return b.numero - a.numero
        })
      }
    }
    state.contadores = contadoresOrdenados
    localStorage.setItem('contadores', JSON.stringify(state.contadores))
  },
  asignarConfigFiltro (state, payload) {
    state.configFiltro = payload
    localStorage.setItem('config_filtro', JSON.stringify(payload))
  },
  sumarTodosLosContadores (state) {
    let total = 0
    const contadores = state.contadores
    for (let contador of contadores) {
      total += contador.numero
    }
    state.totalSumaContadores = total
  },
  buscarPorCantidad (state, payload) {
    const contadores = state.contadores
    const cantidad = parseInt(payload.cantidad)
    console.warn(payload, cantidad)
    let contadoresFiltrados = []
    if (payload.tipoFiltro == 'MAYOR') {
      contadoresFiltrados = contadores.filter(contador => contador.numero > cantidad)
    } else {
      contadoresFiltrados = contadores.filter(contador => contador.numero < cantidad)
    }
    console.warn(contadoresFiltrados, 'ccc')
    state.contadores = contadoresFiltrados
  }
}

export const actions = {
  eliminarContador ({commit}, payload) {
    commit('eliminarContador', payload)
  },
  agregarContador ({commit}, payload) {
    commit('agregarContador', payload)
  },
  realizarAccionBotonContador ({commit}, payload) {
    commit('realizarAccionBotonContador', payload)
  },
  asignarContadoresDeLocalStorage({commit}, payload) {
    commit('asignarContadoresDeLocalStorage', payload)
  },
  ordenarContadores({commit}) {
    commit('ordenarContadores')
  },
  asignarConfigFiltro({commit}, payload) {
    commit('asignarConfigFiltro', payload)
  },
  sumarTodosLosContadores({commit}) {
    commit('sumarTodosLosContadores')
  },
  buscarPorCantidad({commit}, payload) {
    commit('buscarPorCantidad', payload)
  },
}

export const getters = {
  contadores (state) {
    return state.contadores
  },
  maximoContadoresPermitidos (state) {
    return state.MAXIMO_CONTADORES
  },
  maximoCaracteresNombreContenedorPermitidos (state) {
    return state.MAXIMO_CARACTERES_NOMBRE_CONTENEDOR
  },
  configFiltro (state) {
    return state.configFiltro
  },
  totalSumaContadores (state) {
    return state.totalSumaContadores
  }
}