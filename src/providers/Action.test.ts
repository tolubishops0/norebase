import { getTicketAction } from "./Actions";

global.fetch = jest.fn() as jest.Mock;

describe("getTicketAction", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data correctly when response is successful", async () => {
    const mockData = [
      {
        id: "54683",
        symbol: "TON",
        name: "TON Coin",
        nameid: "toncoin",
        rank: 11,
        price_usd: "4.85",
        percent_change_24h: "0.23",
        percent_change_1h: "0.47",
        percent_change_7d: "-1.31",
        price_btc: "0.000070",
        market_cap_usd: "12208728418.66",
        volume24: 80380934.62393034,
        volume24a: 60958245.83798192,
        csupply: "2516594683.00",
        tsupply: "5047558528",
        msupply: "5047558528",
      },
    ];
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: mockData }),
    } as Response);

    const result = await getTicketAction(1, 2);

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.coinlore.net/api/tickers/?start=2&limit=2"
    );
  });

  it("should throw an error when the network response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    } as Response);

    await expect(getTicketAction(1, 2)).rejects.toThrow(
      "Network response was not ok"
    );
    expect(fetch).toHaveBeenCalledWith(
      "https://api.coinlore.net/api/tickers/?start=2&limit=2"
    );
  });

  it("should throw an error when fetch fails entirely", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Fetch failed"));

    await expect(getTicketAction(1, 2)).rejects.toThrow("Fetch failed");
  });
});
