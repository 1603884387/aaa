<template>
<!-- descending  ascending-->
  <el-table :data="tableData" style="width: 100%" :default-sort="{prop:'createTime',order:'ascending'}" v-loading="Loading">
<el-table-column prop="id" label="id" width="80" />
    <el-table-column prop="createTime" label="Date" width="140" />
    <el-table-column prop="name" label="Name" width="140" />
    <el-table-column prop="address" label="Address" />
<el-table-column prop="email" label="email" />
<el-table-column prop="phone" label="phone" width="180" />
  </el-table>
  <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSzies"
        layout="total,sizes, prev, pager, next ,jumper"
        :total="total"
        @size-change="SizeChange"
        @current-change="CurrentChange"
      />
    </div>
<!--current-page:当前页  page-sizes：数组，下拉的数量  layout：布局 total：一共多少条数据 size-change：每页条数发生变化的数据触发事件 current-change当前页改变触发的事件-->
</template>
<script>
import '../js/mock.js' // 404路径不对
import $ajax from 'axios'
export default {
  data () {
    return {
      // 当前页
      currentPage: 1,
      // 每页显示的条数
      pageSize: 10,
      // 每页多少条区间
      pageSzies: [10, 20, 30, 40],
      // 一共多少条数据
      total: 100,
      // 列表数据
      tableData: [],
      Loading: true
    }
  },
  methods: {
    // 数据
    md () {
      const param = { page: this.currentPage, pageSize: this.pageSize }
      $ajax.post('/js/mock', param).then(res => {
        console.log('ajax', res)
        if (res.data.code === 200) {
          this.Loading = false
        }
        this.tableData = res.data.result
        // console.log(this.tableData)
        this.total = res.data.total
      })
    },
    // 每页条数发生变化的数据触发事件
    SizeChange (e) {
      this.pageSize = e // 可以没有
      this.md()
    },
    // 当前页改变触发的事件
    CurrentChange (v) {
      console.log(v)
      this.currentPage = v // 可以没有
      this.md()
    }
  },
  mounted () {
    this.md()
  }
}
</script>
