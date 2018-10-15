<template>
  <div class="blog-content">
    <Card shadow>
      <div class="blog-article">
        <h1 class="blog-article-title">{{article.title}}</h1>
        <div class="blog-article-meta">
          <Tag v-if="article.type==0" color="green">置顶</Tag>
          <Tag v-else-if="article.type==1" color="blue">原创</Tag>
          <Tag v-else color="cyan">转载</Tag>
          <span>{{getTime(article.time)}}</span>
          <span>{{article.cate}}</span>
        </div>
        <div v-if="article.cover != ''" class="blog-article-cover" :style="imgStyle"></div>
        <div v-if="article.summary != ''" class="blog-article-summary">{{article.summary}}</div>
        <div v-if="articleContent !=''" v-html="articleContent" class="blog-article-content"></div>
      </div>
    </Card>
  </div>
</template>

<script>
  import axios from 'axios'
  import {time2Chinese2} from '@/lib/utils.js'

  export default {
    name: 'page',
    computed: {
      article() {
        let name = this.$route.params.name
        return this.$store.getters.find(name)
      },
      imgStyle() {
        return `background: url("/static/img/cover/${this.article.cover}") center / contain no-repeat`
      }
    },
    data() {
      return {articleContent: ''}
    },
    methods: {
      getTime: (time) => {
        return time2Chinese2(time)
      },
      getContent() {
        let name = location.href.split('/')
        let url = `/static/articles/content/${name[name.length - 1]}.json`

        axios.get(url).then(res => {
          this.articleContent = res.data.content
        }).catch(err => {
          console.log(err)
          location.replace('#/404')
        })
      }
    },
    created() {
      this.getContent()
    }
  }
</script>

<style scoped>
  .blog-article {padding: 32px}

  .blog-article-title {line-height: 80px;font-size: 42px}

  .blog-article-meta {line-height: 36px}

  .blog-article-meta span {margin-left: 10px}

  .blog-article-cover {width: 100%;height: 300px;margin: 30px auto}

  .blog-article-summary {margin: 30px 20px;padding: 30px;border-radius: 10px;border: 1px solid #CCC;color: gray;background: #F6F6F6;text-align: justify;word-wrap: break-word; word-break: normal}

  .blog-article-content {margin: 30px 20px;font-size: 16px;text-align: justify;word-wrap: break-word; word-break: normal}


</style>
