less-plugin-bootstrap3
========================

Imports [Bootstrap](http://getbootstrap.com) `LESS` code before your custom Less code.

## Usage

```js
var lessAutoprefixPlugin = new LessPluginAutoPrefix({
            browsers: [
                'Android >= 4',
                'last 3 Chrome versions',
                'last 3 Firefox versions',
                'Explorer >= 8',
                'last 3 iOS versions',
                'Opera >= 12',
                'last 3 Safari versions'
            ]
        }),
        lessBootstrapPlugin = new LessPluginBootstrap();

...

    gulp.task('build:less', function() {
        return gulp.src(srcConfig.src.styles)
            .pipe(plugins.debug({title: 'BUILD:LESS'}))
            .pipe(plugins.plumber(gulpConfig.plumber))
            .pipe(plugins.less({
                compress: true,
                plugins: [
                    lessBootstrapPlugin,
                    lessAutoprefixPlugin
                ]
            }))
            .pipe(plugins.concat('main.css'))
            .pipe(plugins.cleanCss(gulpConfig.cssClean, function(cssFile) {
                console.log(cssFile.name + ': [' + cssFile.stats.originalSize + '] => [' + cssFile.stats.minifiedSize + '].min');
            }))
            .pipe(plugins.rename(function(path) {
                path.extname = '.min.css';
            }))
            .pipe(gulp.dest(srcConfig.dest.styles))
            .pipe(browserSync.stream());
    });
```


## Notes

- This is fork from `bassjobsen/less-plugin-bootstrap`.


## License

[Apache License v2](https://github.com/WuglyakBolgoink/less-plugin-bootstrap3/blob/master/LICENSE)
