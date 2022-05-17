import Mongoose from 'mongoose';
import Joi from 'joi';

const todoSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },

    completed: {
        type: boolean,
        default: false
    }
});

const TodoModel = Mongoose.Model('Todo', todoSchema);

const JoiSchema = Joi.object({
    title: Joi.string().required().min(5).max(255),
    completed: Joi.boolean()
});

export default TodoModel;
export const validateTodo = (todo) => JoiSchema.validate(todo);