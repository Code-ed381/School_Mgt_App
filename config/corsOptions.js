const whitelist = [
    'https://localhost3000', 
    'http://localhost:3003'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by Cors'))
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions;