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
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleRadio = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        const url = 'http://localhost:8000/api/questions/'
        
        console.log('submitted')

        event.preventDefault()
        axios({
            method: 'post',
            url: url,
            data: data
        })
            .then((res) => {
                console.log(res)
                setMessage('success')
            })
            .catch((res) => {
                setMessage(res)
            })
    }

    const showModal = () => {
        setMessage(!message)
        console.log('clicked')
    }

    console.log(message)

    return (
        <div className='New'>
            New Page
            {message === true  ? (
                <div className='modal'>Successfully Submitted/Failed Submission</div>
            ) : null}
            <button onClick={showModal}>show modal</button>
            <form onSubmit={handleSubmit}>
{/* prompt */}
                <input
                type='text'
                name='prompt'
                placeholder='Question Prompt'
                value={data.prompt}
                onChange={handleChange}
                ></input>
                <label htmlFor='prompt'>Prompt</label>
{/* answer */}
                <input
                type='text'
                name='answer'
                placeholder='Question Answer'
                value={data.answer}
                onChange={handleChange}
                ></input>
                <label htmlFor='answer'>Answer</label>
{/* topic */}
                <input
                type='text'
                name='topic'
                placeholder='eg. Javascript, Node.js'
                value={data.topic}
                onChange={handleChange}
                ></input>
                <label htmlFor='topic'>List of Topics</label>
{/* category */}
                <input
                type='radio'
                name='category'
                value={'frontend'}
                onChange={handleRadio}
                ></input>
                <label htmlFor='category'>Frontend</label>
                <input
                type='radio'
                name='category'
                value={'backend'}
                onChange={handleRadio}
                ></input>
                <label htmlFor='category'>Backend</label>
                <input
                type='radio'
                name='category'
                value={'whiteboard'}
                onChange={handleRadio}
                ></input>
                <label htmlFor='category'>Whiteboard</label>
                <input
                type='radio'
                name='category'
                value={'behavioral'}
                onChange={handleRadio}
                ></input>
                <label htmlFor='category'>Behavioral</label>
                <input
                type='radio'
                name='category'
                value={'code-challenge'}
                onChange={handleRadio}
                ></input>
                <label htmlFor='category'>Code Challenge</label>
{/* resource */}
                <input
                type='url'
                name='resource'
                placeholder='www.info.com'
                value={data.resource}
                onChange={handleChange}
                ></input>
                <label htmlFor='resource'>Web Resource</label>
{/* example */}
                <input
                type='text'
                name='example'
                placeholder='Place example here'
                value={data.example}
                onChange={handleChange}
                ></input>
                <label htmlFor='example'>Example</label>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default New;