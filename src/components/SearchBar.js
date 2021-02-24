import React, { useState } from 'react'

const SearchBar = (props) => {
	const { search, handleChange, setSearch } = props

	const handleClear = () => {
		setSearch('')
	}

	return (
		<>
			<div className='topnav'>
				<div className='search-container'>
					<button
						onClick={() => {
							handleClear()
						}}>
						<i className='fa fa-trash'></i>Clear
					</button>
					<input
						type='text'
						placeholder='Search..'
						name='search'
						value={search}
						onChange={handleChange}></input>
				</div>
			</div>
		</>
	)
}

export default SearchBar
