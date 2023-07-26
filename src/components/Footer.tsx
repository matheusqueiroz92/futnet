"use client"

import { styled } from "styled-components"

const FooterTag = styled.footer`
display: flex;
justify-content: center;
align-items: center;
background-color: #1962ff;
color: white;
display: flex;
flex-direction: column;
width: 100%;
height: 5vh;
font-size: 16px;
`

export default function Footer() {

  return (
    <FooterTag>
      <p>Desenvolvido por Matheus Queiroz</p>
    </FooterTag>
  )
}