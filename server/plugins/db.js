module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("连接成功")
    ).catch(() => console.log("连接失败"))
}