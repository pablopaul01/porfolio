import * as yup from "yup";

export const FORM_SCHEMA = yup.object({
  user_name: yup.string().matches(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/, "Los nombres no son válidos").required("El nombre completo es requerido"),
  user_email: yup.string().matches(/^[a-zA-Z0-9._%+-ñáéíóúüÜ]+@[a-zA-Z0-9.-]+\.[a-zA-ZñáéíóúüÜ]{2,}$/i, "El email no es válido").required("El email es requerido"),
  message: yup.string().min(15,"Debe ingresar al menos 15 carácteres").max(200,"Supero la cantidad máxima de carácteres").required("El mensaje es requerido")
});