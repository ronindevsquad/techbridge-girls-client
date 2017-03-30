import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import { AuthGuardService } from './services/auth-guard.service';
import { SessionService } from './services/session.service';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: 'maker',
				loadChildren: './components/maker/maker.module#MakerModule'
			},
			{
				path: 'supplier',
				loadChildren: './components/supplier/supplier.module#SupplierModule'
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