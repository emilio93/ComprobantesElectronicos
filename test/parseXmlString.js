const { ComprobanteElectronico } = require('../dist/ComprobanteElectronico');

const fs = require('fs').promises;

let xmlFile;
try {
  xmlFile = process.argv[2];
} catch (error) {
  console.error('Error with file');
  process.exit(0);
}

let main = async function() {
  let xmlString = await fs.readFile(xmlFile);
  xmlString = xmlString.toString()
  let parsedXml = await ComprobanteElectronico.parseXmlString(xmlString);
  return parsedXml;
}

main().then((parsedXml)=>{
  console.log(parsedXml);
});
