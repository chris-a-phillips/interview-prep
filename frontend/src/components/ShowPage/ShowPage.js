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
        <div>
            ShowPage
            <h2>{data.prompt}</h2>
            {data.topic.map((topic) => {
                return(
                    <div className='topics'>
                        <h3>{topic}</h3>
                    </div>
                )
            })}
            <h4>{data.answer}</h4>
            <code>{data.example}</code>
            <code>```waddup```</code>
            <a href={data.resource} target='blank'>Read More About It Here</a>
        </div>
    );
};

export default ShowPage;