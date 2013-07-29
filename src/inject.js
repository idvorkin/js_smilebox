// TODO: Consider moving this script its own repository.
//
// Javascript is the assembly language of the web. Web browser have a built in "debugger" the F12 tools, which we should be able to extend.
// The first useful extension is a loader/injector which can allow loading arbitrary files into the current webpage easily. 
//
// Loading can be called from the javascript console e.g:
//      var   ___i = document.createElement('script'); 
//      ___i .src = "https://raw.github.com/idvorkin/js_smilebox/master/src/inject.js";
//      document.getElementsByTagName('head')[0].appendChild(___i );
// or, in a single line for easier pasting: 
//      var   ___i = document.createElement('script');___i .src = "https://raw.github.com/idvorkin/js_smilebox/master/src/inject.js";document.getElementsByTagName('head')[0].appendChild(___i );
// After initial load, you can then use the console to inject arbitrary javascript files
///     inject("http://raw.github.com/idvorkin/js_smilebox/master/src/add_hello_div.js" , function(){add_hello_div()})


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
