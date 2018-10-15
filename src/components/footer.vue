<template>
  <div class="blog-footer">
    <BackTop></BackTop>
    <a class="github-icon" href="https://github.com/KonoSekai/KonoSekai.github.io" target="_blank">
      <Icon type="logo-github"/>
    </a>
    <p>
      Powered by <a href="https://vuejs.org/" target="_blank">Vue</a>
      &nbsp;&&nbsp;
      <a href="https://www.iviewui.com/" target="_blank">iView</a>.
    </p>
    <p>Copyright <a href="mailto:sekai@anyplayer.cn">Sekai</a> 2018-2028 All Right Reserved</p>
  </div>
</template>

<script>
  export default {
    name: 's-footer'
  }
</script>

<style scoped>
  .blog-footer {width: 100%;line-height: 30px;font-size: 14px;text-align: center}

  .blog-footer .github-icon, .blog-footer .github-icon:hover {line-height: 60px;font-size: 38px;color: #565a5f}
</style>
