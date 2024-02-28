export async function EbayClient({ keyword}) {
  // Define your eBay Finding API sandbox endpoint URL
  const sandboxApiUrl =
    "https://svcs.ebay.com/services/search/FindingService/v1";

  // Define your eBay sandbox AppID (replace 'YOUR_SANDBOX_APP_ID' with your actual eBay sandbox App ID)
  const sandboxAppId = process.env.NEXT_PUBLIC_EBAY_APP_ID;

  // Define search parameters
// const keyword = "C2960";
const sandboxEndpoint = `${sandboxApiUrl}?OPERATION-NAME=findItemsByKeywords` +
                 `&SERVICE-VERSION=1.0.0` +
                 `&SECURITY-APPNAME=${sandboxAppId}` +
                 `&RESPONSE-DATA-FORMAT=JSON` +
                 `&keywords=${encodeURIComponent(keyword)}`;

                 try {
                    const response = await fetch(sandboxEndpoint);
                    const data = await response.json();
                    // console.log(data);
                    return data;
                  } catch (err) {
                    console.error(err);
                    throw err;
                  }
}
