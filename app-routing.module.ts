import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APICOMPComponent } from './apicomp/apicomp.component';
import { Apicomp2Component } from './apicomp2/apicomp2.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
    {path:'apicomp',component:APICOMPComponent},
    {path:'apicomp2',component:Apicomp2Component},
   {path:'movie',component:MovieComponent},
 {path:'movielist',component:MovielistComponent}
//{path:'contacts',component:ContactsComponent},
// {path:'test1',component:Test1Component},
// {path:'test2',component:Test2Component},
// {path:'test3',component:Test3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
