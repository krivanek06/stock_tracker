import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {from, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-user-account-search',
    templateUrl: './user-account-search.component.html',
    styleUrls: ['./user-account-search.component.scss'],
})
export class UserAccountSearchComponent extends ComponentBase implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.initForm();
        this.watchForm();
    }

    private initForm() {
        this.form = this.fb.group({
            username: [null]
        });
    }

    private watchForm() {
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((res) => {
            console.log(res);
        });
    }

}
