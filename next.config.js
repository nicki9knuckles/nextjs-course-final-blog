const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nickBolger',
        mongodb_password: 'WMKiZ9AQPsqcl0mc',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'vida-en-espanol-dev',
      },
    }
  }

  return {
    env: {
      mongodb_username: 'nickBolger',
      mongodb_password: 'WMKiZ9AQPsqcl0mc',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'vida-en-espanol',
    },
  }
}
