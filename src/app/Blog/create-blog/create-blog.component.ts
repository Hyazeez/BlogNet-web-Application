import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  imports: [FormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})

export class CreateBlogComponent {
  user = { 
    name: '',
    title: '',
    photoUrl: '',
    description: '' 
  };

  constructor(private http:HttpClient,private router:Router){

  }

  postUser() {
    const url='http://localhost:8080/api/author';

    const params=new HttpParams()
    .set('name',this.user.name)
    .set('title',this.user.title)
    .set('photoUrl',this.user.photoUrl)
    .set('description',this.user.description);

    this.http.post(url,null,{params}).subscribe((result:any)=>{
      console.log('Posted Successfully',result);
      this.router.navigate(['/last']);
    })
  }
}
