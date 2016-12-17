(function() {
    'use strict';

    var getBootstrapProcessor = require('./bootstrap-processor'),
        usage = require('./usage'),
        parseOptions = require('./parse-options');

    function LessPluginBootstap3(options) {
        this.options = options;
    }

    LessPluginBootstap3.prototype = {
        install: function(less, pluginManager) {
            var BootstrapProcessor = getBootstrapProcessor();
            pluginManager.addPreProcessor(new BootstrapProcessor(this.options));
        },
        printUsage: function() {
            usage.printUsage();
        },
        setOptions: function(options) {
            this.options = parseOptions(options);
        },
        minVersion: [2, 4, 0]
    };

    module.exports = LessPluginBootstap3;
})();
