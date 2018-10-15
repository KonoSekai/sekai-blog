<template>
  <div class="blog-content">
    <a href="/">
      <Card shadow>
        <div class="blog-error">
          <p class="error-code">4<span style="color: #F5222D">0</span>4</p>
          <p class="error-desc">你想要的东西并不存在,欧耶！</p>
          <p class="error-desc" style="font-size: 16px ">点击返回首页</p>
        </div>
      </Card>
    </a>
  </div>
</template>

<script>
  export default {
    name: `404`,
  }
</script>

<style scoped>
  .blog-error {padding: 200px;text-align: center}

  .error-code {font-size: 64px;color: #2B85E4}

  .error-desc {line-height: 48px;font-size: 24px;color: #999}
</style>
