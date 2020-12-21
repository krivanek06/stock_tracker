import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-group-create-form',
    templateUrl: './group-create-form.component.html',
    styleUrls: ['./group-create-form.component.scss'],
})
export class GroupCreateFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
      this.initForm();
      this.form.valueChanges.subscribe(console.log)
    }

    submit() {
        console.log('submit form');
    }

    private initForm() {
        this.form = this.fb.group({
            groupName: [null, [Validators.required]],
            groupDescription: [null, [Validators.required]]
        });
    }


}
