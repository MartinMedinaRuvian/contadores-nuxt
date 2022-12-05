<template>
  <index-componente/>
</template>

<script lang="ts">
import Vue from 'vue'
import IndexComponente from '~/components/IndexComponente.vue'

export default Vue.extend({
  components: { IndexComponente },
  name: 'IndexPage',
  layout: 'default'
})
</script>
