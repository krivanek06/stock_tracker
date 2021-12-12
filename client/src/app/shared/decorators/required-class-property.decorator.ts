/**
 * This property decorator simply forces, that the class property should be surely set to a non-falsy
 * value (except is 0 and false - these are allowed, these values doesn't mean that the value not exists)
 * before it is referenced from anywhere.
 *
 * @param target
 * @param propertyKey
 */
export function Required(target: any, propertyKey: string): void {
	Object.defineProperty(target, propertyKey, {
		configurable: true,
		get() {
			throw new Error(`Property ${propertyKey} is required!`);
		},
		set(value: any) {
			if (!value && value !== 0 && value !== false) {
				return;
			}

			Object.defineProperty(target, propertyKey, {
				value,
				configurable: true,
				enumerable: true,
				writable: true,
			});
		},
	});
}
