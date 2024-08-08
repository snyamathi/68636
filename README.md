```
docker compose up -d
docker stats --format 'table {{.Name}}\t{{.MemUsage}}'
```

```
NAME                      MEM USAGE / LIMIT
leak-next-20.16.0-1       211.4MiB / 512MiB
leak-next-20.15.1-1       90.59MiB / 512MiB
leak-node-20.15.1-1       32.57MiB / 512MiB
leak-node-20.16.0-1       39.48MiB / 512MiB
```

Notice that the memory of the next  + node 20.16.0 container climbs while the others do not. Eventually it will run out of memory and crash.
