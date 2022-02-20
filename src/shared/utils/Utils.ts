export const formatDate = (date: Date): string => {
  const year = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(
    date
  );
  const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(
    date
  );
  const day = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(date);
  const hour = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit' }).format(
    date
  );
  const minute = new Intl.DateTimeFormat('pt-BR', {
    minute: '2-digit',
  }).format(date);
  return `${day} de ${month} de ${year} às ${hour}:${minute}`;
};

export const formatNumber = (number: number): string => {
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
