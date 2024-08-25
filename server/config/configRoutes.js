const {userRouter} = require('../routes/user')
const {profileRouter} = require('../routes/profile');
const { chatRouter } = require('../routes/chat');

function configRoutes(app){
    app.use(userRouter);
    app.use(profileRouter);
    app.use(chatRouter)
}

module.exports = {configRoutes}