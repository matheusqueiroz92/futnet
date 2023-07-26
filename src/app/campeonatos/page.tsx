"use client"

import LeaguesList from '@/components/LeaguesList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { styled } from 'styled-components';

const TagMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100vh;
width: 100vw;

> div {
  text-align: center;
}

h1 {
  font-size: 60px;
  margin-bottom: 50px;
}
`

export default function Home() {
  // const pathName = usePathname();
  // const isPublicPage = checkRoute(pathName!);

  // console.log(pathName);
  

  // Se o usuário estiver autenticado e acessar uma rota privada, ele deve conseguir visualizar a página
  // Se o usuário não estiver autenticado e acessar uma rota privada, ele não deve conseguir visualizar a página

  return (
    <TagMain>
      <Header/>
      <div>
        <h1>Escolha a liga</h1>
        <LeaguesList/>
      </div>
      <Footer/>
    </TagMain>
  )
}