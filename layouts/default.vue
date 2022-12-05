<template>
  <div>
    <Header />
      <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header/HeaderComponente.vue'
import Footer from '@/components/Footer/FooterComponente.vue'
export default {
  name: 'DefaultLayout',
  components: { Header, Footer }
}
</script>
