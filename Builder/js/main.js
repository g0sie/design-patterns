"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToolBuilder_js_1 = __importDefault(require("./ToolBuilder.js"));
const builder = new ToolBuilder_js_1.default();
builder.setName("Wooden Axe");
builder.setOre("wood");
builder.setType("axe");
const woodenAxe = builder.getResult();
woodenAxe.log();
