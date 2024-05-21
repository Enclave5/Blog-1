import { generateDate } from '../utils';

export const addPost = ({ imageUrl, title, сontent }) =>
	fetch('http://localhost:3100/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			published_at: generateDate(),
			title,
			сontent,
		}),
	}).then((createdPost) => createdPost.json());
