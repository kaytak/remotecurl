import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { GetPageComponent } from './get-page/get-page.component';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFunctions(() => {
      const functions = getFunctions();
      functions.region='asia-northeast1';
      if (environment.useEmulators) {
          connectFunctionsEmulator(functions, 'localhost', 5021);
      }
      return functions;
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
