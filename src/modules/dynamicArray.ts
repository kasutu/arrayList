export default class DynamicArray<T> {
	private data: T[];
	private size: number;
	private capacity: number;
	private copy: T[];

	constructor() {
		this.size = 0;
		this.capacity = 2;
		this.copy = Object.seal(new Array(2).fill(null));
		this.data = Object.seal(new Array(this.capacity).fill(null));
	}

	public getData(): T[] {
		return this.data;
	}

	public push(element: T): void {
		// check if full then Grow size
		if (this.size === this.capacity) {
			// resize Array to twice its current capacity
			this.capacity = this.capacity * 2;

			// copy the old contents to the new memory location
			this.copy = Array.from(this.data);
			this.data = Object.seal(new Array(this.capacity).fill(null));

			for (let i = 0; i < this.copy.length; i++) {
				this.data[i] = this.copy[i];
			}
		}

		// push items in array
		this.data[this.size] = element;
		this.size++;
	}
}
