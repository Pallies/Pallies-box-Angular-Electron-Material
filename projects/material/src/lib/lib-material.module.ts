import { NgModule } from '@angular/core';
import { TestModule } from './test/test.module';



@NgModule({
  exports: [TestModule]
})
export class LibMaterialModule { }
