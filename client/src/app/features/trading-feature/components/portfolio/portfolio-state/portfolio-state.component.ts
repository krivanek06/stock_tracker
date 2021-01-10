import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio} from '../../../../../api/customGraphql.service';

@Component({
    selector: 'app-portfolio-state',
    templateUrl: './portfolio-state.component.html',
    styleUrls: ['./portfolio-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioStateComponent implements OnInit {
    @Input() portfolio: StPortfolio;

    constructor() {
    }

    ngOnInit() {
    }

}
