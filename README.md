# Adidas-Runtastic-Map-Convertor

Map data exported from Adidas Runtastic  is using Unix timestamp which is non-readable by human being.

This script convert them into datetime so users can pick the correct data file for their own purposes.

## Download the Map data

1. login to your Runtastic account in your browser

2. Click your profile icon on the top right corner and select `Settings`

3. Switch to `Export` tab and click `Export`

4. Wait and then download

## Use this script

1. extract `Sport-sessions/*.json` into `maps` folder in this project

2. run `npm run dev`

3. the result will save to `summary.json` of this project

4. open `summary.json` and look for the date and filename

5. find the gpx file in `GPS-data` folder

6. enjoy
