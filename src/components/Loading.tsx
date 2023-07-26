import Image from "next/image";
import loading from '../images/loading.gif';
import { styled } from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
`
// testando

export default function Loading() {
  return (
    <>
      <LoadingContainer>
        <Image src={loading} alt="loading"/>
      </LoadingContainer>
    </>
  )
}