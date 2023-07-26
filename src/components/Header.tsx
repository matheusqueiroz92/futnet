import logoFutNet from "../lotties/futnet.json";
import { styled } from "styled-components";
import Lottie from "react-lottie";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TagHeader = styled.header`
align-items: center;
background-color: var(--green-futnet);
color: aliceblue;
justify-content: space-between;
display: flex;
height: 10vh;
width: 100%;
gap: 100px;
padding: 0 10vw;

a {
  text-decoration: none;
  color: aliceblue;
}

button:hover {
  cursor: pointer;
  background-color: #1962ff;
}

> div {
  height: 100%;
}
`

const LogoHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

interface ButtonNavMenuProps {
  name: string,
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const ButtonNavMenu = styled.button`
background-color: rgb(0, 133, 88);
color:aliceblue;
font-size: 20px;
font-weight: 700;
border: none;
height: 100%;
width: 150px;
padding: 20px;
`

const ButtonMenu = ({ name, onClick }: ButtonNavMenuProps) => {
  return (
    <ButtonNavMenu
      onClick={onClick}
    >
      {name}
    </ButtonNavMenu>
  )
}

export default function Header() {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: logoFutNet,
  }
  // const pathName = usePathname();
  const router = useRouter();

  return(
    <TagHeader>
      <Link href="/campeonatos">
        <LogoHeader>
          <Lottie
            options={defaultOptions}
            isPaused={false}
            isStopped={false}
            direction={1}
            speed={1}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
          />
          <h2>FutNet</h2>
        </LogoHeader>
      </Link>
      <div>
        <ButtonMenu onClick={() => router.push('/perfil')} name={'Perfil'}/>
        <ButtonMenu onClick={() => {}} name={'Sair'}/>
      </div>
    </TagHeader>
  )
}