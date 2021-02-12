import {Component, Directive, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export abstract class ComponentBaseDirective implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  protected constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    // this.destroy$.complete();  // used to throw error
  }

}
