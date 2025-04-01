addEventListener("fetch", event => {
    event.respondWith(new Response("Worker ist aktiv!", { status: 200 }));
});
