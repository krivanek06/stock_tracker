import {ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {ComponentBaseDirective} from './component-base.directive';

@Directive()
export abstract class ComponentScreenUpdateBaseDirective extends ComponentBaseDirective implements OnInit, OnDestroy {
    interval: any;
    componentName: string;

    updateIntervalMs = 1200;

    protected constructor(public cdr: ChangeDetectorRef,
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


