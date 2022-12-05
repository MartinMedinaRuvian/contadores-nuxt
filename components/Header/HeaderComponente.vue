<template>
  <div class="header contenedor-morado_primario">
    <div class="contenedor-header">
      <div class="contenedor-selects_header">
        <p>Ordenar por:</p>
        <select name="selectFiltrarPor" v-model="tipoFiltro" @change="filtrar()">
          <option value="NOMBRE" selected>Nombre</option>
          <option value="NUMERO">Numero</option>
        </select>
        <select name="selectFormaFiltro" v-model="formaFiltro" @change="filtrar()">
          <option value="ASCENDENTE" selected>Ascendente</option>
          <option value="DESCENDENTE">Descendente</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'HeaderComponente',
  data () {
    return {
      tipoFiltro: 'NOMBRE',
      formaFiltro: 'ASCENDENTE'
    }
  },
  created () {
    this.verConfigFiltro()
  },
  methods: {
    ...mapActions(['asignarConfigFiltro', 'ordenarContadores']),
    verConfigFiltro () {
      if (process.browser){
        const filtroConfigLocalStorage = localStorage.getItem('config_filtro')
        if (filtroConfigLocalStorage != null) {
          const filtroConfig = JSON.parse(filtroConfigLocalStorage)
          this.tipoFiltro = filtroConfig.tipoFiltro
          this.formaFiltro = filtroConfig.formaFiltro
        }
      } 
    },
    filtrar () {
      const formaFiltro = this.formaFiltro
      const tipoFiltro = this.tipoFiltro
      this.asignarConfigFiltro({formaFiltro, tipoFiltro})
      this.ordenarContadores()
    }
  }
}
</script>
<style>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
}
.contenedor-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedor-header select {
  font-size: 1rem;
  margin-right: .3rem;
  padding: .3rem;
  border-radius: .7rem;
  margin-top: -1rem;
}
.contenedor-header button {
  font-size: 1rem;
}
.contenedor-header p {
  margin-bottom: .5rem;
}
</style>
