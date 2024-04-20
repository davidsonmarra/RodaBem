import {TextInputProps} from 'react-native';

export interface DataProps {
  step: number;
  title: string;
  text: string;
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  inputOptions?: TextInputProps;
}

const signUpDataForm: DataProps[] = [
  {
    step: 0,
    title: 'Bem-vindo ao aplicativo',
    text: 'Para começar, precisamos de algumas informações suas',
    name: 'name',
    type: 'text',
    placeholder: 'Nome',
    inputOptions: {
      autoCapitalize: 'words',
      autoCorrect: false,
    },
  },
  {
    step: 1,
    title: 'E-mail',
    text: 'Digite seu e-mail',
    name: 'email',
    type: 'email',
    placeholder: 'E-mail',
    inputOptions: {
      autoCapitalize: 'none',
      autoCorrect: false,
      keyboardType: 'email-address',
    },
  },
  {
    step: 2,
    title: 'Senha',
    text: 'Digite sua senha',
    name: 'password',
    type: 'password',
    placeholder: 'Senha',
    inputOptions: {
      autoCorrect: false,
      autoCapitalize: 'none',
    },
  },
  {
    step: 3,
    title: 'Confirme sua senha',
    text: 'Digite sua senha novamente',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirme sua senha',
    inputOptions: {
      autoCorrect: false,
      autoCapitalize: 'none',
    },
  },
];

export default signUpDataForm;
