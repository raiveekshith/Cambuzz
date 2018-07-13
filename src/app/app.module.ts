import { UploadsService } from './services/uploads.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CambuzzMaterialModule } from './app.material';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ImageHolderComponent } from './image-holder/image-holder.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImageHolderComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, CambuzzMaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(routes), AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, FormsModule, AngularFireStorageModule
  ],
  entryComponents: [UploadComponent],
  providers: [UploadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
