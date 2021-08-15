import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryComponent } from './library/library.component';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { LibraryDetailsComponent } from './library/library-details/library-details.component';
import { MaterialModule } from '@library/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@library/core-data';
import { CoreStateModule } from '@library/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, LibraryComponent, LibraryListComponent, LibraryDetailsComponent],
  imports: [
    CommonModule,
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
