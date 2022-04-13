import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles!:Article;
  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    console.log(this._articleService.pruebas());
    this._articleService.getArticles().subscribe(
      response => {
        console.log(response)
        if(response.articles){
          this.articles = response.articles;
        }
        else{
          //Notjing todo
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  
}
