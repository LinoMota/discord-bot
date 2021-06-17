import moment from 'moment'
import 'moment/locale/pt-br';

export default function onReady() {
    const localTime = moment()

    console.log(`The deploy was made at ${localTime.format('LLL')}`)
    console.log('The app is ready and connected')
}
