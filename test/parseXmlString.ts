import { readFile } from "fs/promises";
import { ComprobanteElectronico } from "../src/ComprobanteElectronico";

let xmlFile;
try {
  xmlFile = process.argv[2];
} catch (error) {
  console.error('Error with file');
  process.exit(0);
}

let main = async function () {
  const xml = await readFile(xmlFile)
  const xmlString = xml.toString();
  let fe = await ComprobanteElectronico.parseXmlString(xmlString);
  return fe;
}

main().then((parsedXml) => {
  console.log(parsedXml);
});
