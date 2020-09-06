export const MessagesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			console.log('Add message')
			break

		default:
			console.log('message reducer default')
			break
	}
}
