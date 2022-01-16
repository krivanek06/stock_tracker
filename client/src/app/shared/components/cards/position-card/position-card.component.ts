import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-position-card',
	templateUrl: './position-card.component.html',
	styleUrls: ['./position-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionCardComponent implements OnInit {
	@Output() clickedEmitter: EventEmitter<void> = new EventEmitter<void>();

	@Input() showInCard = false;
	@Input() cardBackgroundColor = '';
	@Input() positionNumber?: number;
	@Input() myPosition?: number;
	@Input() isButton = true;

	constructor() {}

	ngOnInit(): void {}

	clicked(): void {
		this.clickedEmitter.emit();
	}
}
