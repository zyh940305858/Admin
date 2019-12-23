<!--
 * @Author: your name
 * @Date: 2019-12-19 16:56:50
 * @LastEditTime : 2019-12-20 14:04:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\views\management\index.vue
 -->
<template>
    <div class="box">
        <div class="rightlist">
            <h2>添加用户</h2>
            <div class="wrapper">
                <div class="cont">
                     <div class="contentlist">
                        <div class="ass">
                            <span class="addUser">添加用户</span>
                            <span class="updateUser">更新用户</span>
                         </div>
                        <div class="ass">
                            <input type="text" class="ant-input" placeholder="请输入用户名">
                        </div>
                        <div class="ass">
                            <input type="text" class="ant-input" placeholder="请输入密码">
                        </div>
                        <div class="ass">
                            <div  class="selection" style="display:block; user-select:none">请选择身份id</div>
                        </div>
                        <div class="ass">
                            <button class="true">确定</button>
                            <button class="reset">重置</button>
                        </div>
                     </div>

                      <div class="contentlist">
                        <div class="ass">
                            <span class="addUser">添加用户</span>
                           
                         </div>
                        <div class="ass">
                            <input class="ant-input" type="text" placeholder="请输入身份名称">
                        </div class="ass">
                       
                        <div class="ass">
                            <button class="true">确定</button>
                            <button class="reset">重置</button>
                        </div>
                     </div>
                      <div class="contentlist">
                        <div class="ass">
                            <span class="open" style="display:inline-block; border:1px solid #0139FD;">添加api接口权限</span>
                            
                         </div>
                        <div class="ass">
                            <input type="text" class="ant-input" placeholder="请输入api接口权限名称">
                        </div>
                        <div class="ass">
                            <input type="text" class="ant-input" placeholder="请输入api接口权限url">
                        </div>
                        <div class="ass">
                            <input type="text" class="ant-input" placeholder="请输入api接口权限方法">
                        </div>
                        <div class="ass">
                            <button class="true">确定</button>
                            <button class="reset">重置</button>
                        </div>
                     </div>
                      <div class="contentlist">
                        <div class="ass">
                            <span  class="open" style="display:inline-block; border:1px solid #0139FD;">添加视图接口权限</span>
                        
                         </div>
                        
                        <div class="ass">
                            <div class="selection" style="display:block; user-select:none">请选择身份id</div>
                        </div>
                        <div class="ass">
                            <button class="true">确定</button>
                            <button class="reset">重置</button>
                        </div>
                     </div>
                      <div class="contentlist">
                        <div class="ass">
                            <span  class="open" style="display:inline-block; border:1px solid #0139FD;">给身份设置api接口权限</span>
                         
                         </div>
                        
                        <div class="ass">
                            <div  class="selection" style="display:block; user-select:none">请选择身份id</div>
                        </div>
                         <div class="ass">
                            <div  class="selection" style="display:block; user-select:none">请选择api身份权限</div>
                        </div>
                        <div class="ass">
                            <button class="true">确定</button>
                            <button class="reset">重置</button>
                        </div>
                     </div>

                      <div class="contentlist">
                        <div class="ass">
                            <span class="open" style="display:inline-block; border:1px solid #0139FD;">给身份设置视图权限</span>
                         
                         </div>
                        
                        <div class="ass">
                            <div  class="selection" style="display:block; user-select:none">请选择身份id</div>
                        </div>
                         <div class="ass">
                            <div  class="selection" style="display:block; user-select:none">请选择视图权限id</div>
                        </div>
                        <div class="ass">
                            <button class="true">确定</button>
                            <button class="reset">重置</button>
                        </div>
                     </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F1F1F1;
}
h2{
   
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    margin-left: 25px;
    padding: 20px 0;
    font-size: 21px;
    display: block;

    margin-block-start: 12px;
    margin-block-end: 12px;

}
.rightlist{
    
}
.wrapper{
   
    width: 100%;
    height: 100%;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    margin: 24px;
}
.cont{
    
    display: flex;
    flex-wrap: wrap;
    .contentlist{
        width: 33.3%;
        height: 281px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        .ass{
            margin-bottom: 20px;
            display: flex;
        }
        .addUser{
            width: 88px;
            height: 32px;
            padding: 0 15px;
            line-height: 32px;
            border:1px solid #0139FD;
            display: inline-block;
            font-size: 14px;
            display: inline-block;
            background: #fff;
            color:  #0139FD
        }
        .updateUser{
            width: 88px;
            height: 32px;
            line-height: 32px;
            color: rgba(0, 0, 0, 0.65);
            display: inline-block;

            cursor: pointer;
            border: 1px solid #d9d9d9;
            font-size: 14px;
            background: #fff;
            padding: 0 15px;
 
        }
    }
}
.selection{
   
   
    color: #bfbfbf;
    line-height: 20px;
    height: 20px;
    max-width: 100%;
 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.true{
    width: 111px;
    height: 32px;
    border-radius: 4px;
    font-size: 14px;
    color:white;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    border: none;
    margin-right: 10px;
}
.reset{
    width: 63px;
    height: 32px;
    line-height: 32px;
   
    font-weight: 400;
    text-align: center;

    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 2px;  
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
}
.ant-input{
    
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
}
.open{
    height: 32px;
    text-align: center;
    line-height: 32px;
     padding: 0 15px;
    font-size: 14px;
    border-radius: 2px;
    background: #fff;
    color:  #0139FD
}
</style>



