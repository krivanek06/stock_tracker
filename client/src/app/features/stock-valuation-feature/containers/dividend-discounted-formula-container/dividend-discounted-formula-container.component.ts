import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StDividendDiscountedFormula } from '@core';
import { Observable } from 'rxjs';
import { DividendDiscountedFormulaService } from '../../services';

@Component({
	selector: 'app-dividend-discounted-formula-container',
	templateUrl: './dividend-discounted-formula-container.component.html',
	styleUrls: ['./dividend-discounted-formula-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividendDiscountedFormulaContainerComponent implements OnInit {
	dividendDiscountedFormula$!: Observable<StDividendDiscountedFormula | null>;

	constructor(private dividendDiscountedFormulaService: DividendDiscountedFormulaService) {}

	ngOnInit() {
		this.dividendDiscountedFormula$ = this.dividendDiscountedFormulaService.getDividendDiscountedFormula();
	}
}
