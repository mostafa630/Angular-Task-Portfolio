import { Component } from '@angular/core';
import {BLOGS} from '../../shared/data/blogs.data'
import { Button } from '../../shared/button/button';
import { BlogCard } from '../../shared/blog-card/blog-card';

@Component({
  selector: 'app-blog',
   imports: [Button, BlogCard],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
 Blogs = BLOGS
}
