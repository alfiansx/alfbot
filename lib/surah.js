const axios = require('axios')

const surah = () => {
    return new Promise((resolve, reject) => {
        var url = `https://api.banghasan.com/quran/format/json/acak`
        axios.get(url)
            .then(res => {
                const { acak, surat } = res.data
                resolve({ acak, surat })
             })
    })
}

module.exports = surah
