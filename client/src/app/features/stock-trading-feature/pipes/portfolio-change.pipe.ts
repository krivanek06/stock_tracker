import { Pipe, PipeTransform } from '@angular/core';
import {StPortfolio} from '@core';

@Pipe({
  name: 'portfolioChange'
})
export class PortfolioChangePipe implements PipeTransform {

  transform(portfolio: StPortfolio, balance: number): number {
    const historicalBalance = portfolio.portfolioInvested + portfolio.portfolioCash;
    return (balance - historicalBalance) / historicalBalance;
  }

}
