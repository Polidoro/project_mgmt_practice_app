"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var pair_pipe_1 = require('./pair.pipe');
var auth_service_1 = require('./auth.service');
var app_component_1 = require('./app.component');
var loggedIn_guard_1 = require('./loggedIn.guard');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home.component');
var projects_component_1 = require('./projects.component');
var projectSummary_component_1 = require('./projectSummary.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent, canActivate: [loggedIn_guard_1.LoggedInGuard] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                material_1.MaterialModule.forRoot(),
                router_1.RouterModule.forRoot(routes)
            ],
            declarations: [
                pair_pipe_1.PairPipe,
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                projects_component_1.ProjectsComponent,
                projectSummary_component_1.ProjectSummaryComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthService, loggedIn_guard_1.LoggedInGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map