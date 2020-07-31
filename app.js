const fs = require('fs');
const workFile01 = 'notes.txt';

fs.writeFileSync(workFile01,'My name is... what?');

fs.appendFileSync(workFile01,'\nAnd that would be another line...yay!!');
