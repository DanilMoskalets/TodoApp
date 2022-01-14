import {Button, ButtonGroup, ListItem, TextField} from '@mui/material'
import React, {useEffect, useState} from 'react'

export default function Editing(props) {
    const [userInputEditing, setUserInputEditing] = useState('')
    const handleChange = (e) => {
        setUserInputEditing(e.target.value)
    }

    useEffect(() => {
        setUserInputEditing(todo.text)
    }, [])

    const {handleCancelEditing, handleEditingConfirm, todo} = props
    return (
        <>
            <ListItem
                sx={{
                    border: 1,
                    borderRadius: 8,
                    width: 500,
                    height: 60,
                    my: 2,
                    padding: 2,
                    justifyContent: 'space-between',
                }}
            >
                <TextField

                    autoComplete="off"
                    type='text'
                    label="Изменить Заметку"
                    variant="standard"
                    value={userInputEditing}
                    onChange={handleChange}
                />
                <ButtonGroup>
                    <Button type='submit' onClick={() => (handleEditingConfirm(userInputEditing))}>Изменить</Button>
                    <Button type='button' onClick={handleCancelEditing}>Отмена</Button>
                </ButtonGroup>
            </ListItem>
        </>
    )
}