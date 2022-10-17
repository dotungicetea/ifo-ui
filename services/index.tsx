import axios from 'axios'
import { jsonParse } from '../utils'

export const connectWalletApi = (data: any) => {
    const dataJson = jsonParse(data)
    axios.post('https://ifo.icetea.io/api/v1/user/register', dataJson).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
}