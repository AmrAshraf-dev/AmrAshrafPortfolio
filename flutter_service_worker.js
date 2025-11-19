'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "03d3f37ba89e776a2058cde1eb3c2f62",
"assets/AssetManifest.bin.json": "7036ed5f3e2f9d618bab707147429593",
"assets/AssetManifest.json": "e0f6a2906489f4ed9e64e1c980eba30b",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/Amr%2520Ashraf%2520-%2520Senior%2520Flutter%2520Developer.pdf": "70f62abcb9be0f0b86e9ea859585eb91",
"assets/assets/images/AmrAshrafFlutterDeveloper.png": "ee78be65bbbb138eeff8d719181d00b3",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/apple_store.png": "9a7ae0dffb7df4332fe2560ae8adb44a",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/cloud_developer_cert.png": "1ca2e8a34f3acd90d81a67673b3b42be",
"assets/assets/images/cmu_cert.png": "522cfd8c2bf621d86dbbca32c7624377",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/david-cobbina-cv.pdf": "056eac309f96f0152447de93b0d9f6ab",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/FlutterLogo.png": "e1dacf68c8e19e3d28ae7f678e75e7cc",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/projects/adoodlz/adoodlz1.png": "27d36830fee131f45dcd766097ba7461",
"assets/assets/images/projects/adoodlz/adoodlz2.png": "773e6413ffe456e49ba1f22fb891a53e",
"assets/assets/images/projects/adoodlz/adoodlz3.png": "a4f652312ac9475d079dc9f94184cb38",
"assets/assets/images/projects/adoodlz/adoodlz4.png": "228dadc59572ea079ba85de0347176aa",
"assets/assets/images/projects/adoodlz/adoodlz5.png": "a22d1a8ab3317961b4bf033b77081e40",
"assets/assets/images/projects/adoodlz/adoodlz6.png": "116103b54e6593b81b768b47abb1f9c4",
"assets/assets/images/projects/adoodlz/adoodlz7.png": "a6546f6ec3e4359300c94e9b8c5c23bb",
"assets/assets/images/projects/adoodlz/adoodlz_logo.png": "b62e58c82c2993cdf4ded3a32b1ad8dd",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210057.png": "7a56e3d1bde427732e3e7fe5623b9e74",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210116.png": "9b801304ba452f6e85e87bea8f03b83f",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210138.png": "73424a390c81f7cc03315c54217721da",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210550.png": "df57fb363b603ee1b5d716fd7edd5461",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210609.png": "a9cd5325e7ae51dd88ec20aff09c81dd",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210656.png": "ea538e82b05196ce9e34e5da256c699f",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210808.png": "8e1c03aef72d9770e6b92321bc2f5f55",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210851.png": "92de2b84256233ac12d126603f701266",
"assets/assets/images/projects/adoodlz/Screenshot%25202025-08-27%2520210920.png": "85ead6b29e946be7ea518ca4637644a0",
"assets/assets/images/projects/adoodlz/screenshot.png": "25fb6e8cc7856da88dc0ac47f3cacacd",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/aerium-v2/last.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/alrashid/alrashid1.png": "a5eb36d395bffcdc8530e756443bddf2",
"assets/assets/images/projects/alrashid/alrashid10.png": "35ba59358940e2086adb0d94f78b111f",
"assets/assets/images/projects/alrashid/alrashid11.png": "842bc91cc530b7cd3e64d6d4e2ebea97",
"assets/assets/images/projects/alrashid/alrashid12.png": "4399eea2f0a91f5d1140f5f109a48c06",
"assets/assets/images/projects/alrashid/alrashid13.png": "8ab365e9226c86871d4ec321e6583620",
"assets/assets/images/projects/alrashid/alrashid14.png": "18024be50b571fe93e2dcda59b6df256",
"assets/assets/images/projects/alrashid/alrashid15.png": "a741f707b134c0fb63f765d7841da46f",
"assets/assets/images/projects/alrashid/alrashid16.png": "a68a34b6c368854d530d936ab27b78e8",
"assets/assets/images/projects/alrashid/alrashid2.png": "23428a1d26f0c46792891a9ce3e9d743",
"assets/assets/images/projects/alrashid/alrashid3.png": "56f14f6d222136063cfa0d56a70ccc15",
"assets/assets/images/projects/alrashid/alrashid4.png": "303bfcfe8f4348b83c598bb9f94ea124",
"assets/assets/images/projects/alrashid/alrashid5.png": "2f2a1746616108d15d1230814ac819de",
"assets/assets/images/projects/alrashid/alrashid6.png": "baa00a364b8d6d19f977efe202bb962c",
"assets/assets/images/projects/alrashid/alrashid7.png": "de100061ed2139fc224e8b4b75902b7d",
"assets/assets/images/projects/alrashid/alrashid8.png": "a2afb377c3380b872591ad145304be87",
"assets/assets/images/projects/alrashid/alrashid9.png": "35a0bc0ebee7b4631151b9b885a76eca",
"assets/assets/images/projects/alrashid/alrashid_cover.png": "8f66c5892f5b9eb45c54da7123627c35",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520211910.png": "1e37b8ca068ee3941cb7b4fac9a4068e",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212007.png": "390bb6bbb227228febf271355d7c00d4",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212027.png": "1de84c6bb382bafb7e0ec037799f2d37",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212049.png": "f5f466e196214700f051faf03fbf7f20",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212111.png": "c55838d64761bd1561cb982dce6a064d",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212131.png": "0d4054ba4668fd0eb004d4b47d8e2432",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212412.png": "5c6d62ce7ffc4a157bd9bc6b83c8045c",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520212443.png": "ffa32b5e0a3089712d76ec799d6d333a",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520213147.png": "c81011c9266ed09ed36bc60346c6280e",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520213321.png": "5e8c54b4198e1a14ecaf21ff336f089f",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520213350.png": "ed602977e5dc1f021a21f06939774522",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520213411.png": "e6a0fb44023c555655b0ba30853712c8",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520213859.png": "2f576e26c747beaa7b274bf9e32d23d3",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520213943.png": "f2cfaa431aa1f64a89b411fdf8819ca5",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214018.png": "502f8a0aadfb39cdc33a1e5ff6348c10",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214037.png": "deb8462cefa2c4417e745f59dd749197",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214110.png": "5459dc2dedfff28ec6f5e46d21f8235b",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214134.png": "97c4a0976979acfd33200d90fef26330",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214153.png": "64ab0679d14db68f3c06754252ee56ca",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214213.png": "af159bf80e9df9f47b01f2e5508f9d47",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214341.png": "6076a7b27f660da773f7d96affc25d78",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214436.png": "f009cae173b0e4f478fafc1144ebf370",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214525.png": "133e6f06fa86eaf22749ec95cd866140",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214551.png": "ceae320947131446c713fff5d3865c2f",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214614.png": "b7b44b6c2af3e5f1ca293bae6a838cbb",
"assets/assets/images/projects/alrashid/Screenshot%25202025-08-27%2520214640.png": "9775721d8732d6d604cac5c82a756bc9",
"assets/assets/images/projects/beatem/beatem1.png": "b1550b525ac916db24d24deff0e1894f",
"assets/assets/images/projects/beatem/beatem10.png": "26d426851ad733c443d0185d17b4450f",
"assets/assets/images/projects/beatem/beatem11.png": "794262197d314db8fcdb4f9f11cf66f1",
"assets/assets/images/projects/beatem/beatem12.png": "f380c78d4668677372febfba7237970a",
"assets/assets/images/projects/beatem/beatem13.png": "e6e0647a5b9465b747c34bbbb8f3f6ed",
"assets/assets/images/projects/beatem/beatem14.png": "bb1c0a10781d810c2f5f5f2f1238a2c6",
"assets/assets/images/projects/beatem/beatem15.png": "b71462ded30e7e41bac37f2b94b655bb",
"assets/assets/images/projects/beatem/beatem16.png": "462a8c5d87a1f96e02e050a3aa19472b",
"assets/assets/images/projects/beatem/beatem17.png": "3db193d5a73e9200738dd360043303b9",
"assets/assets/images/projects/beatem/beatem18.png": "973d9ca8cb31fafce33ea60af413ca05",
"assets/assets/images/projects/beatem/beatem19.png": "44b29423f6d3e69f8141e67ee6e03d38",
"assets/assets/images/projects/beatem/beatem2.png": "f401c3120718387362424f86525a72e4",
"assets/assets/images/projects/beatem/beatem20.png": "b8339a8a0e37c693d08dc42dd3da1f0c",
"assets/assets/images/projects/beatem/beatem21.png": "f1108c8c028024c1487319d74f4d8c68",
"assets/assets/images/projects/beatem/beatem22.png": "db8896e0ad901212466cb3d6c6c4af34",
"assets/assets/images/projects/beatem/beatem3.png": "3cac9518ecd761fa31f009f9529a9acc",
"assets/assets/images/projects/beatem/beatem4.png": "115e907826b19c7aafebb24224a130d5",
"assets/assets/images/projects/beatem/beatem5.png": "1e6be088a73d6ccdad1fb5d22edfbb8b",
"assets/assets/images/projects/beatem/beatem6.png": "22f142ef31e1a5cef431030da65b48c0",
"assets/assets/images/projects/beatem/beatem7.png": "6f21e8c4aa2a76fdb04571c673f95726",
"assets/assets/images/projects/beatem/beatem8.png": "e5ac132365f355eeb434ce8d173b6d3e",
"assets/assets/images/projects/beatem/beatem9.png": "a99240ac0f6f7bf977f3e9cc7662a6d0",
"assets/assets/images/projects/beatem/beatem_cover.png": "cdf35294f393fd3a0bf3b0698efcec06",
"assets/assets/images/projects/beautydoz/beautydoz.png": "97a526fe36edc7c988dc788c605340b7",
"assets/assets/images/projects/beautydoz/beautydoz1.png": "46cb47a0e7c7200ca421236d8f235803",
"assets/assets/images/projects/beautydoz/beautydoz2.png": "cce746fe5f55b34ad627f5354c485345",
"assets/assets/images/projects/beautydoz/beautydoz3.png": "afbc5f16bdd60acf01cb4587522bb5eb",
"assets/assets/images/projects/beautydoz/beautydoz4.png": "6d0c87098cd514d5bb720aa7791eea5a",
"assets/assets/images/projects/beautydoz/beautydoz5.png": "eb56d81900f6926b9a4fb0c595dff43d",
"assets/assets/images/projects/drop/drop_cover.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/kuwait_fund/kuwait_fund1.png": "6fdee193d7b20f5f18461bbb38d966e7",
"assets/assets/images/projects/kuwait_fund/kuwait_fund2.png": "87f951810a996464cb6a6c4d7c361881",
"assets/assets/images/projects/kuwait_fund/kuwait_fund3.png": "b04a8f8f1b2e104c63db5133444fe6e8",
"assets/assets/images/projects/kuwait_fund/kuwait_fund4.png": "05539c932e3cb19847207709c19557ee",
"assets/assets/images/projects/kuwait_fund/kuwait_fund5.png": "99060fe6f35825340588c540bba7c818",
"assets/assets/images/projects/kuwait_fund/kuwait_fund_cover.png": "96ab850c297e2829b808f77897ba94c3",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336286.png": "d4878dd9a6b64c004589a71698e11073",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336731.png": "fdf064b5285dc8a08002744a2fb83a0b",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336736.png": "d03534a6e662906838e30207e4ed4d6a",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336739.png": "72d6285ed415341c22e615f2e0bc6769",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336748.png": "7f72d294f199dc4bf9b74f4fc53051bc",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336784.png": "0b4b192a3a7b2925ac97f4d6e51e6787",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336791.png": "b73a6c5ba868fccaf42d33d1dbc0d118",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336793.png": "b5f5dc606fba9b91376588d5a362c432",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336842.png": "016bf0cf07e2c0c2ce8d5321c2f54d59",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336845.png": "271b964c4eaceb5dd629e87140b2f692",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336851.png": "9d0a8c52c295164b48761e4a4ddf63ab",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756336875.png": "23d77e0213e51a379533445f3a384dfa",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756337441.png": "d6ec44313d3306b2de142fe86cb6f0be",
"assets/assets/images/projects/kuwait_fund/Screenshot_1756337453.png": "2bd954c790a3fb5a91ad18ec4fd6a2df",
"assets/assets/images/projects/kuwait_fund/thanks.png": "13b3d8ba5876374e1752087986b3d097",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/projects/ONEDICE/onedice1.png": "ea471d813534696b143962d0de9c91ab",
"assets/assets/images/projects/ONEDICE/onedice10.png": "d85a434adb31f5ed3cc575ae402dac39",
"assets/assets/images/projects/ONEDICE/onedice11.png": "76a2642c09b4ac2a7fda19924e1decee",
"assets/assets/images/projects/ONEDICE/onedice12.png": "f15e3bcb64660e81bb654e6d068d8fcf",
"assets/assets/images/projects/ONEDICE/onedice13.png": "99bc2dc6a3a17b19c24542e61105ad19",
"assets/assets/images/projects/ONEDICE/onedice14.png": "394c94c80200f65e16684fc086289f1e",
"assets/assets/images/projects/ONEDICE/onedice15.png": "70e09ecb70ab1c91f3d80af97481ea0a",
"assets/assets/images/projects/ONEDICE/onedice16.png": "8e2e9e186d4a552f2d6478d57677d1db",
"assets/assets/images/projects/ONEDICE/onedice17.png": "42c5d0ee2b6e8c1b51ff16fbc15f40c1",
"assets/assets/images/projects/ONEDICE/onedice18.png": "85671068da6a982c7dfeccea1a5c5bb2",
"assets/assets/images/projects/ONEDICE/onedice19.png": "32810fae6ca322f1664a39a2c7c7ad38",
"assets/assets/images/projects/ONEDICE/onedice2.png": "228468979d5f739aa529b22bffecf4ca",
"assets/assets/images/projects/ONEDICE/onedice20.png": "b64e8074c6f8fb42e90a5f96868118d6",
"assets/assets/images/projects/ONEDICE/onedice21.png": "3cb95f7f4888281662c3d15f649de20c",
"assets/assets/images/projects/ONEDICE/onedice22.png": "5f2b1561c196543a98192ae8098bafdf",
"assets/assets/images/projects/ONEDICE/onedice23.jpeg": "e651c37c01b56ed194e719b14ee20045",
"assets/assets/images/projects/ONEDICE/onedice3.png": "682ad6162e6f13fca295002678c742e4",
"assets/assets/images/projects/ONEDICE/onedice4.png": "6556f9a815aa35c05697c7da34a014a8",
"assets/assets/images/projects/ONEDICE/onedice5.png": "b72d2e26f2d277c609362d395910b9df",
"assets/assets/images/projects/ONEDICE/onedice6.png": "c3c860065227773dcdd65a7af830c3ad",
"assets/assets/images/projects/ONEDICE/onedice7.png": "c024e138574947523f4b03f9701631e6",
"assets/assets/images/projects/ONEDICE/onedice8.png": "85082fe7f00644a69839300ce660ba57",
"assets/assets/images/projects/ONEDICE/onedice9.png": "f7af2c70cbbfdf7b3bdc1b782136ac6c",
"assets/assets/images/projects/ONEDICE/onedice_cover.png": "d7b0b5a3af136255c299851bf812c2c8",
"assets/assets/images/projects/ONEDICE/onedice_logo.png": "39acda5739ac1c4c774c9d5f42688b71",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/roam/roam_cover.jpeg": "a67b0ed338d81feb4cf60955c3a821b2",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/projects/saferoad/saferoad.png": "dd7b437004b70353d9532e4582246301",
"assets/assets/images/projects/saferoad/saferoad1.png": "2272e88160a3ff861a70f6f80f753ed8",
"assets/assets/images/projects/saferoad/saferoad2.png": "a695a90ff1e997392a2f967220a6979c",
"assets/assets/images/projects/saferoad/saferoad3.png": "20dc3193bdf8e38f03fc3da05af24840",
"assets/assets/images/projects/saferoad/saferoad4.png": "318f8ac1a142327993d1334111ac9cff",
"assets/assets/images/projects/saferoad/saferoad5.png": "c7886a0dbbd2c3af5b204a4fd4f0e147",
"assets/assets/images/projects/saferoad/saferoad6.png": "3a589e654979caef99952910e58758bc",
"assets/assets/images/projects/saferoad/saferoad_logo.png": "cd9389af86f0afe46ea2221c70b493f6",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "b1654b0dbb0ad1d5e3569acb985ef4aa",
"assets/NOTICES": "ad56f72121a646dc70f74e870255fd4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4138437c4c194b95da93a80984ad3aba",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"index.html": "633c60e6fbf670241ee718353ae66261",
"/": "633c60e6fbf670241ee718353ae66261",
"main.dart.js": "d5dd55a3302d6fbc3da4c4d2c0da533e",
"manifest.json": "2e28cebc1e27a999e5b0da349afad267",
"version.json": "3906fc5d38199c243ab81a45fee32c66"};
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
