import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Card } from '../../shared/card/card';
import { POSTS } from '../../shared/data/posts.data';
import { WORKS } from '../../shared/data/works.data';

@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  recentPosts = POSTS;
  featuredWorks = WORKS;
}
