import numpy as np
from typing import Dict, List, Any
import asyncio
from datetime import datetime, timedelta
import structlog

logger = structlog.get_logger()

class RiskEngine:
    def __init__(self):
        self.risk_thresholds = {
            "low": 0.3,
            "medium": 0.6,
            "high": 0.8,
            "critical": 1.0
        }
        logger.info("Risk engine initialized (lightweight mode)")
    
    async def calculate_overall_risk(self, protocol_data: Dict[str, Any], portfolio_data: Dict[str, Any]) -> Dict[str, Any]:
        """Calculate comprehensive risk assessment"""
        try:
            # Calculate individual risk components
            liquidity_risk = await self._calculate_liquidity_risk(protocol_data)
            market_risk = await self._calculate_market_risk(protocol_data, portfolio_data)
            smart_contract_risk = await self._calculate_smart_contract_risk(protocol_data)
            counterparty_risk = await self._calculate_counterparty_risk(protocol_data)
            
            # Weighted risk calculation
            weights = {
                'liquidity': 0.25,
                'market': 0.30,
                'smart_contract': 0.25,
                'counterparty': 0.20
            }
            
            overall_risk = (
                liquidity_risk * weights['liquidity'] +
                market_risk * weights['market'] +
                smart_contract_risk * weights['smart_contract'] +
                counterparty_risk * weights['counterparty']
            )
            
            # Determine risk level
            risk_level = self._get_risk_level(overall_risk)
            
            # Calculate Value at Risk (VaR)
            var_metrics = await self._calculate_var(portfolio_data, overall_risk)
            
            # Generate recommendations
            recommendations = self._generate_recommendations(
                overall_risk, liquidity_risk, market_risk, smart_contract_risk, counterparty_risk
            )
            
            return {
                "overall_risk_score": overall_risk,
                "risk_level": risk_level,
                "risk_components": {
                    "liquidity_risk": liquidity_risk,
                    "market_risk": market_risk,
                    "smart_contract_risk": smart_contract_risk,
                    "counterparty_risk": counterparty_risk
                },
                "var_metrics": var_metrics,
                "recommendations": recommendations,
                "confidence_score": 0.85,  # Model confidence
                "timestamp": datetime.utcnow().isoformat()
            }
        except Exception as e:
            logger.error("Error calculating overall risk", error=str(e))
            raise
    
    async def _calculate_liquidity_risk(self, protocol_data: Dict[str, Any]) -> float:
        """Calculate liquidity risk based on TVL, volume, and market depth"""
        try:
            tvl = protocol_data.get('tvl', 0)
            daily_volume = protocol_data.get('daily_volume', 0)
            
            # Liquidity ratio
            liquidity_ratio = daily_volume / max(tvl, 1) if tvl > 0 else 0
            
            # Risk increases as liquidity ratio decreases
            if liquidity_ratio > 0.1:
                risk = 0.1
            elif liquidity_ratio > 0.05:
                risk = 0.3
            elif liquidity_ratio > 0.01:
                risk = 0.6
            else:
                risk = 0.9
            
            return min(risk, 1.0)
        except Exception as e:
            logger.error("Error calculating liquidity risk", error=str(e))
            return 0.5
    
    async def _calculate_market_risk(self, protocol_data: Dict[str, Any], portfolio_data: Dict[str, Any]) -> float:
        """Calculate market risk based on volatility and correlation"""
        try:
            volatility = protocol_data.get('volatility', 0.5)
            correlation = portfolio_data.get('correlation_with_market', 0.7)
            
            # Higher volatility and correlation increase risk
            market_risk = (volatility * 0.6) + (correlation * 0.4)
            
            return min(market_risk, 1.0)
        except Exception as e:
            logger.error("Error calculating market risk", error=str(e))
            return 0.5
    
    async def _calculate_smart_contract_risk(self, protocol_data: Dict[str, Any]) -> float:
        """Calculate smart contract risk based on audit status and code quality"""
        try:
            audit_status = protocol_data.get('audit_status', False)
            code_quality_score = protocol_data.get('code_quality_score', 0.5)
            time_since_deployment = protocol_data.get('days_since_deployment', 0)
            
            risk = 0.5  # Base risk
            
            if not audit_status:
                risk += 0.3
            
            if code_quality_score < 0.7:
                risk += 0.2
            
            if time_since_deployment < 30:  # Less than 30 days
                risk += 0.2
            elif time_since_deployment > 365:  # More than 1 year
                risk -= 0.1
            
            return min(max(risk, 0.0), 1.0)
        except Exception as e:
            logger.error("Error calculating smart contract risk", error=str(e))
            return 0.5
    
    async def _calculate_counterparty_risk(self, protocol_data: Dict[str, Any]) -> float:
        """Calculate counterparty risk based on protocol governance and team"""
        try:
            governance_score = protocol_data.get('governance_score', 0.5)
            team_reputation = protocol_data.get('team_reputation', 0.5)
            decentralization_level = protocol_data.get('decentralization_level', 0.5)
            
            # Lower governance and team scores increase risk
            counterparty_risk = 1.0 - (
                (governance_score * 0.4) +
                (team_reputation * 0.3) +
                (decentralization_level * 0.3)
            )
            
            return min(max(counterparty_risk, 0.0), 1.0)
        except Exception as e:
            logger.error("Error calculating counterparty risk", error=str(e))
            return 0.5
    
    async def _calculate_var(self, portfolio_data: Dict[str, Any], risk_score: float) -> Dict[str, float]:
        """Calculate Value at Risk for different time horizons"""
        try:
            portfolio_value = portfolio_data.get('total_value', 0)
            
            # VaR calculation based on risk score and historical volatility
            confidence_level = 0.95  # 95% confidence
            
            # Simplified VaR calculation (in production, use historical simulation or Monte Carlo)
            var_1d = portfolio_value * risk_score * 0.05  # 1-day VaR
            var_7d = portfolio_value * risk_score * 0.15   # 7-day VaR
            var_30d = portfolio_value * risk_score * 0.30  # 30-day VaR
            
            return {
                "var_1d": var_1d,
                "var_7d": var_7d,
                "var_30d": var_30d,
                "confidence_level": confidence_level
            }
        except Exception as e:
            logger.error("Error calculating VaR", error=str(e))
            return {"var_1d": 0, "var_7d": 0, "var_30d": 0, "confidence_level": 0.95}
    
    def _get_risk_level(self, risk_score: float) -> str:
        """Convert risk score to risk level"""
        if risk_score <= self.risk_thresholds["low"]:
            return "LOW"
        elif risk_score <= self.risk_thresholds["medium"]:
            return "MEDIUM"
        elif risk_score <= self.risk_thresholds["high"]:
            return "HIGH"
        else:
            return "CRITICAL"
    
    def _generate_recommendations(self, overall_risk: float, liquidity_risk: float, 
                                market_risk: float, smart_contract_risk: float, 
                                counterparty_risk: float) -> List[str]:
        """Generate risk mitigation recommendations"""
        recommendations = []
        
        if overall_risk > 0.7:
            recommendations.append("Consider reducing position size due to high overall risk")
        
        if liquidity_risk > 0.6:
            recommendations.append("Monitor liquidity closely - consider exit strategy")
        
        if market_risk > 0.7:
            recommendations.append("High market risk detected - consider hedging strategies")
        
        if smart_contract_risk > 0.6:
            recommendations.append("Smart contract risk elevated - verify audit status")
        
        if counterparty_risk > 0.6:
            recommendations.append("Counterparty risk high - diversify across protocols")
        
        if not recommendations:
            recommendations.append("Risk levels are acceptable - maintain current strategy")
        
        return recommendations

risk_engine = RiskEngine()