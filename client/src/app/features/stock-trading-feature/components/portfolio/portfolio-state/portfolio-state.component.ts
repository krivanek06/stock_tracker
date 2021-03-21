import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {STARTING_PORTFOLIO} from '../../../models';

export enum PortfolioStateEnum {
    CARD = 'CARD',
    PARTIAL = 'PARTIAL'
}

@Component({
    selector: 'app-portfolio-state',
    templateUrl: './portfolio-state.component.html',
    styleUrls: ['./portfolio-state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioStateComponent implements OnInit {
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;
    @Input() portfolioState = PortfolioStateEnum.CARD;

    STARTING_PORTFOLIO = STARTING_PORTFOLIO;
    PortfolioStateEnum = PortfolioStateEnum;

    constructor() {
    }

    ngOnInit() {
    }

}
