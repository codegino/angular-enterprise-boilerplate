import { Action } from '@ngrx/store';

export enum DesignerActionTypes {
  LoadDesigners = '[Designer] Load Designers'
}

export class LoadDesigners implements Action {
  readonly type = DesignerActionTypes.LoadDesigners;
}

export type DesignerActions = LoadDesigners;
