#!/usr/bin/env bash

rm index.html
cp dist/index.html .
sed -e 's/src=\"/src=\"\/dist/g' -e 's/href=\"/href=\"\/dist/g' index.html
