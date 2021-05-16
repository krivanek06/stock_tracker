import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

// https://www.youtube.com/watch?v=h79xrJZAQ6I
export const taskRunner = functions.pubsub.schedule('* 1 * * *').onRun(async context => {
    const now = admin.firestore.Timestamp.now();
    const query = db.collection('tasks').where('performAt', '<=', now).where('status', '==', 'schedule');
    const tasks = await query.get();

    const jobs: Promise<any>[] = [];

    // loop over documents and push job
    tasks.forEach(snapshot => {
        const {worker, options} = snapshot.data();

        // update worker completion
        const job = workers[worker](options)
        .then(() => snapshot.ref.update({status: 'completed'}))
        .catch(() => snapshot.ref.update({status: 'error'}));

        jobs.push(job);
    });

    // execute all at once
    return await Promise.all(jobs);
})



interface Workers {
    [key: string]: (options: any) => Promise<any>
}

export const workers: Workers = {

}
