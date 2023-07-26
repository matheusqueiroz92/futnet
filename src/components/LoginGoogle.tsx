"use client"

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import googleIcon from "../images/google.png";
import { styled } from "styled-components";

const TagDiv = styled.div`
  position: absolute;
  left: 43%;
  bottom: 23%;

  button:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

const TagButton = styled.button`
  border: none;
  background: transparent;
`

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export default function LoginGoogle({ session }: any) {  
  return (
    <TagDiv>
    { !session ? (
      <TagButton
        onClick={() => signIn("google")}
      >
        <ContainerButton>
          <Image src={googleIcon} alt={"google"} width={20} height={20}/>
          <p>Entrar com o Google</p>
        </ContainerButton>
      </TagButton>
    ) : (
      <button
        onClick={() => signOut()}
      >
        Logout
      </button>
    )}
    </TagDiv>
  )
}