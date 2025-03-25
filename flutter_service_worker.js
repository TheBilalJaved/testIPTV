'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6e50838f3f5e2e5a1f6de24765d161a5",
"version.json": "08140ab6ddfe8b8d14102cb0609a5967",
"index.html": "9213bd47604c6134f1acf5add36172a6",
"/": "9213bd47604c6134f1acf5add36172a6",
"main.dart.js": "ba505cd3e13b3adcad8b2aa6cf83d91d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a1fe08479e02d78d54eaa3575fb942f1",
"assets/AssetManifest.json": "55c364ba734d7dd1bababeb2cf42aaec",
"assets/NOTICES": "ab454aeb97b5e5aedf3174cdd0b2d9d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "56fc57f28b81869f9b100ff17fbfb654",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/l10n/intl_ko.arb": "5c85fe2e294406bac437509e5b5ad4d6",
"assets/lib/l10n/intl_es.arb": "f9f79c8376a0cfe4268f0e45912688ee",
"assets/lib/l10n/intl_fi.arb": "4c059d4cc1e4a8b13e82f3a3787146cd",
"assets/lib/l10n/intl_da.arb": "57b1bfbc024ad07f5c917c68d091e959",
"assets/lib/l10n/intl_hu.arb": "8cb59ebf73766d9bb07e9c838879dcd5",
"assets/lib/l10n/intl_id.arb": "d3334165eec7bdaa18e9a07521ac6647",
"assets/lib/l10n/intl_qu.arb": "9d4dd1fd824466b166c3c1f942be8672",
"assets/lib/l10n/intl_ro.arb": "55beb901bd91ec87aaabc59715cc492a",
"assets/lib/l10n/intl_sk.arb": "d588599a7cb203b48d75c0468c050282",
"assets/lib/l10n/intl_hr.arb": "2a472af4aeadff72a747dff1adab92b5",
"assets/lib/l10n/intl_he.arb": "fcb71466af781389ee94e14884908b29",
"assets/lib/l10n/intl_pt_BR.arb": "42fd6be6d7fb4c074a20e7ea916d4436",
"assets/lib/l10n/intl_eu.arb": "685e7bf555fbe6c4144f9610c3af745a",
"assets/lib/l10n/intl_pt.arb": "43f27a1de010e1bdfe5350fb375508a3",
"assets/lib/l10n/intl_et.arb": "a49123339788bae207910cfe4ae8c7d4",
"assets/lib/l10n/intl_de.arb": "00b9afd707dc8d45caebf5355a28fee2",
"assets/lib/l10n/intl_sl.arb": "62112fd2d29275e5a8dc24b7c88ef054",
"assets/lib/l10n/intl_kk.arb": "bf14f7bc48e816edcce0d19d8ae6878a",
"assets/lib/l10n/intl_it.arb": "8222df8353963fad15eb5c3a72cd2a8e",
"assets/lib/l10n/intl_cs.arb": "0388926ec733c751e586e51ebd565d52",
"assets/lib/l10n/intl_am.arb": "51f57705bb668d0036a599a3cc5d8cb4",
"assets/lib/l10n/intl_az.arb": "ef283dc11db8bd41e2118a028809ffaa",
"assets/lib/l10n/intl_be.arb": "9f473b8aa07ed80fb7ac2df08afca06d",
"assets/lib/l10n/intl_ca.arb": "4a5f87ccc27108ddbc945f9dfd00334e",
"assets/lib/l10n/intl_bg.arb": "9af4eda8552b14dbedb002292b88266f",
"assets/lib/l10n/intl_lv.arb": "e557844fedd69a5576d6ec000f7b7a0c",
"assets/lib/l10n/intl_af.arb": "a570056eaaf5f34d9d0cefeeef7fd0cf",
"assets/lib/l10n/intl_ms.arb": "88d00eb9e90f328c06468aa74baac201",
"assets/lib/l10n/intl_ar.arb": "33ead52826caeec6b714ad0fc995eea5",
"assets/lib/l10n/intl_tr.arb": "3d92de29861c6f4d6ec0f9d2f3f92dce",
"assets/lib/l10n/intl_no.arb": "3b91072164d6be3ec26ced3241c0bf34",
"assets/lib/l10n/intl_ur.arb": "f8fae7300b288df5a1c3c0edd978bb2c",
"assets/lib/l10n/intl_ga_IE.arb": "811119955cc333ed07aea8dbd8110a50",
"assets/lib/l10n/intl_nl.arb": "9153c6f72958ec7b14a9ee4bca38706e",
"assets/lib/l10n/intl_zh.arb": "efe120c776f7a61f07ff0c2c1f23b31a",
"assets/lib/l10n/intl_bn.arb": "5a831658ad2d07bc6ad1859e81645ddb",
"assets/lib/l10n/intl_fa.arb": "3fe314071e3c086be9fb03af1d45a507",
"assets/lib/l10n/intl_pl.arb": "ac38544fd1d40b189bac58ba68906f3e",
"assets/lib/l10n/intl_sv.arb": "937cef4fd560a05092069e7000f1c2ec",
"assets/lib/l10n/intl_el.arb": "2f257529d2816c45e17dade8d58b6875",
"assets/lib/l10n/intl_ja.arb": "daa24b5faffe5eb3f73c1c6674fe549c",
"assets/lib/l10n/intl_hi.arb": "55f8fa05537b38bb61a36e3a8ec7cad0",
"assets/lib/l10n/intl_en.arb": "79cdcf80cad0a79897974a71d7bca413",
"assets/lib/l10n/intl_ru.arb": "ef6a9fb38be4e7c9cac4b088edbb246b",
"assets/lib/l10n/intl_sq.arb": "591f830a6b26efaf75a4b5b273131d46",
"assets/lib/l10n/intl_sr.arb": "a6c10215e475f4add32975c2e32d3774",
"assets/lib/l10n/intl_fr.arb": "203ddfc41d9bb481988a71673ea3f26b",
"assets/lib/l10n/intl_ku.arb": "c3a68ab5ecedaf0fb39b1054c3d053ee",
"assets/AssetManifest.bin": "f3bc70c5980fa5f80be6aacc89343490",
"assets/fonts/MaterialIcons-Regular.otf": "1758c40ff5d0e5b43ea14f16a10ebbe1",
"assets/assets/movies.png": "609d80faf90d6c818159eeb0024882ea",
"assets/assets/timeformat.png": "c989c57d29c45e221dc8454cd3e3b868",
"assets/assets/series.png": "af77db833352f042fcb6cb99186957f0",
"assets/assets/cast.png": "283a228ec2db1c838900c0b4676c1344",
"assets/assets/epg.png": "05ea57b7ad388f7d1c83bf5a4c607b62",
"assets/assets/downloadbutton.png": "c90c8c009df5c82a19452dfce343c5c8",
"assets/assets/download.png": "a7069a7030dc679ad21f8cc78eb72125",
"assets/assets/question.png": "642b274dcd4820a78c382163a778c67c",
"assets/assets/externalplayer.png": "a6d39cd98fd74623e3c41e75c411a9d6",
"assets/assets/noposter.png": "599e3aaa7959a9aab60b31f6d04d25ea",
"assets/assets/speed.png": "0d5118f5408f2c585f88fcca6c94e48e",
"assets/assets/recording.png": "0a976bcbda9b27eb2c10abfab9348ed9",
"assets/assets/logout.png": "f9b5f98847de6b4f439d68ee0989326a",
"assets/assets/vlc.png": "b17553289708460c6ad1b4f137204e9e",
"assets/assets/home.png": "9dd13a608253959e521dd8868a61f0a4",
"assets/assets/user.png": "e654161a95b279f28a0c36ceeb7f4557",
"assets/assets/logotrans.png": "b868c97c50c90c183321d1ef7c1a8c45",
"assets/assets/search.png": "4236e4e74988abbb3a9105346d93da2e",
"assets/assets/streamformat.png": "99af2d8be544bb4a5a67f9cd44c5a04f",
"assets/assets/layout6.png": "80f2cdd60322939f772073640536e3a7",
"assets/assets/folder.png": "db7431afc541a00144c4b6a668113139",
"assets/assets/ic_power.png": "faa190b334e14542d1955c6d1a32c35e",
"assets/assets/layout5.png": "a0d6bfa17c4eba18e32cfdb932805bb5",
"assets/assets/layout4.png": "acc2c2ba14fc738dd8233d1750d09cfc",
"assets/assets/gom.png": "ef5f6919b99620af6ed3317c8e8d8248",
"assets/assets/multiscreen.png": "87266f1a7793484e57cda9cdaa9148e4",
"assets/assets/settingicn.png": "1a7dd4074a7b272105702045a86659cb",
"assets/assets/logo.png": "6e426e526dac8ca892598408eb3fe9fd",
"assets/assets/nocover.png": "4a50c20cf879ea0d293517ec951cfe99",
"assets/assets/cencalbtn.png": "00c3b8bfc31293259d7be0d1cfa18239",
"assets/assets/downloadicn.png": "f36eb2615331cddce15c86b9d5edec8b",
"assets/assets/installepg.png": "e264e8a4beefd8fe59f4c9583b5dda74",
"assets/assets/changevideo.png": "393073a00229b85880909cf27fefad57",
"assets/assets/layout1.png": "5e964df45b4ee7c7a12cb4ad2915492a",
"assets/assets/sort.png": "d6dce911bc5ffc22cfe1257c420647a2",
"assets/assets/layout3.png": "de92965dc990ea3e8fb3c4607513a4ee",
"assets/assets/layout2.png": "d1132a7cca0226c01987aa5cce828785",
"assets/assets/clock.png": "a73bffc36e922d4005bdfc4995792269",
"assets/assets/automation.png": "6a25c91b9fd634c316ae2e85ea07a1cd",
"assets/assets/mpc-hc.png": "fae1da7a98a3b276887493429e248300",
"assets/assets/rec.png": "6d6055c502c4f8186957cc168c1aa101",
"assets/assets/about.png": "717cc17ef94107ba45f121e7c15892b4",
"assets/assets/rating.png": "27fd3a74c1576b74384a21a9d417d660",
"assets/assets/play.png": "2b69268fe6ed91e72fe44d706b08846a",
"assets/assets/downloadbtn.png": "ef2fe3f8fbff9a5f3d00c3a7073cd5bb",
"assets/assets/setting.png": "4bb2f876da34495d0a8b5a7db3a8858b",
"assets/assets/white.png": "3b0f9c82facd56c4615883303ee22d08",
"assets/assets/livetv.png": "0a3258cb2006c8359bbafe2ec6373361",
"assets/assets/catchup.png": "133841435123e7365c0bf0a0f9afbe8d",
"assets/assets/refresh.png": "d8a556db1095f44ffa3155ffe896dd5d",
"assets/assets/img_account_status.png": "409460e7b42558295bfaf16067c0bf2b",
"assets/assets/player.png": "56ad6a7f7dac526c949f23eaa286f01e",
"assets/assets/bg.png": "1ade42a34ad48bc2e0b34a6cb7002933",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
