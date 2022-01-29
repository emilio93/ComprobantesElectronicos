import {
  ComprobanteElectronico,
  FacturaElectronica,
} from "../ComprobanteElectronico";

export class ComprobanteElectronicoFactory {
  create(parsedXml: any): ComprobanteElectronico | null {
    if (
      typeof parsedXml?.FacturaElectronica === "object" &&
      parsedXml?.FacturaElectronica !== null
    ) {
      return new FacturaElectronica(parsedXml.FacturaElectronica);
    }
    return null;
  }
}
