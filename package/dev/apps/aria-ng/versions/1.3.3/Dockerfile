FROM adams549659584/darkhttpd:latest

COPY html /var/www/html

ENTRYPOINT ["/darkhttpd","/var/www/html"]

CMD ["--port","6801","--ipv6"]

EXPOSE 6801