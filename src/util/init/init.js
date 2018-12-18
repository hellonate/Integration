
import _ from 'lodash';
const fs = require('fs');
const  path = require('path');
function followContext(){
    const prefix = '../../';
    const sourceDir = ['api','controller','views'];
    sourceDir.forEach(dir => {
        const resolveDir = path.resolve(__dirname,`${prefix}${dir}`);
        console.log(resolveDir);
        const subItems = _.pull(fs.readdirSync(resolveDir));
        console.log(subItems);

    })
}


followContext();


