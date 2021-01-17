import React from 'react';
import { Link } from 'react-router-dom'
import './ListPage.css'

const ListPage = ({ data, setId }) => {
	console.log(data)
    return (
		<div className='ListPage'>
			{data.map((question) => {
				return (
					<div className='question-container' key={question._id}>
						<Link
							className='individual-question'
							onClick={() => setId(question._id)}
							to={`/questions/${question.category}/${question._id}`}
							key={question._id}>
							<h2>{question.prompt}</h2>
							<div id='topic-container'>
							{question.topics.map((topic) => {
								return (
									<span key={topic}>
										{topic}
									</span>
									)
								})}
							</div>
						</Link>
					</div>
				);
			})}
			</div>
	);
};

export default ListPage;