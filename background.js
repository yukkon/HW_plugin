chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.from === "HH" && request.subject === "data_intercepted") {
    let a = {};
    a[`hw_${request.data.name}`] = request.data.data;
    //console.log(a);
    chrome.storage.local.set(a);
  }
});