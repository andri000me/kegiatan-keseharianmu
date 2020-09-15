import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [Input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: Input
        })
        setInput('');
    };

    const handleChange = e => {
        setInput(e.target.value);
    }
    return (
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input type="text" placeholder="Edit Rencana Kegiatanmu Hari Ini" value={Input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
                    <button className="todo-button">Edit</button>
                    </>
                    ) : (
                    <>
                        <input type="text" placeholder="Tambahkan Rencana Kegiatanmu Hari Ini" value={Input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
                        <button className="todo-button">Tambah</button>
                    </>
                )}
            </form>
    )
}

export default TodoForm
