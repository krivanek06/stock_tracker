import { DialogService } from '../services';

export function Confirmable(dialogTitle: string, confirmButton: string = 'Confirm', cancelButton: string = 'Cancel') {
	return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
		const original = descriptor.value;
		descriptor.value = function (...args: any[]) {
			DialogService.showConfirmDialog(dialogTitle, confirmButton, cancelButton).then((result) => (result ? original.apply(this, args) : null));
		};
	};
}
