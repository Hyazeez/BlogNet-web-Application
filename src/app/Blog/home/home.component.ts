import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userList: any[]=[];

  constructor(http:HttpClient){}

  http=inject(HttpClient);
  route=inject(ActivatedRoute);

  ngOnInit(): void {
    this.getUserd();
  }

  getUserd(): void{
    this.http.get<any[]>('http://localhost:8080/api/authors').subscribe({
      next:(data)=>{
        this.userList=data;
      },
      error:(err)=>{
        console.error('Failed to fetch users',err);
      }
    });
  
  }

  onImgError(event:Event){
    const target=event.target as HTMLImageElement;
    target.src='assets/image/default.jpg';
  }

  trackByFn(index:number,item:any){
    return item.id;
  }

}
