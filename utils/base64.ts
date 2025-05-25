import { readFile } from "node:fs/promises";
import path from "node:path";

const PNG_PREFIX = "data:image/png;base64,";

export async function imageUrl2Base64(url: string): Promise<string> {
  try {
    let image: ArrayBuffer | null = null;

    if (url.startsWith("/")) {
      return (
        PNG_PREFIX +
        (await readFile(path.join(process.cwd(), "/public" + url), {
          encoding: "base64",
        }))
      );
    } else {
      const res = await fetch(url, {
        headers: {
          reponseType: "arrayBuffer",
        },
      });
      image = await res.arrayBuffer();
    }
    if (image) {
      const _base64 = Buffer.from(image).toString("base64");
      return PNG_PREFIX + _base64;
    }
    return "";
  } catch (error) {
    return "";
  }
}
