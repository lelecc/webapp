// 入口文件

// 导入模块
const cats = require('./cats');

import {a, s1} from './modules';

require('../less/base.less');
require('../style/index.css');

// 使用模块
console.log(cats,a,s1);
