import { first, Observable, switchMap } from 'rxjs';

// https://stackoverflow.com/questions/30519645/how-to-make-one-observable-sequence-wait-for-another-to-complete-before-emitting
export function waitFor<T>(signal: Observable<any>) {
	return (source: Observable<T>) =>
		signal.pipe(
			first(),
			switchMap((_) => source)
		);
}
