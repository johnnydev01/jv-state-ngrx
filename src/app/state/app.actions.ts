import { createAction, props } from '@ngrx/store';
import { User } from '../shared/models/user.model';


export const doLogin = createAction(
  //Type: descreve a ação que está sendo realizada.
  //O padrão é utilizar colchetes para indicar a origem da ação e a descrição da ação.
  '[Login] Do Login',
  //props: é possível adicionar propriedades a uma ação para fornecer contexto ou metadados adicionais
  // para uma ação. A propriedade mais comum é a payload
  props<{ name: string, email: string }>(),
);

export const doLoginSuccess = createAction(
  '[API] Do Login Success',
  props<{ user: User }>(),
);

export const doLoginFailure = createAction(
  '[API] Do Login Failure',
);
