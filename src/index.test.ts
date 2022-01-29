import { writeFile, readFile } from "fs/promises";
import { ComprobanteElectronico } from "../src/ComprobanteElectronico";

let fetchFE = async function (outputJson = false) {
  const xmlFile = "sample/sample.xml";
  const xml = await readFile(xmlFile);
  const xmlString = xml.toString();
  const fe = await ComprobanteElectronico.parseXmlString(xmlString);
  if (outputJson) writeFile("sample.json", JSON.stringify(fe, null, 4));
  return fe;
};

test("Verificar Factura Electronica", async () => {
  try {
    const parsedXml = await fetchFE();
    expect(parsedXml).not.toBeNull();
  } catch (err) {
    console.error(err.message);
  }
});

test("Verificar Datos de Emisor", async () => {
  try {
    const parsedXml = await fetchFE();
    expect(parsedXml.Datos.Emisor.CorreoElectronico).toEqual(
      "dtecr.prod@einvoicing.signature-cloud.com"
    );
    expect(parsedXml.Datos.Emisor.Nombre).toEqual(
      "CORPORACION SUPERMERCADOS UNIDOS S.R.L."
    );
    expect(parsedXml.Datos.Emisor.NombreComercial).toEqual("MXM GRANJA");
  } catch (err) {
    console.error(err.message);
  }
});

test("Verificar Identificación de Emisor", async () => {
  try {
    const parsedXml = await fetchFE();
    expect(parsedXml.Datos.Emisor.Identificacion.Numero).toEqual("3102007223");
    expect(parsedXml.Datos.Emisor.Identificacion.Tipo).toEqual("02");
  } catch (err) {
    console.error(err.message);
  }
});

test("Verificar Fax de Emisor", async () => {
  try {
    const parsedXml = await fetchFE();
    expect(parsedXml.Datos.Emisor.Fax.CodigoPais).toBeUndefined();
    expect(parsedXml.Datos.Emisor.Fax.NumTelefono).toBeUndefined();
  } catch (err) {
    console.error(err.message);
  }
});

test("Verificar Teléfono de Emisor", async () => {
  try {
    const parsedXml = await fetchFE();
    expect(parsedXml.Datos.Emisor.Telefono.CodigoPais).toEqual("506");
    expect(parsedXml.Datos.Emisor.Telefono.NumTelefono).toEqual("25828400");
  } catch (err) {
    console.error(err.message);
  }
});

test("Verificar Ubicación de Emisor", async () => {
  try {
    const parsedXml = await fetchFE();
    expect(parsedXml.Datos.Emisor.Ubicacion.Barrio).toBeUndefined();
    expect(parsedXml.Datos.Emisor.Ubicacion.Canton).toEqual("09");
    expect(parsedXml.Datos.Emisor.Ubicacion.Distrito).toEqual("03");
    expect(parsedXml.Datos.Emisor.Ubicacion.Provincia).toEqual("1");
    expect(parsedXml.Datos.Emisor.Ubicacion.OtrasSenas).toEqual(
      "Parque Empresarial Forum II"
    );
  } catch (err) {
    console.error(err.message);
  }
});
