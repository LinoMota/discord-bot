import { connect } from "mongoose"

export default async function databaseConnection() {

    const dbConfig = {
        connection: {
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD,
            host: process.env.MONGO_HOST,
            port: process.env.MONGO_PORT,
            getConnectionString(): string {
                return `mongodb://${this.user}:${this.password}`
                    + `@localhost:${this.port}`
            }
        },
        config: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }

    const { connection, config } = dbConfig
    const url = connection.getConnectionString()
    try {
        (await connect(url, config))
        console.log('Connected to mongodb!')
    } catch (err) {
        console.log(`Could not connect to mongoDB. Given url ${url}`)
    }
    return false
}