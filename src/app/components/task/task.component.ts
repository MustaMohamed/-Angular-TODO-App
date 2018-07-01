import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('taskData') public task;

  @Output('deleteID') public childToParentID = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleDeleting(taskId) {
    this.childToParentID.emit(taskId);
  }
}
