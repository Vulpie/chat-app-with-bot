export const FlashReducer = (state, actions) => {
	switch (actions.type) {
		case 'ERROR_MESSAGE':
			return {
				message_type: 'error',
				message_content: actions.payload.message_content,
				persistent: actions.payload.persistent || false,
			}
		case 'SUCCESS_MESSAGE':
			return {
				message_type: 'success',
				message_content: actions.payload.message_content,
				persistent: actions.payload.persistent || false,
			}
		default:
			return state
	}
}
