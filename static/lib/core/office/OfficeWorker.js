(function(a){function n(b,a){return fetch(b).then(function(b){console.log("Pos 1");if(200!==b.status)throw Error("Response failed with code "+b.status);console.log("Pos 2");console.log(b);console.log("Pos 2a");var d=!1,c=new ReadableStream({start:function(c){function p(){if(!d)return console.log("Pos 4"),e.read().then(function(b){d=b.done;b=b.value;d?(console.log("Done"),(b=a.End())?c.enqueue(b):c.close()):(b=a.GetNextChunk(b),console.log("Enqueue"),b&&c.enqueue(b))}).then(p)}console.log("Pos 3");
var B=b.body;console.log("Pos 3z"+B);var e=B.getReader();p()}});console.log("Pos 2b");return new Response(c,{headers:{"content-type":"application/wasm"}})})}var g=function(b){if("string"===typeof b){for(var a=new Uint8Array(b.length),f=b.length,c=0;c<f;c++)a[c]=b.charCodeAt(c);return a}return b},c=function(b){if("string"!==typeof b){for(var a="",f=0,c=b.length,d;f<c;)d=b.subarray(f,f+1024),f+=1024,a+=String.fromCharCode.apply(null,d);return a}return b},e=!1,l=function(b,w){e||(importScripts(a.basePath+
"external/decode.min.js"),e=!0);var f=self.BrotliDecode(g(b));return w?f:c(f)},k=function(){this.remainingDataArrays=[]};k.prototype={processRaw:function(b){return b},processBrotli:function(b){this.remainingDataArrays.push(b);return null},GetNextChunk:function(b){this.decodeFunction||(this.decodeFunction=0===b[0]&&97===b[1]&&115===b[2]&&109===b[3]?this.processRaw:this.processBrotli);return this.decodeFunction(b)},End:function(){if(this.remainingDataArrays.length){for(var b=this.arrays,a=0,f=0;f<b.length;++f)a+=
b[f].length;for(var a=new Uint8Array(a),c=0,f=0;f<b.length;++f){var d=b[f];a.set(d,c);c+=d.length}return l(a,!0)}return null}};var h=!1,m=function(b,d){h||(importScripts(a.basePath+"external/rawinflate.js",a.basePath+"external/pako_inflate.min.js"),h=!0);var f=10;if("string"===typeof b){if(b.charCodeAt(3)&8){for(;0!==b.charCodeAt(f);++f);++f}}else if(b[3]&8){for(;0!==b[f];++f);++f}if(d)return b=g(b),b=b.subarray(f,b.length-8),a.pako.inflate(b,{windowBits:-15});b=c(b);b=b.substring(f,b.length-8);return a.RawDeflate.inflate(b)},
q=function(b,a){return a?b:c(b)},u=function(b){var a=!b.shouldOutputArray,f=new XMLHttpRequest;f.open("GET",b.url,b.isAsync);var d=a&&f.overrideMimeType;f.responseType=d?"text":"arraybuffer";d&&f.overrideMimeType("text/plain; charset=x-user-defined");f.send();var e=function(){Date.now();var p;p=d?f.responseText:new Uint8Array(f.response);p.length<b.compressedMaximum?(p=b.decompressFunction(p,b.shouldOutputArray),console.warn("There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See http://www.pdftron.com/kb_content_encoding for instructions on how to resolve this.")):
a&&(p=c(p));return p},h;if(b.isAsync)h=new Promise(function(p,a){f.onload=function(){200===this.status?p(e()):a("Download Failed "+b.url)};f.onerror=function(){a("Network error occurred "+b.url)}});else{if(200===f.status)return e();throw Error("Failed to load "+b.url);}return h},t=function(b){var a=b.lastIndexOf("/");-1===a&&(a=0);var d=b.slice(a).replace(".",".br.");return b.slice(0,a)+d},d=function(b,a){var d=b.lastIndexOf("/");-1===d&&(d=0);var c=b.slice(d).replace(".",".gz.");a.url=b.slice(0,
d)+c;a.decompressFunction=m;return u(a)},r=function(b,a){a.url=t(b);a.decompressFunction=l;return u(a)},v=function(b,a){a.url=b;a.decompressFunction=q;return u(a)},y=function(b,a,d,c){return b["catch"](function(b){console.warn(b);return c(a,d)})},z=function(b,a,d){var c;if(d.isAsync){var e=a[0](b,d);for(c=1;c<a.length;++c)e=y(e,b,d,a[c]);return e}for(c=0;c<a.length;++c)try{return a[c](b,d)}catch(h){console.warn(h.message)}throw Error("");};a.getBrotliUrl=t;a.loadURLWithBrotliPriority=function(b,a,
c,e){var h={};h.compressedMaximum=a;h.isAsync=c;h.shouldOutputArray=e;return z(b,[r,d,v],h)};a.loadURLWithGzipPriority=function(a,c,e,h){var k={};k.compressedMaximum=c;k.isAsync=e;k.shouldOutputArray=h;return z(a,[d,r,v],k)};a.loadWasmBrotliStream=function(a){return n(a,new k)}})("undefined"===typeof window?this:window);(function(a){var n=a._trnDebugMode||a._trnLogMode,g=a._logFiltersEnabled?a._logFiltersEnabled:{};a.utils=a.utils?a.utils:{};a.utils.warn=function(a,e){e||(e=a,a="default");n&&g[a]&&console.warn(a+": "+e)};a.utils.log=function(a,e){e||(e=a,a="default");n&&g[a]&&console.log(a+": "+e)};a.utils.error=function(a){n&&console.error(a);throw Error(a);};a.info=function(a,e){};a.warn=function(c,e){a.utils.warn(c,e)};a.error=function(c){a.utils.error(c)}})("undefined"===typeof window?this:window);(function(a){function n(a){return new Promise(function(e,g){var k=indexedDB.open("wasm-cache",a);k.onerror=g.bind(null,"Error opening wasm cache database");k.onsuccess=function(){e(k.result)};k.onupgradeneeded=function(a){var c=k.result;c.objectStoreNames.contains("wasm-cache")&&(console.log("Clearing out version "+a.oldVersion+" wasm cache"),c.deleteObjectStore("wasm-cache"));console.log("Creating version "+a.newVersion+" wasm cache");c.createObjectStore("wasm-cache")}})}function g(a,e){return new Promise(function(g,
k){var h=a.transaction(["wasm-cache"]).objectStore("wasm-cache").get(e);h.onsuccess=function(a){h.result?g(h.result):k("Module "+e+" was not found in wasm cache")};h.onerror=k.bind(null,"Error getting wasm module "+e)})}a.isWasmCached=function(a,e){return n(a).then(function(a){return g(a,e).then(function(){return!0})})["catch"](function(){return!1})};a.instantiateCachedURL=function(c,e,l,k){function h(a,c){var d=a.transaction(["wasm-cache"],"readwrite").objectStore("wasm-cache").put(c,e);d.onerror=
function(a){console.log("Failed to store in wasm cache: "+a)};d.onsuccess=function(a){console.log("Successfully stored "+e+" in wasm cache")}}function m(c){q=q||Date.now();return c?fetch(a.getBrotliUrl(e)).then(function(a){return WebAssembly.instantiateStreaming(a,l)})["catch"](function(a){return m(!1)}):a.loadURLWithBrotliPriority(e,k,!0,!0).then(function(a){Date.now();return WebAssembly.instantiate(a,l)})}var q;return n(c).then(function(a){return g(a,e).then(function(a){return WebAssembly.instantiate(a,
l)},function(c){return m(!!WebAssembly.instantiateStreaming).then(function(d){try{h(a,d.module)}catch(c){}return d.instance})})},function(a){console.log(a);return m().then(function(a){return a.instance})})}})(this);(function(a){a.getWasmVersion=function(){return 23}})("undefined"===typeof window?this:window);(function(a){a.Uint8ClampedArray||(a.Uint8ClampedArray=a.Uint8Array);"undefined"===typeof a.crypto&&(a.crypto={getRandomValues:function(a){for(var c=0;c<a.length;c++)a[c]=256*Math.random()}});var n=!(!self.WebAssembly||!self.WebAssembly.validate),g=/^((?!chrome|android).)*safari/i.test(a.navigator.userAgent),c=/Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(a.navigator.userAgent),e=-1<a.navigator.userAgent.indexOf("Edge/16")||-1<a.navigator.userAgent.indexOf("MSAppHost"),l=function(a){var c=this;
this.promise=a.then(function(a){c.response=a;c.status=200})};l.prototype={addEventListener:function(a,c){this.promise.then(c)}};a.loadCompiledBackend=function(k,h,m){if(!n||m||e||g||c){m=loadURLWithGzipPriority((Module.asmjsPrefix?Module.asmjsPrefix:"")+k+".js.mem",h[".js.mem"],!1);var q=loadURLWithGzipPriority((Module.memoryInitializerPrefixURL?Module.memoryInitializerPrefixURL:"")+k+".mem",h[".mem"],!0,!0);Module.memoryInitializerRequest=new l(q)}else Module.instantiateWasm=function(c,e){return self.instantiateCachedURL(a.getWasmVersion(),
k+"Wasm.wasm",c,h["Wasm.wasm"]).then(function(a){e(a)})},m=loadURLWithBrotliPriority(k+"Wasm.js.mem",h["Wasm.js.mem"],!1,!1);eval.call(self,m)}})("undefined"===typeof window?this:window);(function(a){function n(){for(var a=0;a<x.length;a++)x[a][0](x[a][1]);x=[];A=!1}function g(a,b){x.push([a,b]);A||(A=!0,C(n,0))}function c(a,b){function c(a){k(b,a)}function d(a){m(b,a)}try{a(c,d)}catch(e){d(e)}}function e(a){var c=a.owner,d=c.state_,c=c.data_,e=a[d];a=a.then;if("function"===typeof e){d=b;try{c=e(c)}catch(f){m(a,f)}}l(a,c)||(d===b&&k(a,c),d===w&&m(a,c))}function l(a,b){var c;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(b&&("function"===
typeof b||"object"===typeof b)){var d=b.then;if("function"===typeof d)return d.call(b,function(d){c||(c=!0,b!==d?k(a,d):h(a,d))},function(b){c||(c=!0,m(a,b))}),!0}}catch(e){return c||m(a,e),!0}return!1}function k(a,b){a!==b&&l(a,b)||h(a,b)}function h(a,b){a.state_===y&&(a.state_=z,a.data_=b,g(u,a))}function m(a,b){a.state_===y&&(a.state_=z,a.data_=b,g(t,a))}function q(a){var b=a.then_;a.then_=void 0;for(a=0;a<b.length;a++)e(b[a])}function u(a){a.state_=b;q(a)}function t(a){a.state_=w;q(a)}function d(a){if("function"!==
typeof a)throw new TypeError("Promise constructor takes a function argument");if(!1===this instanceof d)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[];c(a,this)}a.createPromiseCapability=function(){var a={},b=new d(function(b,c){a.resolve=b;a.reject=c});a.promise=b;return a};var r=a.Promise,v=r&&"resolve"in r&&"reject"in r&&"all"in r&&"race"in r&&function(){var a;new r(function(b){a=b});return"function"===
typeof a}();"undefined"!==typeof exports&&exports?(exports.Promise=v?r:d,exports.Polyfill=d):"function"==typeof define&&define.amd?define(function(){return v?r:d}):v||(a.Promise=d);var y="pending",z="sealed",b="fulfilled",w="rejected",f=function(){},C="undefined"!==typeof setImmediate?setImmediate:setTimeout,x=[],A;d.prototype={constructor:d,state_:y,then_:null,data_:void 0,then:function(a,c){var d={owner:this,then:new this.constructor(f),fulfilled:a,rejected:c};this.state_===b||this.state_===w?g(e,
d):this.then_.push(d);return d.then},"catch":function(a){return this.then(null,a)}};d.all=function(a){if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.all().");return new this(function(b,c){function d(a){f++;return function(c){e[a]=c;--f||b(e)}}for(var e=[],f=0,g=0,h;g<a.length;g++)(h=a[g])&&"function"===typeof h.then?h.then(d(g),c):e[g]=h;f||b(e)})};d.race=function(a){if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.race().");
return new this(function(b,c){for(var d=0,e;d<a.length;d++)(e=a[d])&&"function"===typeof e.then?e.then(b,c):b(e)})};d.resolve=function(a){return a&&"object"===typeof a&&a.constructor===this?a:new this(function(b){b(a)})};d.reject=function(a){return new this(function(b,c){c(a)})}})("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);(function(a){ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(a,g){void 0===a&&(a=0);void 0===g&&(g=this.byteLength);a=Math.floor(a);g=Math.floor(g);0>a&&(a+=this.byteLength);0>g&&(g+=this.byteLength);a=Math.min(Math.max(0,a),this.byteLength);g=Math.min(Math.max(0,g),this.byteLength);if(0>=g-a)return new ArrayBuffer(0);var c=new ArrayBuffer(g-a),e=new Uint8Array(c),l=new Uint8Array(this,a,g-a);e.set(l);return c})})(this);var tikTokStart=null;
(function(a){function n(a){a=c(a);m(a.msg)}function g(){t=function(){}}function c(a){var c=[];return{resource_array:c,msg:JSON.stringify(a.data,function(a,d){if("object"===typeof d){var e=null;d instanceof Uint8Array?e=d:d instanceof ArrayBuffer&&(e=new Uint8Array(d));if(e){var b=q(e.length),g=u(b);g&&(new Uint8Array(Module.HEAPU8.buffer,g,e.length)).set(e);c.push(b);return{__trn_res_id:b}}}return d})}}a.basePath="../";var e=a.officeWorkerPath||"";a.workerBasePath&&(a.basePath=a.workerBasePath);importScripts(a.basePath+
"external/Promise.js");var l=[];onmessage=function(a){l||(l=[]);l.push(a)};a.ContinueFunc=function(a){t("ContinueFunc called");setTimeout(function(){onmessage({data:{action:"continue"}})},a)};var k=function(a){var c={};decodeURIComponent(a.slice(1)).split("&").forEach(function(a){a=a.split("=",2);c[a[0]]=a[1]});return c}(a.location.search),h;k.pdfWorkerPath&&(h=k.pdfWorkerPath);a.Module={memoryInitializerPrefixURL:h,onRuntimeInitialized:function(){console.log("on ready");t||g();var c=Date.now()-tikTokStart;
a.utils.log("load","time duration from start to ready: "+JSON.stringify(c));m=Module.cwrap("TRN_OnMessage",null,["string"]);q=Module.cwrap("TRN_CreateBufferResource","number",["number"]);u=Module.cwrap("TRN_GetResourcePointer","number",["number"]);t("OnReady called");onmessage=n;Module._TRN_InitWorker();for(c=0;c<l.length;++c)onmessage(l[c]);l=null},fetchSelf:function(){tikTokStart=Date.now();a.loadCompiledBackend(e+"WebOfficeWorker",{"Wasm.wasm":5E6,"Wasm.js.mem":1E5,".js.mem":5E6,".mem":3E6},!!navigator.userAgent.match(/Edge/i));
console.log("end of fetch self")},noExitRuntime:!0};var m,q,u,t;a.Module.fetchSelf()})("undefined"===typeof window?this:window);
