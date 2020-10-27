import { writeFile, readFile } from "fs/promises";
import { ComprobanteElectronico } from "../src/ComprobanteElectronico";

let main = async function (outputJson = false) {
  const xmlFile = "sample/sample.xml";
  const xml = await readFile(xmlFile)
  const xmlString = xml.toString();
  const fe = await ComprobanteElectronico.parseXmlString(xmlString);
  if  (outputJson) writeFile('sample.json', JSON.stringify(fe,null,4));
  return fe;
}

test('Verificar Factura Electronica', () => {
  main().then((parsedXml) => {
    expect(parsedXml).not.toBeNull();
  });
});

test('Verificar Datos de Emisor', () => {
  main().then((parsedXml) => {
    expect(parsedXml.Datos.Emisor.CorreoElectronico).toEqual('dtecr.prod@einvoicing.signature-cloud.com');
    expect(parsedXml.Datos.Emisor.Nombre).toEqual('CORPORACION SUPERMERCADOS UNIDOS S.R.L.');
    expect(parsedXml.Datos.Emisor.NombreComercial).toEqual('MXM GRANJA');
  });
});

test('Verificar Identificación de Emisor', () => {
  main().then((parsedXml) => {
    expect(parsedXml.Datos.Emisor.Identificacion.Numero).toEqual('3102007223');
    expect(parsedXml.Datos.Emisor.Identificacion.Tipo).toEqual('02');
  });
});

test('Verificar Fax de Emisor', () => {
  main().then((parsedXml) => {
    expect(parsedXml.Datos.Emisor.Fax.CodigoPais).toBeUndefined();
    expect(parsedXml.Datos.Emisor.Fax.NumTelefono).toBeUndefined();
  });
});

test('Verificar Teléfono de Emisor', () => {
  main().then((parsedXml) => {
    expect(parsedXml.Datos.Emisor.Telefono.CodigoPais).toEqual('506');
    expect(parsedXml.Datos.Emisor.Telefono.NumTelefono).toEqual('25828400');
  });
});

test('Verificar Ubicación de Emisor', () => {
  main().then((parsedXml) => {
    expect(parsedXml.Datos.Emisor.Ubicacion.Barrio).toBeUndefined();
    expect(parsedXml.Datos.Emisor.Ubicacion.Canton).toEqual('09');
    expect(parsedXml.Datos.Emisor.Ubicacion.Distrito).toEqual('03');
    expect(parsedXml.Datos.Emisor.Ubicacion.Provincia).toEqual('1');
    expect(parsedXml.Datos.Emisor.Ubicacion.OtrasSenas).toEqual('Parque Empresarial Forum II');
  });
});
