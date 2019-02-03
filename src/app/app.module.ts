import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboxLibraryModule } from 'projects/abox-library/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboxLibraryModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
