# test-the-mailserver

Minimal nodejs code, that can be build into dockercontainer that sends email to the specified mailserver

For example config check .env.dist

You can build the docker image, then test your kubernetes connections to port 25, or anything you want.

To run:


```shell
docker run -it --rm \
-v $(pwd)/.env:'/usr/src/app/.env' \
kristijorgji/test-the-mailserver:0.0.1
```