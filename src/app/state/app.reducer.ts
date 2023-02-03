import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../shared/models/user.model';
import * as fromAppActions from './app.actions';


//Primeiro é feito uma definição do estado
//A store vai ser populado com estado que tem esse tipo
export interface AppState {
  user: User;
}

//inicialmente a store vai ter essa informação
export const initialState: AppState = {
  user: undefined,
};

//Na versão anterior a 8 era feito um switch case para saber qual o tipo da action
//porém o método on já faz isso por de baixo dos panos
const appStateReducer = createReducer(
  //estado inicial
  initialState,
  //ons:  associação entre ações e mudanças de estado
  //Recebe um tipo de ação, o estado atual, e a informação que se quer modificar na store
  on(fromAppActions.doLoginSuccess, (state, { user }) => ({
    //nesse ponto é necessário usar o spread operator para que o objeto
    //de rotorno seja uma cópia do estado atual, para que caso surja novas definições
    //na interface evitemos de passá-las manualmente
    ...state,
    //e aqui devolvemos o objeto modificado
    user,
  })),
);

//Aqui temos a função pura que aceita o estao atual, uma action e retorna o estado modificado

//Importante: o Reducer não cria novos estados com o estado atual alterado.
//Ele constrói um novo estado da aplicação por meio de funções puras (pure functions),
//indo de encontro ao princípio da imutabilidade
export function reducer(state: AppState | undefined, action: Action): AppState {
  return appStateReducer(state, action);
}
