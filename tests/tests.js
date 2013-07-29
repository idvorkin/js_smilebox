module("Basic Tests");
 
test("1 and true equals true", function() {
  ok(true, "true is truthy");
  equal(1, true, "1 is truthy");
});

test("Inject can inject and execution source", function() {
   inject_jq();

  var lengthBeforeInject = $('div[id=hello]').length;
  ok(lengthBeforeInject==0, "no hello elements");

  inject("../src/add_hello_div.js", function (){add_hello_div();})
  var lengthAfterInject = $('div[id=hello]').length;
  ok(lengthAfterInject==1, "true is truthy");
});

