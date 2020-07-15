
from firebase_admin import credentials, firestore, initialize_app, _apps as firestoreApps


class FirestoreService:
    def initFirestore(self):
        if not firestoreApps:
            cred = credentials.Certificate('private_data/firebase_key.json')
            default_app = initialize_app(cred)
        return firestore.client()