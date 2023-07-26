import { signInRequest } from "../services/auth";
import { createContext, useState } from "react";
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

type User = {
  name: string,
  email: string,
  avatar_url: string,
}

type SignInData = {
  email: string,
  password: string,
}

type RegisterUserData = {
  name: string,
  email: string,
  phone?: string,
  team: string,
  password: string,
  image: string,
}

type AuthContextType = {
  isLogged: boolean,
  user: User | null,
  signIn: (data: SignInData) => Promise<void>,
  errorResponse: string,
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [errorResponse, setErrorResponse] = useState('');
  const router = useRouter();

  const isLogged = !!user;

  async function signIn({ email, password }: SignInData) {
    // chamada à api com fetch ou axios
    // aqui está sendo simulado
    const { token, user, message } = await signInRequest({ email, password });

    if (message) {
      setErrorResponse(message);
    }

    if (token && user) {
      setCookie(undefined, 'futnet-token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
  
      setUser(user);
  
      router.push('/campeonatos');
    }
  }

  async function registerUser({ name, email, phone, team, password, image}: RegisterUserData) {
    // fazer o envio do registro aqui
  }
  
  return (
    <AuthContext.Provider value={{ errorResponse, user, isLogged, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}