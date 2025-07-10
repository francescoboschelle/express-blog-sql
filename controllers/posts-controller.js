import connection from "../db/connection.js";

// GET /
function index(req, res) {
  const sql = "SELECT * FROM posts;";

  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: "Internal Server Error",
      });

    if (results.length === 0) {
      return res.status(404).json({
        error: true,
        message: "Not Found",
      });
    }

    return res.json(results);
  });
}

// GET /:d
function show(req, res) {}

// POST
function store(req, res) {}

// PUT /:id
function update(req, res) {}

// PATCH /:id
function modify(req, res) {}

// DELETE /:id
function destroy(req, res) {}

export default {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
