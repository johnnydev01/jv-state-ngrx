import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoginService } from '../shared/services/login.service';
import * as fromAppActions from './app.actions';

@Injectable()
export class AppEffects {

  //definição do effect
  //essa action vai emitir todas as actions que a aplicação despachar
  doLogin$ = createEffect(() => this.actions$
    .pipe(
      //aqui é feito o filtro para passar só as actions que são desse tipo específico
      ofType(fromAppActions.doLogin),
      //nesse ponto utilizamos as informações que são passadas na action para fazer
      //uma chamada no serviço
      //e dependendo do resultado da chamada é disparado ou uma action de sucesso ou uma action de fracasso
      mergeMap(({ name, email }) => this.loginService.login(name, email)
        .pipe(
          map(user => {
            this.router.navigate(['d']);
            return fromAppActions.doLoginSuccess({ user });
          }),
          catchError(() => of(fromAppActions.doLoginFailure())),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions,
              private loginService: LoginService,
              private router: Router) {
  }
}
