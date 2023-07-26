'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MatchesByTeam from "@/components/MatchesByTeam";
import { styled } from "styled-components";

const ExternContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
// testando

export default function PageMatchesByTeam() {
  return (
    <ExternContainer>
      <Header/>
      <MatchesByTeam/>
      <Footer/>
    </ExternContainer>
  )
}