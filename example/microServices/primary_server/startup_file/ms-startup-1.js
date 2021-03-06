var config = {
  managementPassword: 'keepThisSecret!',
  serverName: 'New QEWD Server',
  port: 8080,
  poolSize: 2,
  database: {
    type: 'gtm'
  },
  jwt: {
    secret: 'someSecret123'
  },
  u_services: {
    destinations: {
      login_service: {
        host: 'http://192.168.1.121:8080',  // *** change this to the IP address of your Micro-Service server
        application: 'login-micro-service'
      }
    },
    routes: [
      {
        path: '/api/login',
        method: 'POST',
        destination: 'login_service'
      }
    ]
  }
};
var routes = [
  {
    path: '/api',
    module: 'myLocalServices',
    errors: {
      notfound: {
        text: 'Resource Not Recognised',
        statusCode: 404
      }
    }
  }
];
var qewd = require('qewd').master;
var q = qewd.start(config, routes);
