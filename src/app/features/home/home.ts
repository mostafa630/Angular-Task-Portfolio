import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { PostCard } from '../../shared/post-card/post-card';
import { WorkCard } from '../../shared/work-card/work-card';
import { POSTS } from '../../shared/data/posts.data';
import { WORKS } from '../../shared/data/works.data';

@Component({
  selector: 'app-home',
  imports: [Button, PostCard, WorkCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  recentPosts = POSTS;
  featuredWorks = WORKS;
}
