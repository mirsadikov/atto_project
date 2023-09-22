const express = require('express');
const {
  getCustomerProfile,
  updateCustomer,
  getOtpFromSMS,
  registerCustomer,
  getCustomerLoginType,
  loginCustomer,
  getCustomerPhoto,
} = require('../controllers/customer');
const router = express.Router();

router.get('/profile', getCustomerProfile);
router.post('/register', registerCustomer);
router.post('/getlogin', getCustomerLoginType);
router.post('/login', loginCustomer);
router.put('/profile', updateCustomer);
router.get('/photo/:file', getCustomerPhoto);

// FAKE OTP GETTER
router.get('/otp/recievebysms/:phone', getOtpFromSMS);

module.exports = router;
