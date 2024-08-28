import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular'; // AlertController eklendi
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup; // Form nesnesi tanımlandı

  constructor(private fb: FormBuilder, private alertController: AlertController) { // AlertController eklendi
    // Form Kontrolleri ve Doğrulama
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Giriş yap butonu işlemi
  async onLogin() {
    if (this.loginForm.valid) {
      // Kullanıcı adı ve şifre doğru
      console.log('Form geçerli, giriş yapılıyor...');
    } else {
      // Uyarı mesajı göster
      const alert = await this.alertController.create({
        header: 'Uyarı',
        message: 'Lütfen kullanıcı adı ve şifre giriniz.',
        buttons: ['Tamam']
      });
      await alert.present();
    }
  }
}
