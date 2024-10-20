import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'Trabajos',
        loadChildren: () => import('../trabajos/trabajos.module').then(m => m.TrabajosPageModule)
      },
      {
        path: 'empleados/:id',
        loadChildren: () => import('../empleados/empleados.module').then(m => m.EmpleadosPageModule)
      },
      {
        path: 'empleados/:id/nuevoempleado',
        loadChildren: () => import('../nuevoempleado/nuevoempleado.module').then(m => m.NuevoempleadoPageModule)
      },

      {
        path: 'balance',
        loadChildren: () => import('../balance/balance.module').then(m => m.BalancePageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
