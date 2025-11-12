from web3 import Web3
from typing import Dict, List, Optional, Any
import asyncio
import aiohttp
from app.core.config import settings
import structlog

logger = structlog.get_logger()

class BlockchainService:
    def __init__(self):
        self.rpc_urls = {
            "ethereum": settings.ETHEREUM_RPC_URL,
            "polygon": settings.POLYGON_RPC_URL,
            "bsc": settings.BSC_RPC_URL,
            "arbitrum": settings.ARBITRUM_RPC_URL,
        }
        self.web3_instances = {}
        self._initialize_connections()
    
    def _initialize_connections(self):
        for chain, rpc_url in self.rpc_urls.items():
            try:
                self.web3_instances[chain] = Web3(Web3.HTTPProvider(rpc_url))
                logger.info(f"Connected to {chain}", rpc_url=rpc_url)
            except Exception as e:
                logger.error(f"Failed to connect to {chain}", error=str(e))
    
    async def get_wallet_balance(self, wallet_address: str, chain: str = "ethereum") -> Dict[str, Any]:
        try:
            w3 = self.web3_instances.get(chain)
            if not w3:
                raise ValueError(f"Chain {chain} not supported")
            
            balance_wei = w3.eth.get_balance(wallet_address)
            balance_eth = w3.from_wei(balance_wei, 'ether')
            
            return {
                "address": wallet_address,
                "chain": chain,
                "balance_wei": balance_wei,
                "balance_eth": float(balance_eth),
                "block_number": w3.eth.block_number
            }
        except Exception as e:
            logger.error("Error getting wallet balance", error=str(e))
            raise
    
    async def get_token_balance(self, wallet_address: str, token_address: str, chain: str = "ethereum") -> Dict[str, Any]:
        try:
            w3 = self.web3_instances.get(chain)
            if not w3:
                raise ValueError(f"Chain {chain} not supported")
            
            # ERC-20 ABI for balanceOf function
            erc20_abi = [
                {
                    "constant": True,
                    "inputs": [{"name": "_owner", "type": "address"}],
                    "name": "balanceOf",
                    "outputs": [{"name": "balance", "type": "uint256"}],
                    "type": "function"
                },
                {
                    "constant": True,
                    "inputs": [],
                    "name": "decimals",
                    "outputs": [{"name": "", "type": "uint8"}],
                    "type": "function"
                }
            ]
            
            contract = w3.eth.contract(address=token_address, abi=erc20_abi)
            balance = contract.functions.balanceOf(wallet_address).call()
            decimals = contract.functions.decimals().call()
            
            return {
                "address": wallet_address,
                "token_address": token_address,
                "chain": chain,
                "balance_raw": balance,
                "balance": balance / (10 ** decimals),
                "decimals": decimals
            }
        except Exception as e:
            logger.error("Error getting token balance", error=str(e))
            raise
    
    async def get_transaction_history(self, wallet_address: str, chain: str = "ethereum", limit: int = 100) -> List[Dict[str, Any]]:
        try:
            # This would typically use an indexing service like Etherscan API
            # For now, we'll return a placeholder structure
            return []
        except Exception as e:
            logger.error("Error getting transaction history", error=str(e))
            raise
    
    async def analyze_smart_contract_risk(self, contract_address: str, chain: str = "ethereum") -> Dict[str, Any]:
        try:
            w3 = self.web3_instances.get(chain)
            if not w3:
                raise ValueError(f"Chain {chain} not supported")
            
            # Basic contract analysis
            code = w3.eth.get_code(contract_address)
            
            risk_factors = {
                "has_code": len(code) > 0,
                "code_size": len(code),
                "is_verified": False,  # Would check with Etherscan API
                "proxy_pattern": False,  # Would analyze bytecode patterns
                "upgrade_pattern": False,  # Would check for upgrade mechanisms
            }
            
            # Calculate basic risk score
            risk_score = 0.0
            if not risk_factors["has_code"]:
                risk_score += 0.5
            if risk_factors["code_size"] < 1000:
                risk_score += 0.2
            if not risk_factors["is_verified"]:
                risk_score += 0.3
            
            return {
                "contract_address": contract_address,
                "chain": chain,
                "risk_score": min(risk_score, 1.0),
                "risk_factors": risk_factors
            }
        except Exception as e:
            logger.error("Error analyzing smart contract", error=str(e))
            raise

blockchain_service = BlockchainService()