import React, { useState } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
})
const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>
}

export default AuthContext

