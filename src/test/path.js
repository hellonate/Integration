const   path= require('path');
var path1 ='/usr',
    path2 = '/local';
var newPath = path.join(path1,path2);
console.log(newPath);

const path3= path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log(path3);

console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log('ext name : ' + path.extname('main.js'));




