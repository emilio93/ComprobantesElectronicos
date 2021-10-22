import { ComprobanteElectronico } from "../ComprobanteElectronico";

export class NotaCredito extends ComprobanteElectronico {
  validarCondicionCampos(): boolean {
    return true;
  }
}
