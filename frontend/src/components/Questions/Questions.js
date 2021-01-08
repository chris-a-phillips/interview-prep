import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ShowPage from '../ShowPage/ShowPage';
import { Route, Switch } from 'react-router-dom';
import { APIURL } from '../../config';
import ListPage from '../ListPage/ListPage';


const Questions = ({ category, filter }) => {
    const [data, setData] = useState()
    const [id, setId] = useState()

    useEffect(() => {
        const url = category!== 'all' 
        ? `${APIURL}/${filter}/${category}`
        : `${APIURL}`

        axios({
            method: 'get',
            url: url,
        })
        .then((res) => {
            // console.log(res)
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
                    <h1>{category}</h1>
                    <ListPage data={data} setId={setId}/>
				</Route>
				<Route>
					<ShowPage exact path={`/questions/${category}/${id}`}
                    id={id}
                    />
				</Route>
			</Switch>
		</div>
	);
};

export default Questions;