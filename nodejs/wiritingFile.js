const fs = require('fs');

const content = 'Some content!';

fs.writeFile('./demo.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});



const content2 = 'Some content!';

try {
  fs.writeFileSync('./demo.txt', content2);
  // file written successfully
} catch (err) {
  console.error(err);
}
