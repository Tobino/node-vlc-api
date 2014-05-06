# vlc-api

HTTP API client for node.js

(Yes, vlc has an http api)

[![Build Status](https://travis-ci.org/Tobino/node-vlc-api.svg?branch=master)](https://travis-ci.org/Tobino/node-vlc-api)
[![Dependency Status](https://gemnasium.com/Tobino/node-vlc-api.svg)](https://gemnasium.com/Tobino/node-vlc-api)

## Install:

    npm install vlc-api

## Example:

```js
$ node
> var vlc = require('./')();
undefined
> vlc
{ apiVersion: 
   { vlc: '2.0.1 Twoflower',
     spec: 'http://repo.or.cz/w/vlc.git/blob/HEAD:/share/lua/http/requests/README.txt' },
  _base: 'http://localhost:8080',
  status: 
   { [Function]
     enqueue: [Function],
     addSubtitle: [Function],
     play: [Function],
     goto: [Function],
     pause: [Function],
     stop: [Function],
     resume: [Function],
     next: [Function],
     previous: [Function],
     prev: [Function],
     delete: [Function],
     empty: [Function],
     audioDelay: [Function],
     subtitleDelay: [Function],
     aspectRatio: [Function],
     sort: [Function],
     random: [Function],
     loop: [Function],
     repeat: [Function],
     discovery: [Function],
     fullscreen: [Function],
     volume: [Function],
     seek: [Function],
     preamp: [Function],
     equalizer: 
      { [Function]
        enable: [Function],
        disable: [Function],
        preset: [Function] },
     title: [Function],
     chapter: [Function],
     audioTrack: [Function],
     videoTrack: [Function],
     subtitleTrack: [Function] },
  playlist: [Function],
  browse: [Function] }
> vlc.status.pause()
undefined
> vlc.status.resume()
undefined
> 

```

## Tests:

1. Run `npm test`

## License:

MIT/X11.
