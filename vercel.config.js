module.exports = {
    rewrites: async (req, res) => {
      if (req.method === "GET") {
        const url = req.url.replace(/^\/unidade/, "/unidade/servico");
        res.setHeader("Location", url);
        res.statusCode = 301;
        res.end();
      }
    },
  };
  