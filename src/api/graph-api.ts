type Arguments = {
  endpoint: string;
  body: any;
  pixelId: string;
};

/**
 * Facebook Graph API client.
 *
 * @param endpoint
 * @param body
 * @constructor
 */
const graphApi = async <T>({ endpoint = '', body = null, pixelId }: Arguments): Promise<T> => {
  const request = new Request(`https://graph.facebook.com/v13.0/${pixelId}/${endpoint}`, {
    method: 'POST',
    ...(body && { body }),
  });

  return fetch(request)
    .then((response) => response.json() as Promise<T>)
    .catch((e: Error) => {
      throw e;
    });
};

export default graphApi;

