document.addEventListener('keydown', (e) => {
    // Shift + P: Redirect to Google Docs
    if (e.shiftKey && e.key === 'P') {
        window.location.href = "https://docs.google.com/";
    }

    // Shift + L: Change Title and Favicon
    if (e.shiftKey && e.key === 'L') {
        document.title = "Google Documents";
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
        console.log("Cloak mode activated.");
    }
});
