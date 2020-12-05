#!/data/data/com.termux/files/usr/bin/bash

echo "\nInstallasi sedang berjalan ..."
apt update

echo "\nSedang menginstall package yang di butuhkan... mungkin membutuhkan waktu beberapa menit"
apt install -y wget nodejs tesseract

echo "\nMenginstall dependency package.json"
npm i

echo "\nSentuhan terakhir... harap bersabar"
npm i -g cwebp

echo "\nYeay semua sudah terinstall! ketik: node index.js untuk menjalankan bot!"

exit
