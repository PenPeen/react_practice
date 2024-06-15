import { SubmitHandler, useForm } from 'react-hook-form';

const userRole = {
  admin: '管理者',
  general: '一般',
  readonly: '閲覧専用',
};

const sex = {
  man: '男性',
  woman: '女性',
};

type UserForm = {
  name: string;
  email: string;
  sex: keyof typeof sex;
  role: keyof typeof userRole;
  agreement: boolean;
};

const SampleReactHookForm = () => {
  const { register, handleSubmit, reset } = useForm<UserForm>({
    defaultValues: {
      name: '',
      email: '',
      sex: 'man',
      role: 'readonly',
      agreement: false,
    },
  });

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };

  const onSubmit: SubmitHandler<UserForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">氏名</label>
          <input id="name" {...register('name')} />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" {...register('email')} />
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
        </div>
        <div>
          <label htmlFor="agreement">利用規約</label>
          <input id="agreement" type="checkbox" {...register('agreement')} />
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

export default SampleReactHookForm;
