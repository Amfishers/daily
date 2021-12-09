interface Cat {
	name: string;
	run(): void;
}

interface Fish {
	name: string;
	swim(): void;
}

function getName(animal: Cat | Fish): string {
	return animal.name; // 除了 name 其他方法都不能使用，因为联合类型.方法 只能使用公共方法
}


// 将 any 断言为一个具体的类型§

function getCacheData(key: string): any {
	return (window as any)[key];
}

interface Cat {
	name: string;
	run(): void;
}

const tom = getCacheData('tom') as Cat;
console.log('tom', tom)

