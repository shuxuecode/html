const fs = require('fs');

fs.readFile('./demo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


try {
  const data = fs.readFileSync('./demo.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
