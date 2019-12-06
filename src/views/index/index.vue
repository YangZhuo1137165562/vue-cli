<template>
  <div class="index-page">
      <div class="main">
          <router-view></router-view>
      </div>
      <div class="footer">
          <router-link to="/index/home">首页</router-link>
          <router-link to="/index/my">我的</router-link>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.index-page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.index-page .main{
    flex: 1;
    overflow: auto;
}
.index-page .footer{
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.index-page .footer a.router-link-active{
    color: red;
}
</style>