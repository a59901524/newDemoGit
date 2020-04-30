// 跳转页面

var toPage = function(name, url, params) {
    api.openWin({
        name: name,
        url: url,
        reload: true,
        pageParam: params || {}
    });
}

// 返回上一页
var goBack = function(name, animation) {
        api.closeWin({
            name: name || '',
            animation: animation || {
                type: "push", //动画类型（详见动画类型常量）
                subType: "from_left", //动画子类型（详见动画子类型常量）
                duration: 300 //动画过渡时间，默认300毫秒
            }
        });
    }
    /**
004
 * base64编码
005
 * @param {Object} str
006
 */
var base64encodefcn = function(str) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

//http请求
var http = function(url, method, param, funSuc, funErr) {
        console.log("http URL:" + url);
        var uid = $api.getStorage('uid');
        var token = $api.getStorage('token');
        var multiLangname = $api.getStorage('multiLangname');
        var headers = {
            'Content-Type': 'application/json;charset=utf-8'
        };
        if (uid && token) {
            var zhdtring = 'A6015308327436:' + token + ':' + uid;
            var authen = uid + ' ' + base64encodefcn(zhdtring);
            // console.log(JSON.stringify(authen))
            headers = {
                'Content-Type': 'application/json;charset=utf-8',
                'authentication': authen
            };
        }
        if (multiLangname && multiLangname == 'en') {
            var lang = 'en-us';
        } else {
            var lang = 'zh-cn';
        }
        api.ajax({
            url: url + '?lang=' + lang,
            method: method,
            headers: headers,
            data: {
                body: param
            }
        }, function(ret, err) {
            if (ret) {
                if (ret.code == 200) {
                    funSuc(ret);
                } else {
                    funSuc(ret);
                    if (ret.code == 401) {
                        api.sendEvent({
                            name: 'pause',
                            extra: {}
                        });
                        $api.rmStorage('uid')
                        $api.rmStorage('token')
                        console.log("TO login.html");
                        api.openWin({
                            name: 'login',
                            url: 'widget://html/auth/login.html',
                            slidBackEnabled: false,
                            reload: true
                        });
                    }
                    if (ret.code == 400) {
                        api.toast({
                            msg: ret.msg,
                            duration: 2000,
                            location: 'bottom'
                        });
                    }
                }
            } else {
                // console.log(JSON.stringify(err))
            }
        });
    }
    //http请求
    // var http = function(url, method, param, funSuc, funErr) {
    //     var that = this;
    //     var key = getKey(); //生成随机key
    //     // var key = '2222222222222222'; //生成随机key
    //     var rsa = RSA(key); //生成对key 进行加密
    //     param = AESEnc(key, JSON.stringify(param)); //对传入的参数进行加密
    //     var userInfo = $api.getStorage('userInfo');
    //     var headers = {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     };
    //     if (userInfo && userInfo.token) {
    //         headers = {
    //             'Content-Type': 'application/json;charset=utf-8',
    //             'token': userInfo.token
    //         };
    //     }
    //     api.ajax({
    //         url: url,
    //         method: method,
    //         headers: headers,
    //         data: {
    //             body: {
    //                 _rsa: rsa, //对key进行加密,
    //                 _cipher: param
    //             }
    //         }
    //     }, function(ret, err) {
    //         if (ret) {
    //             // ret = AESDec(key, ret); //解密
    //             // funSuc.call(that, ret);
    //             // console.log(JSON.stringify(err))
    //             if (ret.code == 200) {
    //                 ret.data = JSON.parse(AESDec(key, ret.data)); //解密
    //                 funSuc(ret)
    //             } else {
    //                 // setTimeout(function () {
    //                 api.toast({
    //                     msg: ret.msg,
    //                     duration: 2000,
    //                     location: 'bottom'
    //                 });
    //                 // }, 200)
    //                 // ret.data = JSON.parse(AESDec(key, ret.data))
    //                 funSuc(ret)
    //                 if (ret.code == 403) {
    //                     //   $api.clearStorage();
    //                     $api.rmStorage('smrz_certify_id')
    //                     $api.rmStorage('userInfo');
    //                     $api.rmStorage('isShow');
    //                     api.clearCache();
    //                     api.sendEvent({
    //                         name: 'pause',
    //                         extra: {}
    //                     });
    //                     api.openWin({
    //                         name: 'login',
    //                         url: 'widget://html/auth/login.html',
    //                         slidBackEnabled: true,
    //                         reload: true
    //                     });
    //                 }
    //             }
    //         } else {
    //             // console.log(JSON.stringify(err))
    //             if (funErr && err) {
    //                 err = AESDec(key, err); //解密
    //                 funErr.call(that, err);
    //             }
    //         }
    //     });
    // }

//点击两次返回退出程序
var exitStatu;

function exit() {
    if (!exitStatu) {
        exitStatu = 1;
        api.toast({
            msg: "再按一次返回键退出程序",
            duration: 2000,
            location: 'bottom'
        });
        setTimeout(function() {
            exitStatu = null;
        }, 2000)
    } else if (exitStatu == 1) {
        api.closeWidget({
            silent: true
        });
    }
}

var fixStatusbar = function(header, content) {
    var height = $api.fixStatusBar(document.querySelector(header));
    if (content) {
        var content = document.querySelector(content);
        if (height > 0) {
            $api.css(content, 'top:' + height + 'px;');
        }
    }
}
var setLang = function() {
    var that = this;
    var lang = "cn"
    if ($api.getStorage('multiLang')) {
        lang = $api.getStorage('multiLang')
    } else {
        lang = "cn"
    }
    multiLang.setLang(lang)
}
