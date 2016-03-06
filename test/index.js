'use strict';

var ChildProcess = require('child_process');
var Path = require('path');
var Code = require('code');
var Fse = require('fs-extra');
var Lab = require('lab');

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.it;

Code.settings.truncateMessages = false;
Code.settings.comparePrototypes = false;

const fixturesDirectory = Path.join(__dirname, 'fixtures');
const failDirectory = Path.join(fixturesDirectory, 'fail');
const successDirectory = Path.join(fixturesDirectory, 'success');
const tempDirectory = Path.join(process.cwd(), 'test-tmp');

describe('Node Style CLI', function() {
  lab.after(function(done) {
    Fse.remove(tempDirectory, done);
  });

  describe('run()', function() {
    it('runs binary and reports success', function(done) {
      var child = ChildProcess.fork('bin/node-style', ['-w', successDirectory],
        {silent: true});

      child.once('error', function(err) {
        expect(err).to.not.exist();
      });

      child.once('close', function(code, signal) {
        expect(code).to.equal(0);
        expect(signal).to.equal(null);
        done();
      });
    });

    it('runs binary and reports failures', function(done) {
      var child = ChildProcess.fork('bin/node-style', ['-w', failDirectory],
        {silent: true});

      child.once('error', function(err) {
        expect(err).to.not.exist();
      });

      child.once('close', function(code, signal) {
        expect(code).to.equal(1);
        expect(signal).to.equal(null);
        done();
      });
    });
  });
});
