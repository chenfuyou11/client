import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { Test1Component } from './oidc/test1/test1.component';
import { SigninOidcComponent } from '@shared/oidc/signin-oidc/signin-oidc.component';
import { RedirectSilentRenewComponent } from '@shared/oidc/redirect-silent-renew/redirect-silent-renew.component';
import { OpenIdConnectService } from '@shared/oidc/open-id-connect.service';
import { RequireAuthenticatedUserRouteGuard } from '@shared/oidc/require-authenticated-user-route.guard';
const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule
];
// endregion

// region: your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    Test1Component,
    SigninOidcComponent,
    RedirectSilentRenewComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [
    OpenIdConnectService,
    RequireAuthenticatedUserRouteGuard,
  ]
})
export class SharedModule { }
