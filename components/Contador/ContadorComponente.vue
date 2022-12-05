<template>
  <div>
    <div class="contenedor-contador contenedor-verde_primario">
      <div class="contenedor-contador_izquierda">
        <h3>{{ contador.nombre }}</h3>
      </div>
      <div class="contenedor-contador_derecha">
        <div class="contenedor-botones_contador">
          <button @click="restar(contador.nombre)" class="boton-redendeado color-rojo_primario" :disabled="contador.numero <= 0">-</button>
          <p class="counter">{{ contador.numero }}</p>
          <button @click="sumar(contador.nombre)" class="boton-redendeado color-verde_primario">+</button>
          <div class="contenedor-img_eliminar">
            <button>
              <img src="@/assets/img/papelera.svg" alt="img-papelera" @click="removerContador(contador.nombre)">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    contador: Object
  },
  name: 'ContadorComponente',
  methods: {
    ...mapActions(['eliminarContador', 'realizarAccionBotonContador', 'sumarTodosLosContadores']),
    sumar (nombreContador) {
      this.realizarAccionBotonContador({
        nombre: nombreContador,
        accion: 'SUMAR'
      })
      this.sumarTodosLosContadores()
    },
    restar (nombreContador) {
      this.realizarAccionBotonContador({
        nombre: nombreContador,
        accion: 'RESTAR'
      })
      this.sumarTodosLosContadores()
    },
    removerContador (nombreContador) {
      this.eliminarContador(nombreContador)
      this.sumarTodosLosContadores()
    }
  }
}
</script>
<style>
.contenedor-contador {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 1.2rem;
  border-radius: .8rem;
  font-size: 1.3rem;
  border-style: none;
}
.contenedor-botones_contador {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.counter {
  text-align: center;
  background-color: #fff;
  color: #000;
  padding: .5rem;
  min-width: 3.5rem;
  border-radius: .2rem;
  margin-left: .7rem;
  margin-right: .7rem;
}
.contenedor-img_eliminar {
  cursor: pointer;
  margin-left: 1rem;
}
.contenedor-img_eliminar button {
  background-color: transparent;
  border-style: none;
  border-radius: 1rem;
}
</style>
