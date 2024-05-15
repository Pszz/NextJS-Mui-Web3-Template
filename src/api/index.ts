// import axios from 'axios'

// export const ApiInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BACKEND || '',
// })

// ApiInstance.interceptors.request.use(async (req) => {
//   // Google Grecaptcha
//   // if (req.headers.robots) {
//   //   delete req.headers.robots
//   //   req.headers['X-Bitstable-Recaptcha-Rsp'] = await getGrecaptcha()
//   // }
//   return req
// })

// ApiInstance.interceptors.response.use(
//   (res) => {
//     return res.data
//   },
//   (err) => Promise.reject(err),
// )
