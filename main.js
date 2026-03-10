document.addEventListener('keydown', (e) => {
    // Shift + P: Redirect to Google Docs
    if (e.shiftKey && e.code === 'KeyP') {
        window.location.href = "https://docs.google.com/";
    }

    // Shift + L: Tab Cloaking
    if (e.shiftKey && e.code === 'KeyL') {
        document.title = "Google Docs";
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
});
