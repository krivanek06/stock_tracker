import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore/document/document';
import {IUser} from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private afs: AngularFirestore) {
  }

  getUserDoc(userId: string): AngularFirestoreDocument<IUser> {
    return this.afs.doc<IUser>(`users/${userId}`);
  }

}
