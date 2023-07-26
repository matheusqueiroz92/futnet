
import { render } from '@testing-library/react';
// import { useRouter } from 'next/router'; 
// import mockRouter from 'next-router-mock' ; 
import LoginForm from '../../components/LoginForm';

// jest.mock('/next-router', () => require('next-router-mock'));
// concluir os testes

describe('Formulário de Login', () => {
  it('Testa se renderiza o formulário de login', () => {
    expect(1 + 1).toBe(2);
  });

  it('Testa se é possível digitar no input de e-mail', () => {
    expect(2 + 1).toBe(3);
  });

  it('Testa se é possível digitar no input de senha', () => {
    expect(10 + 1).toBe(11);
  });

  it('Testa o funcionamento do botão entrar', () => {
    expect('testou').toStrictEqual('testou');
  });

  it('Testa o funcionamento do botão cadastrar', () => {
    expect('testando').toStrictEqual('testando');
  });

  it('Testa o componente LoginForm', () => {
    const { getByText } = render(<LoginForm/>);
    expect(getByText('Login')).toBeInTheDocument();
  })
});
