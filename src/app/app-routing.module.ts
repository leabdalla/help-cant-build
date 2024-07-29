import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'wash',
    pathMatch: 'full'
  },

  //--------------------------------

  {
    path: 'wash',
    loadChildren: () => import('./pages/wash/wash.module').then( m => m.WashPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
