export const getIcon = name => {
  const _1d = require('./01d.png');
  const _1n = require('./01n.png');
  const _2d = require('./02d.png');
  const _2n = require('./02n.png');
  const _3d = require('./03d.png');
  const _3n = require('./03n.png');
  const _4d = require('./04d.png');
  const _4n = require('./04n.png');
  const _9d = require('./09d.png');
  const _9n = require('./09n.png');
  const _10d = require('./10d.png');
  const _10n = require('./10n.png');
  const _11d = require('./11d.png');
  const _11n = require('./11n.png');
  const _13d = require('./13d.png');
  const _13n = require('./13n.png');
  const _50d = require('./50d.png');
  const _50n = require('./50n.png');
  switch (name) {
    case '01d':
      return _1d;
    case '02d':
      return _2d;
    case '03d':
      return _3d;
    case '04d':
      return _4d;
    case '09d':
      return _9d;
    case '10d':
      return _10d;
    case '11d':
      return _11d;

    case '13d':
      return _13d;
    case '50d':
      return _50d;
    case '01d':
      return _1n;
    case '02n':
      return _2n;
    case '03n':
      return _3n;
    case '04n':
      return _4n;
    case '09n':
      return _9n;
    case '10n':
      return _10n;
    case '11n':
      return _11n;

    case '13n':
      return _13n;
    case '50n':
      return _50n;
    default:
      return _1d;
  }
};
