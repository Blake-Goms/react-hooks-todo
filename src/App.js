import React, {useState} from 'react'
import './styles.css';

export default function App() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([
        {
            text: "dishes", id: 1
        },
        {
            text: "laundry", id: 2
        },
    ]);
    
    const changeHandler = e => {
        e.preventDefault();
        setNewTodo(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(newTodo)
        setTodos([...todos, {id: Date.now(), text: newTodo}])
        //line below will not reset the input field
        //setNewTodo({text: ''})
        e.target.reset();
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    /*
    function removeTodo(id){
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    */

    return (
        <div className='main'>
            <h1>Todos</h1>
            <form onSubmit={submitHandler}>
                <input
                    type='text'                    
                    placeholder='add todo item to list'
                    onChange={changeHandler}
                />
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                        {todo.text}
                        {/* below code will mess with the form. Will allow first submit, then nothing else */}
                        {/* <button type ='submit' onClick={() => removeTodo(todo.id)}>X</button>  */}
                        <a href="#" onClick={() => removeTodo(todo.id)}> X </a>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}
