import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { TareaComponent } from './tarea/tarea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
