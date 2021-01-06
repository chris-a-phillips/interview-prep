import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Questions = ({ category, filter }) => {
    const [data, setData] = useState()

    useEffect(() => {
        const url = `http://localhost:8000/api/questions/${filter}/${category}`;

        axios({
            method: 'get',
            url: url,
        })
        .then((res) => {
            console.log(res)
            setData(res.data)
        });
    }, []);


    return (
        <div>
            {category}
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Questions;