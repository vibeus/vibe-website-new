/**
 * @name Config
 * @description 项目配置
 */


// 本地服务端口
module.exports.VITE_PORT = 3000;

// prefix
module.exports.API_PREFIX = '/api';

// serve
module.exports.API_BASE_URL = '/api';
module.exports.API_TARGET_URL = 'https://logistics.vibe.dev/api/';

// mock
module.exports.MOCK_API_BASE_URL = '/mock/api';
module.exports.MOCK_API_TARGET_URL = 'http://localhost:3000';

// iconfontUrl
// module.exports.ICONFONTURL = '//at.alicdn.com/t/font_3004192_9jmc1z9neiw.js'; // 去色版

// 包依赖分析
module.exports.ANALYSIS = false;

// 代码压缩
module.exports.COMPRESSION = true;

// 删除 console
module.exports.VITE_DROP_CONSOLE = false;
