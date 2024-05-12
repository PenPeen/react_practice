import { SyntheticEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

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
    <>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">メール</label>
          <input id="email" type="text" {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" type="password" {...register('password')} />
        </div>
        <button>ログイン</button>
        <br></br>
        <button onClick={onReset}>リセット</button>
      </form>
    </>
  );
};

export default Login;
