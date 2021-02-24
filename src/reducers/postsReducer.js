const initialPostData = []

const postsReducer = (state = initialPostData, action) => {
	switch (action.type) {
		case 'postData': {
			localStorage.setItem(
				'postdata',
				JSON.stringify([action.payload, ...state])
			)
			return [action.payload, ...state]
		}
		case 'lsdata': {
			return action.payload
		}
		default: {
			return state
		}
	}
}

export default postsReducer
