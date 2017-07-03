# Doctor-Lookup

#### An Epicodus project in Javascript using Gulp, Bower, Sass, and HTML 06.27.17

#### **By David Wilson**

## Description

This web application will allow a user to search for doctors based on their issue.

**STARTING NEW PROJECT**

Two installations necessary for SASS:
1.  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2.  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

| Package | Installation | Variable | Task |
|:---:|:---:|:---:|:---:|
| npm |$ ```npm init``` |none needed | none |
| bower |$ ```bower init``` |none needed | none |
| gulp |$ ```npm install gulp --save-dev``` |```var gulp = require('gulp');``` | none |
| browser-sync |$ ```npm install browser-sync --save-dev``` |```var browserSync = require('browser-sync').create();``` | none |
| browserify |$ ```npm install browserify --save-dev```|```var browserify = require('browserify');``` | ```gulp.task('jsBrowserify', ['concatInterface'], function() {return browserify({ entries: ['./tmp/allConcat.js'] }).bundle().pipe(source('app.js')).pipe(gulp.dest('./build/js'));});``` |
| browserify dependencies |$ ```npm install vinyl-source-stream --save-dev``` |```var source = require('vinyl-source-stream');``` | none |
| concat |$ ```npm install gulp-concat --save-dev``` |```var concat = require('gulp-concat');``` | ```gulp.task('concatInterface', function() {return gulp.src(['./js/*-interface.js']).pipe(concat('allConcat.js')).pipe(gulp.dest('./tmp'));});``` |
| uglify(minify) |$ ```npm install gulp-uglify --save-dev``` |```var uglify = require('gulp-uglify');``` | ```gulp.task("minifyScripts", ["jsBrowserify"], function(){return gulp.src("./build/js/app.js").pipe(uglify()).pipe(gulp.dest("./build/js"));});``` |
| utilities |$ ```npm install gulp-util --save-dev``` |```var utilities = require('gulp-util');  var buildProduction = utilities.env.production;``` | ```gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){browserSync.reload();});gulp.task('bowerBuild', ['bower'], function(){browserSync.reload();});gulp.task('htmlBuild', function() {browserSync.reload();});``` |
| del(clean) |$ ```npm install del --save-dev``` |```var del = require('del');``` | ```gulp.task("clean", function(){return del(['build', 'tmp']);});``` |
| jshint(error checking) |$ ```npm install jshint --save-dev``` |```var jshint = require('gulp-jshint');``` | ```gulp.task('jshint', function(){return gulp.src(['js/wildcard.js']).pipe(jshint()).pipe(jshint.reporter('default'));});``` |
| same as above |$ ```npm install gulp-jshint --save-dev``` |none needed | none |
| bower-files |$ ```npm install bower-files --save-dev``` |```var lib = require('bower-files')();``` | ```gulp.task('bowerCSS', function () {return gulp.src(lib.ext('css').files).pipe(concat('vendor.css')).pipe(gulp.dest('./build/css'));});gulp.task('bowerJS', function () {return gulp.src(lib.ext('js').files).pipe(concat('vendor.min.js')).pipe(uglify()).pipe(gulp.dest('./build/js'));});gulp.task('bower', ['bowerJS', 'bowerCSS']);``` |
| jquery |$ ```bower install jquery --save``` |none needed | reference build task |
| bootstrap |$ ```bower install bootstrap --save``` |```"overrides":{"bootstrap": {"main": ["less/bootstrap.less", "dist/css/bootstrap.css", "dist/js/bootstrap.js"]}}```| reference build task |
| moment |$ ```bower install moment --save``` |none needed | reference build task |
| sass | ```gem install sass  npm install gulp-sass gulp-sourcemaps --save-dev``` | ```var sass = require('gulp-sass'); var sourcemaps = require('gulp-sourcemaps');``` | ```gulp.task('cssBuild', function() {return gulp.src(['scss/*.scss']).pipe(sourcemaps.init()).pipe(sass()).pipe(sourcemaps.write()).pipe(gulp.dest('./build/css')).pipe(browserSync.stream());});``` |
|build | no install | no variables | ```gulp.task('serve', function() {browserSync.init({server: {baseDir: "./",index: "index.html"}});gulp.watch(['js/wildcard.js'], ['jsBuild']);gulp.watch(['bower.json'], ['bowerBuild']);gulp.watch(['wildcard.html'], ['htmlBuild']);gulp.watch(["scss/wildcard.scss"], ['cssBuild']);});gulp.task('build', ['clean'], function(){if (buildProduction) {gulp.start('minifyScripts');} else {gulp.start('jsBrowserify');}gulp.start('bower');gulp.start('cssBuild');});``` |


**CLONING PROJECT**

| Package | Installation |
|:---:|:---:|
| npm |$ ```npm install``` |
| bower |$ ```bower install``` |

## Setup/Installation Requirements

1.  Go to the Github repository page at https://github.com/GrapeSalad/Doctor-Lookup
2.  Click the "download or clone" button and copy the link.
3.  In your Desktop open the terminal
4.  In the terminal navigate to the directory in which you want to store the app files.
5.  Clone using "git clone " and the copied link.
6.  You may need to install node.js and npm to run this app, and you can find free instructions from the Epicodus *FREE* lessons. Link to the lesson: https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js
7.  To confirm that node and npm are installed correctly run "node -v" and "npm -v".
6.  To install the necessary files for running the gulp server please follow the **CLONING PROJECT** instructions above.
13.  To start the web server necessary for proper app functionality you will need to type in "gulp build" then "gulp serve".
14.  It will open the page automatically for you.
To view the code you can open the files using your editor of choice.
15. If you have the editor path set in your system properties you will be able to open them through the terminal.


## Known Bugs

1.  The list has duplicates

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used

* Javascript
* HTML
* SASS
* Gulp
* Bower

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **David Wilson**
