import React from 'react'

// Initializes a react context
const UserContext = React.createContext()

// Initializes a context provider and gives us the ability to provide a specific context through a component

export const UserProvider = UserContext.Provider

export default UserContext
