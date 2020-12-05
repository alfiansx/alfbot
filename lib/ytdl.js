const axios = require('axios')

const ytdl = (mode, link) => new Promise((resolve, reject) => {
    if (typeof link === 'undefined') { reject('masukan link yt dengan benar.') }
    switch(mode) {
        case 'mp3':
            var url = `https://alfians-api.herokuapp.com/api/yta?url=${link}`
            axios.get(url)
                .then(res => {
                    const { title: judul, filesize: size, result: hasil } = res.data
                    resolve({ judul, size, hasil })
                })
        case 'mp4':
            var url = `https://alfians-api.herokuapp.com/api/ytv?url=${link}`
            axios.get(url)
                .then(res => {
                    const { title: judul, filesize: size, result: hasil } = res.data
                    resolve({ judul, size, hasil })
                })
        default:
            break
    }
})

module.exports = ytdl
