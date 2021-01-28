
export class initializeStore {
  static readonly type = '[STORE] initialise le store ';
  constructor(public type: string, public value: number) {}
}
