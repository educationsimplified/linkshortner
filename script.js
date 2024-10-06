async function shortURL() {
    const urlInput = document.getElementById("url").value;

    if (!urlInput) {
        document.getElementById('result').innerHTML = "Please enter a URL!";
        return;
    }

    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlInput)}`);
        if (response.ok) {
            const shortUrl = await response.text();
            document.getElementById('result').innerHTML = `
                Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
        } else {
            document.getElementById('result').innerHTML = "Error shortening URL. Please try again.";
        }
    } catch (error) {
        document.getElementById('result').innerHTML = "Error: Unable to shorten URL. Please check your input and try again.";
    }
}
