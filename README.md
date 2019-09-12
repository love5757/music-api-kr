<h1 align="center">music-api-kr</h1>
<h5 align="center">Korean music record chart api<br>by JUNEYOUNG KANG / i64</h5>

[<p align = "center">
![GitHub developer](https://img.shields.io/badge/Developer-JUNEYOUNG%20KANG%20/%20i64-blue.svg?longCache=true&style=flat-square)](https://github.com/i64)<br>[![HitCount](http://hits.dwyl.io/i64/music-api-kr.svg)](http://hits.dwyl.io/i64/music-api-kr) [![GitHub license](https://img.shields.io/github/license/i64/music-api-kr.svg?longCache=true&style=flat-square)](https://github.com/i64/music-api-kr/blob/master/LICENSE)

### Usage
#### Installation
```
$ git clone https://github.com/i64/music-api-kr
$ cd music-api-kr
$ npm install
$ node app.js
```

#### Routing
- `/v1/melon/music/chart/100`: Top 100 from **Melon Music**
- `/v1/melon/music/chart/100/:artist`: Specific artist's music at Top 100 from **Melon Music** (In development)
- `/v1/genie/music/chart/200`: Top 100 from **Genie Music**
- `/v1/genie/music/chart/200/:artist`: Specific artist's music at Top 100 from **Genie Music** (In development)
- `/v1/naver/music/chart/100`: Top 100 from **Naver Music**
- `/v1/naver/music/chart/100/:artist`: Specific artist's music at Top 100 from **Naver Music** (In development)
- `/v1/bugs/music/chart/100`: Top 100 from **Bugs Music**
- `/v1/bugs/music/chart/100/:artist`: Specific artist's music at Top 100 from **Bugs Music** (In development)

### TODO
- [x] Get main chart
  - [x] Melon Music  
  - [x] Genie Music (Mnet)  
  - [x] Naver Music (VIBE)  
  - [x] Bugs Music  
  - [ ] Flo Music  
  - [ ] Hanteo Chart  
  - [ ] Youtube Video  
- [ ] Get specific artist's ranking from main chart
  - [ ] Melon Music  
  - [ ] Genie Music (Mnet)  
  - [ ] Naver Music (VIBE)  
  - [ ] Bugs Music  
  - [ ] Flo Music  
  - [ ] Hanteo Chart  
  - [ ] Youtube Video  
- [ ] Get music info
- [ ] Get another charts

### Roadmap
**Selenium:** To parse login required chart page (Hanteo Chart) and enable javascript required page (Flo Music)  
**Scheduler:** To parse view count per hour from Youtube Video

### Contribution
If you want to contribute this project, [Issue](https://github.com/i64/music-api-kr/issues) or [PR](https://github.com/i64/music-api-kr/pulls).

### Developer
JUNEYOUNG KANG / i64  
- email: [iam@juneyoung.io](mailto:iam@juneyoung.io)

### LICENSE
<img alt="OSI Approved License Logo" hspace="20" src="https://opensource.org/files/OSI_Approved_License.png" align="right"  width="150" height="200">

MIT License

Copyright (c) 2019 JUNEYOUNG KANG / i64

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.