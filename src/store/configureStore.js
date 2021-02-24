import { createStore, combineReducers } from 'redux'
import postsReducer from '../reducers/postsReducer'
const configureStore = () => {
	const store = createStore(
		combineReducers({
			posts: postsReducer,
		})
	)

	return store
}

export default configureStore
