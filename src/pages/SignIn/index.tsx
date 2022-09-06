import { Button, Heading, Input } from '@rafael-rufino/my-react-component-library';

import React from 'react';

import { Container, Wrapper, ButtonContainer } from './styles';

export const SignIn = () => {
  return (
    <Container>
        <Wrapper>
          <Heading description='Informe seu login e senha para continuar'>Acessar sua conta</Heading>
          <Input label='Seu login' placeholder="E-mail, CPF, Usuário ou Celular" type='text'  onChange={() => {}} />
          <Input label='Sua senha' placeholder="Digite a sua senha"  onChange={() => {}} />

          <ButtonContainer>
            <Button type='submit'>Acessar sua conta</Button>
          </ButtonContainer> 

        </Wrapper>
    </Container>
  )
}

