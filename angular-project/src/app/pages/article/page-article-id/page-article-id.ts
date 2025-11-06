import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article/article-service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../classes/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-article-id',
  imports: [CommonModule],
  templateUrl: './page-article-id.html',
  styleUrl: './page-article-id.scss'
})
export class PageArticleId implements OnInit {
  public article?: Article;
  private id!: string;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.articleService.getById(this.id).subscribe({
      next: (data) => {
        if (data.code === '200') {
          this.article = data.data;
        }
      },
      error: (err) => {
        console.error('Erreur de chargement', err);
      }
    });
  }
}
