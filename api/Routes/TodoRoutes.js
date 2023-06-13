
import  express  from "express";
import { deleteTodo, newTodo, todo ,complete} from "../controllers/todoControler.js";

const router = express.Router()

router.route('/todo/all').get(todo)
router.route('/todo/newtod').post(newTodo)
router.route('/todo/delete/:id').delete(deleteTodo)
router.route('/todo/complete/:id').put(complete)

export default router