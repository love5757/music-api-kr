const axios = require('axios')
const cheerio = require('cheerio')

exports.getData = () => {
  return axios.get('https://music.bugs.co.kr/chart/track/realtime/total')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div#CHARTrealtime table.list tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td div.ranking p.change').attr('class').split(' ')[1] == 'up') {
          updown = 'up'
          updownVal = $(this).find('td div.ranking p.change em').text()
        } else if ($(this).find('td div.ranking p.change').attr('class').split(' ')[1] == 'down') {
          updown = 'down'
          updownVal = $(this).find('td div.ranking p.change em').text()
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td div.ranking strong').text()),
          diff: updown,
          diffVal: Number(updownVal),
          albumImg: $(this).find('td a.thumbnail img').attr('src'),
          name: $(this).find('th p.title a').text(),
          artist: $(this).find('td p.artist a').first().text()
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
  return axios.get('https://music.bugs.co.kr/chart/track/realtime/total')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div#CHARTrealtime table.list tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td p.artist a').first().text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td div.ranking p.change').attr('class').split(' ')[1] == 'up') {
            updown = 'up'
            updownVal = $(this).find('td div.ranking p.change em').text()
          } else if ($(this).find('td div.ranking p.change').attr('class').split(' ')[1] == 'down') {
            updown = 'down'
            updownVal = $(this).find('td div.ranking p.change em').text()
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td div.ranking strong').text()),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: $(this).find('td a.thumbnail img').attr('src'),
            name: $(this).find('th p.title a').text(),
            artist: $(this).find('td p.artist a').first().text()
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
