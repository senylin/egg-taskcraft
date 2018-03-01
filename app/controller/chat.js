'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const ctx = this.ctx;
    console.log(ctx.args);
    const message = ctx.args[0];
    console.log('chat 控制器打印', message);
    this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}

module.exports = ChatController;
