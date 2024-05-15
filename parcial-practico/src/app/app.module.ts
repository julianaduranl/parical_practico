import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisModule } from './pais/pais.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,PaisModule
  ],bootstrap: [AppComponent]
})
export class AppModule { }
