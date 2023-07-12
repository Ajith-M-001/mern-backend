const express = require("express");
const SitemapGenerator = require("sitemap");
const router = express.Router();

// Add your route handlers here
const routes = [
  { path: "/4thsem/add" },
  { path: "/3rdsem/add" },
  { path: "/1stsem/add" },
  { path: "/2ndsem/add" },
  { path: "/thirdsem/all" },
  { path: "/fourthsem/all" },
  { path: "/firstsem/all" },
  { path: "/secondsem/all" },
];

router.get("/sitemap.xml", (req, res) => {
  const generator = SitemapGenerator(
    "https://sgpa-calculator-by-ajith.netlify.app/"
  );

  routes.forEach((route) => {
    generator.addUrl({ url: route.path });
  });

  const sitemap = generator.toXML();
  res.header("Content-Type", "application/xml");
  res.send(sitemap);
});

module.exports = router;
