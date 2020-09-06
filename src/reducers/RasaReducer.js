export const RasaReducer = (state, action) => {
	let data = {}
	switch (action.type) {
		case 'SEND_MESSAGE':
			data = {
				message: action.message,
				sender: 'Rasa',
			}
			state.emit('user_uttered', data)
			return state
		case 'CONFIRM_SESSION':
			data = {
				session_id: state.id,
			}
			state.emit('session_request', data)
			return state
		default:
			console.log('rasa reducer default')
			break
	}
}
