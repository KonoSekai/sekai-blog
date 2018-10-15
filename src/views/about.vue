<template>
  <div class="blog-about">
    <Banner src="/static/img/banner/b02.jpg" :title="getTitle()">
    </Banner>
    <div class="blog-content">
      <Card shadow>
        <div class="blog-about-content">
          <h1>Sekai</h1>
          <div>
            <h3>碎碎念:</h3>
            <p>这里是Sekai,欢迎你光临我的博客,目前还在搭建中...</p>
          </div>
          <div>
            <h3>联系方式:</h3>
            <ul>
              <li>Email:<a href="mailto:sekai@anyplayer.cn">sekai@anyplayer.cn</a></li>
              <li>微信号:Kono_Sekai</li>
            </ul>
            <img class="blog-about-contact-wechat" src="/static/img/wechat.png"/>
          </div>
          <div style="margin: 50px auto">
            <h3>链接:</h3>
            <ul class="blog-about-contact-link">
              <li><a href="https://github.com/Clunt" target="_blank">Clunt</a></li>
              <li><a href="http://www.ityouknow.com" target="_blank">纯洁的微笑</a></li>
              <li><a href="https://github.com/KonoSekai/" target="_blank">KonoSekai</a></li>
              <li><a href="http://www.cnkirito.moe" target="_blank">徐靖峰|个人博客</a></li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner'

  export default {
    name: 'about',
    components: {Banner},
    methods: {
      getTitle() {
        let titles = [
          '午时已到',
          '英雄不死',
          '冻住,不洗澡',
          '发现敌军庄稼切',
          'Sekai永不为奴!',
          '好好学习,天天向上',
          '那么代价是什么呢?',
          '你们这是在自寻死路',
          '你看到我的小熊了么',
          'For Mother Russia'
        ]
        return titles[Math.floor(Math.random() * titles.length)]
      }
    }
  }
</script>

<style scoped>
  .blog-about {margin-bottom: 20px}

  .blog-about-content {width: 100%;padding: 20px 50px}

  .blog-about-content h1 {line-height: 60px;font-size: 2.5em;font-weight: 700}

  .blog-about-content h3 {line-height: 48px;padding-left: 10px;font-weight: 600}

  .blog-about-content p, .blog-about-content ul {line-height: 28px;padding-left: 48px}

  .blog-about-contact-wechat {width: 200px;height: 200px;margin: 30px auto;display: block}

  .blog-about-contact-link li {width: 50%;float: left}
</style>
