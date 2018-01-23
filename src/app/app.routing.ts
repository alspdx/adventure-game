import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserStartComponent } from './user-start/user-start.component';
import { IntroductionComponent } from './introduction/introduction.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserStartComponent
  },
  {
    path: 'introduction',
    component: IntroductionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
