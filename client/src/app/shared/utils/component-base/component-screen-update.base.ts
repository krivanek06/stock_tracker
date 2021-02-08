import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {ComponentBase} from './component.base';


export class ComponentScreenUpdateBase extends ComponentBase implements OnInit, OnDestroy {
    interval: any;
    componentName: string;

    updateIntervalMs = 1200;

    constructor(private cdr: ChangeDetectorRef,
                private componentNameBse: string) {
        super();
        this.componentName = componentNameBse;
    }

    ngOnInit(): void {
        this.updateScreen();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        clearInterval(this.interval);
    }

    private updateScreen(): void {
        // websockets update view
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }, this.updateIntervalMs);
    }

}


