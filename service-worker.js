/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "42d7993e373d868c64b691cf3d2ea359"
  },
  {
    "url": "about/index.html",
    "revision": "a636caedb882d176842315df06a9d57f"
  },
  {
    "url": "archive/index.html",
    "revision": "667126e0fd8468fd43a14bafa15ec993"
  },
  {
    "url": "assets/css/0.styles.af902842.css",
    "revision": "6552f178d0bbd8ce9c7e151e49ec0569"
  },
  {
    "url": "assets/fonts/fa-brands-400.8300bd7f.ttf",
    "revision": "8300bd7f30e0a313c1d772b49d96cb8e"
  },
  {
    "url": "assets/fonts/fa-brands-400.ad527cc5.woff",
    "revision": "ad527cc5ec23d6da66e8a1d6772ea6d3"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2ca6541.eot",
    "revision": "e2ca6541bff3a3e9f4799ee327b28c58"
  },
  {
    "url": "assets/fonts/fa-brands-400.f075c50f.woff2",
    "revision": "f075c50f89795e4cdb4d45b51f1a6800"
  },
  {
    "url": "assets/fonts/fa-regular-400.3c6879c4.woff",
    "revision": "3c6879c4f342203d099bdd66dce6d396"
  },
  {
    "url": "assets/fonts/fa-regular-400.49f00693.ttf",
    "revision": "49f00693b0e5d45097832ef5ea1bc541"
  },
  {
    "url": "assets/fonts/fa-regular-400.4a74738e.woff2",
    "revision": "4a74738e7728e93c4394b8604081da62"
  },
  {
    "url": "assets/fonts/fa-regular-400.b01516c1.eot",
    "revision": "b01516c1808be557667befec76cd6318"
  },
  {
    "url": "assets/fonts/fa-solid-900.205f07b3.ttf",
    "revision": "205f07b3883c484f27f40d21a92950d4"
  },
  {
    "url": "assets/fonts/fa-solid-900.4451e1d8.woff",
    "revision": "4451e1d86df7491dd874f2c41eee1053"
  },
  {
    "url": "assets/fonts/fa-solid-900.8ac31674.eot",
    "revision": "8ac3167427b1d5d2967646bd8f7a0587"
  },
  {
    "url": "assets/fonts/fa-solid-900.8e1ed89b.woff2",
    "revision": "8e1ed89b6ccb8ce41faf5cb672677105"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/ad.png",
    "revision": "f83672204fdc9dc1363f01e3fb7145fb"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "30d243d90dc75ae0acdf4cd25b2b2d55"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "943f3b5235303db0c91f6da9ff3074b7"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "0b049d33755d2237c5a26616d8477c8a"
  },
  {
    "url": "assets/img/avatar.e1ee01da.png",
    "revision": "e1ee01da5cd97882fbcd4b2c24cd39c3"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "e1ee01da5cd97882fbcd4b2c24cd39c3"
  },
  {
    "url": "assets/img/background.png",
    "revision": "ea96f9d0e89b8cf3ffa7183ba5b65211"
  },
  {
    "url": "assets/img/brand.31507408.png",
    "revision": "315074080d42a54664548af58b88fa54"
  },
  {
    "url": "assets/img/brand.png",
    "revision": "315074080d42a54664548af58b88fa54"
  },
  {
    "url": "assets/img/by-nc-sa.03dda63e.svg",
    "revision": "03dda63e80b9508d421e792236239ef1"
  },
  {
    "url": "assets/img/empty.png",
    "revision": "596be35cb3b05083be5a8d7c4177c669"
  },
  {
    "url": "assets/img/fa-brands-400.2f122423.svg",
    "revision": "2f12242375edd68e9013ecfb59c672e9"
  },
  {
    "url": "assets/img/fa-regular-400.3602b7e8.svg",
    "revision": "3602b7e8b2cb1462b0bef9738757ef8a"
  },
  {
    "url": "assets/img/fa-solid-900.664de393.svg",
    "revision": "664de3932dd6291b4b8a8c0ddbcb4c61"
  },
  {
    "url": "assets/img/hitokoto.left.7d59b2d0.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.left.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.right.d80507e4.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/hitokoto.right.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/qq.png",
    "revision": "2d628bccdfb243cf99610cf43b66b883"
  },
  {
    "url": "assets/img/records.2ade8ac9.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/records.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "55a97d0c0eaf7cfd5d99767a727caefd"
  },
  {
    "url": "assets/js/10.fa97789b.js",
    "revision": "f8160064af70546103cd9e7b9a74b0c4"
  },
  {
    "url": "assets/js/11.74dc3e86.js",
    "revision": "5919f6d2ed216136c050cf8dfa5588f3"
  },
  {
    "url": "assets/js/12.dfe99e6d.js",
    "revision": "473e551952091076988a13f1e56b9219"
  },
  {
    "url": "assets/js/13.b8a1bffe.js",
    "revision": "1d5ee4ec750635c1787b2104223d167e"
  },
  {
    "url": "assets/js/14.1b76418a.js",
    "revision": "24e95f8b978bd8581597c324347a586b"
  },
  {
    "url": "assets/js/15.2169506b.js",
    "revision": "6f5ee8f507af5b94a19b24f97c2c72a3"
  },
  {
    "url": "assets/js/16.90328a2b.js",
    "revision": "ef3b71e037c1bc00737a97f54a5149c7"
  },
  {
    "url": "assets/js/17.53b45663.js",
    "revision": "99d60aae0c1fd8998c8ff30a3112adf5"
  },
  {
    "url": "assets/js/18.0d6f9251.js",
    "revision": "5b81237e69c7b980c9b0a116dc1fa91d"
  },
  {
    "url": "assets/js/2.c137ba64.js",
    "revision": "3a1583a104f24b4bd502d71c1f67c945"
  },
  {
    "url": "assets/js/3.55c75786.js",
    "revision": "547fd184506b9daee563a8df158a7547"
  },
  {
    "url": "assets/js/4.97712f20.js",
    "revision": "cd569a678d5cd9fd30d52211036c532e"
  },
  {
    "url": "assets/js/5.37bbbcf4.js",
    "revision": "525cfde14cfc4f9b3c641677bf8abf98"
  },
  {
    "url": "assets/js/6.6210de1f.js",
    "revision": "958e62293faac3f80d6271a59b944f23"
  },
  {
    "url": "assets/js/7.fbfc6e10.js",
    "revision": "5ae79a0725a1bf4abd1d166cf3985311"
  },
  {
    "url": "assets/js/8.b8f2ed52.js",
    "revision": "324be19188ea3cd776439dff70946f60"
  },
  {
    "url": "assets/js/9.fb6fe94a.js",
    "revision": "68c249304b0ddce6ba06958fc14828f0"
  },
  {
    "url": "assets/js/app.4db21066.js",
    "revision": "5425d4994592a04b8b76da1e79199883"
  },
  {
    "url": "category/index.html",
    "revision": "79a874df7c66a3f644aabe020f976e47"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "074746350b5a3e1c5d4d1a04cc589e7f"
  },
  {
    "url": "codes/index.html",
    "revision": "05d6d8654c38a145e905c5946ff28b72"
  },
  {
    "url": "gallery/data-structure-linked-list-normal.png",
    "revision": "1db30e017d3e0009ddf12311d31b2ae5"
  },
  {
    "url": "gallery/data-structure-linked-list-static-to-normal.png",
    "revision": "4643d5dd42eebf640134ab8d9df2e137"
  },
  {
    "url": "gallery/data-structure-queue.png",
    "revision": "db91100f07f4d68b2ae73b73baa34614"
  },
  {
    "url": "gallery/data-structure-random-linked-ram.png",
    "revision": "89bfac4f6ce9c3abb572dfff77a78a34"
  },
  {
    "url": "gallery/data-structure-stack.png",
    "revision": "7067ca734d65393dcd3fc3340310f787"
  },
  {
    "url": "gallery/FaceQwQ.png",
    "revision": "bd7c4ee3bdda65d4d0294bc1c9ea141e"
  },
  {
    "url": "gallery/http-request-example.jpg",
    "revision": "3ad3cb077e4d852be159c0ce7d1a7e92"
  },
  {
    "url": "gallery/http-request-format.png",
    "revision": "3aeef0f8d0b869a5c3f4d47ee41d3c90"
  },
  {
    "url": "gallery/http-response-example.jpg",
    "revision": "c3cf8d2890449b9138527011ae403b49"
  },
  {
    "url": "gallery/http-response-format.png",
    "revision": "ea246cd67c5878fdb5f440e4657bd7a1"
  },
  {
    "url": "gallery/index.html",
    "revision": "229383d2ec1bf39c633c88a76f3f9f8d"
  },
  {
    "url": "gallery/tcp-ip-ipv6-prefix.jpg",
    "revision": "527c1e33dd1752265990fdaf101e224e"
  },
  {
    "url": "gallery/tcp-ip-router-network.jpg",
    "revision": "6d35c987bd9240b925d8e80f60331396"
  },
  {
    "url": "gallery/tcp-ip-router-subnet.jpg",
    "revision": "ac9c9b39b390465be42f7f946243b459"
  },
  {
    "url": "gallery/yao2048-0.jpg",
    "revision": "b68678816508660ea9c32a813d1d769e"
  },
  {
    "url": "gallery/yaoplayer-0.jpg",
    "revision": "acb68980b34d9666841b8939d78ee967"
  },
  {
    "url": "icons/index.html",
    "revision": "f3bc3afdac32f46865fe4d69b8e3445a"
  },
  {
    "url": "index.html",
    "revision": "10496bafe35c5f4195cf3aa5bd9bf6dc"
  },
  {
    "url": "live2d/z16/assets/moc/z16.1024/texture_00.png",
    "revision": "0a1969e9c0d0f1509604bb2b19de0783"
  },
  {
    "url": "live2d/z16/assets/moc/z16.256/texture_00.png",
    "revision": "b925d20a4fdfe8a65b09199a1224e581"
  },
  {
    "url": "live2d/z16/assets/moc/z16.512/texture_00.png",
    "revision": "96f5efb6dd9e3c69de8424b142214452"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "32ecb47334ce35fbe0ddfa82f31005bd"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "747c4b786e898b96620a473acd0b1c0e"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "bca21d8ea164d17a9880bccc02e9bbaa"
  },
  {
    "url": "records/index.html",
    "revision": "10ed035a17c5db031f8991b6d7c4ff5d"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "860248bbdb58ed0a30cf0334fb05619a"
  },
  {
    "url": "tag/index.html",
    "revision": "ab4627d28b4f8506da066c729a7a8c21"
  },
  {
    "url": "tag/List/index.html",
    "revision": "aed028b9101bd152f718a1d1b2874394"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "468aa3fae4797491f02d102597e38c9c"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "00000b8c0690f4c02ce08a550ae0b612"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4d3fb603b7e6fc7cd90f7d86b42b464b"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "137643daad31ef7c42a91ad77076308f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
