import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import type { UserFormSchema } from '@/schema/userForm';

import { sex, userRole } from '@/constants/user_form_constants';
import { userForm } from '@/schema/userForm';

const SampleReactHookYupResolver = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      sex: 'man',
      role: 'readonly',
      agreement: false,
    },
    resolver: yupResolver(userForm),
  });

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };

  const onSubmit: SubmitHandler<UserFormSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">氏名</label>
          <input id="name" {...register('name')} />
          <div>{errors.name?.message}</div>
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" {...register('email')} />
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <label htmlFor="sex">性別</label>
          <select {...register('sex')}>
            {Object.entries(sex).map(([key, value], index) => (
              <option key={index} value={key}>
                {value}
              </option>
            ))}
          </select>
          <div>{errors.sex?.message}</div>
        </div>
        <div>
          <label htmlFor="role">ロール</label>
          <select id="role" {...register('role')}>
            {Object.entries(userRole).map(([key, value], index) => (
              <option key={index} value={key}>
                {value}
              </option>
            ))}
          </select>
          <div>{errors.role?.message}</div>
        </div>
        <div>
          <label htmlFor="agreement">利用規約</label>
          <input id="agreement" type="checkbox" {...register('agreement')} />
          <div>{errors.agreement?.message}</div>
        </div>
        <div>
          <button>Submit</button>
        </div>
        <div>
          <button onClick={onReset}>Reset</button>
        </div>
      </form>
    </>
  );
};

export default SampleReactHookYupResolver;
