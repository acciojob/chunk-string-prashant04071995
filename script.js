function stringChop(str, size) {
  if (!str) {
    return [];
  }

  const chunks = [];

  for (let i = 0; i < str.length; i += size) {
    const chunk = str.substr(i, size);
    chunks.push(chunk);
  }

  return chunks;
}
  
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
