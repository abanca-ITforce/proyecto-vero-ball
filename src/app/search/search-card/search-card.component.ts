import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  dataForm = this.fb.group({
    level: [null, []]
  })

  @Input() levels;

  @Output() selected: EventEmitter<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.post.emit(this.taskForm.value);

  }

}
