import React, { useEffect } from 'react';
import axios from 'axios'

const Questions = ({ category }) => {

    console.log(`hello from ${category}`)

        useEffect(() => {
			const url = 'http://localhost:8000/api/questions';

			axios({
				method: 'get',
				url: url,
			}).then(console.log);
		}, []);


    return (
        <div>
            {category}
        </div>
    );
};

export default Questions;