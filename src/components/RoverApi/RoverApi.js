export const getRoverData = async (roverType, params) => {
  //create base url
  let url = new URL(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverType}/photos`
  );

  //setup params with api key
  params.api_key = process.env.REACT_APP_MARS_API_KEY;

  //formal request url
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  //handle data
  let response = await fetch(url);
  return response.json();
};

export const getRoverDataByPage = async (id, page, earth_date, rover) => {
  // handle page ids
  if (id === "next") id = page + 1;
  else if (id === "prev" && page > 1) id = page - 1;
  id = parseInt(id);

  return await getRoverData(rover, { earth_date, page: id });
};

export const getRoverDataByCamera = async (camera, earth_date, rover) => {
  // handle camera params
  let params = { earth_date };
  if (camera !== "All") params.camera = camera;

  return await getRoverData(rover, params);
};
