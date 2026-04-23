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
    "revision": "1812e1cb22268f24b166fab03a5aa195"
  },
  {
    "url": "about/index.html",
    "revision": "4e15da517a33a3838f904d942bbc4bb3"
  },
  {
    "url": "archive/index.html",
    "revision": "1e9cb40f7944ccd24a1127329960123f"
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
    "url": "assets/js/11.05327860.js",
    "revision": "35e67102dff3ddd1cb79f7b93bbc0a5f"
  },
  {
    "url": "assets/js/12.99fd8e66.js",
    "revision": "c342a9fb60837887d7c51728ba25fb8b"
  },
  {
    "url": "assets/js/13.943daf59.js",
    "revision": "94e4ca3420adc2015033588ec84c3246"
  },
  {
    "url": "assets/js/14.449d9fbe.js",
    "revision": "1a88044f0e7de4762871499b43acb973"
  },
  {
    "url": "assets/js/15.1ec2187d.js",
    "revision": "16b9522e8ba69898a86d0a292d4e3664"
  },
  {
    "url": "assets/js/16.c72e151a.js",
    "revision": "2d50be1b93570047b67eb20ec8451d6d"
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
    "url": "assets/js/app.622a7f05.js",
    "revision": "194b190a814ab483f9c2720d42a64452"
  },
  {
    "url": "category/index.html",
    "revision": "15c2dba39502a6cce93ae8d0ee759917"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "ce1e02fd611319889a8a90aa7d23aa0c"
  },
  {
    "url": "codes/index.html",
    "revision": "02adebe7f788360053431dd4360b99af"
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
    "revision": "97201a6d10ace78b7b4cac435b60606f"
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
    "revision": "eec432280c73bf715fc7a17ac86745fe"
  },
  {
    "url": "index.html",
    "revision": "62b56b7df864779bdf87cfd23fe2fe47"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "6e876ae0d6f25e21d5725eac2d181aa0"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "51c7887b00a111aaaafb3027293ac127"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "13e42799e06f51ba9e438fd1d2aaf72f"
  },
  {
    "url": "records/index.html",
    "revision": "f48ed7259142213d8aa86067069ca97f"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "57a13b5a9f7e7fbf95511e2ee273847d"
  },
  {
    "url": "tag/index.html",
    "revision": "ef7d2ad98cc6ac9d59491abbf9352a34"
  },
  {
    "url": "tag/List/index.html",
    "revision": "ed753e5982802eb7dcacdadccd21457b"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "cb7a6f00e8985ec7bff24c6b0064826d"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "b9908d9fd5d3a6478ff25cf2d442777e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "cbcdd56b4b950eecb40bd1e47eeede1d"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "36a4505680ad5b0681f7fb66a47c08d3"
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
