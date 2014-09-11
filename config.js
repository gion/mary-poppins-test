module.exports = function (poppins) {
  poppins.config = {
    // Github repo to watch
    // https://github.com/myname/myrepo
    target: {
      user: 'gion',
      repo: 'mary-poppins-test'
    },

    // Credentials for user who leaves comments, etc.
    // You may want to load these from a seperate file like `config-credentials.js`, and
    // add this file to your `.gitignore` list
    login: require('./credentials.json'),

    // port for poppins to listen on and URL for Github to ping
    // hook: {
    //   url: 'http://smartdeploy.projects-directory.com/mary-poppins/hook.php',
    //   port: 80
    // }
    hook: {
      url: 'http://192.168.0.10:9009',
      port: 9009
    }
  };


  poppins.couldYouPlease('poppins-pr-checklist');

  poppins.plugins.prChecklist.greeting = 'Hello';
  poppins.plugins.prChecklist.checks = [
    { 
      message: 'Foo', 
      condition: function (data) { 
        return false; 
      }
    }
  ];
  poppins.plugins.prChecklist.closing = 'Farewell';

  // load plugins from the cwd
  // poppins.theUsualPlease();
};
