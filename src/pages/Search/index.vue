<template>
  <div>
    <h2>Search</h2>
    <h3>{{this.$route.params.wokeyd}}</h3>
    <h3>{{this.$route.query.keyword2}}</h3>
    <h3>{{wokeyd}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['wokeyd']
}
</script>

<style lang="less" scoped>

</style>

