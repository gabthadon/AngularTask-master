import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { ModalComponent } from './Components/modal/modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { authInterceptor } from './auth.Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TaskFormComponent,
    ModalComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
