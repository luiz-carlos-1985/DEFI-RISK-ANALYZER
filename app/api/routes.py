from fastapi import APIRouter, HTTPException
from typing import Dict, Any
from app.services.blockchain_service import blockchain_service
from app.services.risk_engine import risk_engine
import structlog

logger = structlog.get_logger()
router = APIRouter()

@router.post("/analyze/wallet", response_model=Dict[str, Any])
async def analyze_wallet_risk(
    wallet_address: str,
    chain: str = "ethereum"
):
    """Analyze risk for a specific wallet address"""
    try:
        # Get wallet balance and transactions
        balance_data = await blockchain_service.get_wallet_balance(wallet_address, chain)
        
        # Mock protocol data (in production, fetch from database)
        protocol_data = {
            "tvl": 1000000,
            "daily_volume": 50000,
            "volatility": 0.3,
            "audit_status": True,
            "code_quality_score": 0.8,
            "days_since_deployment": 365,
            "governance_score": 0.7,
            "team_reputation": 0.8,
            "decentralization_level": 0.6
        }
        
        portfolio_data = {
            "total_value": balance_data["balance_eth"] * 2000,  # Assume ETH price
            "correlation_with_market": 0.7
        }
        
        # Calculate risk assessment
        risk_analysis = await risk_engine.calculate_overall_risk(protocol_data, portfolio_data)
        
        return {
            "wallet_address": wallet_address,
            "chain": chain,
            "balance_data": balance_data,
            "risk_analysis": risk_analysis
        }
    except Exception as e:
        logger.error("Error analyzing wallet risk", error=str(e))
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/analyze/protocol", response_model=Dict[str, Any])
async def analyze_protocol_risk(
    protocol_address: str,
    chain: str = "ethereum"
):
    """Analyze risk for a specific DeFi protocol"""
    try:
        # Analyze smart contract risk
        contract_analysis = await blockchain_service.analyze_smart_contract_risk(protocol_address, chain)
        
        # Mock additional protocol data
        protocol_data = {
            "tvl": 5000000,
            "daily_volume": 200000,
            "volatility": 0.25,
            "audit_status": True,
            "code_quality_score": 0.9,
            "days_since_deployment": 500,
            "governance_score": 0.8,
            "team_reputation": 0.9,
            "decentralization_level": 0.7
        }
        
        portfolio_data = {
            "total_value": 100000,
            "correlation_with_market": 0.6
        }
        
        # Calculate comprehensive risk
        risk_analysis = await risk_engine.calculate_overall_risk(protocol_data, portfolio_data)
        
        return {
            "protocol_address": protocol_address,
            "chain": chain,
            "contract_analysis": contract_analysis,
            "risk_analysis": risk_analysis
        }
    except Exception as e:
        logger.error("Error analyzing protocol risk", error=str(e))
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/analyze/portfolio", response_model=Dict[str, Any])
async def analyze_portfolio_risk(
    wallet_addresses: list[str],
    chains: list[str] = ["ethereum"]
):
    """Analyze risk for an entire portfolio across multiple wallets and chains"""
    try:
        portfolio_analysis = {
            "total_value": 0,
            "wallets": [],
            "risk_summary": {},
            "diversification_score": 0,
            "recommendations": []
        }
        
        # Analyze each wallet
        for wallet in wallet_addresses:
            for chain in chains:
                try:
                    balance_data = await blockchain_service.get_wallet_balance(wallet, chain)
                    portfolio_analysis["wallets"].append({
                        "address": wallet,
                        "chain": chain,
                        "balance": balance_data
                    })
                    portfolio_analysis["total_value"] += balance_data["balance_eth"] * 2000
                except Exception as e:
                    logger.warning(f"Error analyzing wallet {wallet} on {chain}", error=str(e))
        
        # Calculate portfolio-level risk
        if portfolio_analysis["total_value"] > 0:
            protocol_data = {
                "tvl": 10000000,
                "daily_volume": 500000,
                "volatility": 0.35,
                "audit_status": True,
                "code_quality_score": 0.75,
                "days_since_deployment": 300,
                "governance_score": 0.7,
                "team_reputation": 0.8,
                "decentralization_level": 0.6
            }
            
            portfolio_data = {
                "total_value": portfolio_analysis["total_value"],
                "correlation_with_market": 0.8
            }
            
            risk_analysis = await risk_engine.calculate_overall_risk(protocol_data, portfolio_data)
            portfolio_analysis["risk_summary"] = risk_analysis
        
        return portfolio_analysis
    except Exception as e:
        logger.error("Error analyzing portfolio risk", error=str(e))
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/protocols/trending", response_model=list[Dict[str, Any]])
async def get_trending_protocols(
    limit: int = 10
):
    """Get trending DeFi protocols with risk metrics"""
    try:
        # Mock trending protocols data
        trending_protocols = [
            {
                "name": "Uniswap V3",
                "chain": "ethereum",
                "tvl": 3500000000,
                "apy": 15.5,
                "risk_score": 0.25,
                "risk_level": "LOW",
                "category": "DEX"
            },
            {
                "name": "Aave V3",
                "chain": "ethereum",
                "tvl": 8200000000,
                "apy": 8.2,
                "risk_score": 0.30,
                "risk_level": "LOW",
                "category": "Lending"
            },
            {
                "name": "Compound V3",
                "chain": "ethereum",
                "tvl": 2100000000,
                "apy": 6.8,
                "risk_score": 0.35,
                "risk_level": "MEDIUM",
                "category": "Lending"
            }
        ]
        
        return trending_protocols[:limit]
    except Exception as e:
        logger.error("Error getting trending protocols", error=str(e))
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/market/overview", response_model=Dict[str, Any])
async def get_market_overview():
    """Get DeFi market overview with risk indicators"""
    try:
        market_data = {
            "total_tvl": 45000000000,
            "24h_volume": 2500000000,
            "market_sentiment": "NEUTRAL",
            "volatility_index": 0.42,
            "risk_indicators": {
                "liquidity_crisis_probability": 0.15,
                "market_crash_probability": 0.08,
                "regulatory_risk": 0.25
            },
            "top_chains": [
                {"name": "Ethereum", "tvl": 28000000000, "dominance": 62.2},
                {"name": "BSC", "tvl": 5200000000, "dominance": 11.6},
                {"name": "Polygon", "tvl": 3800000000, "dominance": 8.4}
            ]
        }
        
        return market_data
    except Exception as e:
        logger.error("Error getting market overview", error=str(e))
        raise HTTPException(status_code=500, detail=str(e))