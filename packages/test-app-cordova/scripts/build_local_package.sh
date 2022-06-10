#!/bin/bash

cd ../capacitor-analytics-plugin && npm install && npm run build && npm pack
cd ../test-app-cordova && npm install ../capacitor-analytics-plugin/capacitor-analytics-*.tgz
