import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startPostData } from '../actions/action'
import Navigation from './Navigation'
import PostForm from './PostForm'
import PostList from './PostList'
import SearchBar from './SearchBar'

const App = (props) => {
	const posts = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')
	const [show, setShow] = useState(false)
	const [filteredPosts, setfiltered] = useState(posts ? posts : [])
	useEffect(() => {
		if (localStorage.getItem('postdata')) {
			const data = JSON.parse(localStorage.getItem('postdata'))
			dispatch(startPostData(data))
		}
	}, [])
	useEffect(() => {
		const result = posts.filter((post) => {
			return (
				post.title.toLowerCase().includes(search) ||
				post.body.toLowerCase().includes(search)
			)
		})
		setfiltered(result)
	}, [search])
	useEffect(() => {
		setfiltered(posts)
	}, [posts])
	const handleChange = (e) => {
		setSearch(e.target.value)
	}
	return (
		<div>
			<div className='navparent'>
				<div>
					<Navigation setShow={setShow} />
				</div>
				<div>
					<SearchBar
						search={search}
						handleChange={handleChange}
						setSearch={setSearch}
					/>
				</div>
			</div>
			{show ? (
				<PostForm setShow={setShow} />
			) : (
				<PostList filteredposts={filteredPosts} />
			)}
		</div>
	)
}

export default App
