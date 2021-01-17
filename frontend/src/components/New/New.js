import React, { useState } from 'react';
import axios from 'axios';
import './New.css';
import { APIURL } from '../../config';

const New = () => {
	const [data, setData] = useState({
		prompt: '',
		answer: '',
		topic: [],
		category: '',
		resource: '',
		example: '',
	});

	const [message, setMessage] = useState();

	const handleChange = (event) => {
		event.preventDefault();
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	};
	const handleRadio = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		const url = `${APIURL}`;

		event.preventDefault();
		axios({
			method: 'post',
			url: url,
			data: data,
		})
			.then((res) => {
				console.log(res);
				setMessage('success');
			})
			.catch((res) => {
                console.log(res)
				setMessage(res);
			});
	};

	const showModal = () => {
		setMessage(!message);
		console.log('clicked');
	};

	// console.log(message)

	return (
		<div className='New'>
			<h1 id='new-label'>New Question</h1>
			{message === true ? (
				<div className={message ? 'success-modal' : 'fail-modal'}>
					Successfully Submitted/Failed Submission
				</div>
			) : null}
			<button onClick={showModal}>show modal</button>
			<form onSubmit={handleSubmit}>
				{/* prompt */}
				<div className='section'>
					<input
						class='textbox'
						type='text'
						name='prompt'
						placeholder='Question Prompt'
						value={data.prompt}
						onChange={handleChange}></input>
					<label htmlFor='prompt'>Prompt</label>
				</div>
				{/* answer */}
				<div className='section'>
					<input
						type='text'
						class='textbox'
						name='answer'
						placeholder='Question Answer'
						value={data.answer}
						onChange={handleChange}></input>
					<label htmlFor='answer'>Answer</label>
				</div>
				{/* topic */}
				<div className='section'>
					<input
						type='text'
						name='topic-one'
						placeholder='eg. Javascript, Node.js'
						value={data.topic[0]}
						onChange={handleChange}></input>
					<input
						type='text'
						name='topic-two'
						placeholder='eg. Javascript, Node.js'
						value={data.topic[1]}
						onChange={handleChange}></input>
					<input
						type='text'
						name='topic-three'
						placeholder='eg. Javascript, Node.js'
						value={data.topic[2]}
						onChange={handleChange}></input>
					<label htmlFor='topic'>List of Topics</label>
				</div>
				{/* category */}
				<div className='section'>
					<input
						className='radio'
						type='radio'
						name='category'
						value={'frontend'}
						onChange={handleRadio}></input>
					<label htmlFor='category'>Frontend</label>
					<input
						className='radio'
						type='radio'
						name='category'
						value={'backend'}
						onChange={handleRadio}></input>
					<label htmlFor='category'>Backend</label>
					<input
						className='radio'
						type='radio'
						name='category'
						value={'whiteboard'}
						onChange={handleRadio}></input>
					<label htmlFor='category'>Whiteboard</label>
					<input
						className='radio'
						type='radio'
						name='category'
						value={'behavioral'}
						onChange={handleRadio}></input>
					<label htmlFor='category'>Behavioral</label>
					<input
						className='radio'
						type='radio'
						name='category'
						value={'code-challenge'}
						onChange={handleRadio}></input>
					<label htmlFor='category'>Code Challenge</label>
				</div>
				{/* resource */}
				<div className='section'>
					<input
						type='url'
						name='resource'
						placeholder='www.info.com'
						value={data.resource}
						onChange={handleChange}></input>
					<label htmlFor='resource'>Web Resource</label>
				</div>
				{/* example */}
				<div className='section'>
					<input
						class='textbox'
						type='text'
						name='example'
						placeholder='Place example here'
						value={data.example}
						onChange={handleChange}></input>
					<label htmlFor='example'>Example</label>
				</div>
				<button id='submit'>Submit</button>
			</form>
		</div>
	);
};

export default New;
