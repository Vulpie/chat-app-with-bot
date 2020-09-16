export const UserReducer = (state, action) => {
	switch (action.type) {
		case 'AUTHENTICATE_USER':
			return {
				...state,
				...{
					login: action.payload.login,
					isAuthenticated: true,
				},
			}
		case 'CREATE_USER':
			const { login, email, password, name, surname } = action.payload
			fetch('/users/register', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ login, email, password, name, surname }),
			}).then((res) => res.json())
			return {
				...state,
				...{
					login,
					isAuthenticated: true,
				},
			}
		default:
			return state
	}
}
