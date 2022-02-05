function verify(requestObject){
    const re = new RegExp('[\w\d\.]+');
    if (!(requestObject.method == 'GET' || requestObject.method == 'POST' || requestObject.method == 'DELEET' || requestObject.method == 'CONNECT') || requestObject.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!(requestObject.uri == '*' || re.test(requestObject.uri) || requestObject.hasOwnProperty('uri'))) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!(requestObject.version == 'HTTP/0.9' || requestObject.version == 'HTTP/1.0' || requestObject.version == 'HTTP/1.1' || requestObject.version == 'HTTP/2.0') || requestObject.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (new RegExp('/^([^<>\\&\'"]*)$/g').test(requestObject.message) || !requestObject.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObject;
}
console.log(verify({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
  }
  ));