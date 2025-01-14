// This file is auto-generated by @hey-api/openapi-ts

import { client, type Options } from '@hey-api/client-fetch';

import type {
  AuthorizeData,
  AutoLoginData,
  CancelOrderData2,
  CancelOrderError,
  CancelOrderResponse2,
  ConvertPositionsData,
  ConvertPositionsError,
  ConvertPositionsResponse,
  GetBrokerageData,
  GetBrokerageError,
  GetBrokerageResponse2,
  GetExchangeTimingsData,
  GetExchangeTimingsError,
  GetExchangeTimingsResponse,
  GetFullMarketQuoteData,
  GetFullMarketQuoteError,
  GetFullMarketQuoteResponse2,
  GetHistoricalCandleData1Data,
  GetHistoricalCandleData1Error,
  GetHistoricalCandleData1Response,
  GetHistoricalCandleDataData,
  GetHistoricalCandleDataError,
  GetHistoricalCandleDataResponse,
  GetHoldingsError,
  GetHoldingsResponse2,
  GetHolidayData,
  GetHolidayError,
  GetHolidayResponse2,
  GetHolidaysError,
  GetHolidaysResponse,
  GetIntraDayCandleDataData,
  GetIntraDayCandleDataError,
  GetIntraDayCandleDataResponse,
  GetMarketDataFeedAuthorizeError,
  GetMarketDataFeedAuthorizeResponse,
  GetMarketQuoteOhlcData,
  GetMarketQuoteOhlcError,
  GetMarketQuoteOhlcResponse,
  GetMarketStatusData,
  GetMarketStatusError,
  GetMarketStatusResponse2,
  GetOptionContractsData,
  GetOptionContractsError,
  GetOptionContractsResponse,
  GetOrderBookError,
  GetOrderBookResponse2,
  GetOrderDetailsData,
  GetOrderDetailsError,
  GetOrderDetailsResponse,
  GetPortfolioStreamFeedAuthorizeData,
  GetPortfolioStreamFeedAuthorizeError,
  GetPortfolioStreamFeedAuthorizeResponse,
  GetPortfolioStreamFeedData,
  GetPositionsError,
  GetPositionsResponse,
  GetProfileError,
  GetProfileResponse2,
  GetProfitAndLossChargesData,
  GetProfitAndLossChargesError,
  GetProfitAndLossChargesResponse2,
  GetPutCallOptionChainData,
  GetPutCallOptionChainError,
  GetPutCallOptionChainResponse,
  GetTradeHistory1Data,
  GetTradeHistory1Error,
  GetTradeHistory1Response,
  GetTradeHistoryError,
  GetTradeHistoryResponse,
  GetTradesByOrderData,
  GetTradesByOrderError,
  GetTradesByOrderResponse,
  GetTradeWiseProfitAndLossDataData,
  GetTradeWiseProfitAndLossDataError,
  GetTradeWiseProfitAndLossDataResponse2,
  GetTradeWiseProfitAndLossMetaDataData,
  GetTradeWiseProfitAndLossMetaDataError,
  GetTradeWiseProfitAndLossMetaDataResponse2,
  GetUserFundMarginData,
  GetUserFundMarginError,
  GetUserFundMarginResponse2,
  LogoutError,
  LogoutResponse2,
  LtpData,
  LtpError,
  LtpResponse,
  ModifyOrderData2,
  ModifyOrderError,
  ModifyOrderResponse2,
  PlaceOrderData2,
  PlaceOrderError,
  PlaceOrderResponse2,
  TokenData,
  TokenError,
  TokenResponse2,
} from './types.gen';

export class PortfolioService {
  /**
   * Convert Positions
   * Convert the margin product of an open position
   */
  public static convertPositions(options: Options<ConvertPositionsData>) {
    return (options?.client ?? client).put<ConvertPositionsResponse, ConvertPositionsError>({
      ...options,
      url: '/v2/portfolio/convert-position',
    });
  }

  /**
   * Get Positions
   * Fetches the current positions for the user for the current day.
   */
  public static getPositions(options?: Options) {
    return (options?.client ?? client).get<GetPositionsResponse, GetPositionsError>({
      ...options,
      url: '/v2/portfolio/short-term-positions',
    });
  }

  /**
   * Get Holdings
   * Fetches the holdings which the user has bought/sold in previous trading sessions.
   */
  public static getHoldings(options?: Options) {
    return (options?.client ?? client).get<GetHoldingsResponse2, GetHoldingsError>({
      ...options,
      url: '/v2/portfolio/long-term-holdings',
    });
  }
}

export class OrderService {
  /**
   * Modify order
   * This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will be considered from the original order
   */
  public static modifyOrder(options: Options<ModifyOrderData2>) {
    return (options?.client ?? client).put<ModifyOrderResponse2, ModifyOrderError>({
      ...options,
      url: '/v2/order/modify',
    });
  }

  /**
   * Place order
   * This API allows you to place an order to the exchange via Upstox.
   */
  public static placeOrder(options: Options<PlaceOrderData2>) {
    return (options?.client ?? client).post<PlaceOrderResponse2, PlaceOrderError>({
      ...options,
      url: '/v2/order/place',
    });
  }

  /**
   * Get trades for order
   * Retrieve the trades executed for an order
   */
  public static getTradesByOrder(options: Options<GetTradesByOrderData>) {
    return (options?.client ?? client).get<GetTradesByOrderResponse, GetTradesByOrderError>({
      ...options,
      url: '/v2/order/trades',
    });
  }

  /**
   * Get trades
   * Retrieve the trades executed for the day
   */
  public static getTradeHistory(options?: Options) {
    return (options?.client ?? client).get<GetTradeHistoryResponse, GetTradeHistoryError>({
      ...options,
      url: '/v2/order/trades/get-trades-for-day',
    });
  }

  /**
   * Get order book
   * This API provides the list of orders placed by the user. The orders placed by the user is transient for a day and is cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.
   */
  public static getOrderBook(options?: Options) {
    return (options?.client ?? client).get<GetOrderBookResponse2, GetOrderBookError>({
      ...options,
      url: '/v2/order/retrieve-all',
    });
  }

  /**
   * Get order history
   * This API provides the details of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.
   *
   * The order history can be requested either using order_id or tag.
   *
   * If both the options are passed, the history of the order which precisely matches both the order_id and tag will be returned in the response.
   *
   * If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the response.
   */
  public static getOrderDetails(options?: Options<GetOrderDetailsData>) {
    return (options?.client ?? client).get<GetOrderDetailsResponse, GetOrderDetailsError>({
      ...options,
      url: '/v2/order/history',
    });
  }

  /**
   * Cancel order
   * Cancel order API can be used for two purposes:
   * Cancelling an open order which could be an AMO or a normal order
   * It is also used to EXIT a CO or OCO(bracket order)
   */
  public static cancelOrder(options: Options<CancelOrderData2>) {
    return (options?.client ?? client).delete<CancelOrderResponse2, CancelOrderError>({
      ...options,
      url: '/v2/order/cancel',
    });
  }
}

export class LoginService {
  /**
   * Get token API
   * This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.
   */
  public static token(options?: Options<TokenData>) {
    return (options?.client ?? client).post<TokenResponse2, TokenError>({
      ...options,
      url: '/v2/login/authorization/token',
    });
  }

  /**
   * Authorize API
   * This provides details on the login endpoint.
   */
  public static authorize(options: Options<AuthorizeData>) {
    return (options?.client ?? client).get<void>({
      ...options,
      url: '/v2/login/authorization/dialog',
    });
  }

  /**
   * Auto Login
   * This API provides the functionality to obtain auth token from authorization_code exchange
   */
  public static autoLogin(options: Options<AutoLoginData>) {
    return (options?.client ?? client).get<void>({
      ...options,
      url: '/v2/auth/auto-login',
    });
  }

  /**
   * Logout
   * Logout
   */
  public static logout(options?: Options) {
    return (options?.client ?? client).delete<LogoutResponse2, LogoutError>({
      ...options,
      url: '/v2/logout',
    });
  }
}

export class UserService {
  /**
   * Get profile
   * This API allows to fetch the complete information of the user who is logged in including the products, order types and exchanges enabled for the user
   */
  public static getProfile(options?: Options) {
    return (options?.client ?? client).get<GetProfileResponse2, GetProfileError>({
      ...options,
      url: '/v2/user/profile',
    });
  }

  /**
   * Get User Fund And Margin
   * Shows the balance of the user in equity and commodity market.
   */
  public static getUserFundMargin(options?: Options<GetUserFundMarginData>) {
    return (options?.client ?? client).get<GetUserFundMarginResponse2, GetUserFundMarginError>({
      ...options,
      url: '/v2/user/get-funds-and-margin',
    });
  }
}

export class TradeProfitAndLossService {
  /**
   * Get profit and loss meta data on trades
   * This API gives the data of the realised Profit and Loss report requested by a user
   */
  public static getTradeWiseProfitAndLossMetaData(options: Options<GetTradeWiseProfitAndLossMetaDataData>) {
    return (options?.client ?? client).get<
      GetTradeWiseProfitAndLossMetaDataResponse2,
      GetTradeWiseProfitAndLossMetaDataError
    >({
      ...options,
      url: '/v2/trade/profit-loss/metadata',
    });
  }

  /**
   * Get Trade-wise Profit and Loss Report Data
   * This API gives the data of the realised Profit and Loss report requested by a user
   */
  public static getTradeWiseProfitAndLossData(options: Options<GetTradeWiseProfitAndLossDataData>) {
    return (options?.client ?? client).get<GetTradeWiseProfitAndLossDataResponse2, GetTradeWiseProfitAndLossDataError>({
      ...options,
      url: '/v2/trade/profit-loss/data',
    });
  }

  /**
   * Get profit and loss on trades
   * This API gives the charges incurred by users for their trades
   */
  public static getProfitAndLossCharges(options: Options<GetProfitAndLossChargesData>) {
    return (options?.client ?? client).get<GetProfitAndLossChargesResponse2, GetProfitAndLossChargesError>({
      ...options,
      url: '/v2/trade/profit-loss/charges',
    });
  }
}

export class OptionsService {
  /**
   * Get option contracts
   * This API provides the functionality to retrieve the option contracts
   */
  public static getOptionContracts(options: Options<GetOptionContractsData>) {
    return (options?.client ?? client).get<GetOptionContractsResponse, GetOptionContractsError>({
      ...options,
      url: '/v2/option/contract',
    });
  }

  /**
   * Get option chain
   * This API provides the functionality to retrieve the option chain
   */
  public static getPutCallOptionChain(options: Options<GetPutCallOptionChainData>) {
    return (options?.client ?? client).get<GetPutCallOptionChainResponse, GetPutCallOptionChainError>({
      ...options,
      url: '/v2/option/chain',
    });
  }
}

export class MarketHolidaysAndTimingsService {
  /**
   * Get Exchange Timings on particular date
   * This API provides the functionality to retrieve the exchange timings on particular date
   */
  public static getExchangeTimings(options: Options<GetExchangeTimingsData>) {
    return (options?.client ?? client).get<GetExchangeTimingsResponse, GetExchangeTimingsError>({
      ...options,
      url: '/v2/market/timings/{date}',
    });
  }

  /**
   * Get Market status for particular exchange
   * This API provides the functionality to retrieve the market status for particular exchange
   */
  public static getMarketStatus(options: Options<GetMarketStatusData>) {
    return (options?.client ?? client).get<GetMarketStatusResponse2, GetMarketStatusError>({
      ...options,
      url: '/v2/market/status/{exchange}',
    });
  }

  /**
   * Get Holiday list of current year
   * This API provides the functionality to retrieve the holiday list of current year
   */
  public static getHolidays(options?: Options) {
    return (options?.client ?? client).get<GetHolidaysResponse, GetHolidaysError>({
      ...options,
      url: '/v2/market/holidays',
    });
  }

  /**
   * Get Holiday on particular date
   * This API provides the functionality to retrieve the holiday on particular date
   */
  public static getHoliday(options: Options<GetHolidayData>) {
    return (options?.client ?? client).get<GetHolidayResponse2, GetHolidayError>({
      ...options,
      url: '/v2/market/holidays/{date}',
    });
  }
}

export class MarketQuoteService {
  /**
   * Market quotes and instruments - Full market quotes
   * This API provides the functionality to retrieve the full market quotes for one or more instruments.This API returns the complete market data snapshot of up to 500 instruments in one go.
   */
  public static getFullMarketQuote(options?: Options<GetFullMarketQuoteData>) {
    return (options?.client ?? client).get<GetFullMarketQuoteResponse2, GetFullMarketQuoteError>({
      ...options,
      url: '/v2/market-quote/quotes',
    });
  }

  /**
   * Market quotes and instruments - OHLC quotes
   * This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.
   */
  public static getMarketQuoteOhlc(options: Options<GetMarketQuoteOhlcData>) {
    return (options?.client ?? client).get<GetMarketQuoteOhlcResponse, GetMarketQuoteOhlcError>({
      ...options,
      url: '/v2/market-quote/ohlc',
    });
  }

  /**
   * Market quotes and instruments - LTP quotes.
   * This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 1000 instruments in one go.
   */
  public static ltp(options?: Options<LtpData>) {
    return (options?.client ?? client).get<LtpResponse, LtpError>({
      ...options,
      url: '/v2/market-quote/ltp',
    });
  }
}

export class HistoryService {
  /**
   * Historical candle data
   * Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
   * 1minute: last 1 month candles till endDate
   * 30minute: last 1 year candles till endDate
   * day: last 1 year candles till endDate
   * week: last 10 year candles till endDate
   * month: last 10 year candles till endDate
   */
  public static getHistoricalCandleData(options: Options<GetHistoricalCandleDataData>) {
    return (options?.client ?? client).get<GetHistoricalCandleDataResponse, GetHistoricalCandleDataError>({
      ...options,
      url: '/v2/historical-candle/{instrumentKey}/{interval}/{to_date}',
    });
  }

  /**
   * Historical candle data
   * Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
   * 1minute: last 1 month candles till endDate
   * 30minute: last 1 year candles till endDate
   * day: last 1 year candles till endDate
   * week: last 10 year candles till endDate
   * month: last 10 year candles till endDate
   */
  public static getHistoricalCandleData1(options: Options<GetHistoricalCandleData1Data>) {
    return (options?.client ?? client).get<GetHistoricalCandleData1Response, GetHistoricalCandleData1Error>({
      ...options,
      url: '/v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}',
    });
  }

  /**
   * Intra day candle data
   * Get OHLC values for all instruments for the present trading day
   */
  public static getIntraDayCandleData(options: Options<GetIntraDayCandleDataData>) {
    return (options?.client ?? client).get<GetIntraDayCandleDataResponse, GetIntraDayCandleDataError>({
      ...options,
      url: '/v2/historical-candle/intraday/{instrumentKey}/{interval}',
    });
  }
}

export class WebsocketService {
  /**
   * Portfolio Stream Feed
   * This API redirects the client to the respective socket endpoint to receive Portfolio updates.
   */
  public static getPortfolioStreamFeed(options?: Options<GetPortfolioStreamFeedData>) {
    return (options?.client ?? client).get<void>({
      ...options,
      url: '/v2/feed/portfolio-stream-feed',
    });
  }

  /**
   * Portfolio Stream Feed Authorize
   *  This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.
   */
  public static getPortfolioStreamFeedAuthorize(options?: Options<GetPortfolioStreamFeedAuthorizeData>) {
    return (options?.client ?? client).get<
      GetPortfolioStreamFeedAuthorizeResponse,
      GetPortfolioStreamFeedAuthorizeError
    >({
      ...options,
      url: '/v2/feed/portfolio-stream-feed/authorize',
    });
  }

  /**
   * Market Data Feed
   *  This API redirects the client to the respective socket endpoint to receive Market updates.
   */
  public static getMarketDataFeed(options?: Options) {
    return (options?.client ?? client).get<void>({
      ...options,
      url: '/v2/feed/market-data-feed',
    });
  }

  /**
   * Market Data Feed Authorize
   * This API provides the functionality to retrieve the socket endpoint URI for Market updates.
   */
  public static getMarketDataFeedAuthorize(options?: Options) {
    return (options?.client ?? client).get<GetMarketDataFeedAuthorizeResponse, GetMarketDataFeedAuthorizeError>({
      ...options,
      url: '/v2/feed/market-data-feed/authorize',
    });
  }
}

export class PostTradeService {
  public static getTradeHistory1(options: Options<GetTradeHistory1Data>) {
    return (options?.client ?? client).get<GetTradeHistory1Response, GetTradeHistory1Error>({
      ...options,
      url: '/v2/charges/historical-trades',
    });
  }
}

export class ChargeService {
  /**
   * Brokerage details
   * Compute Brokerage Charges
   */
  public static getBrokerage(options: Options<GetBrokerageData>) {
    return (options?.client ?? client).get<GetBrokerageResponse2, GetBrokerageError>({
      ...options,
      url: '/v2/charges/brokerage',
    });
  }
}
