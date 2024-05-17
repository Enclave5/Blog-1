export const deleteComment = async (commentId) =>
	fetch(`http://localhost:3100/comments/${commentId}`, {
		method: 'DELETE',
	});
