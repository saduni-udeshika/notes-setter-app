// This middleware is used to protect routes

const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
   // since this is a middleware we have to use next as a paramater
   let token;

   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Bearer Token is a security token with the property that any party in possession of the token (a “bearer”)
      try {
         // Get token from header
         token = req.headers.authorization.split(' ')[1]; // splitting and just keep the token and remove the string 'bearer'

         // Verify token
         const decoded = jwt.verify(token, process.env.JWT_SECRET);

         // Get user from the token
         req.user = await User.findById(decoded.id).select('-password');

         next();
      } catch (error) {
         console.log(error);
         res.status(401);
         throw new Error('Not authorized');
      }
   }

   if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
   }
});

module.exports = { protect };
