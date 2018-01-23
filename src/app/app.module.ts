import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserStartComponent } from './user-start/user-start.component';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
  declarations: [
    AppComponent,
    UserStartComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
