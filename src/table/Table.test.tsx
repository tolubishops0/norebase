import { render, screen } from "@testing-library/react";
import Table, { CoinTicketDataType } from "./Table";
import "@testing-library/jest-dom";

const mockData: CoinTicketDataType[] = [
  {
    id: "257",
    symbol: "ADA",
    name: "Cardano",
    nameid: "cardano",
    rank: 12,
    price_usd: "0.334089",
    percent_change_24h: "-2.80",
    percent_change_1h: "0.51",
    percent_change_7d: "-0.93",
    price_btc: "0.000005",
    market_cap_usd: "12010892621.71",
    volume24: 239806242.9312757,
    volume24a: 182838955.7675836,
    csupply: "35907766714.00",
    tsupply: "35983607755.528",
    msupply: "45000000000",
  },
];

describe("Table Component", () => {
  it("renders the table headers correctly", () => {
    render(<Table data={mockData} />);

    const coinHeaders = screen.getAllByText("💰coin");
    const codeHeaders = screen.getAllByText("📰code");
    const priceHeaders = screen.getAllByText("🤑price");
    const supplyHeaders = screen.getAllByText("📉total supply");

    expect(coinHeaders.length).toBe(2);
    expect(codeHeaders.length).toBe(2);
    expect(priceHeaders.length).toBe(2);
    expect(supplyHeaders.length).toBe(2);
  });

  it("renders table rows correctly with provided data", () => {
    render(<Table data={mockData} />);

    const cardanoElements = screen.getAllByText("Cardano");
    expect(cardanoElements.length).toBe(2);

    const symbolElements = screen.getAllByText("ADA");
    expect(symbolElements.length).toBe(2);

    const priceElements = screen.getAllByText("$0.334089");
    expect(priceElements.length).toBe(2);

    const supplyElements = screen.getAllByText("35983607755.528 ADA");
    expect(supplyElements.length).toBe(2);
  });

  it("displays skeleton loader when data is empty", () => {
    render(<Table data={[]} />);

    const skeletonRows = screen.getAllByTestId("skeleton-row");
    expect(skeletonRows.length).toBe(10);
  });
});
