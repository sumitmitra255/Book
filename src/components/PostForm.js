import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { PostData } from '../actions/action'
import MDEditor from '@uiw/react-md-editor'
const PostForm = (props) => {
	const dispatch = useDispatch()

	const [id, setId] = useState(uuidv4())
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [formErrors, setFormErrors] = useState({})
	const errors = {}

	const handletitle = (e) => setTitle(e.target.value)
	const handlebody = (e) => {
		setBody(e ? e : '')
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title.trim().length === 0) {
			errors.title = ' Title cannot be blank'
		}
		if (body.trim().length === 0) {
			errors.body = 'cannot be blank'
		}

		if (Object.keys(errors).length === 0) {
			setFormErrors({})
			const formData = {
				id: id,
				title: title,
				body: body,
			}
			dispatch(PostData(formData))
			setId(uuidv4())
			setTitle('')
			setBody('')
			props.setShow(false)
		} else {
			setFormErrors(errors)
		}
	}

	return (
		<div className='fadediv'>
			<div className='newpost'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Title'
						value={title}
						onChange={handletitle}
						name='title'
					/>
					{formErrors.title && (
						<span style={{ color: 'red' }}>
							<i class='fa fa-exclamation-triangle' aria-hidden='true'></i>
							{formErrors.title}
						</span>
					)}
					<br />
					<br />
					<MDEditor value={body} onChange={handlebody} name='body' />
					{formErrors.body && (
						<span style={{ color: 'red' }}>
							<i class='fa fa-exclamation-triangle' aria-hidden='true'></i>
							{formErrors.body}{' '}
						</span>
					)}
					<button type='submit'>Create</button>
				</form>
			</div>
		</div>
	)
}

export default PostForm
