import {DialogService} from '../services';


export function Confirmable(message: string, cancelButton = 'Cancel' , confirmButton = 'Yes') {
    return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            DialogService.presentAlertConfirm(
                message,
                cancelButton,
                confirmButton
            ).then((result) => (result ? original.apply(this, args) : null));
        };
    };
}
