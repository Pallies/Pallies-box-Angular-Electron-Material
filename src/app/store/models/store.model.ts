

export enum storeEnum {
  KEY_VALUE = "key"
}
// Pour un modèle non défini
export interface storeInterface {
  [key: string]: any;
}
// Pour un modèle défini
export interface storeDto {
  [storeEnum.KEY_VALUE]: number;

}
// Pour l'initialisation du store ou le reset
export class storeFactory implements storeDto {
  [storeEnum.KEY_VALUE] = 100;
}



