import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-user',
  templateUrl: './pagination-user.component.html',
  styleUrls: ['./pagination-user.component.scss']
})
export class PaginationUserComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() totalItems: number;
  @Output() setNewPage = new EventEmitter();
  pagesList: Array<number> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['totalPages'] && changes['totalPages'].currentValue){
      for (let index = 0; index < changes['totalPages'].currentValue; index++) {
        this.pagesList.push(index+1);        
      }
      console.log(this.pagesList)
    }
  }

  changePage(page: number){
    this.setNewPage.emit(page);
  }

}
