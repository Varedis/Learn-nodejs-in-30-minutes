var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    first_name: String,
    last_name: String,
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next) {
    var user = this;

    if(!user.created_at) {
        user.created_at = new Date();
    }
    user.updated_at = new Date();

    next();
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};