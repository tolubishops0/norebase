import Skeleton from "react-loading-skeleton";

interface TableDataType {
  data: CoinTicketDataType[];
}

export default function Table({ data }: TableDataType) {
  return (
    <table className="w-full ">
      <thead className="hidden md:table-header-group">
        <tr>
          <th className="text-left text-sm pl-4 capitalize pb-2 w-[30%]">
            💰coin
          </th>
          <th className="text-left text-sm pl-4 capitalize pb-2 w-[20%]">
            📰code
          </th>
          <th className="text-left text-sm pl-4 capitalize pb-2 w-[20%]">
            🤑price
          </th>
          <th className="text-left text-sm pl-4 capitalize pb-2 w-[30%]">
            📉total supply
          </th>
        </tr>
      </thead>

      <tbody className="">
        {data && data?.length > 0 ? (
          data.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 ? "bg-white" : "bg-gray-200"}`}>
              {/* DISPLAY ON MOBILE */}
              <td colSpan={4} className="block md:hidden p-4">
                <div className="flex flex-wrap flex-row items-center h-[8.5rem]">
                  <div className="flex flex-col w-1/2">
                    <span className="font-bold capitalize">💰 coin:</span>
                    <span className="font-medium ">{item.name}</span>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <span className="font-bold capitalize">📰 code:</span>
                    <span className="font-medium ">{item.symbol}</span>
                  </div>
                  <div className="flex flex-col w-1/2 ">
                    <span className="font-bold capitalize">🤑 price:</span>
                    <span className="font-medium">${item.price_usd}</span>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <span className="font-bold capitalize">
                      📉 total supply:
                    </span>
                    <span className="font-medium">
                      {item.tsupply} {item.symbol}
                    </span>
                  </div>
                </div>
              </td>
              {/* DISPLAY ON DESKTOP */}
              <td className=" hidden md:table-cell pl-4 w-[30%] h-[2.5rem] text-[#1f1e1e] font-medium text-sm capitalize ">
                {item.name}
              </td>
              <td className=" hidden md:table-cell pl-4 w-[20%] text-[#1f1e1e] font-medium text-sm capitalize">
                {item.symbol}
              </td>
              <td className="hidden md:table-cell pl-4 w-[20%] text-[#1f1e1e] font-medium text-sm capitalize">
                ${item.price_usd}
              </td>
              <td className=" hidden md:table-cell pl-4 w-[30%]  text-[#1f1e1e] font-medium text-sm capitalize">
                {item.tsupply} {item.symbol}
              </td>
            </tr>
          ))
        ) : (
          <SkeletonComponent />
        )}
      </tbody>
    </table>
  );
}

const SkeletonComponent = () => {
  const skeletonLoader = Array.from({ length: 10 }, (_, index) => (
    <tr key={index} className={`${index % 2 ? "bg-white" : "bg-gray-200"}`}>
      <td colSpan={4} className="h-[10rem] md:h-[2.5rem] w-[25%]">
        <Skeleton width={"100%"} height={"100%"} />
      </td>
    </tr>
  ));
  return <>{skeletonLoader}</>;
};

export interface CoinTicketDataType {
  csupply: string;
  id: string;
  market_cap_usd: string;
  msupply: string;
  name: string;
  nameid: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  symbol: string;
  tsupply: string;
  volume24: number;
  volume24a: number;
}
