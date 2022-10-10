#!/bin/bash

# create .env file
echo "UID=$(id -u $USER)" > .env
echo "GID=$(id -g $USER)" >> .env
echo "USERNAME=$USER" >> .env