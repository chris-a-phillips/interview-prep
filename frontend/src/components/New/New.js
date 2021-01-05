import React, { useState } from 'react';
import axios from 'axios'
import './New.css'

const New = () => {
    const [data, setData] = useState({
        prompt: '',
        answer: '',
        topic: [],
        category: '',
        resource: '',
        example: '',
    })

    const [message, setMessage] = useState()

    const handleChange = (event) => {
        event.preventDefault()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const url = 'http://localhost:8000/api/questions/'
        console.log('submitted')
        axios({
            method: 'post',
            url: url,
            data: data
        })
            .then((res) => {
                
            })
    }

    const showModal = () => {
        setMessage(!message)
        console.log('clicked')
    }

    console.log(message)

    return (
        <div>
            New Page
            {message === true  ? (
                <div className='modal'>Successfully Submitted/Failed Submission</div>
            ) : null}
            <button onClick={showModal}>show modal</button>
            <form onSubmit={handleSubmit}>
                <input></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default New;