import fetch from "node-fetch";
import * as queryString from "query-string";

export async function getAccessTokenFromCode(code: any) {
  const postData = queryString.stringify({
    client_id:
      "1035336952326-2cpa0nhka8trjun6nmtgvtdtrc51212i.apps.googleusercontent.com",
    client_secret: "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",
    grant_type: "authorization_code",
    redirect_uri: `http://localhost:${3003}/google/callback`,
    code,
  });

  const { access_token }: any = await fetch(
    "https://oauth2.googleapis.com/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": postData.length + "",
      },
      body: postData,
    }
  ).then((response) => response.json());

  return access_token;
}
