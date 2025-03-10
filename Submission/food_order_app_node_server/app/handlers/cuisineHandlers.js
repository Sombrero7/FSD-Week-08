const Cuisines = require("../service/cuisineService");

const cuisines = new Cuisines();

const fetchAllCuisinesHandler = (req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
  
  try {
    // Assuming the cuisineService has a method to fetch all cuisines.
    const allCuisines = cuisines.getAllCuisines();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(allCuisines));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message }));
  }
};

const fetchCuisineByIdHandler = (req, res, cuisineId) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
  
  try {
    // Assuming the cuisineService has a method to fetch a cuisine by its ID.
    const cuisine = cuisines.getCuisineById(cuisineId);
    if (!cuisine) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Cuisine not found" }));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cuisine));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: error.message }));
  }
};

module.exports = {
  fetchAllCuisinesHandler,
  fetchCuisineByIdHandler,
};
