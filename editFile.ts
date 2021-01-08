// reading file
// const decoder = new TextDecoder('utf-8')
// const data = await Deno.readFile('README.txt')
// console.log(decoder.decode(data))
// reading file other example
const data = await Deno.readTextFile('readme.txt')
console.log(data)

// writing file
// const encoder = new TextEncoder();
// const text = 'hello world'
// await Deno.writeFile('readme.txt', encoder.encode(text))

const text = await Deno.writeTextFile('readme.txt', "hello world")

// renaming file and removing file
// await Deno.rename('readme.txt', 'README.txt')
// await Deno.remove('readme.txt')