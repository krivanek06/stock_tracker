import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { StTicketCommentEditValues, StTicketCommentFragmentFragment, StTicketFragmentFragment, StUserPublicData } from '@core';
import { Confirmable, requiredValidator } from '@shared';

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

	@Input() ticket!: StTicketFragmentFragment;
	@Input() isAdmin: boolean | null = false;
	@Input() user!: StUserPublicData | null;

	editingComment: StTicketCommentFragmentFragment | null = null;
	form!: FormGroup;
	answering = false;

	@ViewChild(FormGroupDirective) formDirective!: NgForm;

	constructor(private fb: FormBuilder) {}

	get comment(): AbstractControl {
		return this.form.get('comment') as AbstractControl;
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

	editComment(comment: StTicketCommentFragmentFragment) {
		this.editingComment = comment;
		this.form = this.fb.group({
			comment: [comment.comment, [requiredValidator]],
		});
	}

	@Confirmable('Confirm closing ticket')
	close() {
		this.closeTicketEmitter.emit();
	}

	@Confirmable('Confirm deleting ticket')
	delete() {
		this.deleteTicketEmitter.emit();
	}

	@Confirmable('Confirm submitting comment')
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
