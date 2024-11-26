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
        path: 'balance',
        loadChildren: () => import('../balance/balance.module').then(m => m.BalancePageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
      },
      {
        path: 'trabajadores',
        loadChildren: () => import('../trabajadores/trabajadores.module').then(m => m.TrabajadoresPageModule)
      },
      {
        path: 'tipo-trabajos',
        loadChildren: () => import('../tipo-trabajos/tipo-trabajos.module').then(m => m.TipoTrabajosPageModule)
      },
      {
        path: 'nuevo-tipo-trabajo',
        loadChildren: () => import('../nuevo-tipo-trabajo/nuevo-tipo-trabajo-routing.module').then(m => m.NuevoTipoTrabajoPageRoutingModule)
      },
      {
        path: 'editar-tipo-trabajo/:id',
        loadChildren: () => import('../editar-tipo-trabajo/editar-tipo-trabajo-routing.module').then(m => m.EditarTipoTrabajoPageRoutingModule)
      },
      {
        path: 'variedad-coffe',
        loadChildren: () => import('../variedad-coffe/variedad-coffe.module').then(m => m.VariedadCoffePageModule)
      },
      {
        path: 'tipo-gasto',
        loadChildren: () => import('../tipo-gasto/tipo-gasto.module').then(m => m.TipoGastoPageModule)
      },
      {
        path: 'nueva-variedad',
        loadChildren: () => import('../nueva-variedad/nueva-variedad.module').then(m => m.NuevaVariedadPageModule)
      },
      {
        path: 'editarvariedad-cafe/:id',
        loadChildren: () => import('../editarvariedad-cafe/editarvariedad-cafe.module').then(m => m.EditarvariedadCafePageModule)
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
