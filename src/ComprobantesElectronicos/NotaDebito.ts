import { ComprobanteElectronico } from "../ComprobanteElectronico";

export class NotaDebito extends ComprobanteElectronico {
  validarCondicionCampos(): boolean {
    return true;
  }
}
