#!/bin/sh
npm run build
rm -rf ../2.20/build
cp -r build ../2.20/