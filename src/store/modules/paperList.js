/*
 * @Author: your name
 * @Date: 2019-12-20 14:52:44
 * @LastEditTime : 2019-12-22 19:44:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\store\modules\paperList.js
 */
import {getPaperList,getIdentityList,getAuthorityList,getRelationList,getViewList} from '../../api/paperList'
const state={
    PaperList:[],
    IdentityList:[],
    AuthorityList:[],
    RelationList:[],
    ViewList:[],
    
}
const mutations={
    setpaperlist: (state,payload)=>{
       
        state.PaperList.push(payload)
        console.log(state.PaperList)
    },
    setIdentityList:(state,payload)=>{
         state.PaperList.push(payload)
        state.IdentityList=payload
    },setAuthorityList:(state,payload)=>{
         state.PaperList.push(payload)
        state.AuthorityList=payload
    },setRelationList:(state,payload)=>{
         state.PaperList.push(payload)
        state.RelationList=payload
    },setViewList:(state,payload)=>{
         state.PaperList.push(payload)
        state.ViewList=payload
    }
}
const actions={
    async getPaperList  ({commit},payload) {
       
        let res=await getPaperList(payload)
        commit("setpaperlist",res.data) 
        
        console.log(res,"kkkkkkkkkkkkkkkkkkkkkkkkkk")
    },
    async getIdentityList  ({commit},payload) {
    
        let res=await getIdentityList(payload)
        commit("setIdentityList",res.data) 
        console.log(res.data)
    },
    async getAuthorityList({commit},payload){
         let res=await getAuthorityList(payload)
        commit("setAuthorityList",res.data) 
        console.log(res.data)
    }, async getRelationList({commit},payload){
         let res=await getRelationList(payload)
        commit("setRelationList",res.data) 
        console.log(res.data)
    },async getViewList({commit},payload){
         let res=await getViewList(payload)
        commit("setViewList",res.data) 
        console.log(state.PaperList)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}