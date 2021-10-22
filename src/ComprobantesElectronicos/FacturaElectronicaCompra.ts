import { ComprobanteElectronico } from "../ComprobanteElectronico";

export class FacturaElectronicaCompra extends ComprobanteElectronico {
  validarCondicionCampos(): boolean {
    return true;
  }
}
