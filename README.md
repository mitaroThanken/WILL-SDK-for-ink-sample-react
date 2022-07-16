HAProxy with jsha/minica
===

Export certs
---

```shell
docker container cp will-sdk-sample-haproxy-1:/usr/local/etc/haproxy/certs - | tar xv
```

Install trusted root certification
---

Install `certs/minica.pem` to Trusted Root Certification Authorities.

(WIP)
