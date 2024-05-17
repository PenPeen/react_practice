import * as yup from 'yup';

import type { InferType } from 'yup';

import { sex, userRole } from '@/constants/user_form_constants';

export const userForm = yup.object({
  name: yup.string().required('名前の入力は必須です'),
  email: yup.string().required('メールアドレスの入力は必須です'),
  sex: yup.mixed().oneOf(Object.keys(sex)),
  role: yup.mixed().oneOf(Object.keys(userRole)),
  agreement: yup.boolean().oneOf([true], '利用規約の同意が必要です').required(),
});

export type UserFormSchema = InferType<typeof userForm>;
