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
    "revision": "d9d4bc38340fb3dea3c9879d1750262b"
  },
  {
    "url": "about/index.html",
    "revision": "8bffad626ab8657cbaded8c7571334e2"
  },
  {
    "url": "archive/index.html",
    "revision": "6eb3e4e25a71e7b598c5a510666b97a6"
  },
  {
    "url": "assets/css/0.styles.c4e634ef.css",
    "revision": "62f0f238c6833ba84e9a5bc1d913ec7a"
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
    "url": "assets/js/10.792fe92b.js",
    "revision": "f4c2c67fd9039dfa43b06e0ad702e6c2"
  },
  {
    "url": "assets/js/11.af99b349.js",
    "revision": "22d6aeadacdd4904db5e797f165a1bde"
  },
  {
    "url": "assets/js/12.e504f7c1.js",
    "revision": "149863977adde5b89430fa25a16fc8e1"
  },
  {
    "url": "assets/js/13.d726d841.js",
    "revision": "ae783a76f22b5f5a354774a8ee14af56"
  },
  {
    "url": "assets/js/14.5c8b382e.js",
    "revision": "b78d713de504f5c9907b7bef9b239eea"
  },
  {
    "url": "assets/js/15.65828aed.js",
    "revision": "881e9efc9b6ab8e1d4346b58ed42b980"
  },
  {
    "url": "assets/js/16.8ce48e3c.js",
    "revision": "8b89fd6bd41e0bce8826664237bd2c8f"
  },
  {
    "url": "assets/js/17.ed31b3ce.js",
    "revision": "8436d7cd7e68a12b476371ad0cc2870b"
  },
  {
    "url": "assets/js/18.98c3cb5e.js",
    "revision": "768cdb9c1cf389fe630108f8ed51299a"
  },
  {
    "url": "assets/js/2.32db817e.js",
    "revision": "e710c384ef6a0959e3c0228a2686a079"
  },
  {
    "url": "assets/js/3.b4c3a568.js",
    "revision": "0d8a32919baac7050348076ded6a137c"
  },
  {
    "url": "assets/js/4.917ee0bf.js",
    "revision": "161e064a562e8b9a51e3b78ae3e53554"
  },
  {
    "url": "assets/js/5.4e9b0cab.js",
    "revision": "f9b0e45dcfaea69b6de193611becf15d"
  },
  {
    "url": "assets/js/6.0e71ce38.js",
    "revision": "c93d255f2e2221843e0def402ff275a4"
  },
  {
    "url": "assets/js/7.7eb0e9d2.js",
    "revision": "e48b29708cffce787df8d6b220b47388"
  },
  {
    "url": "assets/js/8.25f5cb79.js",
    "revision": "882aa82c87203eb8816fc9deef3c8adf"
  },
  {
    "url": "assets/js/9.aac8b1fe.js",
    "revision": "84bf057ef95c11f243037e0ab3ffb5a4"
  },
  {
    "url": "assets/js/app.bebf6d2a.js",
    "revision": "d348b19f6166f0fe122e484b34f4bdbb"
  },
  {
    "url": "category/index.html",
    "revision": "c6a3574d5c4427c6134e860828a5e4be"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "7bc831bece164c59d71c16e955cab263"
  },
  {
    "url": "codes/index.html",
    "revision": "97f4ec0f25b2cf9423fb1d363f9f7c7e"
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
    "revision": "7b80a2586c257c290c47a239127acc61"
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
    "revision": "5208e631215124225e62f0779309f601"
  },
  {
    "url": "index.html",
    "revision": "75ec070026c749aa2e87de853466b5a0"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "1ca3187725731f40f1642af0cf466a5d"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "38796d23494e20f6d8d584e7e1fc02d9"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "46328062cde77224052be35ae7ad3a3d"
  },
  {
    "url": "records/index.html",
    "revision": "ad30b3de5d8d57f2b341f1eebb4ba522"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "459626f4bbf35462de2ecba756c5fb14"
  },
  {
    "url": "tag/index.html",
    "revision": "3ce1543a43ea6e0b1c3f72d955c2ecda"
  },
  {
    "url": "tag/List/index.html",
    "revision": "da3604e8b1a512a5fd324b6f7789eb7b"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "a8c2116804bc85bae717aff773605937"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "0fe14cdd395631fbabdaf00d90ad1429"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1aec170fab617c4e053e32d721dd28d4"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "2daded7aaff5e77741243c78f9792d83"
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
