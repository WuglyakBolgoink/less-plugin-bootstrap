less-plugin-bootstrap
========================

Imports [Bootstrap](http://getbootstrap.com) Less code before your custom Less code.

## lessc usage

Install..

Requires Less v2.4.0

```
npm install -g less-plugin-bootstrap
```

and then on the command line,

```
lessc file.less --bootstrap
```

to create Bootstrap compatible code run with the [Less autoprefix plugin](https://github.com/less/less-plugin-autoprefix):

```
lessc file.less --bootstrap --autoprefix="Android 2.3,Android >= 4,Chrome >= 20,Firefox >= 24,Explorer >= 8,iOS >= 6,Opera >= 12,Safari >= 6"
```



## Programmatic usage

```
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

## Browser usage

Browser usage is not supported at this time.
