var https = require('https');
var optionsget = {
    host : 'google.com',
    method : 'GET'
};
var reqGet = https.request(optionsget, function(res) {
  console.log("statusCode: ", res.statusCode);
  res.on('data', function(d) {
      console.info('GET result:\n');
      process.stdout.write(d);
      console.info('\n\nCall completed');
  });
});
reqGet.end();
reqGet.on('error', function(e) {
  console.error(e);
});



