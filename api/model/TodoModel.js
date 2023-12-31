import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,

        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

export const Todo = mongoose.model("todos", TodoSchema);