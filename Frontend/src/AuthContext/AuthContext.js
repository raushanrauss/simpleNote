import { createContext, useEffect, useState } from "react";
 export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            setUser({ token });
        }
    },[])
  
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
    
    
}
export default AuthProvider;