import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialLoginComponent} from './components/material-login/material-login.component';
import {PrimengLoginComponent} from './components/primeng-login/primeng-login.component';
import {SnackbarMessageComponent} from './components/snackbar-message/snackbar-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  declarations: [
    AppComponent,
    MaterialLoginComponent,
    PrimengLoginComponent,
    SnackbarMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    GrowlModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarMessageComponent],
})
export class AppModule {
}
