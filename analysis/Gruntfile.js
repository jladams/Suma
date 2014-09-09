// Generated on 2013-11-01 using generator-angular 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'src',
      dist: 'reports'
    },
    watch: {
      compass: {
        options: {
          atBegin: true
        },
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass,css}'],
        tasks: ['copy:styles', 'compass:server', 'autoprefixer:development']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/lib/{,*/}*.js',
          '<%= yeoman.app %>/styles/{,*/}*.scss',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
        ]
      },
      tests: {
        files: ['src/lib/php/*.php','test/php/spec/*.php'],
        tasks: ['phpunit']
      }
    },
    autoprefixer: {
      options: {
        map: true
      },
      development: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= yeoman.dist %>/styles/'
        }]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '.sass-cache',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      validate: 'validation-status.json'
    },
    jshint: {
      options: {
        jshintrc: '../.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '<%= yeoman.app %>/lib/{,*/}*.js',
        'test/js/spec/{,*/}*.js',
        'test/js/mocks/{,*/}*.js'
      ]
    },
    compass: {
      options: {
        config: '.compass-config.rb',
        sassDir: '.tmp/scss',
        cssDir: '.tmp/styles',
        specify: '.tmp/scss/main.min.scss',
        importPath: '<%= yeoman.app %>',
        relativeAssets: false,
        sourcemap: true
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          cssDir: '<%= yeoman.dist %>/styles'
        }
      },
      server: {
        options: {
          environment: 'development',
          debugInfo: true
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.{gif,webp}',
            'lib/php/**/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: [
            'generated/*'
          ]
        }, {
          expand: true,
          dot: true,
          flatten: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>/fonts',
          src: ['bower_components/font-awesome/fonts/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        dest: '.tmp/scss/',
        src: [
          'bower_components/font-awesome/css/font-awesome.css',
          'bower_components/bootstrap3-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
          'styles/{,*/}*.{scss,sass}'
        ],
        rename: function (dest, src) {
          return dest + src.replace(/^styles\//g, '').replace(/\.css$/g, '.css.scss').replace(/^main\.scss/g, 'main.min.scss');
        }
      },
      sourceMapPrep: {
        dest: '<%= yeoman.dist %>/scripts/scripts.js',
        src: '.tmp/concat/scripts/scripts.min.js'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      options: {
        sourceMap: '<%= yeoman.dist %>/scripts/scripts.js.map',
        sourceMappingURL: 'scripts.js.map',
        sourceMapPrefix: 2
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.min.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    validation: {
      options: {
        reportpath: false,
        // failHard: true,
        doctype: 'HTML5',
        relaxerror: [
          'Element head is missing a required instance of child element title.'
        ]
      },
      files: {
        src: [
          '<%= yeoman.app %>/index.html',
          '<%= yeoman.app %>/views/**/*.html'
        ]
      }
    },
    phpunit: {
      classes: {
        dir: 'test/php/spec'
      },
      options: {
        coverageHtml: 'test/php/coverage',
        configuration: 'test/php/config.xml'
      }
    }
  });

  grunt.registerTask('validateHTML', [
    'clean:validate',
    'validation',
    'clean:validate'
  ]);

  grunt.registerTask('lint', [
    'jshint'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'copy:styles',
    'compass',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'copy:styles',
    'compass:dist',
    'autoprefixer:dist',
    'concat',
    'copy:dist',
    'copy:sourceMapPrep',
    'imagemin',
    'htmlmin',
    'ngAnnotate',
    'uglify:dist',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
