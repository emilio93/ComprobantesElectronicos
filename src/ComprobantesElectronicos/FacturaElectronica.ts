import { ComprobanteElectronico } from "../ComprobanteElectronico";

export class FacturaElectronica extends ComprobanteElectronico {

  constructor(parsedXml: Object) {
    super(parsedXml);
  }

  validarCondicionCampos(): boolean {
    return true;
  }
}
