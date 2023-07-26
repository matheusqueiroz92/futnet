"use client"

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";

interface ButtonTeamParams {
  nameTeam: string,
  idTeam: number,
  logoTeam: string,
}

const TagButton = styled.button`
border: 0;
background: transparent;
cursor: pointer;
font-size: 15px;
`

export default function ButtonTeam({ nameTeam, idTeam, logoTeam }: ButtonTeamParams) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <TagButton
      type="button"
      onClick={ () => router.push(`${pathName}/time/${idTeam}`) }
    >
      <Image src={logoTeam} alt={nameTeam} width={25} height={25}/>
    </TagButton>
  )
}