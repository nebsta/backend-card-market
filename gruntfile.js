module.exports = function(grunt) {

  grunt.initConfig({
    ts: {
      default: {
        tsconfig: "tsconfig.json"
      }
    },
    clean: [ ".tscache/", "dist" ],
    lint: {
      default : {
        tsconfig: './tsconfig.json',
      },
      options: {
        src: [ "src/**/*.ts" ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("@nevware21/grunt-eslint-ts");

  grunt.registerTask("default", ["lint", "ts"]);
};
