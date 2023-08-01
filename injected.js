const i_send = function(e) {
  let req = JSON.parse(e.requestBody);
  let res = JSON.parse(e.responseBody);
  let d = req.calls.map(i => ( {name: i.name, data: res.results.find(r => r.ident === i.ident)?.result?.response} ));
  
  let requests = ['userGetInfo', 'clanGetInfo', 'clanWarGetInfo', 'clanWarGetDefence', 'clanGetOnline', 'clanRaid_logBoss', 'crossClanWar_getAttackMap', 'crossClanWar_getDefenceMap', 'crossClanWar_getDefencePlan']
  d = d.filter(i => requests.includes(i.name));
  d.forEach(c => {
    //let a = {};
    //a[`hw_${c.name}`] = c.data;
    //console.log(a);
    //chrome.storage.local.set({`hw_${c.name}`: c.data});
    let e = new CustomEvent("HWDataEvent", { detail: {name: c.name, data: c.data} });
    document.dispatchEvent(e);
  })
};

(function(xhr) {
  var e = XMLHttpRequest.prototype, s = e.open, t = e.send;
  e.open = function(e, t) {
    return this._method = e, this._url = t, s.apply(this, arguments);
  },

  e.send = function(r) {
    return this.addEventListener("load", function() {
      if ("blob" !== this.responseType && "arraybuffer" !== this.responseType && this.responseText) {
        var t = this._url && this._url.toLowerCase();
        let e = "";
        if (t && t == "https://heroes-wb.nextersglobal.com/api/") {
          if (r) {
            if ("string" == typeof r)
              e = r;
            else if ("object" == typeof r && "POST" === this._method) {
              try {
                var s = new TextDecoder("utf-8");
                e = s.decode(r)
              } catch (e) {
                console.log("fail to decode post request data", e)
              }
              if ("" === e)
                try {
                  s = new TextDecoder("utf-8");
                  e = s.decode(r.bytes),
                  console.log("Decoded: " + e)
                } catch (e) {
                  console.log("fail to decode post request data", e)
                }
            }
          }
          i_send({requestBody: e, responseBody: this.responseText});
        }
      }
    }),
    t.apply(this, arguments)
  }
})(XMLHttpRequest);
