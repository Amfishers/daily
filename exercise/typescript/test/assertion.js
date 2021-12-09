function getName(animal) {
    return animal.name; // 除了 name 其他方法都不能使用，因为联合类型.方法 只能使用公共方法
}
function getCacheData(key) {
    return global[key];
}
var tom = getCacheData('tom');
console.log('tom', tom);
