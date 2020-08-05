// Factura Electronica
//
// Copyright © 2020 Emilio Rojas
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Las referencias se utilizarán para los siguientes casos:
//  a)Nota de crédito que elimina un documento de referencia en forma completa.
//  b)Nota de débito que elimina una nota de crédito en la referencia en forma completa.
//  c)Notas de crédito o débito que corrigen montos de otro documento.
//  d)  Factura electrónica por contingencia, sustituyendo un comprobante provisional.
//  e) Cualquier documento relacionado con la factura electrónica.
//  Nota: Se puede incluir un máximo de 10 repeticiones de información de referencia

/**
 * Nombre:        Nodo para las firmas XAdES
 * Tipo:          ds:SignatureType
 * Tamaño:
 * Descripcion:   Firma XAdES-EPES v.1.3.2. o superior.
 *                Este nodo, por medio del estándar de XAdES permite realizar varias firmas al documento XML, con el fin que el emisorpueda cumplir con lo estipulado en la normativa vigente, con relación a que todo comprobante debe de ser firmado por  el  emisor  electrónico,  y  adicionalmente  en  aquellos  casos  donde  el “Emisor-receptor-electrónico” requiera que dicho comprobantecuente  con  la firma del receptor con el objetivo de cumplir con lo establecido en la Ley 8454 denominada “Ley de certificados, firmas digitales y documentos electrónicos”, para  que  dicho  comprobante  se  convierta  en  un  título  ejecutivo  tal  como  lo establece los artículos 460 y 460 bis del código de comercio, lo pueda hacer sin ningún problema.
 *                Por otra parte todo archivo XML generado por un emisor-receptor electrónicoy  receptor  electrónico-no  emisor,  que  se  encuentre  obligado  hacer uso de comprobantes  electrónicos debe de ser enviado a la Dirección General de Tributacion para su respectiva validación una vez generado y firmado por el emisor, esto conforme lo indicado en el artículo 9, de la resolución DGT-R-48-2016 del  7 de  octubre  de  2016denominada “Comprobantes electrónicos”, no obstante el archivo XML del comprobante electrónico el cual además de contar con la firma del emisor se le incorporala firma del receptor no se requiere que sea  enviado  a  la  Dirección  General  de  Tributacion  al  ser  este  comprobante únicamente  para  uso  comercial,  ya  que  para  fines  tributarios  será  válido  el primer archivo enviado por el emisor conforme lo indicado en el artículo 9 en mención, así como sus respectivos mensajesde confirmación.
 *                ”En  caso  de  la  Factura  de  Compra la misma debe  de  ser  firmada  por  el Receptor que es quien la emite y la envía al validador.
 */
class dsSignature {
}
