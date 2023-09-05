// dataFetcherModule.js 파일

export async function fetchDataFromServer(serverUrl) {
  try {
    const response = await fetch(serverUrl);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return 'Failed to retrieve data.';
  }
}
