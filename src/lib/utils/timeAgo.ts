export function timeAgo(date: string | Date) {
  const now = new Date().getTime();
  const value = new Date(date).getTime();

  const seconds = Math.floor((now - value) / 1000);

  if (seconds < 60) {
    return "Hace unos segundos";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `Hace ${minutes} minuto${minutes !== 1 ? "s" : ""}`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `Hace ${hours} hora${hours !== 1 ? "s" : ""}`;
  }

  const days = Math.floor(hours / 24);

  if (days < 30) {
    return `Hace ${days} día${days !== 1 ? "s" : ""}`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `Hace ${months} mes${months !== 1 ? "es" : ""}`;
  }

  const years = Math.floor(months / 12);

  return `Hace ${years} año${years !== 1 ? "s" : ""}`;
}
