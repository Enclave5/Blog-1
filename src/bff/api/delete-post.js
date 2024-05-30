export const deletePost = async (postId) =>
	fetch(`http://localhost:3100/posts/${postId}`, {
		method: 'DELETE',
	});
