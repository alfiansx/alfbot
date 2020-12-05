const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const nulis = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('masukan teks yang akan ditulis.') }
        var url = 'https://bangandre.herokuapp.com/nulis?teks=' + teks
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
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

module.exports = nulis
