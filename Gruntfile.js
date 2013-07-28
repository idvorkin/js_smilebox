module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // the package file to use
    qunit:{
          all: ['tests/*.html']
    }
  });
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.registerTask('default', ['qunit']);
  // Syntax
  //    grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);
};
