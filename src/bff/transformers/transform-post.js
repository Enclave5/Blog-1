export const transformPost = (dbPost) => ({
	id: dbPost.id,
	title: dbPost.title,
	сontent: dbPost.сontent,
	imageUrl: dbPost.image_url,
	publishedAt: dbPost.published_at,
});
