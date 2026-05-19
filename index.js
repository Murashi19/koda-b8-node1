const fs = require("node:fs");
const path = require("node:path"); // Perbaikan 1: Impor modul 'path'

const lagu = [
    { artis: "Wali", judul: "Dik" },
    { artis: "Wali", judul: "Cari Jodoh" },
    { artis: "Wali", judul: "Baik Baik Sayang" },
    { artis: "Wali", judul: "Doaku Untukmu Sayang" },
    { artis: "Wali", judul: "Tobat Maksiat" },

    { artis: "Judika", judul: "Aku Yang Tersakiti" },
    { artis: "Judika", judul: "Bukan Dia Tapi Aku" },
    { artis: "Judika", judul: "Sampai Kau Jadi Milikku" },
    { artis: "Judika", judul: "Cinta Karena Cinta" },
    { artis: "Judika", judul: "Putus Atau Terus" },

    { artis: "Dewa 19", judul: "Kangen" },
    { artis: "Dewa 19", judul: "Kamulah Satu-Satunya" },
    { artis: "Dewa 19", judul: "Pupus" },
    { artis: "Dewa 19", judul: "Arjuna" },
    { artis: "Dewa 19", judul: "Roman Picisan" }
];

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

// Jalankan program
generateFolderDanMusik();
