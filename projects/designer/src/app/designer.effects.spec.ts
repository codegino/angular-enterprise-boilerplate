import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DesignerEffects } from './designer.effects';

describe('DesignerEffects', () => {
  const actions$: Observable<any> = null;
  let effects: DesignerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignerEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<DesignerEffects>(DesignerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
