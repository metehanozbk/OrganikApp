import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dash',
  templateUrl: 'dash.page.html',
  styleUrls: ['dash.page.scss'],
})
export class DashPage implements OnInit {
  isGeneralExpanded: boolean = false;
  isFenIsleriExpanded: boolean = false;
  isFaturaExpanded: boolean = false;
  isDashboardVisible: boolean = true;

  totalCustomers = 22;
  totalSubscriptions = 0;
  activeSubscriptions = 0;
  passiveSubscriptions = 0;

  chartData: { name: string; value: number }[] = [];
  chartWidth = 320;
  chartHeight = 250;
  colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.updateChartData();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dash']);
  }

  toggleGeneral() {
    this.isGeneralExpanded = !this.isGeneralExpanded;
  }

  toggleFenIsleri() {
    this.isFenIsleriExpanded = !this.isFenIsleriExpanded;
  }

  toggleFatura() {
    this.isFaturaExpanded = !this.isFaturaExpanded;
  }

  async showLisanssizUretimAlert() {
    const alert = await this.alertController.create({
      header: 'Uyarı',
      message: 'Lisanssız Üretim Başvuru Modülü Lisansınızda bulunmuyor. Lütfen sistem yöneticiniz ile görüşün !!!',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  private updateChartData() {
    this.chartData = [
      { name: 'Cari', value: this.totalCustomers },
      { name: 'Aktif Abone', value: this.activeSubscriptions },
      { name: 'Pasif Abone', value: this.passiveSubscriptions },
    ];
  }
}
