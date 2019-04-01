<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'IndexView'}">
        倍畅
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'IndexView'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'IndexView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'IndexView'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'IndexView'}">
          小组
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {}
  },
  methods: {
    showTalion: function () {
      this.$emit('showTalion')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  .title {
    flex: 1;
    max-width: 4.6rem;
    max-height: 2.2rem;
    margin-right: 1.8rem;
    font-size: 0;
    line-height: 3.2rem;
    color: #00b600;
    word-break: break-all;
    background: url(../../static/beichang.png) no-repeat;
    background-size: cover;

    a {
      display: block;
    }
  }

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  li {
    display: inline-block;
    font-size: 1.6rem;
    margin-right: 1.2rem;
  }
}
</style>
