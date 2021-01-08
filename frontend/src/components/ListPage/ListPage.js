import React from 'react';
import { Link } from 'react-router-dom'

const ListPage = ({ data, setId }) => {
    return (
		<div>
			{data.map((question) => {
				return (
                    <Link onClick={() => setId(question._id)}
                        to={`/questions/${question.category}/${question._id}`} 
                        key={question._id}
                    >
						<h2>{question.prompt}</h2>
						<p>{question.category}</p>
						<p>{question.topic}</p>
					</Link>
				);
			})}
		</div>
	);
};

export default ListPage;