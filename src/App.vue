<template>
  <div id="app">

    <Header />

    <router-view/>

    <Footer />

  </div>

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import locomotiveScroll from "locomotive-scroll"
export default {

  components: { Header, Footer },

  mounted() {
    //this.initLocomotiveScroll()
  },
  methods: {
    initLocomotiveScroll() {
      window.lmS = new locomotiveScroll({
        el: document.querySelector('#app'),
        smooth: true,
      })
    }
  }
}
</script>


<style lang="scss">

</style>
