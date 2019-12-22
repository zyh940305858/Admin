<!--
 * @Author: your name
 * @Date: 2019-12-19 14:28:47
 * @LastEditTime : 2019-12-20 17:08:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Admin\src\App.vue
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
.app-main {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
button {
  background: linear-gradient(left, #00f, #55bcfe);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#00f),
    to(#5e80fa)
  );
   border: none;
    border-radius: 7px;
    color: #fff;
}


</style>