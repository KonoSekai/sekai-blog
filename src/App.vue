<template>
  <div class="blog">
    <Header></Header>

    <div class="blog-main">
      <Spin v-if="status" fix>
        <img src="/static/svg/loading.svg">
      </Spin>
      <router-view v-else/>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'

  export default {
    name: 'App',
    components: {Header, Footer},
    computed: {
      status() {
        return this.$store.getters.status
      }
    }
  }
</script>
<style>
  .blog-main {width: 100%;min-height: 738px;padding-bottom: 20px;background: #EEE;overflow: auto}
</style>
