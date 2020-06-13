// to run the server, make an instance of the class and invoke the listen method
import { Server } from "./server";

const server = new Server();

server.listen(port => {
    console.log(`Server is listening on http://localhost:${port}`);
});