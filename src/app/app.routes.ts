import { Routes } from '@angular/router';
import { CreateBlogComponent } from './Blog/create-blog/create-blog.component';
import { ViewBlogsComponent } from './Blog/view-blogs/view-blogs.component';
import { HomeComponent } from './Blog/home/home.component';
import { AuthorComponent } from './Blog/author/author.component';
import { LastComponent } from './Blog/last/last.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: 'create-blog',
        component:CreateBlogComponent
    },
    {
        path: 'view-blogs',
        component:ViewBlogsComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'author',
        component:AuthorComponent
    },
    {
        path: 'last',
        component:LastComponent
    }
];
