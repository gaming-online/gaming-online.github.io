// Cloaking and Panic Button Logic
document.addEventListener('keydown', (e) => {
    // Shift + P: Redirect to Google Docs
    if (e.shiftKey && e.key.toLowerCase() === 'p') {
        window.location.href = 'https://docs.google.com/';
    }
    
    // Shift + L: Cloak tab
    if (e.shiftKey && e.key.toLowerCase() === 'l') {
        document.title = 'Google Documents';
        
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        // Google Docs Favicon
        link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
    }
});
