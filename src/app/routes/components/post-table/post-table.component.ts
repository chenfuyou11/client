import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STData, STComponent, STPage } from '@delon/abc';
import { _HttpClient } from '@delon/theme';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { tap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PostParameters } from '../../models/post-parameters';
import { PageMeta } from '@shared/models/page-meta';
import { Post } from '../../models/post';
import { Subject } from 'rxjs';
import { PostService } from '../../services/post.service';
import { ResultWithLinks } from '@shared/models/result-with-links';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styles: []
})
export class PostTableComponent implements OnInit {

 /**
   * 分页大小
   */
  public pageSize = 0;

  /**
   * 当前页
   */
  public pageNumber = 0;
  /**
   * 总页数
   */
  public totalPages = 1;
  /**
   * 总记录数
   */
  public totalItems: number;


  pageMeta: PageMeta;
  postParameter = new PostParameters({ orderBy: 'id desc', pageSize: 10, pageIndex: 0 });
  loading = false;
  dataSource: Post[];
  searchKeyUp = new Subject<string>();
  constructor(
    private postService: PostService
  ) {
    const subscription = this.searchKeyUp.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(() => {
      this.load();
    });
   }

  ngOnInit() {
    this.load();
  }
  load() {
    this.postService.getPagedPosts(this.postParameter).subscribe(resp => {
      this.pageMeta = JSON.parse(resp.headers.get('X-Pagination')) as PageMeta;
      console.log( this.pageMeta);
      this.pageSize = this.pageMeta.pageSize;
      this.pageNumber = this.pageMeta.pageIndex + 1;
      this.totalPages = this.pageMeta.pageSize;
      this.totalItems = this.pageMeta.totalItemCount;

      const pagedResult = { ...resp.body } as ResultWithLinks<Post>;
      this.dataSource = pagedResult.value;
    });
  }
  onPaging() {
    this.postParameter.pageIndex = this.pageNumber - 1;
    this.postParameter.pageSize = this.pageSize;
    this.load();
  }


}
