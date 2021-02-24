import React from 'react'

const Navigation = (props) => {
	const { setShow } = props

	const CreateForm = () => {
		setShow(true)
	}

	const displayList = () => {
		setShow(false)
	}

	return (
		<>
			<div className='navbar'>
				<a
					className='active'
					href='#'
					onClick={() => {
						CreateForm()
					}}>
					<i className='fa fa-fw fa-home'></i> Create New Post
				</a>
				<a
					href='#'
					onClick={() => {
						displayList()
					}}>
					<i className='fa fa-globe'></i> Display Saved Post
				</a>
				<a
					href='#'
					onClick={() => {
						localStorage.clear()
						window.location.reload()
					}}>
					<i className='fa fa-trash'></i> Clear All Post
				</a>
			</div>
		</>
	)
}

export default Navigation
