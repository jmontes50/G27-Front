import { createContext, useState, useEffect } from "react";
import supabase from "../config/supabaseConfig";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const registerUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    console.log({ data, error });
  }

  const signInWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    console.log({ data, error });
  }

  const closeSession = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  useEffect(() => {
    //escuchar algún cambio en la sesión del usuario
    const { data : { subscription  }} = supabase.auth.onAuthStateChange((event, session) => {
      // console.log("onAuthStateChange", { event, session });
      setUser(session);
    })

    return () => {
      subscription.unsubscribe();
    }
  }, [])

  return <AuthContext.Provider value={{ user, registerUser, signInWithEmailAndPassword, closeSession }}>
    {children}
  </AuthContext.Provider>
}

export {
  AuthContext,
  AuthContextProvider
}