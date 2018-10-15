<template>
  <div class="blog-home">
    <Banner src="/static/img/banner/b01.jpg" title="This is Sekai's Blog.">
      <div class="blog-banner-info" @mouseover.stop @mouseout.stop @mousemove.stop>
        <Tooltip class="blog-banner-avatar" placement="right" theme="light" content="GitHub" transfer>
          <a href="https://github.com/KonoSekai" target="_blank">
            <img class="blog-banner-avatar-img" src="/static/img/avatar.png"/>
          </a>
        </Tooltip>
        <h1 class="blog-banner-info-title">Sekai</h1>
        <p class="blog-banner-info-text">废宅一只</p>
      </div>
    </Banner>
    <Articles v-model="articles"></Articles>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import Articles from '@/components/articles'

  export default {
    name: 'home',
    components: {Banner, Articles},
    computed: {
      articles() {
        if (this.status) return null
        return this.$store.getters.getHomeList
      }
    }
  }
</script>

<style scoped>
  .blog-banner-info {width: 467px;height: 100%;margin: 0 auto 0 auto;z-index: 9;cursor: auto;position: relative;text-align: center}

  .blog-banner-info-title {font-size: 34px;font-weight: 700}

  .blog-banner-info-text {font-size: 18px}

  .blog-banner-info-title, .blog-banner-info-text {text-shadow: 1px 1px 3px #000;color: #FFF;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif}

  .blog-banner-avatar {margin: 48px auto 10px auto}

  .blog-banner-avatar-img {width: 144px;height: 144px;border: 5px solid #EEE;border-radius: 50%;display: block}
</style>
