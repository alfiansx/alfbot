const axios = require('axios')

const artinama = (nama) => {
    return new Promise((resolve, reject) => {
        if (typeof nama === 'undefined') { reject('masukan parameter nama.') }
        var url = `https://arugaz.herokuapp.com/api/artinama?nama=${nama}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = artinama
