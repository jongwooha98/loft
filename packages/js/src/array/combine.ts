export function combine<T>(...arrays: T[][]): T[] {
	return arrays.reduce((combine, array) => combine.concat(array), []);
}
