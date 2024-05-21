export const updatePost = ({ id, imageUrl, title, сontent }) =>
	fetch(`http://localhost:3100/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			сontent,
		}),
	}).then((loadedPost) => loadedPost.json());
