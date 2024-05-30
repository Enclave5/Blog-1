import { transformComment } from '../transformers';

const ALL_COMMENTS_URL = 'http://localhost:3100/comments';
const POST_COMMENT_URL = 'http://localhost:3100/comments?post_id=';

export const getComments = (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENT_URL + postId;
	return fetch(url)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
};
