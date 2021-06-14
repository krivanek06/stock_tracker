import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GraphqlQueryService, StGroupIdentificationDataFragment} from '@core';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-group-search',
    templateUrl: './group-search.component.html',
    styleUrls: ['./group-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupSearchComponent implements OnInit {

    @Output() clickedGroupEmitter: EventEmitter<StGroupIdentificationDataFragment> = new EventEmitter<StGroupIdentificationDataFragment>();

    @Input() clearOnClick = false;
    searchedGroups$: Observable<StGroupIdentificationDataFragment[]>;
    form: FormGroup;

    constructor(private fb: FormBuilder,
                private firebaseSearchService: GraphqlQueryService) {
    }

    ngOnInit() {
        this.initForm();
        this.watchForm();
    }

    clickedGroup(group: StGroupIdentificationDataFragment) {
        this.clickedGroupEmitter.emit(group);
        if (this.clearOnClick) {
            this.form.get('groupName').patchValue(null);
        }
    }

    private initForm() {
        this.form = this.fb.group({
            groupName: [null]
        });
    }

    private watchForm() {
        this.searchedGroups$ = this.form.get('groupName').valueChanges.pipe(
            debounceTime(300),
            switchMap(res => {
                if (!res || res.length <= 1) {
                    return of(null);
                }
                return this.firebaseSearchService.querySTGroupPartialDataByGroupName(res);
            })
        );
    }

}
