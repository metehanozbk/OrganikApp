import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage],
  // Eğer hata çözülmezse CUSTOM_ELEMENTS_SCHEMA ekleyebilirsiniz
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {}
