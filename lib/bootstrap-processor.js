(function() {
    'use strict';

    var path = require('path');

    module.exports = function() {
        function BootstrapProcessor(options) {
        }

        BootstrapProcessor.prototype = {
            process: function(src, extra) {
                try {
                    var _bsPath = path.resolve(__dirname, '../../') + '/bootstrap/less/bootstrap.less',
                        injected = '@import "' + _bsPath + '";\n',
                        ignored = extra.imports.contentsIgnoredChars,
                        fileInfo = extra.fileInfo;

                    ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0;
                    ignored[fileInfo.filename] += injected.length;

                    return injected + src;
                } catch (e) {
                    console.error('Bootstrap path not found');
                }
            }
        };

        return BootstrapProcessor;
    };
})();
