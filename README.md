This project is part of the Udacity's Nanodegree in FrontEnd Web Development.

In this project, we are using Webpack and APis to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

The app runs with the commands:

Terminal 1:


1: npm i
2: npm run build-prod
3: npm run start


![](img/console1.jpg)
![](img/console3.jpg)


Terminal 2:


1: npm run build-dev


![](img/console2.jpg)


Testing with Jest


![](img/tests-working.jpg)


The loaders and plugins used are: Babel / Core Cors Express Style-loader node-sass css-loader sass-loader clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin

The API provider is: MeaningCloud - no SKD
