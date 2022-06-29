import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'session-frames',
    loadChildren: () => import('./session-frames/session-frames.module').then( m => m.SessionFramesPageModule)
  },
  {
    path: 'version',
    loadChildren: () => import('./version/version.module').then( m => m.VersionPageModule)
  },
  {
    path: 'screenshots',
    loadChildren: () => import('./screenshots/screenshots.module').then( m => m.ScreenshotsPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'custom-metrics',
    loadChildren: () => import('./custom-metrics/custom-metrics.module').then( m => m.CustomMetricsPageModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./breadcrumbs/breadcrumbs.module').then( m => m.BreadcrumbsPageModule)
  },
  {
    path: 'userdata',
    loadChildren: () => import('./userdata/userdata.module').then( m => m.UserdataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
