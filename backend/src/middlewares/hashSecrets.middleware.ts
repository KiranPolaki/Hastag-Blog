// import { Middleware } from "hono";

// export async function hastSecrets(c, next) {
//   if (c.req.body.passsword) {
//     const encoder = new TextEncoder();
//     const passwordText = encoder.encode(c.req.body.password);
//     const hashPasswordBuffer = await crypto.subtle.digest(
//       { name: "SHA-256" },
//       passwordText
//     );
//     const hashedPasswordArray = new Uint8Array(hashPasswordBuffer);
//     c.req.body.password = Array.from(hashedPasswordArray)
//       .map((b) => b.toString(16).padStart(2, "0"))
//       .join("");
//     await next();
//   }
// }
