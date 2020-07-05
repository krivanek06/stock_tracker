import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {StockTableData, StockWatchListTable} from '../model/tableModel';
import {from, Observable, of} from 'rxjs';
import {DocumentReference} from '@angular/fire/firestore/interfaces';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase/app';


const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

@Injectable({
  providedIn: 'root'
})
export class StockFirebaseService {

  constructor(private afs: AngularFirestore) {
  }

  updateSymbolIntoWatchList(doc: string, data: StockTableData): Observable<any> {
     return from(this.afs.collection('stockWatchlist').doc(doc).update(
       {stocks: arrayUnion(data)},
     ));
  } // {merge: true}

  createWatchList(stockWatchListTable: StockWatchListTable): Observable<DocumentReference> {
    return from(this.afs.collection('stockWatchlist').add(stockWatchListTable));
  }

}
