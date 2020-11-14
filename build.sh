#!/usr/bin/env bash

rm index.html
cp dist/index.html .
sed -i '' \
  -e 's/src=\"/src=\"dist/g' \
  -e 's/href=\"/href=\"dist/g' \
  -e 's/href=\"disthttps/href=\"https/g' \
  -e 's/href=\"distmail/href=\"mail/g' index.html
