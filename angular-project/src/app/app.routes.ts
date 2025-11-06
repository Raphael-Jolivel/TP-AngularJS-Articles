import { Routes } from '@angular/router';
import {ResetPasswordPage} from './pages/auth/reset-password-page/reset-password-page';
import {SignInPage} from './pages/auth/sign-in-page/sign-in-page';
import {SignUpPage} from './pages/auth/sign-up-page/sign-up-page';
import {CreatePage} from './pages/article/create-page/create-page';
import {ArticleListPage} from './pages/article/liste-page/liste-page';
import {ArticleGestionPage} from './pages/article/gestion-page/article-gestion-page';
import {PageArticleId} from './pages/article/page-article-id/page-article-id';
import {authGuard} from './components/guards/auth-guard';

export const routes: Routes = [

  {path : 'reset-password', component:ResetPasswordPage},
  {path : 'login', component:SignInPage},
  {path : 'register', component:SignUpPage},
  {path : 'edit/:id', component:CreatePage, canActivate: [authGuard]},
  {path: 'create', component: CreatePage, canActivate: [authGuard]},
  {path : 'articles', component:ArticleListPage},
  {path : 'manage', component:ArticleGestionPage, canActivate: [authGuard]},
  {path : '', component:ArticleListPage, canActivate: [authGuard]},
  {path : 'article/:id', component:PageArticleId},


];
