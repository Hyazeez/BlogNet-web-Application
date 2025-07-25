import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  imports: [CommonModule, FormsModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})

export class AuthorComponent implements OnInit{
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  authorId!: string;
  UserAttributes:any = {};
  commentsList:any[]=[];
  commentContent:string='';

  ngOnInit(): void {
    this.authorId=this.route.snapshot.paramMap.get('id')!;
    if(this.authorId){
      this.getAuthor(this.authorId);
      this.getComments(this.authorId);
    }
  }

  getAuthor(id:string){
    this.http.get(`http://localhost:8080/api/author/${id}`).subscribe({
      next:(res)=>{
        this.UserAttributes = res;
      },
      error(err) {
        console.log('Error fetching author:',err)
      },
    })
  }

  getComments(id:string) {
  this.http.get<any[]>(`http://localhost:8080/api/author/${id}/comment`).subscribe({
      next: (res) => {
        this.commentsList = res;
      },
      error: (err) => {
        console.error('Error fetching comments:', err);
      }
    });
  }

  addComment(){
    if(this.commentContent.trim()){
      const url = `http://localhost:8080/api/author/${this.authorId}/comment`;
      const body = {content:this.commentContent};
      this.http.post(url,body).subscribe({
        next:()=>{
          this.getComments(this.authorId);
          this.commentContent='';
        },
        error(err) {
          console.error('Error posting comment:',err);
        },
      })
    }
  }

  likeAuthor() {
    console.log("Like button clicked");
    this.http.put(`http://localhost:8080/api/author/${this.authorId}/like`, {})
      .subscribe({
        next: (updatedAuthor: any) => {
          console.log("Updated author after like:", updatedAuthor);
          this.UserAttributes = updatedAuthor;
        },
        error: (err: any) => {
          console.error('Error on like:', err);
        }
      });
  }


  deleteComment(commentId:number){
    const url = `http://localhost:8080/api/author/${commentId}`;
    this.http.delete(url).subscribe({
      next:()=>{
        this.getComments(this.authorId);
      },
      error(err) {
        console.error('Error in delete comment:',err);
      },
    })
  }

  onImgError(event:any){
    event.target.src='assets/image/default.jpg';
  }
}