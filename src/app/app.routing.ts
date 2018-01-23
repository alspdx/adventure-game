import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserStartComponent } from './user-start/user-start.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserStartComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
