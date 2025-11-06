import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/user/auth-service';
import {CommonModule} from '@angular/common';
import {ArticleService} from '../../services/article/article-service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  currentYear = new Date().getFullYear();
  appName = 'Articles';

  constructor(public authService: AuthService, private router: Router,
              private articleService: ArticleService) {}

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
