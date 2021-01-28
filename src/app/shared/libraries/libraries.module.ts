import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../projects/material/src/lib/material.module';

import { LibMaterialModule } from '@lib/src/public-api';

@NgModule({
  exports:[
    MaterialModule,
    LibMaterialModule
  ],
  providers: [],
})
export class LibrariesModule { }
