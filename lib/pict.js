const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const animPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const cewePict = () => {
    return new Promise((resolve, reject) => {
        var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"]
        var cewe = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cewe
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
á}

const cowoPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"]
        var cowo = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = { cowoPict, cewePict, animPict }
