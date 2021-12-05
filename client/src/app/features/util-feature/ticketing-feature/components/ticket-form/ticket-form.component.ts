import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { StTicketCreateValues } from '@core';
import { Confirmable, InputSource, maxLengthValidator, requiredValidator } from '@shared';
import { TICKET_FORM_INPUT_SOURSE } from '../../models';

@Component({
	selector: 'app-ticket-form',
	templateUrl: './ticket-form.component.html',
	styleUrls: ['./ticket-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormComponent implements OnInit {
	@Output() submitFormEmitter: EventEmitter<StTicketCreateValues> = new EventEmitter<StTicketCreateValues>();
	inputSource: InputSource[] = TICKET_FORM_INPUT_SOURSE;
	form: FormGroup;
	@ViewChild(FormGroupDirective) formDirective: NgForm;
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.intiForm();
	}

	submitForm(): void {
		this.form.markAllAsTouched();
		if (!this.form.invalid) {
			this.submit();
		}
	}

	@Confirmable('Please confirm sending a ticket')
	private submit() {
		this.submitFormEmitter.emit(this.form.value);
		this.formDirective.resetForm();
	}

	private intiForm(): void {
		this.form = this.fb.group({
			name: [null, [requiredValidator, maxLengthValidator(80)]],
			type: [null, [requiredValidator]],
			message: [null, [requiredValidator]],
		});
	}
}
