import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  @Input() incomingLevels: any[];

  @Output() selected: EventEmitter<any>;

  dataForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      incomingLevel: ''
    });
  }

  onSubmit() {
    const selected = this.dataForm.value;
    this.selected.emit(selected);
  }

}
