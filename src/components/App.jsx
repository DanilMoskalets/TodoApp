import React, { useEffect, useState } from "react";
import Form from "./Form";
import Item from './Item'
import  '../App.css'

export default function App (){
    const [todos, setTodos] = useState([])
    const [currentItemId, setCurrentItemId] = useState(null)
    useEffect(()=> {
    }, [todos])
    
    const handleAddItem = (userInput) => {
        const newTodo = {
            text: userInput,
            id: String(new Date().valueOf())
        }
        setTodos([...todos, newTodo])
    }
    
    const handleRemoveItem = (id) => {
        setTodos([...todos.filter((todo) => (todo.id !== id))])
    }

    const handleSubmitEditing = ( id ,newTodo) => {
        const newArr = todos.map((todo) => {
            if (todo.id === id){
               return {...todo, text: newTodo.text}
            }
             return todo
        }) 
       setTodos([...newArr])
    }

    const changeCurrentEditingId = (id) => {
        setCurrentItemId(id)
    }
    
    return(
        <div className = 'App'>
            <h1 className = 'App-header'> Заметок: {todos.length}</h1>
            <Form handleAddItem = {handleAddItem}/>
            { todos.map((todo) => {
                    return (
                        <Item
                        todo = {todo}
                        key = {todo.id}
                        handleRemoveItem = {handleRemoveItem}
                        handleSubmitEditing = {handleSubmitEditing}
                        changeCurrentEditingId ={changeCurrentEditingId}
                        currentItemId = {currentItemId}
                        />
                      )
            })}
        </div>
    )
}