import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import { APIURL } from '../../config'

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
    }, [])

    // answer: 'Print and Speech';
	// category: 'frontend';
	// example: '';
	// prompt: 'Can you give an example of an @media property other than screen?';
	// resource: 'https://www.w3schools.com/css/css_rwd_mediaqueries.asp';
    // topic: ['CSS'];

    
    if (!data) {
        return null
    }

    return (
        <div>
            ShowPage
            <h1>{data.category}</h1>
            <h3>{data.topic}</h3>
            <h2>{data.prompt}</h2>
            <h4>{data.answer}</h4>
            <code>{data.example}</code>
            <code>```waddup```</code>
            <a href={data.resource} target='blank'>Read More About It Here</a>
        </div>
    );
};

export default ShowPage;