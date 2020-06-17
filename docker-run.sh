#!/usr/bin/env bash
docker stop site-doc
docker rm site-doc
docker run -it  --privileged=true -p 8080:8080 --name site-doc site-doc:20200617214114
#docker run -d  --privileged=true -p 8093:8093 --name site-doc 10.10.208.193:5000/site-doc:20190531145408
docker logs -f site-doc