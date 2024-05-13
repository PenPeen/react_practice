import { SyntheticEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  const onReset = (e: SyntheticEvent) => {
    e.stopPropagation();
    reset();
  };

  return (
    <Container>
      <Logo src="/penpeen-logo.jpeg" alt="PenPeen Logo" />
      <Title>ログイン</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="email">メール</Label>
          <Input id="email" type="text" {...register('email')} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">パスワード</Label>
          <Input id="password" type="password" {...register('password')} />
        </FormGroup>
        <Button type="submit">ログイン</Button>
        <ResetButton type="button" onClick={onReset}>
          リセット
        </ResetButton>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
