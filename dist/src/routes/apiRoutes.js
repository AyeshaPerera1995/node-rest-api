"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApiController_1 = require("../controllers/ApiController");
const router = express_1.default.Router();
router.get('/hello', ApiController_1.helloWorld);
exports.default = router;
