import {z} from 'zod';

export interface FormData {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email('Por favor, digite um e-mail inválido'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

export default schema;
