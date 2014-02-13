chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html",
    {  frame: "none",
       id: "framelessWinID",
       bounds: {
         width: 700,
         height: 700,
         left: 600
       },
       minWidth: 890,
       minHeight: 500
    }
  );
});