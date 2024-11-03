export const getTicketAction = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `https://api.coinlore.net/api/tickers/?start=${
        page * limit
      }&limit=${limit}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data?.data;
  } catch (error) {
    throw error;
  }
};
