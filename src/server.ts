import express, {Express} from "express";
import morgan from "morgan";
import routes from "./routes/index";
import http from "http";

const router: Express = express();

// Logging
router.use(morgan("dev"));

// Parse the request
router.use(express.urlencoded({extended: false}));

// Takes care of JSON Data
router.use(express.json());

// Routes
router.use("/", routes);

// Error handlers
router.use((req, res, next) => {
	const error = new Error("not found");
	return res.status(404).json({
		message: error.message
	})
});

// Server
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));