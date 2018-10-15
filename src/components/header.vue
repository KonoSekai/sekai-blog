<template>
  <Affix>
    <div class="blog-header blog-border-shadow">
      <div class="blog-nav-bar">
        <span class="blog-title">
          <router-link to="/">Sekai's Blog</router-link>
        </span>
        <span class="blog-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/category">Category</router-link>
          <router-link to="/archives">Archives</router-link>
          <router-link to="/about">About</router-link>
        </span>
      </div>
    </div>
  </Affix>
</template>

<script>
  export default {
    name: 's-header'
  }
</script>

<style scoped>
  .blog-header {width: 100%;line-height: 65px}

  .blog-nav-bar {width: 88%;margin: 0 auto;overflow: hidden}

  .blog-title {padding-left: 11%;font-size: 24px}

  .blog-nav {font-size: 18px;font-weight: 300;float: right}

  .blog-title a, .blog-nav a {padding-left: 30px;color: #565A5F}

  .blog-nav a:hover {color: #2D8CF0}
</style>
