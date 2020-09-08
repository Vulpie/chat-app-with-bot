import React, { createContext, useReducer } from 'react'
import { FlashReducer } from '../reducers/FlashReducer'

export const FlashContext = createContext()

const FlashContextProvider = (props) => {
	const [flashMessage, dispatch] = useReducer(FlashReducer, {})
	return (
		<FlashContext.Provider value={{ flashMessage, dispatch }}>
			{props.children}
		</FlashContext.Provider>
	)
}

export default FlashContextProvider
