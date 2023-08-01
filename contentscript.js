const s = document.createElement('script');
s.src = chrome.runtime.getURL('injected.js');
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

document.addEventListener("HWDataEvent", function(event) {
  //console.log("HWDataEvent handled: ", event);
  try {
    chrome.runtime.sendMessage({ from: 'HH', subject: 'data_intercepted', data: event.detail });
  } catch (e) {
    console.log(e);
  }
});