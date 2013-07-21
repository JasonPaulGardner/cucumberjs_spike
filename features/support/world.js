Q = require('Q')
var World = function World(callback) {
  var self = this;
  self.phantom = require('phantom-proxy');
  self.proxy;
  self.visit = function (url, callbackFn) {
			self.proxy.page.open(url, function (result) {
                callbackFn.call(self, !result);
            });
        };
  
  self.phantom.create({}, function(proxy) {
      self.proxy = proxy;
	  proxy.page.set('viewportSize', { width:320, height:480 }, function (result) {
          callback();
      });
  });
  
};
exports.World = World;
