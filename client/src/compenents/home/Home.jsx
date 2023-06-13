import React, { useState } from 'react'
import "./home.css"
import { useEffect } from 'react'
import instance from '../../instance';

import resources from '../../resourse';


const Home = () => {
    const [todos, SetTodo] = useState([]);
    const [popupActive, setPopupActive] = useState(false)
    const [Newtodo, setNewTodo] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get(resources.fetchAlltododos)
            SetTodo(res.data)

        }
        fetchData();
    }, []);


    const ComplteTask = async (id) => {
        const res = await instance.put(resources.completed + id)
        window.location.reload(false);
    };
    const deleteTask = async (id) => {
        const res = await instance.delete(resources.delete + id)

        SetTodo(todos => todos.filter(todo => todo._id !== res.data._id));

    };
    const addTodo = async (id) => {
        const res = await instance.post(resources.add,{
            text:Newtodo
          })


        
        SetTodo([...todos, res.data]);

        setPopupActive(false);
        setNewTodo("");

    };



    return (
        <div>
            <h1 className="mainTitle">Welcom firos</h1>
            <h4>your tasks</h4>
            {todos && todos.map(item => (

                <div key={item._id} className={!item.complete ? "todo" : " todo isCompleted"}

                >

                    <div className="todos"
                        onClick={() => ComplteTask(item._id)}
                    >
                        <div className="checkboxe"></div>
                        <div className="todoText">{item.text}</div>

                    </div>
                    <div className="todoDelete"
                        onClick={() => deleteTask(item._id)}
                    >x</div>
                </div>
            ))

            }

            <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>
            {popupActive ? (
                <div className="popup">
                    <div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
                    <div className="content">
                        <h3>Add Task</h3>
                        <input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={Newtodo} />
                        <div className="button" onClick={addTodo}>Create Task</div>
                    </div>
                </div>
            ) : ''}
        </div>
    )
}

export default Home