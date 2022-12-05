<template>
  <div class="footer contenedor-morado_primario">
    <div class="contenedor-suma">
      <h2>Suma = </h2>
      <h3 class="total-suma">{{ totalSumaContadores }}</h3>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FooterComponente',
  computed: {
    ...mapGetters(['contadores', 'totalSumaContadores'])
  }
}
</script>
<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.total-suma {
  min-width: 3.5rem;
  height: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: .2rem;
  text-align: center;
  font-size: 1.4rem;
  padding: .5rem;
}
.contenedor-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.contenedor-suma {
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  flex-wrap: wrap;
  margin-right: 2.8rem;
}
.contenedor-suma h3 {
  margin-left: .7rem;
}
</style>