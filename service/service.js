chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: 'index.html'
  });
});

chrome.runtime.onInstalled.addListener(details => {
  if (details.reason !== "install")
    return;
  
  chrome.storage.sync.set({ whitelist: [] });
  chrome.storage.sync.set({ blacklist: [] });
});

function listFind(banList, url) {
  return banList.findIndex(ele => url.includes(ele.url));
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url = tab.url;

  chrome.storage.sync.get('whitelist', wres => {
    let whitelist = wres.whitelist;

    // If in whitelist, just do it
    let wi = listFind(whitelist, url);
    if (wi !== -1) {
      whitelist[wi].clickCount += 1;
      whitelist[wi].lastAccessed = Date.now();

      chrome.storage.sync.set({ whitelist: whitelist });
      return;
    }

    chrome.storage.sync.get('blacklist', bres => {
      let blacklist = bres.blacklist;

      // If in blacklist, update data & close
      let wi = listFind(blacklist, url);
      if (wi !== -1) {
        blacklist[wi].clickCount += 1;
        blacklist[wi].lastAccessed = Date.now();

        chrome.storage.sync.set({ blacklist: blacklist });
        chrome.tabs.remove(tabId);
        return;
      }
    });
  });
});
