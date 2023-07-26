import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import logoFutNet from "../lotties/futnet.json";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
// import { useRouter } from "next/navigation";

const TagMain = styled.main`
    background-color: var(--green-futnet);
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    > h1 {
      font-size: 100px;
      color: white;
    }
  `

  const TagForm = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgb(109, 109, 109);
    display: flex;
    flex-direction: column;
    height: 520px;
    padding: 20px;
    width: 320px;

    p {
      margin-top: 5px;
      color: red;
    }

    h1 {
      color: var(--green-futnet);
      font-weight: 800;
      margin-bottom: 20px;
      font-size: 30px;
    }

    form {
      display: grid;
      gap: 10px;
    }

    label {
      color: #1962ff;
      font-weight: 700;
    }

    input {
      background-color: #e4edff;
      border: 0;
      border-radius: 5px;
      font-size: 14px;
      margin: 5px 0 15px;
      outline: 0;
      padding: 15px;
      width: 100%;
    }

    button {
      background: #1962ff;
      border: 0;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 14px;
      padding: 15px;
      text-transform: uppercase;
      width: 100%;
    }

    button:hover {
      background: #5a8eff;
    }
  `

export default function LoginForm() {
  // const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { signIn, errorResponse } = useContext(AuthContext);

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: logoFutNet,
  }

  async function handleSignIn(data: any) {
    // tratar erro aqui
    await signIn(data);
  }

  return (
    <TagMain>
      <TagForm
        onSubmit={handleSubmit(handleSignIn)}
      >
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
        <h1>Login FutNet</h1>
        <form>
          <label htmlFor="email-address">
            E-mail:
            <input
              {...register("email")}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Digite o e-mail"
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              {...register("password")}
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              placeholder="Digite a senha"
              required
            />
          </label>
          <button type="submit">Entrar</button>
          <button
            type="button"
            // onClick={() => router.push('/cadastro')}
          >Registrar</button>
        </form>
        { errorResponse && (
        <p>{errorResponse}</p>
        )}
      </TagForm>
    </TagMain>
  )
}