import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article/article-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-page',
  imports: [
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './liste-page.html',
  styleUrl: './liste-page.scss'
})
export class ArticleListPage implements OnInit {

  public articles: any[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  private loadArticles(): void {
    this.articleService.getAll().subscribe({
      next: (data) => {
        if (data.code === '200') {
          this.articles = data.data;
        }
      },
      error: (err) => {
        console.error('Erreur de chargement', err);
      }
    });
  }
}
