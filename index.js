// local module

// const {a, add} = require('./local-1')
// const {a: a2, add: add2} = require('./local-2')

// console.log(add2(2,2,3));

// built in module 
const path = require("path")

// console.log(path.dirname('/home/md-meheraz/Dropbox/Level2 Development/M-07-node-and-expressjs-fundamental/index.js'));
// console.log(path.parse('/home/md-meheraz/Dropbox/Level2 Development/M-07-node-and-expressjs-fundamental/index.js'));
// console.log(path.join('/home/md-meheraz/Dropbox/Level2 Development/M-07-node-and-expressjs-fundamental/', 'index.js'));
console.log(path.win32('/home/md-meheraz/Dropbox/Level2 Development/M-07-node-and-expressjs-fundamental/', 'index.js'));