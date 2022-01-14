import {Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";


export default function Form(props) {
    const [userInput, setUserInput] = useState('')
    const [isError, setIsError] = useState(false)

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }


    const handleInputSubmit = (e) => {
        const {handleAddItem} = props
        if (userInput.length === 0) {
            setIsError(true)
        } else {
            setIsError(false)
            handleAddItem(userInput)
            setUserInput('')
        }
        e.preventDefault()
    }
    useEffect(() => {
    }, [isError])

    return (
        <div>
            <Box
                onSubmit={handleInputSubmit}
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    error={isError}
                    id="outlined-basic"
                    label="Оставьте заметку"
                    variant="outlined"
                    value={userInput}
                    onChange={handleChange}
                />
                <Button type='submit' variant='contained' size='large'>Сохранить</Button>
            </Box>
        </div>
    )
}