import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css'] 
})
export class ViewBlogsComponent implements OnInit {

  userList: any[] = [];
  isLoading = true;
  errorMessage = '';

  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getUserd();
  }

  getUserd(): void {
    this.http.get<any[]>('http://localhost:8080/api/authors').subscribe({
      next: (data) => {
        this.userList = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch users', err);
        this.errorMessage = 'Failed to load authors.';
        this.isLoading = false;
      }
    });
  }

  onImgError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/bg5.png';
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
