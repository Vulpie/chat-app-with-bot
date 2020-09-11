import { v1 as uuidv1 } from 'uuid'

export const MessagesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			let new_message = {
				id: uuidv1(),
				author: action.message.author,
				content: action.message.content,
				createdAt: '01/10/2020',
			}
			console.log(new_message)
			return [...state, new_message]

		default:
			console.log('message reducer default')
			break
	}
}
