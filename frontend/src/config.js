export const APIURL =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000/api/questions'
		: 'PRODUCTION ROUTE';