var crypto = require('./cryptojs-master/cryptojs')

function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId
  this.sessionKey = sessionKey
}
 
var base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// btoa method
//base64 编码
function _btoa(s) {
  if (/([^\u0000-\u00ff])/.test(s)) {
    throw new Error('INVALID_CHARACTER_ERR');
  }
  var i = 0,
    prev,
    ascii,
    mod,
    result = [];

  while (i < s.length) {
    ascii = s.charCodeAt(i);
    mod = i % 3;

    switch (mod) {
      // 第一個6位只需要讓8位二進制右移兩位
      case 0:
        result.push(base64hash.charAt(ascii >> 2));
        break;
      //第二個6位 = 第一個8位的後兩位 + 第二個8位的前4位
      case 1:
        result.push(base64hash.charAt((prev & 3) << 4 | (ascii >> 4)));
        break;
      //第三個6位 = 第二個8位的後4位 + 第三個8位的前2位
      //第4個6位 = 第三個8位的後6位
      case 2:
        result.push(base64hash.charAt((prev & 0x0f) << 2 | (ascii >> 6)));
        result.push(base64hash.charAt(ascii & 0x3f));
        break;
    }

    prev = ascii;
    i++;
  }

  // 循環結束後看mod, 為0 證明需補3個6位，第一個為最後一個8位的最後兩位後面補4個0。另外兩個6位對應的是異常的“=”；
  // mod為1，證明還需補兩個6位，一個是最後一個8位的後4位補兩個0，另一個對應異常的“=”
  if (mod == 0) {
    result.push(base64hash.charAt((prev & 3) << 4));
    result.push('==');
  } else if (mod == 1) {
    result.push(base64hash.charAt((prev & 0x0f) << 2));
    result.push('=');
  }

  return result.join('');
}
//解码 成 ASCII
function _atob(s) {
  s = s.replace(/\s|=/g, '');
  var cur,
    prev,
    mod,
    i = 0,
    result = [];

  while (i < s.length) {
    cur = base64hash.indexOf(s.charAt(i));
    mod = i % 4;

    switch (mod) {
      case 0:
        //TODO
        break;
      case 1:
        result.push(String.fromCharCode(prev << 2 | cur >> 4));
        break;
      case 2:
        result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
        break;
      case 3:
        result.push(String.fromCharCode((prev & 3) << 6 | cur));
        break;

    }

    prev = cur;
    i++;
  }

  return result.join('');
} 
// var str = 'javascript';
// console.log(_btoa(str))
// //转码结果 "amF2YXNjcmlwdA=="
// console.log(_atob("amF2YXNjcmlwdA=="))
// //解码结果 "javascript"


WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode
  // var sessionKey = new Buffer(this.sessionKey, 'base64')
  // encryptedData = new Buffer(encryptedData, 'base64')
  // iv = new Buffer(iv, 'base64')

  var sessionKey = _atob(this.sessionKey)
  encryptedData = _atob(encryptedData)
  iv = _atob(iv)
  console.log(sessionKey,encryptedData,iv)
  try {
     // 解密
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true)
    var decoded = decipher.update(encryptedData, 'binary', 'utf8')
    decoded += decipher.final('utf8')
    
    decoded = JSON.parse(decoded)

  } catch (err) {
    throw new Error('Illegal Buffer')
  }

  if (decoded.watermark.appid !== this.appId) {
    throw new Error('Illegal Buffer')
  }

  return decoded
}

module.exports = WXBizDataCrypt
