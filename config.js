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


  poppins.couldYouPlease('poppins-check-commit');

  poppins.plugins.checkCommit.check = function(data) {
    console.log('~~~~~~~~~checking commit~~~~~~~');
    console.log(data);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    return false;
  };


  poppins.couldYouPlease('poppins-label');


  poppins.plugins.labels = {

    // tag even numbered issues
    'even': function (issue) {
      return issue.number % 2 === 0;
    },
    'random': function(issue) {
      console.log('random label', issue);
      return Math.random() > .5;
    }
  };


  poppins.on('issueOpened', function(data) {
    console.log('-----------issueOpened---------');
    console.log(data);
    console.log('-------------------------------');
  });

  // load plugins from the cwd
  // poppins.theUsualPlease();
};
