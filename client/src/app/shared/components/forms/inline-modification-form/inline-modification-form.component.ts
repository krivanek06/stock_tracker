import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-inline-modification-form',
    templateUrl: './inline-modification-form.component.html',
    styleUrls: ['./inline-modification-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineModificationFormComponent implements OnInit {
    @Input() label: string;
    @Input() data: string;
    @Output() acceptEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() removeEmitter: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;
    editing = false;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    modify() {
        if (this.editing) {
            this.form.disable();
            this.editing = false;
        } else {
            this.form.enable();
            this.editing = true;
        }
    }

    accept() {
        this.acceptEmitter.emit(this.name.value);
    }

    remove() {
        this.removeEmitter.emit();
    }

    get name(): AbstractControl {
        return this.form.get('name');
    }

    private initForm() {
        this.form = this.fb.group({
            name: [{value: this.data, disabled: true}, [Validators.required, Validators.maxLength(50)]]
        });
    }

}
