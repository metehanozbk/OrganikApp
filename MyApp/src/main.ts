import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Angular uygulamasını başlat
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Hataları konsola yazdır
