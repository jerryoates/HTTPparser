const parseHttp = require('../index.js')

describe('parses http', function(){
  it ('parses a request line', function(){
    //arrange
    const request = 'GET / HTTP/1.1'
    //act
    const output = parseHttp(request)
    //assert
    const expected = {
      verb: 'GET',
      path: '/',
      version: 'HTTP/1.1'
    }
    expect(output).toEqual(expected)
  })
  it ('normalizes the verb', function(){
    //arrange
    const request = 'get / HTTP/1.1'
    //act
    const output = parseHttp(request)
    //assert
    const expected = {
      verb: 'GET',
      path: '/',
      version: 'HTTP/1.1'
    }
    expect(output).toEqual(expected)
  })
  it ('sets content-type headers', function(){
    //arrange
    const request = "get / HTTP/1.1\ncontent-type: text/html; charset=utf-8"
    //act
    const output = parseHttp(request)
    //assert
    const expected = {
      verb: 'GET',
      path: '/',
      version: 'HTTP/1.1',
      headers: {
        'content-type': 'text/html; charset=utf-8'
    }
  }
    expect(output).toEqual(expected)
})
})
