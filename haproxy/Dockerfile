FROM haproxy:2.6

# be root
USER root

# Install curl
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get -y --no-install-recommends install \
        curl \
        ca-certificates \
    && apt-get clean

# Install Go
ENV GOVERSION 1.18.3
RUN rm -rf /usr/local/go \
    && curl -L -O https://go.dev/dl/go${GOVERSION}.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go${GOVERSION}.linux-amd64.tar.gz \
    && mkdir /go
ENV GOPATH /go
ENV PATH ${PATH}:/usr/local/go/bin:${GOPATH}/bin

# Install minica
RUN go install github.com/jsha/minica@v1.0.2

# Make certs
RUN mkdir -p /usr/local/etc/haproxy/certs \
    && cd /usr/local/etc/haproxy/certs \
    && minica --domains test.test \
    && cd test.test \
    && cat cert.pem key.pem > test.test.pem \
    && cd .. \
    && chmod go+rx -R .

# Copy config
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

# be haproxy
USER haproxy
