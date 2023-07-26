import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

interface ButtonLeagueParams {
  nameLeague: string,
  imageLeague: StaticImageData,
  pathNameLeague: string
}

const TagButton = styled.button`
  padding: 20px;
  background: var(--blue-futnet);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: none;
  border-radius: 10px;

  p {
    font-size: 25px;
    color: aliceblue;
    font-weight: 600;
  }
`

export default function ButtonLeague({ nameLeague, imageLeague, pathNameLeague }: ButtonLeagueParams) {
  const router = useRouter();
  return (
    <TagButton
      onClick={() => router.push(pathNameLeague)}
    >
      <Image src={imageLeague} alt={nameLeague} width={100} height={100}/>
      <p>{nameLeague}</p>
    </TagButton>
  )
}