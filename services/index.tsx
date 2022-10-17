import axios from 'axios'
import { jsonParse } from '../utils'

export const connectWalletApi = (data: any) => {
    const dataJson = jsonParse(data)
    axios.post('http://54.227.118.34:8080/api/v1/user/register', dataJson).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
}