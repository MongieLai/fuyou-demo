import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'appliction/x-www-form-urlencoded'
axios.defaults.baseURL = 'https://easy-mock.com/mock/5e81b0061e94212c3b28233f/example'
axios.defaults.withCredentials = true //处理跨域cookies

export default function request(url, type = 'get', data = {}) {
    return new Promise((resolve, reject) => {
        let options = {
            url,
            method: type
        }
        if (type.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }
        axios(options).then((response) => {
            console.log(response)
            console.log(response.status === '200')
            if (response.status === '200') {
                resolve(response.data)
            } else {
                console.log(response.data.msg)
            }
        }).catch(err => {
            reject(err)
            console.log(err)
        })
    })
}

// export default function request(url, type = 'get', data = {}) {
//     return new Promise((resolve, reject) => {
//         let options = {
//             url,
//             method: type
//         }
//         if (type.toLowerCase() === 'get') {
//             options.params = data
//         } else {
//             options.data = data
//         }
//         axios(options).then((response) => {
//             console.log(response)
//             console.log(response.status === '200')
//             if (response.status === '200') {
//                 resolve(response.data)
//             } else {
//                 console.log(response.data.msg)
//             }
//         }).catch(err => {
//             reject(err)
//             console.log(err)
//         })
//     })
// }