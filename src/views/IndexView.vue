<template>
  <div class="movie-view has-header">
    <container title="影院热映"></container>
    <container title="免费在线观影"></container>
    <container title="新片速递"></container>
    <container title="发现好电影"></container>
  </div>
</template>

<script>
import Container from '../components/Container'

export default {
  name: 'movie-view',
  components: { Container }
}
</script>

<style scoped>

</style>
