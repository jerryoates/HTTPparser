module.exports = function parseHttp(request){
  const values = request.split(' ')
  const parsedMessage = {}
  parsedMessage.verb = values[0]
  parsedMessage.path = values[1]
  parsedMessage.version = values[2]
  return parsedMessage
}
