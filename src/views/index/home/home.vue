<template>
  <div class="home-page">
    <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <!-- 列表渲染 -->
      <div class="home-page-list">
        <dl v-for="item in list" :key="item.id">
          <dt></dt>
          <dd>
            {{item.title}}
          </dd>
        </dl>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default {
  data(){
    return{
      imgs:[
        "https://dummyimage.com/600x100",
        "https://dummyimage.com/600x100",
        "https://dummyimage.com/500x100"
      ],
      list:[]
    }
  },
  mounted(){
    axios.get("/api/list").then((res)=>{
      this.list=res.data.list
      console.log(res.data.list);
    })

    // 轮播图实例化
    this.$nextTick(()=>{
      new Swiper('.swiper-container',{
        loop:true
      })
    })
  }
}
</script>

<style>
.home-page{
  width: 100%;
  height: 100%;
}
.swiper-container{
  width: 100%;
  height: 200px;
}
.swiper-container img{
  width: 100%;
  height: 100%;
}
.home-page-list{
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
}
.home-page-list dl{
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.home-page-list dl dt{
  width: 60px;
  height: 60px;
  background: #ccc;
  margin-bottom: 10px;
  border-radius: 50%;
}
</style>