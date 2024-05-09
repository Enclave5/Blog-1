export const getRoles = () =>
	fetch('http://localhost:3100/roles').then((loadedRoles) => loadedRoles.json());
