import { Component, OnInit } from '@angular/core';
import { PostParameters } from '../../models/post-parameters';
import { Post } from '../../models/post';
import { PageMeta } from '@shared/models/page-meta';
import { PostService } from '../../services/post.service';
import { ResultWithLinks } from '@shared/models/result-with-links';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postParameter = new PostParameters({ orderBy: 'id desc', pageSize: 10, pageIndex: 0 });
  posts: Post[];
  pageMeta: PageMeta;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = [];
    this.getPosts();
  }

  getPosts() {
    console.log('11');
    this.postService.getPagedPosts(this.postParameter).subscribe(resp => {
      this.pageMeta = JSON.parse(resp.headers.get('X-Pagination')) as PageMeta;
      const result = {...resp.body} as ResultWithLinks<Post>;
      this.posts = result.value;
    });
  }

}
