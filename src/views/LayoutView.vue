<template>
  <div class="pages-view">
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'

export default {
  name: 'pages-view',
  components: { HeaderBar, FooterBar }
}
</script>

<style scoped>

</style>
