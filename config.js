const env = process.env;
const nodeEnv = env.NODE.ENV || 'development';

module.exports = {    //this would be export default in ES6
  port: env.PORT || 3003,
  host: env.HOST || '0.0.0.0', //to bind to any ip address
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
}
