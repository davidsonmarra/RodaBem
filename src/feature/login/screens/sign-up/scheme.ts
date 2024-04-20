import {z} from 'zod';

export interface FormDataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Por favor, digite um e-mail inválido'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
  confirmPassword: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

export default schema;
