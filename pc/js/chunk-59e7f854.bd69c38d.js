(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-59e7f854"],{"0203":function(t,n,e){"use strict";e("95ae")},"0e95":function(t,n,e){"use strict";e("8e6e"),e("ac6a"),e("456d");var a=e("ade3"),s=e("5880"),o=e("ceb6"),i=e("f503"),r=e("0828");function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){Object(a.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u={name:"song",props:{songs:Array,className:String,emptyText:String,countMap:Object,showIndex:Boolean,showCover:Boolean},computed:c({},Object(s.mapGetters)({allSongs:"getAllSongs",playNow:"getPlaying",playingPercent:"getPlayingPercent",favSongMap:"getFavSongMap",playingList:"getPlayingList"})),methods:c(c({},i.a),{},{likeMusic:o.m,download:o.e,changeUrlQuery:r.a,playlistTracks:function(t,n,e,a){window.event.stopPropagation(),this.$store.dispatch("setOperation",{data:{tracks:t,op:n},type:e,platform:a})}})},p=(e("0203"),e("2877")),g=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:"list-songs "+(t.className||"")},[e("div",[t._l(t.songs,(function(n,a){return e("div",{key:n,class:"song-item "+((t.allSongs[n]||{}).url?"hasUrl":"disabled"),on:{click:function(e){return t.playMusic({id:n,arr:t.songs})}}},[t.showIndex?e("div",{staticClass:"song-order"},[t._v(t._s(a+1))]):t._e(),t.favSongMap[(t.allSongs[n]||{}).platform]&&t.favSongMap[(t.allSongs[n]||{}).platform][n]?e("div",{staticClass:"liked-item"}):t._e(),t.playNow.aId===n?e("div",{staticClass:"playing-bg",style:"width: "+100*t.playingPercent+"%"},[e("div",{staticClass:"wave-bg"}),e("div",{staticClass:"wave-bg2"})]):t._e(),t.countMap&&t.countMap[n]?e("div",{staticClass:"count-bg",style:"width: "+t.countMap[n].score+"%"}):t._e(),t.showCover?e("div",{staticClass:"song-album-img",style:"background-image: url('"+((t.allSongs[n]||{}).al&&(t.allSongs[n]||{}).al.picUrl+"?param=50y50")+"')"}):t._e(),e("div",{staticClass:"song-name"},[t._v("\n        "+t._s((t.allSongs[n]||{}).name)+"\n\n        "),t.showCover&&(t.allSongs[n]||{}).mvId?e("router-link",{staticClass:"inline-block ml_5 iconfont icon-mv",staticStyle:{"font-size":"14px","font-weight":"100"},attrs:{to:t.changeUrlQuery({id:(t.allSongs[n]||{}).mvId,from:(t.allSongs[n]||{}).platform},"/mv",!1)}}):t._e()],1),e("div",[e("div",{staticClass:"song-ar"},[!t.showCover&&(t.allSongs[n]||{}).mvId?e("router-link",{staticClass:"inline-block mr_5 iconfont icon-mv",attrs:{href:t.changeUrlQuery({id:(t.allSongs[n]||{}).mvId,from:(t.allSongs[n]||{}).platform},"/mv",!1)}}):t._e(),t._v("\n          "+t._s(((t.allSongs[n]||{}).ar||[]).map((function(t){return t.name})).join("/"))+"\n        ")],1),e("div",{staticClass:"song-operation"},[t.favSongMap[(t.allSongs[n]||{}).platform]?e("i",{class:"operation-icon operation-icon-1 iconfont icon-"+(Boolean(t.favSongMap[(t.allSongs[n]||{}).platform][n])?"like":"unlike"),on:{click:function(e){return t.likeMusic(n)}}}):t._e(),"migu"!==(t.allSongs[n]||{}).platform?e("i",{staticClass:"operation-icon operation-icon-2 iconfont icon-add",on:{click:function(e){return t.playlistTracks(n,"add","ADD_SONG_2_LIST")}}}):t._e(),(t.allSongs[n]||{}).url&&t.playingList.map[n]?e("i",{staticClass:"operation-icon operation-icon-3 iconfont icon-list-reomve",on:{click:function(e){return t.removePlaying(n)}}}):t._e(),(t.allSongs[n]||{}).url&&!t.playingList.map[n]?e("i",{staticClass:"operation-icon operation-icon-3 iconfont icon-list-add",on:{click:function(e){return t.addPlaying(n)}}}):t._e(),(t.allSongs[n]||{}).url?e("i",{staticClass:"operation-icon operation-icon-4 iconfont icon-download",on:{click:function(e){return t.download(n)}}}):t._e(),t.countMap&&t.countMap[n]?e("span",{staticClass:"played-count-num"},[t._v(t._s(t.countMap[n].count))]):t._e()])])])})),0===(t.songs||[]).length?e("div",{staticClass:"text-center mt_40"},[t._v(t._s(t.emptyText||"没啥歌曲哟"))]):t._e()],2),(t.songs||[]).length?e("div",{staticClass:"fix-play-btn",on:{click:function(n){return t.playList(t.songs)}}},[e("i",{staticClass:"iconfont icon-play"}),e("span",{staticClass:"btn-txt"},[t._v("播放列表")])]):t._e()])}),[],!1,null,null,null);n.a=g.exports},"74bf":function(t,n,e){},"95ae":function(t,n,e){},c49c:function(t,n,e){"use strict";e("74bf")},ee18:function(t,n,e){"use strict";e.r(n);e("8e6e"),e("ac6a"),e("456d");var a=e("ade3"),s=e("5880"),o=e("ceb6"),i=e("3f0b"),r=e("0828");function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}var c={name:"Album",components:{SongList:e("0e95").a},data:function(){return{selected:"songs",tabs:[{icon:"song",key:"songs",color:"red",val:"歌曲"}],info:{songs:[]},id:this.$route.query.id,mid:this.$route.query.mid,platform:this.$route.query.from||"163",baseInfo:{}}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){Object(a.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(s.mapGetters)({allSongs:"getAllSongs",playNow:"getPlaying",playingPercent:"getPlayingPercent",favSongMap:"getFavSongMap"})),watch:{$route:function(t){this.id=t.query.id,this.mid=t.query.mid,this.platform=t.query.from||"163",this.queryAlbum()}},created:function(){this.queryAlbum()},methods:{queryAlbum:function(){var t=this,n=this.platform,e=this.mid,a=this.id;this.$store.dispatch("updateShowCover",!1),Object(o.c)({api:"ALBUM",data:{id:"qq"===n?e:a,_p:n}}).then((function(n){var e=n.data;return t.baseInfo=e,Object(o.l)(e.list||[])})).then((function(n){return t.info.songs=n}))},likeMusic:o.m,playlistTracks:function(t,n,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"163";window.event.stopPropagation(),this.$store.dispatch("setOperation",{data:{tracks:t,op:n},type:e,platform:a})},handleTime:function(t){return Object(i.a)(t).str("YYYY-MM-DD")},playMusic:function(t){var n=this.$store.dispatch,e=this.allSongs[t];e.url&&(n("updatePlayNow",e),n("updatePlayingList",{list:this.info.songs}),n("updatePlayingStatus",!0))},changeUrlQuery:r.a}},u=(e("c49c"),e("2877")),p=Object(u.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"album-page-container"},[e("div",{staticClass:"album-main-info"},[e("div",[e("img",{staticClass:"album-img",attrs:{src:t.baseInfo.picUrl}}),e("div",{staticClass:"album-name"},[t._v("\n        "+t._s(t.baseInfo.name)+"\n        "),e("div",{staticClass:"album-name-alia"},[t._v(t._s((t.baseInfo.alias||[]).join("、")))]),t.baseInfo.ar?e("div",{staticClass:"album-artist"},t._l(t.baseInfo.ar,(function(n){return e("router-link",{key:n.id,attrs:{to:t.changeUrlQuery({id:n.id,mid:n.mid,from:n.platform},"#/singer",!1)}},[t._v(t._s(n.name)+" ")])})),1):t._e(),t.baseInfo.company?e("div",{staticClass:"album-company"},[t._v("发行："+t._s(t.baseInfo.company))]):t._e(),e("div",{staticClass:"album-pb-time"},[t._v(t._s(t.handleTime(t.baseInfo.publishTime)))]),e("div",{staticClass:"album-info-from"},[t._v("信息来源："+t._s({163:"网易云",qq:"企鹅音乐",migu:"咪咕～"}[t.platform]))])]),t.baseInfo.desc?e("div",{staticClass:"base-desc",domProps:{innerHTML:t._s(t.baseInfo.desc)}}):t._e()])]),e("div",{staticClass:"album-right-list"},[e("div",{staticClass:"right-select-tab-list"},t._l(t.tabs,(function(n,a){return e("div",{key:n.icon,class:"tab-item-"+a+" c-"+n.color+" "+(t.selected===n.key&&"selected"),on:{click:function(e){t.selected=n.key}}},[e("i",{class:"iconfont icon-"+n.icon}),t._v("\n        "+t._s(n.val)+"\n      ")])})),0),"songs"===t.selected?e("SongList",{attrs:{songs:t.info.songs||[]}}):t._e()],1)])}),[],!1,null,"f3466360",null);n.default=p.exports}}]);