export const getUsers = () =>
	fetch('http://localhost:3100/users').then((loadedUsers) => loadedUsers.json());
