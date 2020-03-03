import debug from 'debug';

const debugName = 'koa-demo-project';

export const startLog = debug(`${debugName}:start`);
export const infoLog = debug(`${debugName}:info`);
export const errorLog = debug(`${debugName}:error`);
errorLog.color = debug.colors[5];
infoLog.color = debug.colors[2];
