<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '@/components/common/Header'
  import MyFooter from '@/components/common/Footer'

  export default {
    name: "Index",
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>

<style scoped>

</style>
