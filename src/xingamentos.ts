import * as fs from 'fs/promises'

export default async function generageXingamento() {
    let data = await fs.readFile('./data/xingamentos.txt','utf-8')
    let arr = data.split('\n')
    return arr[Math.floor(Math.random()* arr.length)]
}
