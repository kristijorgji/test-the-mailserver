#!/usr/bin/env bash

kubectl create configmap test-the-mailer-config --from-file=$(pwd)/.env \
   --dry-run -o yaml | kubectl apply -f - --wait=true

kubectl apply -f pod.yml