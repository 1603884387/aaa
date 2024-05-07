<template>
  <div>
    <div class="headr">
      <span>
        床位查询-意见反馈
      </span>
  </div>
  <div class="liuyan">
    <el-icon><ChatDotRound /></el-icon>
      <span>留言区</span>
  </div>
  <div class="weixin">
    <span>联系微信客服:ahv535</span>
    <div class="code">扫描二维码</div>
  </div>
  <div class="phone">
    <span>拨打客服热线:400-123-1234</span>
    <div class="phones">点击拨号</div>
  </div>
  <div class="ipt">
    <el-input v-model="input" style="width: 300px" placeholder="请输入手机号(选填)" />
  </div>
  <div class="text">
    <el-input v-model="textarea" type="textarea" placeholder="请输入内容"/>
  </div>
  <div class="btn" @click="add">
  <el-button type="primary">提交留言</el-button>
  </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ChatDotRound } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
const textarea = ref('')
const add = () => {
  axios({
    url: 'http://localhost/fruit/api/yiyuan/user.php',
    method: 'get',
    params: {
      text1: input.value,
      text2: textarea.value,
      name: '杨晨'
    }
  }).then(res => {
    console.log(res)
  })
}
</script>

<style>
.el-button{
  width:300px ;
}
.btn{
  width:300px;
  height: 100px;
  margin: auto;
  margin-top: 10px;
}
.el-textarea__inner{
  height: 150px;
}
.text{
  width: 300px;
  margin: auto;
  margin-top: 10px;
}
.ipt{
  margin: auto;
  width:300px;
  height: auto;
  display: flex;
  justify-content: center;
}
.el-input__wrapper{
    border-radius: 1000px !important;
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
  .liuyan{
    width: 100%;
    height: 70px;
    background:#12d4d4 ;
    font-size: 30px;
    display: flex;
    align-items: center;
    color: white;
  }
  .weixin{
    width: 100%;
    height: 50px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #666;
  }
  .code{
    width: 80px;
    height: 20px;
    background: #03c4cc;
    color: white;
    text-align: center;
    line-height: 20px;
    border-radius: 3px;
  }
  .phone{
    width: 100%;
    height: 50px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #666;
  }
  .phones{
    width: 80px;
    height: 20px;
    background: #ff9f00;
    color: white;
    text-align: center;
    line-height: 20px;
    border-radius: 3px;
  }
</style>
