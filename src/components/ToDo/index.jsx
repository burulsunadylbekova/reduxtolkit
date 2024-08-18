import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addCount, takeCount } from "../../redux/reducers/countSlice";
import { addTodo, toDoDelete } from "../../redux/reducers/todoSlice";

const ToDo = () => {
    // const { count } = useSelector((s) => s.cash);
    const { todo } = useSelector((s) => s.main);
    const [nameToDo, setNameToDo] = useState("");
    console.log(todo, "todo");

    const ToDoList = () => {
        if (nameToDo.trim() === "") {
            alert("404");
        } else {
            let newToDo = {
                name: nameToDo,
                id: Date.now(),
            };
            return dispatch(addTodo(newToDo));
        }
    };

    // const  delToDo = (todo) => {
    //     dispatch(toDoDelete());
    // }

    const dispatch = useDispatch();
    return (
        <div>
            <div className="container">
                <div className="todo">
                    {/* <button onClick={() => dispatch(takeCount(1))}>-</button>
                    <h1>{count}</h1>
                    <button onClick={() => dispatch(addCount(1))}>+</button> */}
                    <input
                        type="text"
                        placeholder="your text"
                        onChange={(e) => setNameToDo(e.target.value)}
                    />
                    <button onClick={() => ToDoList()}>add</button>
                </div>
                <div className="">
                    {todo.map((el, index) => (
                        <div className="text1" key={index}>
                            <h1 className="text">{el.name}</h1>
                            <button onClick={() => dispatch(toDoDelete(el.id))}>
                                DELETE
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToDo;
