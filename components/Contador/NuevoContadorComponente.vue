<template>
  <div>
    <transition name="fade">
      <div class="modal-overlay" v-if="verModal"></div>
    </transition>
    <transition name="fade">
      <div class="modal-overlay" v-if="verModal">
        <div class="modal" v-if="verModal">
          <h2>Nuevo Contador</h2>
          <input type="text" ref="nombre" placeholder="Nombre del Contador" v-model="nombreContador" @keypress.enter="agregarNuevoContador()" required :maxlength="maximoCaracteresNombreContenedorPermitidos">
          <p v-if="nombreContador.length <= 0">Ingrese el nombre del Contador (Máximo {{ maximoCaracteresNombreContenedorPermitidos }} caracteres)</p>
          <div class="contenedor-botones_modal">
            <button @click="cerrarModal()" class="boton-primario color-rojo_boton">Cancelar</button>
            <button @click="agregarNuevoContador()" class="boton-primario color-azul_boton" :disabled="nombreContador.length <= 0">Agregar</button>
          </div>
        </div>
      </div>
    </transition>
    <button class="boton-primario color-azul_boton" @click="abrirModal()" :disabled="contadores.length >= maximoContadoresPermitidos">Agregar Contador</button>
    <button class="boton-primario color-azul_boton btn-ver_todos" @click="verContadores()">Ver todos</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NuevoContadorComponenete',
  data () {
    return {
      verModal: false,
      nombreContador: ''
    }
  },
  computed: {
    ...mapGetters(['contadores', 'maximoContadoresPermitidos', 'maximoCaracteresNombreContenedorPermitidos'])
  },
  methods: {
    ...mapActions(['agregarContador', 'ordenarContadores', 'sumarTodosLosContadores', 'asignarContadoresDeLocalStorage']),
    agregarNuevoContador () {
      const nombre = this.nombreContador.toLowerCase()
      if (nombre.length > 0 && nombre.length <= this.maximoCaracteresNombreContenedorPermitidos) {
        this.agregarContador({nombre, numero: 0})
        this.ordenarContadores()
        this.sumarTodosLosContadores()
        this.verModal = false
        this.nombreContador = ''
      }
    },
    cerrarModal () {
      this.verModal = false
      this.nombreContador = ''
    },
    abrirModal () {
      this.verModal = true
    },
    verContadores () {
      if (process.browser){
        const contadoresLocalStorage = localStorage.getItem('contadores')
        if (contadoresLocalStorage != null) {
          const contadores = JSON.parse(contadoresLocalStorage)
          this.asignarContadoresDeLocalStorage(contadores)
          this.sumarTodosLosContadores()
        }
      }      
    }
  }
}
</script>
<style>
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.4);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #000;
  padding: 4rem;
  border-radius: 1.6rem;
  text-align: center;
}
.contenedor-botones_modal {
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
}
.contenedor-botones_modal button {
  font-size: 1.4rem;
  margin: .3rem;
}
.modal input {
  width: 100%;
  font-size: 1.4rem;
  padding: .4rem;
}
.btn-ver_todos {
  margin-left: 1rem;
}
</style>