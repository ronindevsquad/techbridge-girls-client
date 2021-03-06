import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'maker',
				loadChildren: './components/maker/maker.module#MakerModule'
			},
			{
				path: 'monicall',
				loadChildren: './components/monicall/monicall.module#MonicallModule'
			},
			{
				path: 'supplier',
				loadChildren: './components/supplier/supplier.module#SupplierModule'
			},
			{
				path: 'techbridge-girls',
				loadChildren: './components/techbridge-girls/techbridge-girls.module#TechbridgeGirlsModule'
			},
			{
				path: '',
				component: IndexComponent,
				canActivate: [AuthGuardService]
			},
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }