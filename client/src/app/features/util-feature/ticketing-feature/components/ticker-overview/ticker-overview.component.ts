import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { StTicket } from '@core';
import { ConfirmableWithCheckbox, requiredValidator } from '@shared';

@Component({
	selector: 'app-ticker-overview',
	templateUrl: './ticker-overview.component.html',
	styleUrls: ['./ticker-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickerOverviewComponent implements OnInit {
	@Output() submitCommentEmitter: EventEmitter<string> = new EventEmitter<string>();
	@Output() closeTicketEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() deleteTicketEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() ticket: StTicket;
	@Input() showManagementButtons: boolean;
	answering: boolean;
	form: FormGroup;

	@ViewChild(FormGroupDirective) formDirective: NgForm;

	constructor(private fb: FormBuilder) {}

	get comment(): AbstractControl {
		return this.form.get('comment');
	}

	ngOnInit(): void {
		this.initForm();
	}

	submit() {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			this.submitForm();
		}
	}

	toggleCommentForm() {
		this.answering = !this.answering;
	}

	@ConfirmableWithCheckbox('Confirm closing ticket', 'confirm')
	close() {
		this.closeTicketEmitter.emit();
	}

	@ConfirmableWithCheckbox('Confirm deleting ticket', 'confirm')
	delete() {
		this.deleteTicketEmitter.emit();
	}

	@ConfirmableWithCheckbox('Confirm submitting comment', 'confirm')
	private submitForm() {
		this.submitCommentEmitter.emit(this.comment.value);
		this.formDirective.resetForm();
		this.answering = false;
	}
	private initForm() {
		this.form = this.fb.group({
			comment: [null, [requiredValidator]],
		});
	}
}
