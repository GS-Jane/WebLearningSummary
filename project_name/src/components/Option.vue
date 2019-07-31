<template>
    <div class="options">
            <div class="table-header">
                <div class="check-all-container product" style="width:100px;">
                    <div class="check-all" >
                        <el-checkbox v-model="checkedAll" @change="handleCheckAllChange" ></el-checkbox>
                    </div>
                </div>
                <div style="width:400px;">英文名称</div>
                <div style="width:300px;">国家简码</div>
                <div style="width:400px;">中文名称</div>
                <div style="width:400px;">创建时间</div>
                <div style="width:400px;">更新时间</div>
            </div> 
            <div class="table-body" v-for="(item,index) in goodList" :key="index">
                <div class="check-item check-items" style="width:40px;">
                    <el-checkbox  v-model="item.isChecked" @change="selectChange" class="check-items-lab"></el-checkbox>
                </div>
                <div style="flex:2;" class="xs1">
                   <span style="padding-left:38px">{{item.en}} </span> 
                </div>
                <div style="flex:2;" class="xs1">
                   <span style="margin-left: 48px;">{{item.code}} </span>
                </div>
                <div style="flex:2;" class="xs1">
                   <span style="margin-left: -24px;">{{item.cn}} </span>
                </div>
                <div style="flex:2;" class="xs1">
                   <span style="margin-left: -16px;">{{item.createTime}}</span> 
                </div>
                <div style="flex:2;" class="xs1">
                  <span style="margin-left: -10px;"> {{item.updateTime}} </span>
                </div>
            </div>
               
          
            <!-- <li v-for="(item,index) in goodList" :key="index">
                <span>{{item.code}}</span>
                
            </li> -->
      
        <div class="block">
            <!-- <span class="demonstration">完整功能</span> -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Option',
    data () {
        return {
            checkedAll: false,
            currentPage: 1,
            pageSize: 20,
            totalCount: 0,
            goodList: [],
            selectedList: []

        }
    },
    mounted(){
        this.goods()
        // this.tokes()
    },
    methods:{
          //全选
        handleCheckAllChange(flag) {
            this.selectedList = [];
            this.goodList.forEach((item) => {
                item.isChecked = flag;
                if (flag) {
                    this.selectedList.push(item);
                }
            })
        },
        //单选
        selectChange() {
            this.selectedList = []
            this.goodList.forEach((item) => {
                if (item.isChecked) {
                    this.selectedList.push(item);
                }
            })
            this.checkedAll = this.goodList.length === this.selectedList.length ? true : false;
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.goods()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.goods()
            this.checkedAll = false;
            console.log(`当前页: ${val}`);
        },
        goods() {
            axios.post( 'http://192.168.1.58:7001/api/table/country' , {
                condition: [],
                pageSize: this.pageSize,
                pageIndex: this.currentPage
            }).then((res)=>{
                console.log(res.data.data)
                if(res.status === 200) {
                    const data = res.data.data;
                    data.dataList.forEach((item) => {
                        item.isChecked = false;
                    })
                    this.goodList = data.dataList;
                    this.totalCount = data.dataMeta.totalCount;
                    
                }
              
                
            }).catch((err)=>{
                console.log(err)
            })
        },
        tokes() {
            axios.get('http://192.168.1.58:7001/api/account/getUserInfo',{
                params:{
                    token: 'admin'
                }
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss">
    .options{
        .table-header,.table-body {
            height: 30px;
            line-height: 30px;
            color: #acb0be;
            background: #fff;
            box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
            border-radius: 4px;
            display: flex;
            font-size: 12px;
            margin-bottom: 10px;
            // font-weight: bolder;
            // text-transform: uppercase;
            letter-spacing: 1px;
            .product {
                padding-left: 10px;
            }
        }
        .table-body{
           color: #000;
            .check-item{
                padding-left: 10px;
            }
        }
        .block{
            position: fixed;
            bottom: 0;
            left: 300px;
            right: 0px;
            z-index: 200;
            background-color: #f1f2f7;
            border-radius: 5px;
        }
    }
</style>
