<template>
    <div>
  <div class="headr">
      <span>
        床位查询-首页
      </span>
  </div>
  <div class="serch">
    <div class="chuang">
      <span>床位查询</span>
    </div>
    <div class="geiwo" @click="geiwo">
      <el-icon><ChatDotRound /></el-icon>
      <span>给我留言</span>
      <el-icon><ArrowRightBold /></el-icon>
    </div>
    <div class="address">
      <el-icon><Location /></el-icon>
      <span>北京市顺义区人民医院</span>
    </div>
    <div class="ipt">
      <el-input v-model="serch" style="width: 240px" placeholder="请输入搜索内容" class="inp" :prefix-icon="Search" @keyup.enter="serchs"/>
    </div>
  </div>
  <div class="empty">
    <el-empty description="很抱歉,没有对应内容" />
  </div>
  <div class="bottom">
    <div class="item">
      <el-icon><MessageBox /></el-icon>
      <span>床位最多</span>
    </div>
    <div class="item"  style="border-right: 1px solid white;border-left: 1px solid white;">
      <el-icon><Location /></el-icon>
      <span>距离最近</span>
    </div>
    <div class="item">
      <el-icon><FirstAidKit /></el-icon>
      <span>医院等级</span>
    </div>
  </div>
      </div>
  </template>

<script setup>
import { ChatDotRound, ArrowRightBold, Location, Search, FirstAidKit, MessageBox } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const serch = ref('')
const router = useRouter()
const geiwo = () => {
  console.log(11)
  router.push('/message')
}
const serchs = () => {
  router.push({ path: '/list', query: { data: serch.value } })
}

</script>

  <style>
  .empty{
    width: 100%;
    height: 460px;
  }
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  .headr{
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .serch{
    width: 100%;
    height: 120px;
    background: #19dcd6;
    position: relative;
  }
  .chuang{
    width: 100px;
    height:50px;
    background: #18b6ae;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: 40px;
  }
  .geiwo{
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    position: absolute;
    left: 150px;
    top: 15px;
    color: #666;
  }
  .address{
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    position: absolute;
    left: 150px;
    color: white;
    top: 35px;
  }
  .ipt{
    width: auto;
    height: auto;
    position: absolute;
    margin: auto;
    left: 70px;
    margin-top: 20px;
  }
  .el-input__wrapper{
    border-radius: 1000px !important;
  }
  .bottom{
    width: 100%;
    height: 47px;
    background: #18b6ae;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 600;
  }
  </style>
