import { useState } from 'react';

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

const SampleForm = () => {
  const [formData, setFormData] = useState<UserForm>({
    name: '',
    email: '',
    sex: 'man',
    role: 'readonly',
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, type, value } = e.target;
    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((data) => ({ ...data, [name]: newValue }));
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">氏名</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sex">性別</label>
          <select name="sex" id="sex" onChange={handleChange}>
            {Object.entries(sex).map(([key, value], index) => (
              <option key={index} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="role">ロール</label>
          <select name="role" id="role" onChange={handleChange}>
            {Object.entries(userRole).map(([key, value], index) => (
              <option key={index} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="agreement">利用規約</label>
          <input
            id="agreement"
            type="checkbox"
            name="agreement"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SampleForm;
