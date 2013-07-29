// TODO: Consider moving to it's own repository.
// Javascript is the assembly language of the web, and as such we need good tools to interact with assembly.
// The first useful tool is a loader/injector which should be called from the javascript console.
// e.g TBD 


function inject(js_file_to_inject, initFunction)
{
    var scriptElement = document.createElement('script');
    scriptElement.src = js_file_to_inject;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);

    // TODO, speed this code up by only running setInterval if not ready.
    if (document.readyState === "complete")
    {
        initFunction();
        return;
    }

    // Run our inject code once page has loaded for unit tests.
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            initFunction()
            clearInterval(readyStateCheckInterval);
            initRun = true;
        }
    }, 100);
    // block injection till timer cleared.
     return;
}

function inject_jq()
{
    inject("http://code.jquery.com/jquery-latest.min.js", function() {"jQuery.noConflict();"})
};
