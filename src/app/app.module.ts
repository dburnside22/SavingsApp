import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JarComponent } from './jar/jar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
