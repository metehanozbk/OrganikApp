// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  loginForm: FormGroup;
 
 
  passwordType: string = 'password'; // Şifreyi gizle


  constructor(private fb: FormBuilder, private alertController: AlertController,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  goToDash() {
    this.router.navigate(['/dash']);
  }
 

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  async onLogin() {
    if (this.loginForm.valid) {
      console.log('Form geçerli, giriş yapılıyor...');
    } else {
      const alert = await this.alertController.create({
        header: 'Uyarı',
        message: 'Lütfen kullanıcı adı ve şifre giriniz.',
        buttons: ['Tamam']
      });
       alert.present();
    }
  }
}
