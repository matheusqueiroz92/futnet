"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoProfile from "@/components/InfoProfile";
import { styled } from "styled-components";

const ContainerExtern = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default function Perfil() {
  return (
    <ContainerExtern>
      <Header/>
      <InfoProfile/>
      <Footer/>
    </ContainerExtern>
  )
}