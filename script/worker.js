addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    return new Response('Hello from Cloudflare Workers!', { status: 200 })
  }
  