import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public taskName;
  public taskDescription = 'No Description..';
  public tasksList = [];
  public formError = false;

  constructor() {
  }

  ngOnInit() {
  }

  handleSubmit(title, desc) {
    this.taskName = title.value;
    this.taskDescription = desc.value;

    if (this.taskName === '') {
      this.formError = true;
      return false;
    }
    this.formError = false;
    this.tasksList.push({
      taskName: this.taskName,
      taskDescription: this.taskDescription,
      taskID: this.tasksList.length
    });
    this.taskName = '';
    this.taskDescription = 'No Description..';
    title.value = null;
    desc.value = null;
    return false;
  }

  deleteTask(taskIdx) {
    console.log(taskIdx);
    this.tasksList = this.tasksList.filter(item => item.taskID !== taskIdx);
    this.tasksList.map((item, idx) => item.taskID = idx);
  }

}
