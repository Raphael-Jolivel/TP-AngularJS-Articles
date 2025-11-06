import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article/article-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../../classes/article';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-page.html',
  styleUrl: './create-page.scss'
})
export class CreatePage implements OnInit {

  public article: Article = new Article();
  public id: string = '';
  public error: string = '';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id) {
      this.articleService.getById(this.id).subscribe({
        next: (data) => {
          if (data.code === '200') {
            this.article = data.data;
          }
        },
        error: (err) => {
          this.error = 'Erreur lors du chargement ';
          console.error(err);
        }
      });
    }
    else {
      this.article = new Article();
    }
  }

  onClickUpdate(newArticle: Article): void {
    if (this.article.imgPath === "") {
      this.article.imgPath = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
    }
    this.articleService.save(this.article).subscribe({
      next: (data) => {
        if (data.code === '200') {
          this.router.navigate([this.id === '' ? '/articles' : '/manage']);
        } else {
          this.error = data.message ?? 'Erreur sauvegarde';
        }
      },
      error: (err) => {
        this.error = 'Erreur lors de la sauvegarde';
        console.error(err);
      }
    });
  }
}
