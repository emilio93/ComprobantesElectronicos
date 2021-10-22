import { ComprobanteElectronico } from "../ComprobanteElectronico";

export class TiqueteElectronico extends ComprobanteElectronico {
  validarCondicionCampos(): boolean {
    return true;
  }
}
