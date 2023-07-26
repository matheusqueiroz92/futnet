"use client"

import { styled } from "styled-components";
import { useForm } from 'react-hook-form';
import { useLeague } from "@/hooks/useRequestApi";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CountryType = {
  name: string,
  id: number,
  season: number,
}

const countries: CountryType[] = [
  {
    name: 'Brasil',
    id: 71,
    season: 2023,
  },
  {
    name: 'Alemanha',
    id: 78,
    season: 2022,
  },
  {
    name: 'Argentina',
    id: 134,
    season: 2022,
  },
  {
    name: 'Espanha',
    id: 140,
    season: 2022,
  },
  {
    name: 'França',
    id: 61,
    season: 2022,
  },
  {
    name: 'Inglaterra',
    id: 39,
    season: 2022,
  },
  {
    name: 'Itália',
    id: 135,
    season: 2022,
  },
  {
    name: 'Portugal',
    id: 94,
    season: 2022,
  }
];


const TagForm = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
      margin-top: 5px;
      color: red;
    }

    h1 {
      color: var(--green-futnet);
      font-weight: 800;
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

export default function RegisterForm() {
  const [countryName, setCountryName] = useState('');

  const handleCountry = ({ target }: any) => {
    const { value } = target;
    setCountryName(value);
  }; // captura o evento de seleção do país e seta no estado;

  const findCountry: CountryType | undefined = countries.find((el) => {
    return el.name === countryName;
  }); // procura no array o país setado na seleção

  // const { dataApi } = useLeague(findCountry?.season, findCountry?.id);
  

  const router = useRouter();
  const { register, handleSubmit } = useForm();
  
  return (
    <TagForm>
      <form>
        <label htmlFor="nome">
          Nome completo:
          <input
            {...register("nome")}
            id="nome"
            name="nome"
            type="text"
            autoComplete="nome"
            placeholder="Digite o nome completo"
            required
          />
        </label>
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
        <label htmlFor="telefone">
          Telefone:
          <input
            {...register("telefone")}
            id="telefone"
            name="telefone"
            type="phone"
            autoComplete="telefone"
            placeholder="Digite o telefone com ddd"
          />
        </label>
        <label htmlFor="imagem">
          Foto:
          <input
            {...register("imagem")}
            id="imagem"
            name="imagem"
            type="file"
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
        <label htmlFor="password">
          Confirme a Senha:
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
        <button type="submit">Enviar</button>
      </form>
    </TagForm>
  )
}


    // <div>
    //   <h1>Cadastro</h1>
    //   <TagForm>
    //     <div>
    //       <label htmlFor="nome">Nome completo</label>
    //       <input type="text" id="nome" name="nome" required />
    //     </div>
    //     <div>
    //       <label htmlFor="nome">E-mail de usuário</label>
    //       <input type="email" id="email-address" name="email-address" required />
    //     </div>
    //     <div>
    //       <label htmlFor="nome">Telefone com DDD</label>
    //       <input type="tel" id="phone" name="telefone" />
    //     </div>
    //     <div>
    //       <label htmlFor="nome">Selecione o país do time para qual você torce</label>
    //       <select onChange={handleCountry}>
    //         <option>Selecione o país</option>
    //         {countries.map((country, index) => (
    //           <option value={country.name} key={index}>{country.name}</option>
    //         ))}
    //       </select>
    //     </div>
    //     {/* <div>
    //       <label htmlFor="nome">Selecione o time para qual torce</label>
    //       <select>
    //         <option value="">Selecione o time</option>
    //         {dataApi[0]?.map((element, index) => (
    //           <option key={index}>{element.team}</option>
    //         ))}
    //       </select>
    //     </div> */}
    //     <div>
    //       <label htmlFor="senha">Digite a senha</label>
    //       <input type="password" id="senha" name="senha" required />
    //     </div>
    //     <div>
    //       <label htmlFor="">Confirme a senha</label>
    //       <input type="password" id="confirma-senha" name="confirma-senha" required />
    //     </div>
    //   </TagForm>
    // </div>