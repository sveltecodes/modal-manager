import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
const pkg = require("./package.json");
export default {
    input: "src/AtButton.svelte",
    output: [
        { file: pkg.module, format: "es" },
        { file: pkg.main, format: "umd", name: "Name" },
    ],
    plugins: [svelte(), resolve()],
};
