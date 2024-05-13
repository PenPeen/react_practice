import * as yup from 'yup';

import type { InferType } from 'yup';
export const loginFormSchema = yup.object({
  email: yup.string().required('メールアドレスは入力必須です'),
  password: yup.string().required('パスワードは入力必須です'),
});

export type LoginFormSchema = InferType<typeof loginFormSchema>;
