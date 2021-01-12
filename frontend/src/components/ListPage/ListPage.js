import React from 'react';
import { Link } from 'react-router-dom'
import './ListPage.css'

const ListPage = ({ data, setId }) => {
    return (
		<>
			{data.map((question) => {
				return (
					<div className='question-container'>
						<Link
							className='individual-question'
							onClick={() => setId(question._id)}
							to={`/questions/${question.category}/${question._id}`}
							key={question._id}>
							<h2>{question.prompt}</h2>
							<p>{question.topic}</p>
						</Link>
					</div>
				);
			})}
			</>
	);
};

export default ListPage;