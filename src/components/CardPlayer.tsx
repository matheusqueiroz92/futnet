import { TypePlayer } from '@/types/TypePlayer';
import Image from 'next/image';
import { styled } from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 230px;
  background-color: var(--green-futnet);
  background-image: linear-gradient(var(--blue-futnet), var(--green-futnet));
  box-shadow: 1px 1px 3px 1px rgb(124, 124, 124);
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  img {
    border-radius: 100%;
  }
`

const InfoContainer = styled.div`
  p {
    text-align: center;
    color: white;
  }

  .number {
    color: #ffffff;
    font-weight: 900;
    font-size: 20px;
  }
`

export default function CardPlayer({ image, number, name, age, position }: TypePlayer) {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={name} width={150} height={150}/>
      </ImageContainer>
      <InfoContainer>
        <p className='number'>{number}</p>
        <p>{name}</p>
        <p>{`${age} anos`}</p>
        <p>{position}</p>
      </InfoContainer>
    </CardContainer>
  )
}