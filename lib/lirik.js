const axios = require('axios')

const lirik = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('harap masukan teks.') }
        var url = `http://scrap.terhambar.com/lirik?word=${teks}`
        axios.get(url)
            .then(res => {
                const { lirik: hasil } = res.data.result
                resolve({ hasil })
             })
             .catch(err => {
                 reject('sepertinya error.')
             })
    })
}

module.exports = lirik
