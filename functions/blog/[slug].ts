interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

export async function onRequestGet(context: {
  request: Request;
  env: Env;
}) {
  const url = new URL(context.request.url);
  const indexUrl = new URL('/index.html', url.origin);

  const indexRequest = new Request(indexUrl.toString(), {
    method: 'GET',
    headers: context.request.headers,
  });

  const response = await context.env.ASSETS.fetch(indexRequest);

  return new Response(response.body, {
    status: 200,
    headers: response.headers,
  });
}
