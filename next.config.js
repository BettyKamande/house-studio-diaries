require("dotenv").config();

module.exports = {
  distDir: 'build',
  experimental: {
    workerThreads: false,
    cpus: 2
  }
};