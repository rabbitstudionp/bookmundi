<!-- Convert the XML data and to JSON readable format -->

<?php
$xmlData = file_get_contents('http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml');
$parseData = simplexml_load_string($xmlData);
$jsonData = json_encode($parseData, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $jsonData;

?>