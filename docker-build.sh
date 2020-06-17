#!/usr/bin/env bash
version=`date +%Y%m%d%H%M%S`;
echo "build site-doc version $version"
rm -rf ./docker/docs
rm -rf ./docker/node_modules
cp -rf ./docs  ./docker/docs
cp -rf ./*.json  ./docker/
cp -rf ./*.md  ./docker/
#docker rm `docker ps -a -q`
docker rmi --force `docker images | grep ubuntu-npm | awk '{print $3}'`
docker rmi --force `docker images | grep none | awk '{print $3}'`
docker build -t site-doc:$version ./docker
#docker tag site-doc:$version 10.10.208.193:5000/site-doc:$version
#
#docker push 10.10.208.193:5000/site-doc:$version
echo "build booth sucess 10.10.208.193:5000/site-doc:$version"