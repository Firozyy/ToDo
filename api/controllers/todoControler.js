import { catchasyncerrer } from "../middleware/catchadyncErrer.js";
import { Todo } from "../model/TodoModel.js";

export const todo = catchasyncerrer(async (req, res, next) => {
    const todos = await Todo.find();

    res.status(200).json(
       
        todos
    )
})


export const newTodo = catchasyncerrer(async (req, res, next) => {


    const toDos = new Todo({
        text: req.body.text
    });

    await toDos.save();
    res.status(200).json(
      
        toDos
    )
})
export const deleteTodo = catchasyncerrer(async (req, res, next) => {

    const toDo = await Todo.findByIdAndDelete(req.params.id)




    res.status(200).json(
     
        toDo
    )
}); export const complete = catchasyncerrer(async (req, res, next) => {

    const toDo = await Todo.findById(req.params.id)

    toDo.complete = !toDo.complete

    await toDo.save()


    res.status(200).json({
        success: true,
        toDo
    })
});
