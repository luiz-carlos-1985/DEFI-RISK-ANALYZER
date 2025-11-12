# 🚀 Production Deployment Guide

## Prerequisites
- Kubernetes cluster (GKE, EKS, or AKS)
- PostgreSQL 15+ (managed service recommended)
- Redis 7+ (managed service recommended)
- Domain with SSL certificate
- Stripe account for payments

## Quick Deploy

### 1. Configure Secrets
```bash
kubectl create secret generic defi-secrets \
  --from-literal=database-url="postgresql://..." \
  --from-literal=redis-url="redis://..." \
  --from-literal=stripe-key="sk_live_..."
```

### 2. Deploy Application
```bash
kubectl apply -f kubernetes/deployment.yaml
```

### 3. Configure DNS
Point your domain to the LoadBalancer IP:
```bash
kubectl get service defi-risk-analyzer-service
```

### 4. Enable SSL
```bash
kubectl apply -f kubernetes/ingress-ssl.yaml
```

## Scaling

### Auto-scaling Configuration
- Min replicas: 3
- Max replicas: 50
- CPU threshold: 70%
- Memory threshold: 80%

### Manual Scaling
```bash
kubectl scale deployment defi-risk-analyzer-api --replicas=10
```

## Monitoring

### Prometheus Metrics
```
http://your-domain/metrics
```

### Grafana Dashboard
```
http://your-domain:3001
```

### Health Checks
```
http://your-domain/health
```

## Performance Targets
- API Response: < 200ms (p95)
- Uptime: 99.99%
- Concurrent Users: 10,000+
- Requests/sec: 5,000+

## Security
- TLS 1.3 encryption
- API key authentication
- Rate limiting enabled
- DDoS protection
- Regular security audits

## Backup Strategy
- Database: Daily automated backups
- Retention: 30 days
- Point-in-time recovery: Enabled

## Cost Optimization
- Use spot instances for non-critical workloads
- Enable auto-scaling
- Use CDN for static assets
- Implement caching strategy

## Support
- Production issues: production@defi-risk-analyzer.com
- 24/7 on-call: +1-XXX-XXX-XXXX