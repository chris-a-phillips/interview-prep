import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ShowPage from '../ShowPage/ShowPage';
import { Route, Switch } from 'react-router-dom';
import { APIURL } from '../../config';


const Questions = ({ category, filter }) => {
    const [data, setData] = useState()
    

    useEffect(() => {
        const url = category!== 'all' 
        ? `${APIURL}/api/questions/${filter}/${category}`
        : `${APIURL}/api/questions`

        axios({
            method: 'get',
            url: url,
        })
        .then((res) => {
            console.log(res)
            setData(res.data)
        });
    }, [category, filter]);

    if(!data) {
        return null
    }

    return (
		<div>
			<Switch>
				<Route exact path={`/questions/${category}`}>
					{category}
					{data.map((question) => {
						return (
							<div key={question._id}>
								<h1>{question.prompt}</h1>
								<p>{question.category}</p>
								<p>{question.topic}</p>
							</div>
						);
					})}
				</Route>
				<Route>
					<ShowPage />
				</Route>
			</Switch>
		</div>
	);
};

export default Questions;