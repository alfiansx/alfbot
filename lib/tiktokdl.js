const axios = require('axios')


const tiktokdl = (link) => {
    return new Promise((resolve, reject) => {
        if (typeof link === 'undefined') { reject('harap masukan link.') }
        var url = `https://st4rz.herokuapp.com/api/tiktok?url=${link}`
        axios.get(url)
            .then(res => {
                const { urlvideo: url, nama: nama, durasi, deskripsi } = res.data
                resolve({ url, nama, durasi, deskripsi })
             })
    })
}

module.exports = tiktokdl
