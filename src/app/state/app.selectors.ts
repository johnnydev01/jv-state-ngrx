import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';


//Um feature Selector é um seletor que é responsável por pegar uma property
//que está na raiz da store, por exemplo o userContext.
//Aceita apenas um parâmetro que é uma string no qual está definida na raiz da store
//lá no appModule
export const selectUserContext = createFeatureSelector('userContext');

export const selectUserName = createSelector(
  selectUserContext,
  (state: AppState) => state.user.name,
);
