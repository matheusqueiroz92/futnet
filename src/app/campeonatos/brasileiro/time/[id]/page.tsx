'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Team from "@/components/Team";
import { styled } from "styled-components";

const ExternContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
` 

export default function PageTeam() {
  return (
    <ExternContainer>
      <Header/>
      <Team/>
      <Footer/>
    </ExternContainer>
  )
}