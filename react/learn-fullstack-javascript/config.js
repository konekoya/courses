const env = process.env;

const config = {
  port: env.PORT || 9000,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};

export default config;
