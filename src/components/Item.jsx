import { Button, ButtonGroup, ListItem, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Editing from './Editing'


export default function Item (props){
    const [isEditing, setIsEditing] = useState(false)
    const{todo, handleRemoveItem, currentItemId, changeCurrentEditingId } = props

     const handleClickEditing = () => {
        if( currentItemId !== todo.id ){
            changeCurrentEditingId(todo.id)
            setIsEditing(true)
        } else {
            setIsEditing(true)
            changeCurrentEditingId(todo.id)
        }
    }    

    useEffect(() => {
        if(currentItemId !== todo.id && isEditing){
           setIsEditing(false)
          }
    }, [ changeCurrentEditingId])

    const handleCancelEditing = () => {
        setIsEditing(false)
        changeCurrentEditingId(todo.id)
    }

    const handleEditingConfirm = (userInputEditing) => {
        const {todo, handleSubmitEditing} = props
        const newTodo = {
            text: userInputEditing,
            id: todo.id
        }
        handleSubmitEditing( todo.id, newTodo)
        setIsEditing( false )
        changeCurrentEditingId(todo.id)
        
    }
         return(
            <>
            {isEditing ? (
                    <Editing 
                    todo = {todo}
                    handleCancelEditing = {handleCancelEditing}
                    handleEditingConfirm = {handleEditingConfirm}
                    handleClickEditing = {handleClickEditing}
                    />
                ) : (
            <ListItem
            sx ={{
            border: 1,
            borderRadius: 8,
            width : 500,
            height : 60,
            my: 2,
            padding: 2,
            }}
            >
                
                 <>
                <ListItemText className = 'ListItemText' sx={{
                    overflow:'hidden',

                }} > 
                    {todo.text}
                </ListItemText>
                <ButtonGroup>
                    <Button startIcon={<DeleteIcon />} color="error"  type = 'button' onClick = {() => {handleRemoveItem(todo.id)}} >Удалить</Button>
                    <Button  startIcon={<EditIcon />} type = 'button' onClick = {handleClickEditing} >Редактировать</Button>
                </ButtonGroup>
                </>
                 
            </ListItem>
                )}
            </>
            )
    }
