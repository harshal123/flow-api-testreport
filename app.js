var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt78acde37e518c91a')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('blt4e48462da7daeda4')

var extensionSDK = app.Extension({
	secret_key     : 'blt267661c8839ef78b',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


