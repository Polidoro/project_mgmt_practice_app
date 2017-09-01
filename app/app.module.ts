import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PairPipe } from './pair.pipe';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { LoggedInGuard } from './loggedIn.guard';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { ProjectSummaryComponent } from './projectSummary.component';

const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ProjectsComponent, canActivate: [ LoggedInGuard ] }
]

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    declarations: [
        PairPipe,
        AppComponent,
        LoginComponent,
        HomeComponent,
        ProjectsComponent,
        ProjectSummaryComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ AuthService, LoggedInGuard ]
})
export class AppModule {}
