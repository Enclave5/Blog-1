export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3100/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser);
