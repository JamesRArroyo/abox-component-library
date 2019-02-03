import { NgModule } from '@angular/core';
import { AboxLibraryComponent } from './abox-library.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [AboxLibraryComponent, AvatarComponent],
  imports: [
  ],
  exports: [AboxLibraryComponent]
})
export class AboxLibraryModule { }
