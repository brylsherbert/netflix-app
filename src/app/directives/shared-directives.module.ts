import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, HideHeaderDirective],
  exports: [HideHeaderDirective],
})
export class SharedDirectivesModule {}
