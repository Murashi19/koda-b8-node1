const { describe, it, beforeEach } = require('node:test')
const assert = require('assert/strict')
const generateFolderDanMusik = require('./generateMusik.js')
const lagu = require('./dataMusik.js')
const path = require('path')
const fs = require('fs')

describe('generateFolderDanMusik', () => {
    it('should create folder and mp3 file when they do not exist', (t) => {
        t.mock.method(fs, "existsSync", () => false);

        const mkdirMock = t.mock.method(fs, "mkdirSync", () => { });
        const writecMock = t.mock.method(fs, "writeFileSync", () => { });

        generateFolderDanMusik();

        assert.strictEqual(mkdirMock.mock.callCount(), lagu.length);
        assert.strictEqual(writecMock.mock.callCount(), lagu.length);
    })
    it('should not create folder and mp3 file when already exist', (t) => {
        t.mock.method(fs, "existsSync", () => true);

        const mkdirMock = t.mock.method(fs, "mkdirSync", () => { });
        const writecMock = t.mock.method(fs, "writeFileSync", () => { });

        generateFolderDanMusik();

        assert.strictEqual(mkdirMock.mock.callCount(), 0);
        assert.strictEqual(writecMock.mock.callCount(), 0);
    })
})