import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects.component'

const routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full'},
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
        AppComponent,
        ProjectsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
