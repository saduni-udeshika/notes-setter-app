const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      firstName: {
         type: String,
         required: [true, 'Please add a firstname'],
      },
      lastName: {
         type: String,
         required: [true, 'Please add a lastname'],
      },
      email: {
         type: String,
         required: [true, 'Please add an email'],
         unique: true,
      },
      dateOfBirth: {
         type: Date,
         required: [true, 'Please add a birthday'],
      },
      number: {
         type: Number,
         required: [true, 'Please add a contact number'],
      },
      status: {
         type: Boolean,
         required: [true, 'Please add status'],
      },
      password: {
         type: String,
         required: [true, 'Please add a password'],
      },
      accountType: {
         type: String,
         required: [true, 'Please add a type'],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('User', userSchema);
