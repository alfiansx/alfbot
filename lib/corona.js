const axios = require('axios')

const corona = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/coronaindo`
        axios.get(url)
            .then(res => {
                const { meninggal, sembuh, kasus_total: positif } = res.data
                resolve({ meninggal, sembuh, positif })
             })
    })
}

module.exports = corona
