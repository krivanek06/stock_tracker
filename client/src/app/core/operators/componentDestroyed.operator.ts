/**
 * Easily unsubscribe from an observable stream by appending `takeUntilDestroyed(this)` to the observable pipe.
 * If the component already has a `ngOnDestroy` method defined, it will call this first.
 * Note that the component *must* implement OnDestroy for this to work (the typings will enforce this anyway)
 *
 * source > https://stackoverflow.com/questions/42490265/rxjs-takeuntil-angular-components-ngondestroy
 */
import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export function componentDestroyed(component: OnDestroy) {
	const oldNgOnDestroy = component.ngOnDestroy;
	const destroyed$ = new ReplaySubject<void>(1);
	component.ngOnDestroy = () => {
		oldNgOnDestroy.apply(component);
		destroyed$.next(undefined);
		destroyed$.complete();
	};
	return destroyed$;
}
