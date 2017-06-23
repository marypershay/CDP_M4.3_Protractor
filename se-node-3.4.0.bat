:: Beginning of hub batch file
set SERVER_VERSION=3.4.0
set SERVER_PATH=./node_modules/protractor/node_modules/webdriver-manager/selenium/
set TASK_NAME=SeleniumServerNode
set REGISTER_IP=localhost:4444
set CHROME_DRIVER=.\webdriver\chromedriver.exe
set GECKO_DRIVER=.\webdriver\geckodriver.exe
set IE_DRIVER=.\webdriver\IEDriverServer.exe
set NODE_CONFIG=se-node-config.json

java -Dwebdriver.ie.driver=%IE_DRIVER% -Dwebdriver.gecko.driver=%GECKO_DRIVER% -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar %SERVER_PATH%selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -nodeConfig %NODE_CONFIG%
:: End of hub batch file
pause