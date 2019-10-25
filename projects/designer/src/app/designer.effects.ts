import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DesignerActionTypes, DesignerActions } from './designer.actions';

@Injectable()
export class DesignerEffects {
  @Effect()
  loadDesigners$ = this.actions$.pipe(
    ofType(DesignerActionTypes.LoadDesigners),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );

  constructor(private actions$: Actions<DesignerActions>) {}
}
