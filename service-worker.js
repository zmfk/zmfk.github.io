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
    "revision": "3b9ca4218e8d577496f908198b2ba2f6"
  },
  {
    "url": "about/index.html",
    "revision": "21ee595df02bd9595b227d3ac099d1d9"
  },
  {
    "url": "archive/index.html",
    "revision": "8141721bc9c053d322a3b88ce0babbcf"
  },
  {
    "url": "assets/css/0.styles.b4414ee8.css",
    "revision": "fe289be992cf59429c17770e9b4604f1"
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
    "revision": "9dc784a560d2f0756dfd483bb7f74d7e"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "4336a8bbda285df76c6df998d09c21f9"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.44903107.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "e1ee01da5cd97882fbcd4b2c24cd39c3"
  },
  {
    "url": "assets/img/background.png",
    "revision": "b52da4f7c0e1bc5424245b8a0b1e79fd"
  },
  {
    "url": "assets/img/brand.a6838b12.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
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
    "url": "assets/js/10.acf97cb7.js",
    "revision": "b0daafbd621f968a0230530d957add85"
  },
  {
    "url": "assets/js/11.c18baf10.js",
    "revision": "e94d91a2c2c2bfde9b03a5df3826123e"
  },
  {
    "url": "assets/js/12.fbbe71d7.js",
    "revision": "66950c9247d6d42a28dd02db2b6efe02"
  },
  {
    "url": "assets/js/13.018c48af.js",
    "revision": "372add83155dd05645b4f5ded8731cc6"
  },
  {
    "url": "assets/js/14.6364dc7f.js",
    "revision": "f33443fd7e824f4b0f90cd7052ca9bd9"
  },
  {
    "url": "assets/js/15.71cab35f.js",
    "revision": "2aec2e3abe1b7e69cbbe6c17dc2156bb"
  },
  {
    "url": "assets/js/16.04d2b849.js",
    "revision": "852502e5157bf153aaecc430f7206984"
  },
  {
    "url": "assets/js/17.e0d25ea7.js",
    "revision": "f853c4cce7fa07fb36900a38136b67ef"
  },
  {
    "url": "assets/js/18.f6bd9907.js",
    "revision": "7495d3ecffe0fb4b69b2538d35af4d20"
  },
  {
    "url": "assets/js/2.c8d864c0.js",
    "revision": "496812ec16a2587afe68fb5bf410865f"
  },
  {
    "url": "assets/js/3.441dd978.js",
    "revision": "9ae54f7f7566331442f47f7f8867abb6"
  },
  {
    "url": "assets/js/4.04cfee7a.js",
    "revision": "4cd7ffd645d2572a5dafe9eaeba14c9a"
  },
  {
    "url": "assets/js/5.d484c843.js",
    "revision": "3f7617d09e33fd60624364927eec02b3"
  },
  {
    "url": "assets/js/6.c83e0c7c.js",
    "revision": "555da0111926f54f33a0fbe4e3ad3497"
  },
  {
    "url": "assets/js/7.e3cc9ee4.js",
    "revision": "2d4ba3e12c146b4cb091ffe41f0b13de"
  },
  {
    "url": "assets/js/8.345da64c.js",
    "revision": "ffa9f7aca03ba2b09fc9f0159bec4cef"
  },
  {
    "url": "assets/js/9.6aebb03b.js",
    "revision": "3bfc503bb25e1a25535213e66f205161"
  },
  {
    "url": "assets/js/app.6bc19831.js",
    "revision": "a53848eac85a7f8c94ae09751cf87ae2"
  },
  {
    "url": "category/index.html",
    "revision": "d370191bf15808813fe22e06b9d272b5"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "1e05c435daf2635e5854e3e88563373e"
  },
  {
    "url": "codes/index.html",
    "revision": "6b8162c14ad08c7f51a64392e7501638"
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
    "revision": "c991b2f7fa609de7cbb0b3499767bf7a"
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
    "revision": "6fadcca6ea2e19604c095064c2825f42"
  },
  {
    "url": "index.html",
    "revision": "1a3269d59ab0b3b79d5b988619305a55"
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
    "revision": "24853b4ca541d458cdded57ccbab4925"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "ba16be014c503bd812b16cfaae49ec2a"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "f0d90cbdbbb0bf0af3b48e00816b1069"
  },
  {
    "url": "records/index.html",
    "revision": "2adf44932ed7f33bf0f8715f5c644a02"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "11d6b53ff952d579f301973b0e2f941b"
  },
  {
    "url": "tag/index.html",
    "revision": "5a25edc21994dc0f4115a0948a47bd61"
  },
  {
    "url": "tag/List/index.html",
    "revision": "4a092dea99e021ebfe824022b36f8ad7"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "39442b5bc8990e268a4972bc2f6f1f1a"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "d67a3ba46538d4de8bc11d5ed3ac49d8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "dd9e309ef1ecb012ad7466a9f8583033"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "311009d59718eb24c9d0b519a2de335d"
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
