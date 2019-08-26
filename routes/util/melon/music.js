const axios = require('axios')
const cheerio = require('cheerio')

exports.getData = () => {
  return axios.get('https://www.melon.com/chart/index.htm')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.service_list_song table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        ulList[i] = {
          rank: $(this).find('td div span.rank').text(),
          diff: 'unknown',
          diffVal: '0',
          albumImg: $(this).find('td div a img').attr('src'),
          name: $(this).find('td div div div.rank01 span a').text(),
          artist: $(this).find('td div div div.rank02 a').first().text()
        }
      })
      const data = ulList.filter(n => n.rank);
      return data;
    })
    .then(res => {
      return Promise.resolve({
        data: res
      })
    })
    .catch(err => {
      return Promise.reject({
        data: err
      })
    })
}