<template>
  <div class="contenedor-principal_index">
    <div class="contenedor-principal_body">
      <nuevo-contador class="nuevo-contador" />
      <filtro-busqueda-componente />
    </div>
    <lista-contadores />
  </div>
</template>
<script>
import ListaContadores from '@/components/ListaContadores/ListaContadoresComponente.vue'
import NuevoContador from '@/components/Contador/NuevoContadorComponente.vue'
import FiltroBusquedaComponente from '~/components/FiltroBusqueda/FiltroBusquedaComponente.vue'
export default {
  components: { ListaContadores, NuevoContador, FiltroBusquedaComponente },
  name: 'IndexComponente'
}
</script>
<style>
.contenedor-principal_index {
  margin-top: 7.5rem;
  margin-bottom: 8rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.contenedor-principal_body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
</style>