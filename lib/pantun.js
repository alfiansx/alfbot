const axios = require('axios')

const pantun = () => {
    return new Promise((resolve, reject) => {
        var url = `https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt`
        axios.get(url)
            .then(res => {
                var data = res.data.split('\n')
                var random = data[Math.floor(Math.random() * data.length)]
                var pantun = random.replace(/pjrx-line/g, '\n')
                resolve(pantun)
             })
    })
}

module.exports = pantun
