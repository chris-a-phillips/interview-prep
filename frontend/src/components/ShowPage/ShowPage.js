import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { APIURL } from '../../config'
import './ShowPage.css'

const ShowPage = ({ id }) => {
    const [data, setData] = useState()

    useEffect(() => {

        axios({
            method: 'get',
            url: `${APIURL}/${id}`,
        })
        .then((res) => {
            // console.log(res)
            setData(res.data)
        })
    }, [id])
    
    if (!data) {
        return null
    }

    return (
        <div className='ShowPage'>
            <h1>{data.prompt}</h1>
            <div id='topic-container'>
            {data.topic.map((topic) => {
                return(
                    <div className='topic'>
                        <h3>{topic}</h3>
                    </div>
                )
            })}
            </div>
            <div id='content'>
            <h3>{data.answer}</h3>
            <br/>
            <code>{data.example}</code>
            </div>
            <a href={data.resource} target='blank'>Read More About It Here</a>
        </div>
    );
};

export default ShowPage;