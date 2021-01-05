import React, { useEffect } from 'react';
import axios from 'axios'

const Frontend = () => {

    useEffect(() => {
        const url = 'http://localhost:8000';

        axios({
            method: 'get',
            url: url
        })
        .then(console.log)
    }, [])
    return (
        <div>
            Frontend Page
        </div>
    );
};

export default Frontend;