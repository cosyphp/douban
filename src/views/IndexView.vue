<template>
  <div class="movie-view has-header">
    <scroller title="影院热映"></scroller>
    <scroller title="免费在线观影"></scroller>
    <scroller title="新片速递"></scroller>
    <scroller title="发现好电影"></scroller>
  </div>
</template>

<script>
import Scroller from '../components/Scroller'

export default {
  name: 'movie-view',
  components: { Scroller }
}
</script>

<style scoped>

</style>
