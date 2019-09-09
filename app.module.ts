import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APICOMPComponent } from './apicomp/apicomp.component';
import { Apicomp2Component } from './apicomp2/apicomp2.component';
import { PipeComponent } from './pipe/pipe.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { MovielistComponent } from './movielist/movielist.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DoitService } from './doit.service';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    APICOMPComponent,
    Apicomp2Component,
    PipeComponent,
    MovieComponent,
    MovielistComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DoitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
