
'use strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        'mysql://localhost/test';

exports.SECRET = process.env.SECRET