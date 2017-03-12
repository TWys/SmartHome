'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'pubic/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        //minifikacja html
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'public/index.html': 'src/index.html'
                }
            }
        },
        // templates support
        sass: {
            dist: {
                options: {
                    quiet: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            images: {
                files: [
                    {expand: true, cwd: 'src/img', src: '**', dest: 'public/img/',
                    expand: true, cwd: 'src/fonts', src: '**', dest: 'public/fonts/'
                    }
                ]
            }
        },
        clean: {
            contents: ['public/*']
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                options: {
                    optimizationLevel: 1
                },
                files: [
                    {
                        expand: true,                  // Enable dynamic expansion
                        cwd: 'public/img/',                   // Src matches are relative to this path
                        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                        dest: 'public/img/'                  // Destination path prefix
                    }
                ]
            }
        },
        mustache_render: {
            options: {},
            dist: {
                options: {
                    data: 'src/data/data.json', //https://www.npmjs.com/package/grunt-mustache-render#optionsdata-and-optionstemplate
                    directory: 'src/templates/', //https://www.npmjs.com/package/grunt-mustache-render#optionsdirectory
                    escape: false   //https://www.npmjs.com/package/grunt-mustache-render#optionsescape
                },
                files: [
                    {
                        'public/index.html': 'src/templates/index.mustache'
                    }
                ]
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('copyfiles', ['copy']);
    grunt.registerTask('images', ['imagemin']);
    grunt.registerTask('templates', ['mustache_render']);
    grunt.registerTask('htmlminify', ['minifyHtml']);
    grunt.registerTask('cssminify', ['cssmin']);
    grunt.registerTask('build', ['clean', 'sass', 'copy', 'imagemin', 'mustache_render']);
};