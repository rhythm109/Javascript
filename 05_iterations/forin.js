const myObject = {
    js : 'javascript',
    cpp : 'C++',
    py : 'python',
    java : 'java'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
