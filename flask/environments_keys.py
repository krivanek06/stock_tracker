'''
used to get news about economics
-   https://newsapi.org/pricing
-   500 requests per day
'''
NEWS_API_KEY = 'c52ae2c816d4428b8187c4e5aa70a7a0'

# -------------------------------------------------

'''
https://finnhub.io/docs/api
-	60 requests / minute

Used for:
-	Symbol + Currency + forex -> websockets
-	Quarterly report
-	IPO calendar ( this + next month ). 
-	Recomendation
-	Company news (1 week span)
-	Earnings calendar for 2 weeks

'''
FINHUB_SECRET_KEY = 'brsrc5vrh5r9dg9d77pg'

# -------------------------------------------------

'''
    https://help.quandl.com/article/68-is-there-a-rate-limit-or-speed-limit-for-api-usage
    300 calls per 10 seconds, 
    2,000 calls per 10 minutes 
    50,000 calls per day
    
    - getting data from:
        # https://www.quandl.com/data/MULTPL-S-P-500-Ratios
        # https://www.quandl.com/data/SOCSEC-Social-Security-Administration
        # https://www.quandl.com/data/RATEINF-Inflation-Rates
        # https://www.quandl.com/data/BLSI-BLS-Inflation-Prices
        # https://www.quandl.com/data/BLSI-BLS-Inflation-Prices
        # https://www.quandl.com/data/RATEINF-Inflation-Rates
        # https://www.quandl.com/data/ML-Corporate-Bond-Yield-Rates
        # https://www.quandl.com/data/BLSE-BLS-Employment-Unemployment
        # https://www.quandl.com/data/BLSN-BLS-International
        # https://www.quandl.com/data/BLSN-BLS-International
        # https://www.quandl.com/data/USMISERY/INDEX-United-States-Misery-Index
        # https://www.quandl.com/data/USTREASURY/YIELD-Treasury-Yield-Curve-Rates
        # https://www.quandl.com/data/AAII-Investor-Sentiment
        # https://www.quandl.com/data/BCHAIN-Blockchain
'''
QUANDL_SECRET_KEY = 'EngrQ3ssvi8xdyRgrU5z'

'''
Docs - https://financialmodelingprep.com/developer/docs
Calls - 300 / min
Paid subscription
'''
FINANCIAL_MODELING_API_KEY = '795742ba1ec2f519ffa9ea50967d2240'

ALPHA_VANTAGE = 'TC32TR44B7M4RJMG'
