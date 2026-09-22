export default async function handler(req, res) {
  try {
    const file = req.query.file;

    if (!file || !file.endsWith(".pdf")) {
      return res.status(400).send("Invalid file");
    }

    const baseUrl = `https://${req.headers.host}`;
    const fileUrl = `${baseUrl}/${file}`;

    const response = await fetch(fileUrl);

    if (!response.ok) {
      return res.status(404).send("File not found");
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    const fileName =
      file.split("/").pop() || "jozve.pdf";

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(fileName)}"`
    );

    res.setHeader(
      "Content-Length",
      buffer.length
    );

    return res.status(200).send(buffer);

  } catch (error) {
    console.error(error);
    return res.status(500).send("Download error");
  }
}
