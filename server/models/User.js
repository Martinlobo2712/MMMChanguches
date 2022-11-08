const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, minlenght: 3, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'] },
  email: { type: String, lowercase: true , unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/, 'is invalid'] },
  password: { type: String, required: [true, "can't be blank"] },
}, {timestamps: true});

const User = mongoose.model('user', UserSchema);

module.exports = User;