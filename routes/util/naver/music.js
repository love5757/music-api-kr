const axios = require('axios')
const cheerio = require('cheerio')

exports.getData = () => {
  return axios.get('https://music.naver.com/listen/top100.nhn')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.tracklist_table table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td.change span').attr('class') == 'up') {
          updown = 'up'
          updownVal = $(this).find('td.change em').text()
        } else if ($(this).find('td.change span').attr('class') == 'down') {
          updown = 'down'
          updownVal = $(this).find('td.change em').text()
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td.ranking span.num1 span').text()),
          diff: updown,
          diffVal: Number(updownVal),
          albumImg: $(this).find('td.name a:nth-child(1) img').attr('src'),
          name: $(this).find('td.name a:nth-child(4) span').text(),
          artist: $(this).find('td.artist a span').text()
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
  return axios.get('https://music.naver.com/listen/top100.nhn')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.tracklist_table table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.artist a span').text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td.change span').attr('class') == 'up') {
            updown = 'up'
            updownVal = $(this).find('td.change em').text()
          } else if ($(this).find('td.change span').attr('class') == 'down') {
            updown = 'down'
            updownVal = $(this).find('td.change em').text()
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td.ranking span.num1 span').text()),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: $(this).find('td.name a:nth-child(1) img').attr('src'),
            name: $(this).find('td.name a:nth-child(4) span').text(),
            artist: $(this).find('td.artist a span').text()
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
