export function getStatusLabel(status: string) {
  switch (status) {
    case "pending":
      return "🟡 Pendiente de verificar";

    case "verified":
      return "🔵 Verificado";

    case "found":
      return "🟢 Persona localizada";

    case "closed":
      return "⚫ Caso cerrado";

    default:
      return status;
  }
}
