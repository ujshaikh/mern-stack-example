const fs = require("fs");
const path = require("path")

// Resolve file path
const filePath = path.resolve("../", "data", "file.txt")

// Read file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
		return;
	}
	console.log("File content:", data);
});