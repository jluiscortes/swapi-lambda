import app from "./server/server";
import serverless from "serverless-http";

//switch to 3000 for local testing or default port for lambda

app.listen(8080, () => console.log("Server running on port 8080"));
//export const handler = serverless(app);
