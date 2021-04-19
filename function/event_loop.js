const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third');

bar();
foo();
baz();