const axios = require('axios')
const cheerio = require('cheerio')

exports.getData = () => {
  return axios.get('https://www.melon.com/chart/index.htm')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.service_list_song table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td div span span').attr('class').split(' ')[1] == 'rank_up') {
          updown = 'up'
          updownVal = $(this).find('td div span span.up').text()
        } else if ($(this).find('td div span span').attr('class').split(' ')[1] == 'rank_down') {
          updown = 'down'
          updownVal = $(this).find('td div span span.down').text()
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td div span.rank').text()),
          diff: updown,
          diffVal: Number(updownVal),
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

exports.getDataExo = () => {
  return axios.get('https://www.melon.com/chart/index.htm')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.service_list_song table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td div div div.rank02 a').first().text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td div span span').attr('class').split(' ')[1] == 'rank_up') {
            updown = 'up'
            updownVal = $(this).find('td div span span.up').text()
          } else if ($(this).find('td div span span').attr('class').split(' ')[1] == 'rank_down') {
            updown = 'down'
            updownVal = $(this).find('td div span span.down').text()
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td div span.rank').text()),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: $(this).find('td div a img').attr('src'),
            name: $(this).find('td div div div.rank01 span a').text(),
            artist: $(this).find('td div div div.rank02 a').first().text()
          }
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
