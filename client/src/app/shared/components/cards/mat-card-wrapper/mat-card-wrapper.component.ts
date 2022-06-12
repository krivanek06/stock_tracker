import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-mat-card-wrapper',
	templateUrl: './mat-card-wrapper.component.html',
	styleUrls: ['./mat-card-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatCardWrapperComponent {
	@Input() title: string | null = null;
	@Input() titleImgUrl?: string;
	@Input() clickable = false;

	@Input() subtitle: string | null = null;
	@Input() maxHeight?: number;
	@Input() additionalClasses = '';

	/* If true, ignore 100% height
    Used mainly when this component is inside grid and we do not want to this card
    to have the same height as grid itself
  */
	@Input() heightAuto = false;
}
