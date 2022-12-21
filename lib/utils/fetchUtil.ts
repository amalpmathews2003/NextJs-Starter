export default async function fetchUtil(
  url: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  jwt?: string,
  body?: string
) {
  return new Promise(async (resolve, reject) => {
    const config: RequestInit = {};
    const headers = {
        Authorization: `Bearer ${jwt}`,
    };
    config["method"] = method || "GET";
    if (jwt) config["headers"] = headers;
    if (body) config["body"] = JSON.stringify(body);

    try {
      const res = await fetch(url, config);
      const json = await res.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
}
