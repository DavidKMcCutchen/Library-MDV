import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LibraryService } from '@library/core-data';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from '@library/ui-login'

const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}

];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule {}