
async function sendHttpsRequest(url, options) {
  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`HTTPS 요청 중 오류 발생: ${error.message}`);
  }
}

export default sendHttpsRequest;
