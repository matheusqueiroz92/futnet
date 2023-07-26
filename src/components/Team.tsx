"use client"

import { useParams } from 'next/navigation';
import { useTeam } from '../hooks/useRequestApi';
import { traductionPosition } from '@/utils/traductionPosition';
import CardPlayer from './CardPlayer';
import Image from 'next/image';
import loading from '../images/loading.gif';
import { styled } from 'styled-components';
import Link from 'next/link';

interface infoParams {
  photo: string,
  name: string,
  number: number,
  age: number,
  position: string,
}

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
`

const ExternContainer = styled.div`
  .elenco {
    color: var(--blue-futnet);
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 20px;
  padding: 20px 0;
`

const TeamNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;

  h3 {
    color: #616161;
  }
`

export default function Team() {
  const params = useParams();
  
  const { isLoading, error, dataApi } = useTeam(Number(params?.id));

  return (
    <ExternContainer>
      
      {isLoading && (
        <LoadingContainer>
          <Image src={loading} alt="loading"/>
        </LoadingContainer>
      )}
      
      {!isLoading && !error && (
        <div>
          <TeamNameContainer>
            <Image src={dataApi.team.logo} alt={dataApi.team.name} width={70} height={70}/>
            <h3>{dataApi.team.name}</h3>
          </TeamNameContainer>
          <Link href={`campeonatos/brasileiro/partidas-time/${params?.id}`}>Partidas</Link>
          <p className='elenco'>Elenco atual</p>
          <CardsContainer>
            {dataApi?.players.map(({ photo, name, number, age, position }: infoParams, index: number) => (
              <CardPlayer
                key={index}
                image={photo}
                number={number}
                name={name}
                age={age}
                position={traductionPosition(position) || position}
              />
            ))}
          </CardsContainer>
        </div>
      )}
    </ExternContainer>
  )
}