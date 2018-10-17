import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ListTest2Component } from './components/list-test2/list-test2.component';
import { PostService } from './services/post.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationHeaderInterceptor } from '@shared/oidc/authorization-header-interceptor.interceptor';
import { PostCardComponent } from './components/post-card/post-card.component';
import { EnsureAcceptHeaderInterceptor } from '@shared/ensure-accept-header.interceptor';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostTableComponent } from './components/post-table/post-table.component';


const COMPONENTS = [
  DashboardComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
  Exception403Component,
  Exception404Component,
  Exception500Component
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [ SharedModule, RouteRoutingModule ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    PostListComponent,
    ListTest2Component,
    PostCardComponent,
    PostDetailComponent,
    PostTableComponent
  ],
  providers: [
    PostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EnsureAcceptHeaderInterceptor,
      multi: true
    }
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {}
