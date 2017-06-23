set SERVER_VERSION=3.4.0
set SERVER_PATH=./node_modules/protractor/node_modules/webdriver-manager/selenium/
java -jar %SERVER_PATH%selenium-server-standalone-%SERVER_VERSION%.jar -role hub -hubConfig se-hub-3.4.0.json
