from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # API Settings
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Database
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/defi_risk_db"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379"
    
    # Blockchain RPC URLs
    ETHEREUM_RPC_URL: str = "https://mainnet.infura.io/v3/YOUR_PROJECT_ID"
    POLYGON_RPC_URL: str = "https://polygon-mainnet.infura.io/v3/YOUR_PROJECT_ID"
    BSC_RPC_URL: str = "https://bsc-dataseed.binance.org/"
    ARBITRUM_RPC_URL: str = "https://arb1.arbitrum.io/rpc"
    
    # External APIs
    COINGECKO_API_KEY: Optional[str] = None
    DEFIPULSE_API_KEY: Optional[str] = None
    ETHERSCAN_API_KEY: Optional[str] = None
    POLYGONSCAN_API_KEY: Optional[str] = None
    BSCSCAN_API_KEY: Optional[str] = None
    
    # ML Model Settings
    MODEL_UPDATE_INTERVAL: int = 3600
    RISK_THRESHOLD_HIGH: float = 0.8
    RISK_THRESHOLD_MEDIUM: float = 0.5
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 100
    
    # Monitoring
    PROMETHEUS_ENABLED: bool = True
    GRAFANA_ENABLED: bool = True
    
    # Environment
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    LOG_LEVEL: str = "INFO"
    
    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()