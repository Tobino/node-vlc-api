var nock = require('nock'),
  vlc = require('../lib')();

vlc._base = 'http://vlc-api.test';

var assert = require("assert");
describe('vlc-api', function(){
  it('should enqueue song without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=in_enqueue&input=http%3A%2F%2Fyoutu.be%2FYSgAc6ytFOs')
      .reply(200);
    vlc.status.enqueue('http://youtu.be/YSgAc6ytFOs',done);
  })
  it('should associate a subtitle file with the currently playing file', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=addsubtitle&val=https%3A%2F%2Fwww.youtube.com%2Frobots.txt')
      .reply(200);
    vlc.status.addSubtitle('https://www.youtube.com/robots.txt',done);
  })
  it('should play song without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=in_play&input=http%3A%2F%2Fyoutu.be%2FYSgAc6ytFOs')
      .reply(200);
    vlc.status.play('http://youtu.be/YSgAc6ytFOs',done);
  })
  it('should go to this song on the playlist without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_play&id=1')
      .reply(200);
    vlc.status.goto(1,done);
  })
  it('should play last active item on the playlist without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_play&id=')
      .reply(200);
    vlc.status.goto(done);
  })
  it('should toggle pause without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_pause')
      .reply(200);
    vlc.status.pause(done);
  })
  it('should change to next without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_next')
      .reply(200);
    vlc.status.next(done);
  })
  it('should delete this song on the playlist without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_delete&input=1')
      .reply(200);
    vlc.status.delete(1,done);
  })
  it('should change to previous without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_previous')
      .reply(200);
    vlc.status.previous(done);
  })
  it('should set audio delay without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=audiodelay&val=30')
      .reply(200);
    vlc.status.audioDelay(30,done);
  })
  it('should set subtitle delay without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=subdelay&val=30')
      .reply(200);
    vlc.status.subtitleDelay(30,done);
  })
  it('should change ratio without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=aspectratio&val=16%3A9')
      .reply(200);
    ratio ='16:9';
    vlc.status.aspectRatio(ratio,done);
  })
  it('should change ratio array without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=aspectratio&val=16%3A9')
      .reply(200);
    ratio =[16,9];
    vlc.status.aspectRatio(ratio,done);
  })
  it('should change ratio width,height without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=aspectratio&val=16%3A9')
      .reply(200);
    ratio.width =16;
    ratio.height =9;
    vlc.status.aspectRatio(ratio,done);
  })
  it('should change ratio w,h without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=aspectratio&val=16%3A9')
      .reply(200);
    ratio.w =16;
    ratio.h =9;
    vlc.status.aspectRatio(ratio,done);
  })
  it('should sort by name without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_sort&id=0&val=1')
      .reply(200);
    vlc.status.sort('name',done);
  })
  it('should sort by author forward without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_sort&id=0&val=3')
      .reply(200);
    vlc.status.sort('author','forward',done);
  })
  it('should sort by track reverse without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_sort&id=1&val=7')
      .reply(200);
    vlc.status.sort('track','reverse',done);
  })
  it('should turn on service discovery modules without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=pl_sd&val=podcast')
      .reply(200);
    vlc.status.discovery('podcast',done);
  })
  it('should set volume without error', function(done){
    var scope = nock('http://vlc-api.test')
      .get('/requests/status.json?command=volume&val=100')
      .reply(200);
    vlc.status.volume(100,done);
  })
})