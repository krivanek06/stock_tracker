import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {STARTING_PORTFOLIO} from '../../../models';

@Component({
    selector: 'app-portfolio-state',
    templateUrl: './portfolio-state.component.html',
    styleUrls: ['./portfolio-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioStateComponent implements OnInit {
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;
    @Input() portfolioState: 'CARD' | 'PARTIAL' = 'CARD';
    @Input() startingPortfolio: number = STARTING_PORTFOLIO;


    constructor() {
    }

    ngOnInit() {
    }

}
