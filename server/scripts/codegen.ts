const fs = require('fs');
const path = require('path');
import prettier from 'prettier';
import { generateSpecAsync, getSpecInfoAsync } from '../typescript-to-swagger/src';

getSpecInfoAsync({ dir: ['./src/controller', './src/enum', './src/interfaces'] }).then((res) => {
    // console.log('MODEL', JSON.stringify(res, null, 2));
});

generateSpecAsync({ dir: ['./src/controller', './src/enum', './src/interfaces'] }).then((res) => {
    const spec = JSON.stringify(res, null, 2);
    // console.log('SPEC', spec);

    fs.writeFileSync(path.resolve('../spec.json'), spec);
    console.log('generate spec file success ', '../spec.json');
});
