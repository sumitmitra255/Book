import React from 'react'

const PostListItem = (props) => {
	const { postele } = props

	return (
		<div className='listitemdiv'>
			<h3>{postele.title}</h3>
			{postele.body}
		</div>
	)
}

export default PostListItem
