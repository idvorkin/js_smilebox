module("Basic Tests");
 
test("1 and true equals true", function() {
  ok(true, "true is truthy");
  equal(1, true, "1 is truthy");
});

