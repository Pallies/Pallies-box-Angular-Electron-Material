import { Selector } from "@ngxs/store";
import { storeEnum as K, storeInterface } from "../models/store.model";
import { store } from "../states/store.state";

// retourne des Observables
export class storeSelect extends store {
  @Selector()
  static getStore$(state: storeInterface): string {
    return state[K.KEY_VALUE];
  }
}
