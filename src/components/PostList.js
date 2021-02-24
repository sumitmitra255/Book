import React from 'react'
import PostListItem from './PostListItem'
const PostList = (props) => {
	const { filteredposts } = props

	return (
		<>
			{filteredposts.length === 0 ? (
				<>
					<h2>WHOOOPPS! Add some posts First</h2>
				</>
			) : (
				<div className='fadediv'>
					<h1>Total Saved Posts - {filteredposts.length}</h1>
					<div className='scroll'>
						{filteredposts.map((ele) => {
							return <PostListItem key={ele.id} postele={ele} />
						})}
					</div>
				</div>
			)}
		</>
	)
}

export default PostList
