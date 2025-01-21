import { createContext, useState, useEffect } from "react";
import supabase from "../config/supabaseConfig";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const registerUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    console.log({ data, error });
  }

  return <AuthContext.Provider value={{ user, registerUser }}>
    {children}
  </AuthContext.Provider>
}

export {
  AuthContext,
  AuthContextProvider
}