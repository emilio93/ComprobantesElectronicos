import { ComprobanteElectronico, FacturaElectronica } from "../ComprobanteElectronico";

export class ComprobanteElectronicoFactory {
  create(parsedXml: any): ComprobanteElectronico {
    let Comprobante : ComprobanteElectronico = null;
    if (typeof parsedXml?.FacturaElectronica === 'object' && parsedXml?.FacturaElectronica !== null) {
      Comprobante = new FacturaElectronica(parsedXml.FacturaElectronica);
    }
    return Comprobante;
  }
}
