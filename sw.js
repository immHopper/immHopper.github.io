/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/05/25/人生如茶，总有一杯水为你而来/index.html","d4564040773e2ac72aa6236f2eeb8f5d"],["/2021/08/23/2020-网鼎杯-青龙组-Web-AreUSerialz-反序列化-WriteUp/b1.png","bafd0a79161ce3864ed5bbf393d3e2ed"],["/2021/08/23/2020-网鼎杯-青龙组-Web-AreUSerialz-反序列化-WriteUp/b2.png","926ead307df4b89fd0f8a7f8afaeae70"],["/2021/08/23/2020-网鼎杯-青龙组-Web-AreUSerialz-反序列化-WriteUp/b3.png","89db6a293822525430dfd89bd014a7e9"],["/2021/08/23/2020-网鼎杯-青龙组-Web-AreUSerialz-反序列化-WriteUp/b4.png","03f8b65f6ea25086f77d8c692c04c507"],["/2021/08/23/2020-网鼎杯-青龙组-Web-AreUSerialz-反序列化-WriteUp/index.html","57fd78ea4a624d834fbe0468805935e3"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/1.png","58017fa7e7d75f685b033d8b70c9959e"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/2.png","fca334409949f7cd58085277a1442910"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/3.png","b8a416e8e108967c652f8b20a83fb38b"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/4.png","26a3eb39f7b9dfeb1e1949ada7ba4840"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/5.png","6d8b02b8cf99565e9f439cf54d588e01"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/6.png","eb7fdf7a2f245a19356601463581365e"],["/2021/11/14/Python安全攻防-渗透测试实战指南实践/index.html","f9380ff9a6abdf00c762960ec79e244a"],["/2022/01/31/CALDERA-ATT-CK自动化对抗框架/index.html","270c15285e030013a9a9bc1903f388f6"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/1.png","57bdb3c238ee4089bfa3270b1dd42114"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/2.png","b24862de301361d86593e135a8429109"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/3.png","23215e1816cac11bc7f95834fd2f2f9c"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/4.png","f4351c94486ee7a27e96b71509a9e9e5"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/5.png","dfbbf5fdf8e6cbcdf7cc782dfb994aaf"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/6.png","251c24a35f75925de00222a3413fc199"],["/2022/04/02/2021-绿城杯CTF-PWN-ezuaf/index.html","e25a9f8a67f7dfda371cb2498edc90c5"],["/2022/04/16/C-Programming-Wikibooks-数组/index.html","3f3f29e023dd61ece57aa3d8aedf895d"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/1.png","3bba3bbfdaa36af5409f6b12636a1df0"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/2.png","0841e7c92c539b0fbb62a5b52ea64012"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/3.png","a072da6d54be3d064c7afc69ad68eb7a"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/4.png","a64d61baf7df9a609594a0dbd4019821"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/5.png","339f9fb33a5bc70d73da2112e3927b43"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/6.png","90b66ad210528c0791ce8eea2235c27e"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/7.png","dc15605f745539a34a290ce36e45af5b"],["/2022/04/17/Virtualization-IA-virtualization-虚拟化原理与IA虚拟化总结/index.html","912c3f31b257acba86159fe3f40c55a6"],["/2022/04/18/记录一次-win10蓝牙无法使用无法连接问题的玄学解决方法/1.png","d4e6ac2e0dde820bc1fadc9cf2782ee7"],["/2022/04/18/记录一次-win10蓝牙无法使用无法连接问题的玄学解决方法/index.html","f9a7f4ee7f55660e871139f510b04f82"],["/about/index.html","a5088f76bb92ea972cc4c727c7640b8c"],["/archives/2021/05/index.html","6f010bd3555c9f6734e064f51ae2b8fd"],["/archives/2021/08/index.html","dc291ecc9f02d2067c6c09efb097f442"],["/archives/2021/11/index.html","6bc1847720de129b1511453b18578b6d"],["/archives/2021/index.html","f71c955e86eb518b74288f34bf580320"],["/archives/2022/01/index.html","a31473154390a8914350d535ef256f51"],["/archives/2022/04/index.html","add0860440ee6aec238d1a8d37698f61"],["/archives/2022/index.html","ccf9755d3c2f323a99ff0918d83a4ad0"],["/archives/index.html","bd6f5ca138f7100c634058ae9d6957a6"],["/categories/PHP反序列化/index.html","491bb23f9f09b5b826c57b8fb5cd1643"],["/categories/python安全开发/index.html","454574fe4f6431c6b7167d7eaa01b697"],["/categories/红蓝对抗/index.html","8327a6cc26f31ecbe0de767fc9cafe9f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","ec8db4495d9e17a9df728529528a221c"],["/images/404.gif","c85ee1949da41f70848f16a37b4f6db8"],["/images/404.png","39770294e7947c8eacdb7677b7220e4c"],["/images/ghgfhgf.png","22cbbf3723cf35de562d84f43b2d47c4"],["/images/logo.png","a2f299cae6ddd0e492f272da44393dd8"],["/index.html","1f9b93b258f68a6e0e0c68b4fe795736"],["/js/main.js","28bcdf0fd723d50f6226f80b5e589099"],["/js/search.js","66bf2937edb6073773a7a21bfa68febf"],["/lib/Valine.min.js","bce6632d27ccf36a209796e27196ae59"],["/lib/flexboxgrid/flexboxgrid.min.css","01df170306275f4440f6bfe0919d30f1"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/justified-gallery/jquery.justifiedGallery.min.js","7b8f9e0d4b845e90381ae044b8b5e657"],["/lib/justified-gallery/justifiedGallery.min.css","9a5e8949e0c84f864668f0205c5fafbd"],["/lib/meslo-LG/fonts/MesloLGL-Bold.ttf","fc00e91cb9eadf7a667c4d8af1b4926d"],["/lib/meslo-LG/fonts/MesloLGL-BoldItalic.ttf","bed4ce6c1c3f0dc41c592a58f44b5cf4"],["/lib/meslo-LG/fonts/MesloLGL-Italic.ttf","4e7b16ce391075c219118bd208778d4a"],["/lib/meslo-LG/fonts/MesloLGL-Regular.ttf","c1bad38fa12a7967d5a546f24d22e6fd"],["/lib/meslo-LG/fonts/MesloLGM-Bold.ttf","2a64391bfb6a980844d5611b9ab3f2a8"],["/lib/meslo-LG/fonts/MesloLGM-BoldItalic.ttf","e01ed740cce778704c9a901d3ba058a7"],["/lib/meslo-LG/fonts/MesloLGM-Italic.ttf","6d9ea6fd483bc22a0b8514292c2eb1de"],["/lib/meslo-LG/fonts/MesloLGM-Regular.ttf","c353e3dabba482f3721f67c6a43f1744"],["/lib/meslo-LG/fonts/MesloLGS-Bold.ttf","d351bddc9bca1343e1b891fccb719bf0"],["/lib/meslo-LG/fonts/MesloLGS-BoldItalic.ttf","5d696e8bacda2a3ee5115d059154d891"],["/lib/meslo-LG/fonts/MesloLGS-Italic.ttf","02b482d001f9d6d37fd61de0157a3295"],["/lib/meslo-LG/fonts/MesloLGS-Regular.ttf","f9373d92c4d0cdb45c1406bead1f8c07"],["/lib/meslo-LG/styles.css","b263a3be0ad26898274d997091b6fa03"],["/sw-register.js","4201bb34eb1786f07a2bd44ce0dcd3ae"],["/tags/ATT-CK自动化工具/index.html","4b1725064bd3330474262e84b1aeaa72"],["/tags/CTF/index.html","bba8cd43b4712f484b15c8d8084e78bb"],["/tags/CTF反序列化/index.html","55d4cdd3d860a9d8c8dc3216ad159ef8"],["/tags/C语言程序设计/index.html","f3667c231e28fc3d9526d3bee2a6ba1a"],["/tags/IA-virtualization/index.html","eec450e3bf6c678954c354c6c940a37d"],["/tags/PWN/index.html","dc77db94f2ff1bcc2fa9d8b71799ded2"],["/tags/Virtualization/index.html","6f835027db1a1f81f0f79b51212d7951"],["/tags/index.html","df13c1a1c3d0a834978e265e098a0648"],["/tags/life/index.html","a901932c119b3ab71805d2a2b5e34c96"],["/tags/python/index.html","af71cbca38feddf36372090f68afbc52"],["/tags/python安全/index.html","1af48882acef7703e5c3b6ccefa65571"],["/tags/win10-蓝牙问题/index.html","45051c4120add8ab2a4a6214e68d8f89"],["/tags/数组/index.html","f2bcc18b77b6ce8d1ee5e1e5e8f001de"],["/tags/玄学/index.html","a3bf4b0615d402a90457ff8abd890e1e"],["/tags/红队攻防/index.html","db288a3f704bf482bc9ad7557183ed23"],["/tags/编程/index.html","1c7553c3a71f7ee6518256e15a4d4080"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
