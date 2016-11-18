FROM mysql:5.7.16

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE shopvr
ENV MYSQL_USER newuser
ENV MYSQL_PASSWORD password

ADD schema.sql /docker-entrypoint-initdb.d
