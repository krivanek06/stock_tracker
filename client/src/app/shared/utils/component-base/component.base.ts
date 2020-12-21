import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';


export class ComponentBase implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.destroy$.complete();
  }

}
