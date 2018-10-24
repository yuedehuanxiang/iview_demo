<template>
  <div id="app">
    <!--<Row>-->
      <!--<Col span="6">-->
        <!--<Card>-->
          <!--<div style="height: 200px"></div>-->
        <!--</Card>-->
      <!--</Col>-->
      <!--<Col span="18">-->
        <!--<Card>-->
          <!--<div style="height: 800px"></div>-->
        <!--</Card>-->
      <!--</Col>-->
    <!--</Row>-->
    <!--<Button @click="handle">button</Button>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
    data(){
      return{
          content:''
      }
    },
    methods:{
      handle(){
          this.content='1231312313123'
      }
    }
}
</script>

<style>
#app {
  height: 5000px;
  background: #f8f8f9!important;
}
</style>
