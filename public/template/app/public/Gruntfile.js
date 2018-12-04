module.exports = function (grunt) {
    grunt.initConfig({
        // define source files and their destinations
        uglify: {
            t1: {
                options: {
                    mangle: false
                },
                files: {
                    'dest/js/main.min.js': ['src/js/main.js', 'src/js/pages/*.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: ['src/css/reset.css', 'src/css/style.css', 'src/css/responsive.css', 'src/css/print.css'],
                    dest: 'dest/css/style.min.css'
                }]
            }
        },
        watch: {
            js:  { files: ['src/js/main.js', 'src/js/pages/*.js'], tasks: ['uglify:t1'] },
            css: { files: ['src/css/*.css'], tasks: ['cssmin']}
        }
    });

// load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

// register at least this one task
    grunt.registerTask('default', [ 'uglify', 'cssmin']);

};