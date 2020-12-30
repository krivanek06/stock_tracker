import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupPartialData, Summary} from '../../../../api/customGraphql.service';
import {Observable, of} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirebaseSearchService} from '../../../../shared/services/firebase-search.service';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupSearchComponent implements OnInit {

  @Output() clickedGroupEmitter: EventEmitter<StGroupPartialData> = new EventEmitter<StGroupPartialData>();

  @Input() clearOnClick = false;
  searchedGroups$: Observable<StGroupPartialData[]>;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private firebaseSearchService: FirebaseSearchService) {
  }

  ngOnInit() {
    this.initForm();
    this.watchForm();
  }

  clickedGroup(group: StGroupPartialData) {
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
