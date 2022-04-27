import createInstance from './instance.js';

/**
 * 读取配置并渲染 Message
 * @param {Object} typeCfg 类型配置
 * @param {Object/String} cfg 自定义配置
 */
function renderMsg(typeCfg = {}, cfg = '') {
  // 允许直接传入消息内容，因此要判断传入的 cfg 类型
  const isContent = typeof cfg === 'string';

  // 整合自定义配置
  cfg = isContent
    ? { content: cfg }
    : cfg;

  const config = Object.assign({}, typeCfg, cfg); // 合并配置

  const {
    icon,
    type = 'info',
    content = '',
    duration = 3000,
    close = false
  } = config;

  // 创建实例
  return createInstance({
    icon,
    type,
    content,
    duration,
    close
  });
}


export default {
  // 文本消息
  info(cfg = '') {
    const textCfg = {
      type: 'info',
      icon: 'shared-info'
    };

    return renderMsg(textCfg, cfg);
  },
  // 警告消息
  warn(cfg = '') {
    const textCfg = {
      type: 'warn',
      icon: 'shared-warn'
    };

    return renderMsg(textCfg, cfg);
  },
  // 成功提示
  success(cfg = '') {
    const successCfg = {
      type: 'success',
      icon: 'shared-success'
    };

    return renderMsg(successCfg, cfg);
  },
  // 错误提示
  error(cfg = '') {
    const errorCfg = {
      type: 'error',
      icon: 'shared-error'
    };

    return renderMsg(errorCfg, cfg);
  },
};
