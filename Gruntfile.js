module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            app: {
                entry: "./src/index.js",
                output: {
                    path: "target/js",
                    filename: "app.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');

    // Default task(s).
    grunt.registerTask('default', ['webpack:app']);

};
