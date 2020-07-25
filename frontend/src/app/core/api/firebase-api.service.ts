import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore/document/document';
import {IUser} from '../model/userModel';
import {StockTableData, StockWatchListTable} from '../../features/stock-tracker/model/tableModel';
import {AngularFirestoreCollection} from '@angular/fire/firestore/collection/collection';
import {from, Observable} from 'rxjs';
import {DocumentReference} from '@angular/fire/firestore/interfaces';
import * as firebase from "firebase/app";

const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private afs: AngularFirestore) {
  }

  getUserDoc(userId: string): AngularFirestoreDocument<IUser> {
    return this.afs.doc<IUser>(`users/${userId}`);
  }

  getUserWatchLists(userId: string = ''): AngularFirestoreCollection<StockWatchListTable> {
    return this.afs.collection<StockWatchListTable>(`stockWatchlist`, (ref) =>
      ref.where('userId', '==', userId)
    );
  }

  updateSymbolIntoWatchList(
      doc: string,
      data: StockTableData
  ): Observable<any> {
    return from(
        this.afs
            .collection("stockWatchlist")
            .doc(doc)
            .update({ stocks: arrayUnion(data) })
    );
  } // {merge: true}

  createWatchList(
      stockWatchListTable: StockWatchListTable
  ): Observable<DocumentReference> {
    return from(this.afs.collection("stockWatchlist").add(stockWatchListTable));
  }

}
