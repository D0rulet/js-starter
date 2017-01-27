module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['js/Main.js', 'js/Constroller.js'],
                dest: 'bin/<%= pkg.name %>.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    // tasks
    grunt.registerTas('default', ['concat']);
}