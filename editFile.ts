// reading file
// const decoder = new TextDecoder('utf-8')
// const data = await Deno.readFile('README.txt')
// console.log(decoder.decode(data))
// reading file other example
const data = await Deno.readTextFile('README.md')
console.log(data)

// writing file
// const encoder = new TextEncoder();
// const text = 'hello world'
// await Deno.writeFile('README.md', encoder.encode(text))

const text = await Deno.writeTextFile('README.md', "hello world")

// renaming file and removing file
// await Deno.rename('README.md', 'README.txt')
// await Deno.remove('README.md')