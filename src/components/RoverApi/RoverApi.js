export const getRoverData = async (roverType, params) => {
  let url = new URL(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverType}/photos`
  );

  params.api_key = process.env.REACT_APP_MARS_API_KEY;
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  let response = await fetch(url);
  return response.json();
};
