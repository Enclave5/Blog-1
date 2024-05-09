import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { H2 } from '../../components';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const post = useSelector();
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(loadPost(params.id));
	});

	return (
		<div className={className}>
			<PostContent />

			<Comments />
			<H2>{}</H2>
			<div></div>
		</div>
	);
};

export const Post = styled(PostContainer)``;
