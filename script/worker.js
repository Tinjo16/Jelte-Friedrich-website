addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);

    // Falls das Verzeichnis "/Pages/family/main.html" geschützt werden soll
    if (url.pathname.startsWith("/Pages/family/main.html")) {
        const auth = request.headers.get("Authorization");

        // Nutzername und Passwort (einfacher Schutz)
        const username = "admin";
        const password = "admin";
        const encoded = btoa(`${username}:${password}`);

        if (!auth || auth !== `Basic ${encoded}`) { 
            return new Response("Unauthorized", {
                status: 401,
                headers: {
                    "WWW-Authenticate": 'Basic realm="Secure Area"'
                }
            });
        }
    }

    // Weiterleitung der Anfrage mit korrekter Redirect-Policy
    return fetch(request, { redirect: "manual" });
}
