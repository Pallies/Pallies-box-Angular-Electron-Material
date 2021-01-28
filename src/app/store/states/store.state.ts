import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { initializeStore } from '../actions/store.action';
import { storeFactory, storeInterface } from '../models/store.model';

// Description des actions du store
@State<storeInterface>({
  name: 'store_exemple',
  defaults: new storeFactory(),
})
@Injectable()
export class store {

  constructor() {}

  @Action(initializeStore)
  initializeStore(
    { getState, patchState }: StateContext<storeInterface>,
    { type, value }: initializeStore
  ) {
    // const state = getState();
    patchState({ [type]: value });
  }
}
