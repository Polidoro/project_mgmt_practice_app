import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PairPipe } from './pair.pipe';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { ProjectSummaryComponent } from './projectSummary.component';

const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent }
]

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    declarations: [
        PairPipe,
        AppComponent,
        HomeComponent,
        ProjectsComponent,
        ProjectSummaryComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ AuthService ]
})
export class AppModule {}
