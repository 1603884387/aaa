<template>
  <div>
    <div class="headr">
      <span>
        床位列表
      </span>
  </div>
  <div class="bnner">
    <span>这是个图片</span>
</div>
<div class="list">

    <template v-for="item in lists" :key="item.id">
        <div class="item" v-if="item.flag==1">
            <div class="left">
            <p>{{ item.name }}</p>
            <p>楼层:{{ item.louceng }}层</p>
            <p>床位:{{ item.chaungwei }}</p>
        </div>
        <div class="right" @click="yuyue(0,item.id)">
            <span>预约</span>
        </div>
        </div>
</template>
</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'
const route = useRoute()
const lists = ref([])
onMounted(() => {
  list()
})
const list = () => {
  const serch = route.query.data
  axios({
    url: 'http://localhost/fruit/api/yiyuan/chuangwei.php',
    method: 'get',
    params: {
      name: serch
    }
  }).then((res) => {
    lists.value = res.data.data
    console.log(lists.value)
  })
}
const yuyue = (num, id) => {
  axios({
    url: 'http://localhost/fruit/api/yiyuan/xiugai.php',
    method: 'get',
    params: {
      num,
      id
    }
  }).then((res) => {
    console.log(res)
    list()
  })
}
</script>

<style>
.item{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: black;
    margin-left: 30px;
}
.right{
    width: auto;
    height: auto;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 5px;
    color: white;
    background: #2ec2bf;
    margin-right: 30px;
}
.bnner{
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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
    background-color: #2ec2bf;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>
