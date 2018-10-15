<template>
  <div class="blog-content">
    <div class="blog-article-card" v-for="article in articles">
      <Card shadow>
        <div class="blog-article-card-title">
          <div class="blog-article-card-title-tag">
            <Tag v-if="article.type==0" color="green">置顶</Tag>
            <Tag v-else-if="article.type==1" color="blue">原创</Tag>
            <Tag v-else color="cyan">转载</Tag>
          </div>
          <router-link :to="'/article/'+article.name">
            {{article.title}}
          </router-link>
          <span style="float: right">{{getTime(article.time)}}</span>
        </div>
        <div class="blog-article-card-content" v-if="article.summary != ''">
          <p class="blog-article-card-summary" :style="article.cover != '' ?{width: '80%'}:''">
            <router-link :to="'/article/'+article.name">
              {{article.summary}}
            </router-link>
          </p>
          <router-link v-if="article.cover != ''" :to="'/article/'+article.name">
            <div class="blog-article-card-cover" :style="getStyle(article.cover)"></div>
          </router-link>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import {time2Chinese} from '@/lib/utils.js'

  export default {
    name: 'articles',
    props: {value: Array},
    computed: {
      articles() {
        return this.value
      }
    },
    methods: {
      getTime(time) {
        return time2Chinese(time)
      },
      getStyle(name) {
        return `background: url("/static/img/cover/${name}") center / cover no-repeat`
      }
    }
  }
</script>

<style scoped>
  .blog-article-card {margin-bottom: 20px }

  .blog-article-card-title {height: 30px;line-height: 30px;margin: 20px;overflow: hidden}

  .blog-article-card-title a {font-size: 16px;font-weight: 700; color: black}

  .blog-article-card-title a:hover {color: #2D8CF0}

  .blog-article-card-title-tag {margin-right: 8px;float: left;display: inline-block }

  .blog-article-card-content {max-height: 100px;margin: 20px;vertical-align: middle;overflow: hidden }

  .blog-article-card-summary {width: 100%;height: 100%;padding-left: 20px;float: left;text-align: justify;word-wrap: break-word; word-break: normal}

  .blog-article-card-summary a {color: gray}

  .blog-article-card-cover {width: 140px;height: 80px;border-radius: 3px;float: right}
</style>
