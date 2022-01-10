module.exports = function(grunt) {

  grunt.initConfig({
    ts: {
      default: {
        tsconfig: "tsconfig.json"
      }
    },
    clean: [ ".tscache/", "dist" ]
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("default", ["ts"]);
};
