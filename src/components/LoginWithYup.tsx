import { SyntheticEvent } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { loginFormSchema, LoginFormSchema } from '../schemas/loginForm';

const LoginWithYup: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => console.log(data);
  const onReset = (e: SyntheticEvent) => {
    e.stopPropagation();
    reset();
  };

  return (
    <>
      <h1>LoginWithYup</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">メール</label>
          <input id="email" type="text" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button>ログイン</button>
        <br></br>
        <button onClick={onReset}>リセット</button>
      </form>
    </>
  );
};

export default LoginWithYup;
