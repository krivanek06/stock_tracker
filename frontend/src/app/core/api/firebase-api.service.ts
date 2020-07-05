import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore/document/document';
import {IUser} from '../model/userModel';
import {StockWatchListTable} from '../../features/stock-tracker/model/tableModel';
import {AngularFirestoreCollection} from '@angular/fire/firestore/collection/collection';

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

}
