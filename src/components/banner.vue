<template>
  <div class="blog-banner" :style="bannerStyle" @mouseover="mouseover" @mouseout="mouseout" @mousemove="mousemove">
    <span :class="[{'blog-banner-tip':true},
                   {'blog-banner-tip-hidden':tipHidden},
                   {'blog-banner-tip-left':tipIsLeftOrRight},
                   {'blog-banner-tip-right':!tipIsLeftOrRight}]"
          :style="tipStyle">{{title}}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    props: {
      title: String,
      src: String
    },
    data() {
      return {
        tipStyle: '',
        tipHidden: true,
        tipIsLeftOrRight: true
      }
    },
    computed: {
      bannerStyle() {
        return `background: url(${this.src}) center / cover no-repeat`
      }
    },
    methods: {
      mouseover(event) {
        if (this.title == null) return
        this.updateTipPosition(event.x, event.y)
        this.tipHidden = false
      },
      mouseout() {
        this.tipHidden = true
      },
      mousemove(event) {
        if (this.title == null) return
        this.updateTipPosition(event.x, event.y)
      },
      updateTipPosition(x, y) {
        y -= 10

        if (x > window.screen.width / 2) {
          x -= 170
          this.tipIsLeftOrRight = false
        } else {
          x += 20
          this.tipIsLeftOrRight = true
        }
        this.tipStyle = `left:${x}px;top:${y}px`
      }
    }
  }
</script>

<style scoped>
  .blog-banner {width: 100%;height: 333px;cursor: pointer;overflow: hidden}

  .blog-banner-tip {width: 150px;padding: 10px 20px;border-radius: 6px;line-height: 1;color: #666;z-index: 3;border: 1px solid #ccc;position: absolute;background: #FFF;
    transition: opacity .5s ease .5s;transition-property: opacity;transition-duration: 0.5s;transition-timing-function: ease;transition-delay: 0.5s;}

  .blog-banner-tip-hidden {display: none}

  .blog-banner-tip-left:before, .blog-banner-tip-right:after {top: 9px;z-index: 1;content: '';
    display: block;position: absolute;border-style: solid;border-color: transparent #CCC transparent transparent}

  .blog-banner-tip-left:before {left: -7px;border-width: 7px 7px 7px 0}

  .blog-banner-tip-right:after {right: -7px;border-width: 7px 0 7px 7px}

  .blog-banner-tip-left:before {left: -6px;z-index: 2;border-color: transparent #FFF transparent transparent}

  .blog-banner-tip-right:after {right: -6px;z-index: 2;border-color: transparent transparent transparent #FFF}
</style>
