var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blte4edca92113f96b0')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('bltce5ddc35e7ab6341')

var extensionSDK = app.Extension({
	secret_key     : 'blte99eb16cef71855d',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


