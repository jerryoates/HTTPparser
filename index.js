module.exports = function parseHttp(request){
  const parsedMessage = {}
  const lines = request.split('\n')
  let parts = lines[0].split(' ')
  parsedMessage.verb = parts[0].toUpperCase()
  parsedMessage.path = parts[1]
  parsedMessage.version = parts[2]



  if (lines[1] === undefined){
    return parsedMessage
  }

  parsedMessage.headers = {}

  for(let i=1; i<lines.length; i++){
    parts = lines[i].split(': ')
    console.log(parts)
    const key = parts[0]
    const value = parts[1]
    parsedMessage.headers[key] = value
  }
  return parsedMessage
}
