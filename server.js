const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const clientRoutes = require("./routes/client-routes");
app.use("/", clientRoutes);

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
