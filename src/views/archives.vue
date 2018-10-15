<template>
  <div class="blog-archives">
    <Banner src="/static/img/banner/b03.jpg"></Banner>
    <div class="blog-content">
      <Card shadow>
        <div class="blog-archives-content">
          <h1>Archives</h1>
          <div v-for="year in years">
            <h3>{{year}}</h3>
            <ul>
              <li v-for="article in getArticles(year)">
                <span>{{getDate(article.time)}}</span>&nbsp;
                <router-link :to="'/article/'+article.name">
                  {{article.title}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner'
  import {timeSort2} from '@/lib/utils.js'

  export default {
    name: 'archives',
    components: {Banner},
    computed: {
      articles() {
        return this.$store.getters.getAll
      },
      years() {
        let years = []
        let values = this.articles

        for (let i = 0; i < values.length; i++) {
          if (values[i].type == 0) continue
          let year = new Date(values[i].time).getFullYear()
          if (years.find(y => y == year) == null) years.push(year)
        }

        return years
      }
    },
    methods: {
      getArticles(year) {
        let articles = []
        let values = this.articles
        for (let i = 0; i < values.length; i++) {
          if (values[i].type == 0) continue
          let y = new Date(values[i].time).getFullYear()
          if (y == year) articles.push(values[i])
        }
        return articles.sort(timeSort2)
      },
      getDate(time) {
        let date = new Date(time)
        let month = date.getMonth() + 1
        month = month < 10 ? '0' + month : month
        let day = date.getDate()
        day = day < 10 ? '0' + day : day
        return `${month}-${day}`
      }
    }
  }
</script>

<style scoped>
  .blog-archives {margin-bottom: 20px;overflow: hidden}

  .blog-archives-content {padding: 20px 50px;font-size: 20px}

  .blog-archives-content div {margin-top: 20px;padding-left: 20px}

  .blog-archives-content h3 {line-height: 48px}

  .blog-archives-content ul {line-height: 36px;padding-left: 48px;font-size: 18px;overflow: hidden}

  .blog-archives-content li {width: 50%; float: left;}
</style>
