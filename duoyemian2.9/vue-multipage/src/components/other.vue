<template>
  <div>
    <p @click="a">this is other page</p>
  </div>
</template>

<script>
export default {
  name: 'other',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    a(){
      console.log(666)
    }
  }
}
</script>

<style lang="scss">
  div{
    p{
      font-size: 80px;
      color:yellow;
    }
  }
</style>
