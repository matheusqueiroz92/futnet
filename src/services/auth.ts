"use client"

import { v4 as uuid } from 'uuid';

type SignInRequestType = {
  email: string;
  password: string;
}

const delay = (timeDelay: number = 1000) => new Promise(resolve => setTimeout(resolve, timeDelay));

export async function signInRequest({email, password}: SignInRequestType) {
  // essa função simula uma api
  await delay();

  if (email === 'matheus_giga@hotmail.com' && password === '123456')
  return {
    token: uuid(),
    user: {
      name: 'Matheus Queiroz',
      email: 'matheus_giga@hotmail.com',
      avatar_url: "https://github.com/matheusqueiroz92.png",
    }
  }

  else return {
    message: 'usuário ou senha inválidos',
  }
}