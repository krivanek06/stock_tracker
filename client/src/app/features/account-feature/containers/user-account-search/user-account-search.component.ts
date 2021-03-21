import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import {FirebaseSearchService, StUserPartialInformation} from '@core';

@Component({
    selector: 'app-user-account-search',
    templateUrl: './user-account-search.component.html',
    styleUrls: ['./user-account-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountSearchComponent implements OnInit {
    @Output() clickedUserEmitter: EventEmitter<StUserPartialInformation> = new EventEmitter<StUserPartialInformation>();

    @Input() fullWith = false;
    searchedUsers$: Observable<StUserPartialInformation[]>;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private firebaseSearchService: FirebaseSearchService) {
    }

    ngOnInit() {
        this.initForm();
        this.watchForm();
    }

    clickedUser(user: StUserPartialInformation) {
        this.clickedUserEmitter.emit(user);
    }

    private initForm() {
        this.form = this.fb.group({
            username: [null]
        });
    }

    private watchForm() {
        this.searchedUsers$ = this.form.get('username').valueChanges.pipe(
            debounceTime(500),
            switchMap(res => {
                if (res.length <= 3) {
                    return of(null);
                }
                return this.firebaseSearchService.queryUserPartialInformationByUsername(res);
            })
        );
    }
}
