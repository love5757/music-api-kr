const axios = require('axios')
const cheerio = require('cheerio')

exports.getData = () => {
  let dataArr = []
  return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=1')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
          updown = 'up'
          updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
        } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
          updown = 'down'
          updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td.number').first().contents().filter(function () {
            return this.type === 'text'
          }).text().replace(/\n\s+/, '')),
          diff: updown,
          diffVal: Number(updownVal),
          albumImg: 'https:' + $(this).find('td a img').attr('src'),
          name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
          artist: $(this).find('td.info a:nth-child(2)').text()
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=2')
    })
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
          updown = 'up'
          updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
        } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
          updown = 'down'
          updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td.number').first().contents().filter(function () {
            return this.type === 'text'
          }).text().replace(/\n\s+/, '')),
          diff: updown,
          diffVal: Number(updownVal),
          albumImg: 'https:' + $(this).find('td a img').attr('src'),
          name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
          artist: $(this).find('td.info a:nth-child(2)').text()
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=3')
    })
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
          updown = 'up'
          updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
        } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
          updown = 'down'
          updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td.number').first().contents().filter(function () {
            return this.type === 'text'
          }).text().replace(/\n\s+/, '')),
          diff: updown,
          diffVal: Number(updownVal),
          albumImg: 'https:' + $(this).find('td a img').attr('src'),
          name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
          artist: $(this).find('td.info a:nth-child(2)').text()
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=4')
    })
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        let updown = ''
        let updownVal = null
        if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
          updown = 'up'
          updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
        } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
          updown = 'down'
          updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
        } else {
          updown = 'static'
        }
        ulList[i] = {
          rank: Number($(this).find('td.number').first().contents().filter(function () {
            return this.type === 'text'
          }).text().replace(/\n\s+/, '')),
          diff: updown,
          diffVal: Number(updownVal),
          albumImg: 'https:' + $(this).find('td a img').attr('src'),
          name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
          artist: $(this).find('td.info a:nth-child(2)').text()
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return dataArr
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
  let dataArr = []
  return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=1')
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.info a:nth-child(2)').text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
            updown = 'up'
            updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
          } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
            updown = 'down'
            updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td.number').first().contents().filter(function () {
              return this.type === 'text'
            }).text().replace(/\n\s+/, '')),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: 'https:' + $(this).find('td a img').attr('src'),
            name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
            artist: $(this).find('td.info a:nth-child(2)').text()
          }
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=2')
    })
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.info a:nth-child(2)').text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
            updown = 'up'
            updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
          } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
            updown = 'down'
            updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td.number').first().contents().filter(function () {
              return this.type === 'text'
            }).text().replace(/\n\s+/, '')),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: 'https:' + $(this).find('td a img').attr('src'),
            name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
            artist: $(this).find('td.info a:nth-child(2)').text()
          }
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=3')
    })
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.info a:nth-child(2)').text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
            updown = 'up'
            updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
          } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
            updown = 'down'
            updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td.number').first().contents().filter(function () {
              return this.type === 'text'
            }).text().replace(/\n\s+/, '')),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: 'https:' + $(this).find('td a img').attr('src'),
            name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
            artist: $(this).find('td.info a:nth-child(2)').text()
          }
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return axios.get('https://www.genie.co.kr/chart/top200?rtm=Y&pg=4')
    })
    .then(html => {
      let ulList = []
      const $ = cheerio.load(html.data)
      const $bodyList = $('div.music-list-wrap table tbody').children('tr')
      $bodyList.each(function(i, elem) {
        if ($(this).find('td.info a:nth-child(2)').text() == 'EXO') {
          let updown = ''
          let updownVal = null
          if ($(this).find('td.number span span span').attr('class') == 'rank-up') {
            updown = 'up'
            updownVal = $(this).find('td.number span span span.rank-up').first().contents()[0].data
          } else if ($(this).find('td.number span span span').attr('class') == 'rank-down') {
            updown = 'down'
            updownVal =  $(this).find('td.number span span span.rank-down').first().contents()[0].data
          } else {
            updown = 'static'
          }
          ulList[i] = {
            rank: Number($(this).find('td.number').first().contents().filter(function () {
              return this.type === 'text'
            }).text().replace(/\n\s+/, '')),
            diff: updown,
            diffVal: Number(updownVal),
            albumImg: 'https:' + $(this).find('td a img').attr('src'),
            name: $(this).find('td.info a').first().text().replace(/\n\s+/, ''),
            artist: $(this).find('td.info a:nth-child(2)').text()
          }
        }
      })
      data = ulList.filter(n => n.rank);
      data.forEach(function (val, idx, arr) {
        dataArr.push(val)
      })
      return dataArr
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
