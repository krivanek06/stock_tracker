import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StfmCompanyQuote} from '@core';

@Component({
    selector: 'app-details-stock-peers',
    templateUrl: './details-stock-peers.component.html',
    styleUrls: ['./details-stock-peers.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsStockPeersComponent implements OnInit {
    @Output() clickedPeerEmitter: EventEmitter<StfmCompanyQuote> = new EventEmitter<StfmCompanyQuote>();
    @Input() sectorPeers: StfmCompanyQuote[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(peer: StfmCompanyQuote) {
        this.clickedPeerEmitter.emit(peer);
    }
}
