#!/usr/bin/env bash

dhuname=kristijorgji
pname=test-the-mailserver
tag=0.0.1

docker logout
docker login docker.io

rim="${dhuname}/${pname}:${tag}"

echo -e "docker build . -t ${dhuname}/${pname}"
docker build . -t "${dhuname}/${pname}"

echo -e "docker tag ${dhuname}/${pname}:latest $rim"
docker tag "${dhuname}/${pname}:latest" "$rim"

echo -e "docker push $rim"
docker push "$rim"