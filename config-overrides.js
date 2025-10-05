const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@Ui': 'src/components/UI',
    '@containers': 'src/containers',
    '@constants': 'src/constants',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@styles': 'src/styles',
    '@utils': 'src/utils',
    '@routes': 'src/routes',
    '@static': 'src/static',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
  })(config);
  
  return config;
};