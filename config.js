
'use strict';

require('dotenv').config();

module.exports.DATABASE_URL = process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        'mysql://localhost/test';

module.exports.SECRET = process.env.SECRET
module.exports.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
