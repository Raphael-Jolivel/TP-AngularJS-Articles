import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticleId } from './page-article-id';

describe('PageArticleId', () => {
  let component: PageArticleId;
  let fixture: ComponentFixture<PageArticleId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArticleId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArticleId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
