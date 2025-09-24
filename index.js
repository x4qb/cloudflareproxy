export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/proxy") {
      return new Response("not found", { status: 404 });
    }

    if (request.method !== "POST") {
      return new Response("method not allowed", { status: 405 });
    }

    let bodyData;
    try {
      bodyData = await request.json();
    } catch {
      return new Response("invalid post body", { status: 400 });
    }

    const { target, method = "GET", headers = {}, body = null } = bodyData;

    if (!target) {
      return new Response("missing target", { status: 400 });
    }

    let proxyRequest;
    try {
      proxyRequest = new Request(target, {
        method,
        headers: new Headers(headers),
        body: body ? JSON.stringify(body) : null,
      });
    } catch (err) {
      return new Response("invalid target", { status: 400 });
    }

    let response;
    try {
      response = await fetch(proxyRequest);
    } catch (err) {
      return new Response(`could not fetch the target: ${err.message}`, { status: 502 });
    }

    const respHeaders = new Headers(response.headers);
    respHeaders.set("Access-Control-Allow-Origin", "*");

    return new Response(await response.arrayBuffer(), {
      status: response.status,
      statusText: response.statusText,
      headers: respHeaders,
    });
  },
};
