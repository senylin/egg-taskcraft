'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.websocket = {
  enable: true,
  package: 'egg-socket.io',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// exports.juice = {
//   enable: true,
//   package: 'juice',
// };
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
