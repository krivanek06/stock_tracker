import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[disableControl]'
})
export class DisableControlDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    @Input() set disableControl(disable: boolean) {
        this.el.nativeElement.childNodes[0].childNodes[0].childNodes[2].childNodes[0].disabled = disable;
        this.renderer[disable ? 'addClass' : 'removeClass'](this.el.nativeElement, 'disabled-state');
    }

}
