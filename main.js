document.addEventListener('keydown', (e) => {
    // Shift + P: Panic Redirect
    if (e.shiftKey && e.code === 'KeyP') {
        window.location.href = "https://docs.google.com/";
    }

    // Shift + L: Stealth Mode
    if (e.shiftKey && e.code === 'KeyL') {
        document.title = "Google Docs";
        let icon = document.querySelector("link[rel*='icon']") || document.createElement('link');
        icon.type = 'image/x-icon';
        icon.rel = 'shortcut icon';
        icon.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
        document.getElementsByTagName('head')[0].appendChild(icon);
    }
});

// Helper for dynamic content: Refresh Lucide icons
function refreshIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}
