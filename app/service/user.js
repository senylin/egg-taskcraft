'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async findUser(query) {
        const user = await this.ctx.model.User.findOne(query);
        return user;
    }
    async createUser(params) {
        const user = new this.ctx.model.User({
            userName: params.userName,
            password: params.password,
            phoneNumber: params.phoneNumber,
            role: [],
            email: params.email
        })
        return this.ctx.model.User.create(user);
    }
    async updateUser(params) {
        const update = await this.ctx.model.User.findOne({ id:params.id});
        update.userName = params.userName;
        update.password = params.password;
        update.phoneNumber = params.phoneNumber;
        update.role = params.role;
        update.email = params.email;
        const user = this.ctx.model.User.create(update);
        return user;
    }
    async deleteUser(params) {
        const del = await this.ctx.model.User.findByIdAndRemove(params.id);
        return del;
    }
}

module.exports = UserService;
