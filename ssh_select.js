
var didChange = false;
$("div.details_container").bind("DOMSubtreeModified", function(e) {	
    didChange = true;
});

setInterval(function() {
    if ( didChange ) {
        didChange = false;
        // Check your page position and then
        // Load in more results
		var span = $("#yui-gen10").find("div.triple_wide_data span:contains('amazonaws.com')");
		if (span != undefined && !span.children().first().is('a')) {
			span.wrapInner(function() {
				return '<a href="ssh://' + this.innerText + '" ></a>';
			});
		} 
    }
}, 800);



