var nock = require('nock'),
  vlc = require('../lib')();

vlc._base = 'http://vlc-api.test';

var assert = require("assert");
describe('vlc-api', function(){
  it('should change to next without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_next')
      .reply(200);
    vlc.status.next(done);
  })
  it('should change to previous without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_previous')
      .reply(200);
    vlc.status.previous(done);
  })
  it('should pause without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_pause')
      .reply(200);
    vlc.status.pause(done);
  })
})