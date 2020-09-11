export const UserReducer = (state, action) => {
	switch (action.type) {
		case 'AUTHENTICATE_USER':
			let user = {
				login: action.payload.login,
				isAuthenticated: true,
			}
			return { ...state, ...user }

		default:
			return state
	}
}
