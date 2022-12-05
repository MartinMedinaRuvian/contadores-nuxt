<template>
  <div>
    <div v-if="contadores && contadores.length > 0">
      <div v-for="contador of contadores" :key="contador.nombre">
        <Contador :contador="contador" />
      </div>
    </div>
    <div v-else>
      <h2 class="titulo-no_contadores">No hay contadores para mostrar</h2>    
    </div>
  </div>
</template>
<script>
import Contador from '@/components/Contador/ContadorComponente.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ListaContadoresComponente',
  components: { Contador },
  created () {
    this.verContadores()
  },
  computed: {
    ...mapGetters(['contadores'])
  },
  methods: {
    ...mapActions(['asignarContadoresDeLocalStorage', 'asignarConfigFiltro', 'ordenarContadores', 'sumarTodosLosContadores']),
    filtrar () {
      let formaFiltro = ''
      let tipoFiltro = ''
      if (process.browser){
        const filtroConfigLocalStorage = localStorage.getItem('config_filtro')
        if (filtroConfigLocalStorage != null) {
          const filtroConfig = JSON.parse(filtroConfigLocalStorage)
          formaFiltro = filtroConfig.formaFiltro
          tipoFiltro = filtroConfig.tipoFiltro
        }
      } 
      this.asignarConfigFiltro({formaFiltro, tipoFiltro})
      this.ordenarContadores()
    },
    verContadores () {
      if (process.browser){
        const contadoresLocalStorage = localStorage.getItem('contadores')
        if (contadoresLocalStorage != null) {
          const contadores = JSON.parse(contadoresLocalStorage)
          this.asignarContadoresDeLocalStorage(contadores)
          this.filtrar()
          this.sumarTodosLosContadores()
        }
      }      
    }
  }
}
</script>
<style>
.titulo-no_contadores {
  color: #fff;
}
</style>