import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { StTicket, StTicketComment, StTicketCommentEditValues, StUserPublicData } from '@core';
import { ConfirmableWithCheckbox, requiredValidator } from '@shared';

@Component({
	selector: 'app-ticker-overview',
	templateUrl: './ticker-overview.component.html',
	styleUrls: ['./ticker-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickerOverviewComponent implements OnInit {
	@Output() submitCommentEmitter: EventEmitter<string> = new EventEmitter<string>();
	@Output() editCommentEmitter: EventEmitter<StTicketCommentEditValues> = new EventEmitter<StTicketCommentEditValues>();
	@Output() closeTicketEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() deleteTicketEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() ticket: StTicket;
	@Input() isAdmin: boolean;
	@Input() user: StUserPublicData;

	editingComment: StTicketComment;
	answering: boolean;
	form: FormGroup;

	@ViewChild(FormGroupDirective) formDirective: NgForm;

	constructor(private fb: FormBuilder) {}

	get comment(): AbstractControl {
		return this.form.get('comment');
	}

	ngOnInit(): void {
		console.log(this.ticket);
		this.initForm();
	}

	submit() {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			this.submitForm();
		}
	}

	cancelComment() {
		this.editingComment = null;
		this.answering = false;
	}

	answerComment() {
		this.answering = true;
		this.editingComment = null;
	}

	editComment(comment: StTicketComment) {
		this.editingComment = comment;
		this.form = this.fb.group({
			comment: [comment.comment, [requiredValidator]],
		});
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
		if (this.editingComment) {
			this.editCommentEmitter.emit({ ticketId: this.ticket.id, commentId: this.editingComment.id, newComment: this.comment.value });
		} else {
			this.submitCommentEmitter.emit(this.comment.value);
		}
		this.formDirective.resetForm();
		this.answering = false;
		this.editingComment = null;
	}
	private initForm() {
		this.form = this.fb.group({
			comment: [null, [requiredValidator]],
		});
	}
}
