const Mock = require('mockjs')
const data = Mock.mock({
  'list|100': [{
    id: '@increment',
    name: '@cname',
    phone: /^1[3,4,5,6,7,8,9][0-9]{9}$/,
    email: '@email',
    address: '@county(true)',
    createTime: '@date("yyyy-MM-dd")'
  }]
})
// /js/mock API接口地址
Mock.mock('/js/mock', 'post', function (options) {
  // console.log(options)
  const str = options.body
  const jsonObj = JSON.parse(str) // 解析
  // console.log(jsonObj)
  const page = jsonObj.page
  const pageSize = jsonObj.pageSize
  // 每页的开始
  const start = (page - 1) * pageSize
  // 每页结束位置
  const end = page * pageSize
  // 每页数据
  const result = data.list.slice(start, end)
  console.log(result)
  return { result: result, total: data.list.length, code: 200 }
})
