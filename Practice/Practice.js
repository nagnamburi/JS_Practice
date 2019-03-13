var names = ['Foo', 'Bar', 'Baz'];
console.log(names);         // ["Foo", "Bar", "Baz"]
console.log(names[0]);      // "Foo"

names[3] = 'Moo';
console.log(names[3]);      // "Moo"
console.log(names.length);  // 4

names[6] = "Other";
console.log(names.length);  // 7
console.log(names[4]);      // undefined
console.log(names[5]);
console.log(names[6]);      // "Other"
console.log(names);         // [ "Foo", "Bar", "Baz", "Moo", <2 empty slots>, "Other" ]
names.push("123");
console.log(names);
names[3] = 'Moo1';
console.log(names);
names.shift();
console.log(names);
names.unshift("hello");
console.log(names);
names[0] = ("hi");
console.log(names);

entries = [
    ["a", 1],
    ["b", 2],
    ["c", 3,2]
]

console.log(entries[2][2]);

