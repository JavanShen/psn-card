const PNG_PREFIX = "data:image/png;base64,";

export async function imageUrl2Base64(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: {
        reponseType: "arrayBuffer",
      },
    });
    const image = await res.arrayBuffer();

    if (image) {
      const _base64 = Buffer.from(image).toString("base64");
      return PNG_PREFIX + _base64;
    }
    return "";
  } catch (error) {
    return "";
  }
}
