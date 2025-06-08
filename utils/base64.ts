import sharp from "sharp";

const PNG_PREFIX = "data:image/png;base64,";

export async function imageUrl2Base64(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: {
        reponseType: "arrayBuffer",
      },
    });
    const image = await res.arrayBuffer();

    const processor = sharp(image)
      .resize(80, 80, {
        fit: "inside",
      })
      .png({
        compressionLevel: 9, // 最高压缩级别 (0-9)
        palette: true, // 启用调色板模式
        quality: 80, // 质量提示（仅影响某些处理）
        progressive: true, // 渐进式加载
        colors: 64, // 限制颜色数量（需启用palette）
      });

    const compressedImage = await processor.toBuffer();

    if (compressedImage) {
      const _base64 = Buffer.from(compressedImage).toString("base64");
      return PNG_PREFIX + _base64;
    }
    return "";
  } catch (error) {
    return "";
  }
}
