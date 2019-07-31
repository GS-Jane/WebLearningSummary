<template>
  <div class="hello">
    <el-container>
      <el-header>
        <div class="Jane">
          <span>Jane</span>
        </div>
        <div class="heady">
           <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            clearable
            v-model="input">
          </el-input>
          <ul>
            <li><span>Javascript</span>    </li>
            <li><span>Vue</span> </li>
            <li><span>Node.js</span> </li>
            <li><span>了解更多<i class='el-icon-caret-bottom'></i></span></li>
          </ul>
        </div>
      </el-header>
      <el-container >
        <el-aside width="300px">
          <el-row class="tac">
              <el-col style="weight:100%;">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2" @click="options">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
          </el-row>
        </el-aside>
        <el-main class="main">
          <!-- fksdfksadkl -->
          <Option></Option>
          <Optionto></Optionto>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Option from '@/components/Option'
import Optionto from '@/components/Optionto'
export default {
  name: 'HelloWorld',
  components:{
    Option,
    Optionto

  },
  data () {
    return {
     input:'',
     ops:true
    }
  },
  methods:{
    chang(){
      this.$router.push({path:'./Head'})
    },
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      options() {
        // this.$router.push({name:'Option'})
        this.ops = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .el-header{
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #eaecef;
    width: 100%;
    position:fixed;
    top:0px;
    left:0px;

  }
  .Jane{
    float: left;
    width: 100px;
    span{
      font-size: 30px;
      -webkit-text-fill-color:transparent;
      -webkit-text-stroke:1px #909399;
      // background: linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff)
    }
  }
  .heady{
    position: absolute;
    right:0px;
    top:0px;
    width: 600px;
    .el-input{
      width: 150px;
      float: left;
    }
    ul{
      width:100%;
      line-height: 60px;
      li{
        list-style:none;
        float: left;
        font-size: 20px;
        line-height: 29px;
        padding-left:30px;        
      }
      span:hover{
        border-bottom: 2px solid #67C23A;
      }
    }
  }
  .el-aside {
    // background-color: #D3DCE6;
    color: #333;
    text-align: center;
    // line-height: 200px;
    height:100%;
    border-right: 1px solid #eaecef;
    position: fixed;
    top:60px; 
    left:0px;
    
  }
  
  .el-main {
    // background-color: #E9EEF3;
    // padding-left:300px;
    color: #333;
    // text-align: center;
    // line-height: 160px;
    li{
      list-style:none;
    }
  }
  .main{
    padding-top: 60px;
    padding-left: 300px;
  }    
</style>
