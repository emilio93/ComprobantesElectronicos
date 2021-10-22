import { ComprobanteElectronico } from "../ComprobanteElectronico";

export class FacturaElectronicaExportacion extends ComprobanteElectronico {
  validarCondicionCampos(): boolean {
    return true;
  }
}
