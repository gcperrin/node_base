/**
 * Application configuration, matches to NODE_ENV passed
 * through starting the application
 *
 * Each key becomes part of the env to be used throughout the application
 */
const config = {
  name: 'CORE',
  namespace: '__CORE__',
  development: {
    host: 'localhost',
    port: '9089',
    sessionDb: 11,
    dbName: 'test',
    dbUser: 'test',
    dbPass: 'test',
  },
  staging: {
    host: 'localhost',
    port: '9090',
    sessionDb: 12,
  },
  production: {
    host: 'localhost',
    port: '9091',
    sessionDb: 13,
  },
  // Sets global process.env keys from config
  setProcKeys() {
    const env = process.env.NODE_ENV;
    if (!env) {
      throw new Error('An ENV must be supplied');
    }
    Object.keys(this[env]).forEach((param) => {
      process.env[param.toUpperCase()] = (this[env][param]);
    });
    process.env.NAME = this.name;
    process.env.NAMESPACE = this.namespace;
    return process.env;
  },
};

module.exports = config;
