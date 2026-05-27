const fs = require("node:fs");
const path = require("node:path");
const lagu = require("./dataMusik")


/**
 * Creates artist folders and empty MP3 files
 * based on music data.
 *
 * @function generateFolderDanMusik
 * @returns {void}
 */
function generateFolderDanMusik() {
    lagu.forEach((musik) => {
        // Perbaikan 2: Gunakan 'musik.artis', bukan 'lagu.artis'
        const folderArtis = path.join(__dirname, musik.artis);

        // Buat folder artis jika belum ada
        if (!fs.existsSync(folderArtis)) {
            fs.mkdirSync(folderArtis, { recursive: true });
        }

        // Perbaikan 3: Perbaiki string extension `.mp3`
        const namaFile = `${musik.artis} - ${musik.judul}.mp3`;
        const pathFileLengkap = path.join(folderArtis, namaFile);

        // Buat file mp3 kosong jika belum ada
        if (!fs.existsSync(pathFileLengkap)) {
            fs.writeFileSync(pathFileLengkap, '');
            console.log(`Berhasil membuat: ${namaFile}`);
        } else {
            console.log(`File sudah tersedia: ${namaFile}`);
        }
    });
}

module.exports = generateFolderDanMusik;

