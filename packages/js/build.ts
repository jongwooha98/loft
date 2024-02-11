// await Bun.build({
// 	entrypoints: ["./src/index.ts"],
// 	outdir: "./dist",
// });
import path from "path";

const result = await Bun.build({
	entrypoints: ["./src/index.ts"],
});
console.log(result);

for (const res of result.outputs) {
	// Can be consumed as blobs
	await res.text();

	// Bun will set Content-Type and Etag headers
	new Response(res);
	console.log(res.path);
	// Can be written manually, but you should use `outdir` in this case.
	Bun.write(path.join("dist", res.path), res);
}
