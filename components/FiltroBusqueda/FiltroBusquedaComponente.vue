<template>
  <div>
    <div class="contenedor-busqueda">
      <div class="contenedor-selects_busqueda">
        <p>Buscar:</p>
        <select name="selectBuscarPor" v-model="tipoFiltro">
          <option value="MAYOR">Mayor a</option>
          <option value="MENOR" selected>Menor a</option>
        </select>
        <input type="number" placeholder="Cantidad" v-model="cantidad">
        <button class="boton-primario color-azul_boton" @click="buscarPorCantidadContador()">Buscar</button>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'FiltroBusquedaComponente',
  data () {
    return {
      tipoFiltro: 'MAYOR',
      cantidad: 0
    }
  },
  methods: {
    ...mapActions(['buscarPorCantidad', 'sumarTodosLosContadores']),
    buscarPorCantidadContador () {
      if (this.cantidad.length > 0 && this.esNumero(this.cantidad)) {
        const buscar = {
          tipoFiltro: this.tipoFiltro,
          cantidad: this.cantidad
        }
        this.buscarPorCantidad(buscar)
        this.sumarTodosLosContadores()
      } else {
        alert('Ingrese un numero válido')
      }
    },
    esNumero (valor) {
      const regex = /^[0-9]*$/
      return regex.test(valor)
    }
  }
}
</script>
<style>
.contenedor-busqueda {
  display: flex;
  align-items: center;
}
.contenedor-busqueda select {
  font-size: 1rem;
  margin-right: .3rem;
  padding: 1rem;
  border-radius: .7rem;
  margin-top: -1rem;
}
.contenedor-busqueda button {
  font-size: 1rem;
}
.contenedor-busqueda p {
  color: #fff;
  margin-bottom: .5rem;
}
.contenedor-busqueda input{
  width: 5.6rem;
  font-size: 1.4rem;
  padding: .4rem;
  height: 2rem;
}
</style>
