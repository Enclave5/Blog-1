export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:3100/sessions/${sessionId}`, {
		method: 'DELETE',
	});
