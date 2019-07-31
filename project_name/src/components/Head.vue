<template>
<!-- 测试图片拖拽 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <draggable v-model="colors" @update="datadragEnd" :options = "{animation:500}">
      <transition-group class="a">
          <div v-for="(element, index) in colors" :key="index" class = "drag-item">
            <div :class="index === 0 ? 'img800': 'img400'">
              {{element.text}}
            </div>
          </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Head',
  data () {
    return {
        msg:"这是测试组件",
                colors: [
                    {
                        text: "Aquamarine",
                    }, 
                    {
                        text: "Hotpink",
                    }, 
                    {
                        text: "Gold",
                    }, 
                    {
                        text: "Crimson",
                    }, 
                    {
                        text: "Blueviolet",
                    },
                    {
                        text: "Lightblue",
                    }, 
                    {
                        text: "Cornflowerblue",
                    }, 
                    {
                        text: "Skyblue",
                    }, 
                    {
                        text: "Burlywood",
                    }
                ],
                startArr:[],
                endArr:[],
                count:0,
    }
  },
  components: {
    draggable
  },
     methods:{
            getdata (evt) {
                console.log(evt.draggedContext.element.text)
            },
            datadragEnd (evt) {
                evt.preventDefault();
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
                console.log(this.colors);
            }
        },
        mounted () {
	        //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
            document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  div{
    h1{
      color:yellow;
    }
  }
    .a{display: block;width: 1100px; }
     .test{
        border:1px solid #ccc;
    }
    .drag-item{
      display: inline-block;
        line-height: 50px;
        margin: auto;
        position: relative;
        background: #ddd;
        margin-top:20px;
        float: left;
      margin-left: 10px;
    }
    .ghostClass{
        opacity: 1;
    }
    .bottom{
        width: 200px;
        height: 50px;
        position: relative;
        background: blue;
        top:2px;
        left: 2px;
        transition: all .5s linear;
    }
    .img800 {
      width: 300px;
      height: 320px;
    }
    .img400 {
      width: 150px;
      height: 150px;
    }

</style>
