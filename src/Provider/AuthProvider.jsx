import { AuthCredential } from 'firebase/auth/web-extension';
import React, { createContext, useState } from 'react';

 export const AuthContext=createContext();
const AuthProvider = ({children}) => {

const [user,setUser]=useState({
    names:'kaniz',
    email:'kaniz@g.com'
}) 
const authData={
    user,
    setUser,
}
   return (
        <div>
           
           <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;