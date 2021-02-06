const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");
const moment = require("moment");
newsRouter.get("", async (req, res) => {
  //   res.render("news");
  try {
    let options = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?country=us",
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    };
    let newsData = await axios.request(options);
    res.render("news", { news: newsData.data.articles, moment: moment });
  } catch (error) {
    console.error(error);
  }
});

newsRouter.post("", async (req, res) => {
  try {
    const searchQuery = req.body.search;
    let options = {
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${searchQuery}`,
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    };
    let newsData = await axios.request(options);
    res.render("news", { news: newsData.data.articles, moment: moment });
  } catch (error) {
    console.error(error);
  }
});

module.exports = newsRouter;
