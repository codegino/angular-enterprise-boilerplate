import { DesignerActions, DesignerActionTypes } from './designer.actions';

export const designerFeatureKey = 'designer';

// tslint:disable-next-line: no-empty-interface
export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: DesignerActions): State {
  switch (action.type) {
    case DesignerActionTypes.LoadDesigners:
      return state;

    default:
      return state;
  }
}
