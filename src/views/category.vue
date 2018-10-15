<template>
  <div class="blog-category">
    <Banner src="/static/img/banner/b04.jpg"></Banner>
    <div class="blog-category-list">
      <div v-for="cate in categories">
        <div class="list-title">
          <span class="blog-border-shadow">{{cate}}</span>
        </div>
        <Articles :value="getArticles(cate)"></Articles>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import Articles from '@/components/articles'
  import {time2Chinese} from '@/lib/utils.js'

  export default {
    name: 'category',
    components: {Articles, Banner},
    computed: {
      articles() {
        return this.$store.getters.getAll
      },
      categories() {
        let categories = []
        let values = this.articles

        for (let i = 0; i < values.length; i++) {
          if (values[i].type == 0) continue
          if (categories.find(cate => cate == values[i].cate) == null) categories.push(values[i].cate)
        }

        return categories
      }
    },
    methods: {
      getArticles(cate) {
        let articles = []
        let values = this.articles
        for (let i = 0; i < values.length; i++) {
          if (values[i].type == 0) continue
          if (cate == values[i].cate) articles.push(values[i])
        }

        return articles
      },
      getDate(time) {
        time2Chinese(time)
      }
    }
  }
</script>

<style scoped>
  .blog-category-list {margin-top: 40px}

  .list-title {margin: 20px auto;text-align: center}

  .list-title span {max-width: 150px;line-height: 40px;margin: 0 auto;font-size: 20px;border-radius: 40px;
    color: #FFF;background: #49C8F4;display: block}

</style>
