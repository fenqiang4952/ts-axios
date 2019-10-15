import axios from '../../src/index'


// document.cookie = 'a=b'

// axios.get('/more/get').then(res => {
//   console.log(res)
// })

// axios.post('http://127.0.0.1:8088/more/server2',{}, {
//   withCredentials: true
// } ).then(res => {
//   console.log(res)
// })

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance.get('/more/get').then(res => {
//   console.log(res)
// })

// axios.post('/more/post', {
//   a: 1
// }, {
//   auth: {
//     username: 'strive',
//     password: '123456'
//   }
// }).then(res => {
//   console.log(res)
// })

// axios.get('/more/304').then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log(e.message)
// })

// axios.get('/more/304', {
//   validateStatus(status) {
//     return status >= 200 && status < 400
//   }
// }).then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log(e.message)
// })

const instance = axios.create({
  baseURL: '//img1.sycdn.imooc.com'
})

instance.get('/szimg/5d7f712909a0ab0f06000338.jpg')
instance.get('//img1.sycdn.imooc.com/szimg/5da13cab09466e9105400306-360-202.jpg')