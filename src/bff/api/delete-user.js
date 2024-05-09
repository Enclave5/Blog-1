export const deleteUser = (userId) =>
	fetch(`http://localhost:3100/users/${userId}`, {
		method: 'DELETE',
	});
