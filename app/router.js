'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.beforeStart(async function() {
    console.log('"hello world"');
  });
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // router.get('/news', controller.news.list);
  router.resources('user', '/api/user', controller.user);
  io.of('/').route('chat', controller.chat.index);
};
