"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const apiRoutes_1 = __importDefault(require("./src/routes/apiRoutes"));
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const logger_1 = require("./src/middleware/logger");
const errorHandler_1 = require("./src/middleware/errorHandler");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use(logger_1.logger);
app.use('/api', apiRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use(errorHandler_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
