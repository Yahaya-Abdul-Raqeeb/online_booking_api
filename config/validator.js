const yup = require("yup");

function validate(data) {
    const userSchema = yup.object().shape({
        username: yup.string().require("username can't be null").min(3).max(20),
        email: yup.string().require("email can't be null").min(3).max(50),
        password: yup.string().require("password can't be null").min(8).max(20),

    });

    return userSchema.validate(data);
}

module.exports = validate;