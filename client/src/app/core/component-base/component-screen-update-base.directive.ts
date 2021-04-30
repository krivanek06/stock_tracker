import {ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewRef} from '@angular/core';

@Directive()
export abstract class ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    interval: any;
    componentName: string;

    updateIntervalMs = 1800;

    protected constructor(public cdr: ChangeDetectorRef,
                          private componentNameBse: string) {
        this.componentName = componentNameBse;
    }

    ngOnInit(): void {
        this.updateScreen();
    }

    ngOnDestroy() {
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


