const signUpFormData = [
  {
    step: 0,
    name: 'name',
    label: 'Nome',
    title: 'Nome',
    text: 'Digite seu nome',
    type: 'text',
    required: true,
  },
  {
    step: 1,
    name: 'email',
    label: 'Email',
    title: 'Email',
    text: 'Digite seu email',
    type: 'email',
    required: true,
  },
  {
    step: 2,
    name: 'password',
    label: 'Senha',
    title: 'Senha',
    text: 'Digite sua senha',
    type: 'password',
    required: true,
  },
  {
    step: 3,
    name: 'confirmPassword',
    label: 'Confirmar senha',
    title: 'Confirmar senha',
    text: 'Confirme sua senha',
    type: 'password',
    required: true,
  },
];

export default signUpFormData;
