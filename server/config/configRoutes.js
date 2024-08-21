const {userRouter} = require('../routes/user')
const {profileRouter} = require('../routes/profile')

function configRoutes(app){
    app.use(userRouter);
    app.use(profileRouter);
}

module.exports = {configRoutes}