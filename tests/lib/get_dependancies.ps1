# http://effectif.com/coffeescript/qunit-boilerplate

$filesToDownload = (
 "http://code.jquery.com/qunit/qunit-1.12.0.js",
 "http://code.jquery.com/qunit/qunit-1.12.0.css",
 "http://code.jquery.com/jquery-1.10.2.js"
)
$webClient = new-object System.Net.WebClient

$filesToDownload | % { 
    $uri = new-Object System.Uri $_ ; 
    $localPath =  "$($pwd.Path)\$($uri.Segments[-1])"; 
    Write-Host "Writing $localPath" ;
    $webClient.DownloadFile($uri,$localPath); 
}

