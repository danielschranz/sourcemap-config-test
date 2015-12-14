module.exports = function(grunt) {

    var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            app: {
                entry: "./src/index.js",
                output: {
                    path: "target/js",
                    filename: "app.js"
                },
                plugins: [
                    new UglifyJsPlugin()
                ],
                devtool: 'source-map'
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');

    // Default task(s).
    grunt.registerTask('default', ['webpack:app']);

};
