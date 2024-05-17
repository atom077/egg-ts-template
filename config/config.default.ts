import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1715395345235_135';

  config.security = {
    csrf: { enable: false },
  };

  // add your egg config in here
  config.middleware = [];

  config.mongoose = {
    url: process.env.MONGODB || 'mongodb://localhost:27018/egg-template',
    options: {
      directConnection: true,
    },
  };

  // add your special config in here
  // const bizConfig = {
  //   sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  // };

  // the return config will combines to EggAppConfig
  return config;
};
