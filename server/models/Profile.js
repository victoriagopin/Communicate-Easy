const {Schema, model, Types} = require('mongoose');

const profileSchema = new Schema({
    fullName : {
        type : String,
        required: true
    },
    occupation : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    about : {
        type : String,
        required : true
    },
    owner: {
        type : Types.ObjectId,
        ref: 'User'
    }
});

const Profile = model('Profile', profileSchema);

module.exports = {Profile};