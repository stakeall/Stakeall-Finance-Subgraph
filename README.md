

## Subgraph for Stakeall Finance

## Run graph node 

```
docker run -d --name ipfs-node \
  -v /tmp/ipfs-docker-staging:/export -v /tmp/ipfs-docker-data:/data/ipfs \
  -p 8080:8080 -p 4001:4001 -p 127.0.0.1:5001:5001 \
  ipfs/go-ipfs:latest

```

```
 docker run -it \
          -e postgres_host=host.docker.internal \
          -e postgres_port=5432 \
          -e postgres_user=user \
          -e postgres_pass='' \
          -e postgres_db=graph-node \
          -e ipfs=http://host.docker.internal:5001 \
          -e ethereum=mainnet:http://localhost:8085 \
          -p 8000:8000 \
          -p 8020:8020 \
          -p 8030:8030 \
          -p 8040:8040 \
          -p 8001:8001 \
          -e GRAPH_LOG=trace \
          -e ETHEREUM_POLLING_INTERVAL=1000 \
          -e ETHEREUM_RPC_MAX_PARALLEL_REQUESTS=1 \
          graphprotocol/graph-node:latest
```