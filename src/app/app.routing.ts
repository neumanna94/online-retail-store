//Importing services from Angular core that will allow static/dynamic routing.
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importing Components I will want to route to in the future.
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'albums/:id',
    component: DetailComponent
  },
  {
   path: 'admin',
   component: AdminComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
