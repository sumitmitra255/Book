export const PostData = (data) => {
	return {
		type: 'postData',
		payload: data,
	}
}
export const startPostData = (data) => {
	return {
		type: 'lsdata',
		payload: data,
	}
}
