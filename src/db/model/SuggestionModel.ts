import { model, Schema } from "mongoose";

interface Suggestions {
    description: string,
    author: string
}

const schema = new Schema<Suggestions>({
    description: { type: String, required: true, min : 10 },
    author: { type: String, required: true }
})

export default model<Suggestions>('Suggestion', schema)