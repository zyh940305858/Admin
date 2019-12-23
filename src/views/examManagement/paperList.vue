<!--
 * @Author: your name
 * @Date: 2019-12-19 18:08:48
 * @LastEditTime : 2019-12-22 21:05:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\views\examManagement\paperList.vue
 -->
<template>
    <div class="box">
        <div class="rightlist">
            <h2>用户展示</h2>
             <div v-for="(item,index) in navlist" :key="index"> 
               <span @click="handle(index)">{{item}}</span>
             </div>
             <div v-if="count==0">
                 <el-table
                    :data="paperList[count]" stripe style="width: 100%"><el-table-column prop="user_name" label="用户名" width="180"></el-table-column>
                    <el-table-column prop="user_pwd" label="密码"></el-table-column>
                    <el-table-column prop="identity_text" label="身份"></el-table-column>
                 </el-table>
             </div>
             <div v-if="count==1">
                 <el-table
                    :data="paperList[count]" stripe style="width: 100%"><el-table-column prop="identity_text" label="身份名称"></el-table-column> 
                 </el-table>
             </div>
              <div v-if="count==2">
                 <el-table
                    :data="paperList[count]" stripe style="width: 100%"><el-table-column prop="api_authority_text" label="api权限名称"></el-table-column>
                    <el-table-column prop="api_authority_url" label="api权限url" ></el-table-column>
                    <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
                 </el-table>
             </div>
              <div v-if="count==3">
                 <el-table
                    :data="paperList[count]" stripe style="width: 100%"><el-table-column prop="identity_text" label="身份名称"></el-table-column>
                    <el-table-column prop="api_authority_text" label="api权限名称"></el-table-column>
                    <el-table-column prop="api_authority_url" label="api权限url"></el-table-column>
                    <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
                 </el-table>
             </div>
              <div v-if="count==4">
                 <el-table
                    :data="paperList[count]" stripe style="width: 100%"><el-table-column prop="identity_text" label="身份"></el-table-column>
                    <el-table-column prop="view_authority_text" label="视图名称"></el-table-column>
                    <el-table-column prop="view_id" label="视图id"></el-table-column>
                 </el-table>
             </div>
 
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Parper from '../class/paper.vue'
export default {
    data(){
        return {
          navlist:["用户数据","身份数据","api接口关系","身份和api接口关系","身份和视图权限关系"],
          datlist:[],
          count:0
          
        }
    },
    components:{
      
    },
    computed:{
        ...mapState({
            paperList:store=>store.parper.PaperList,
            // identityList:store=>store.parper.IdentityList,
            // authorityList:store=>store.parper.AuthorityList,
            // relationList:store=>store.parper.RelationList,
            // viewList:store=>store.parper.ViewList
        })
    },
    methods:{
        ...mapActions({
            getPaperList:"parper/getPaperList",
            getIdentityList:"parper/getIdentityList",
            getAuthorityList:"parper/getAuthorityList",
            getRelationList:"parper/getRelationList",
            getViewList:"parper/getViewList"

        }),
        handle(index){
            this.count=index
           console.log(this.paperList)
        }
    },
    mounted(){
        this.getPaperList()
        this.getIdentityList()
        this.getAuthorityList()
        this.getRelationList()
        this.getViewList()
    }
}
</script>


