/**
 * jquery.uheprnGen.js v1.0.0
 * http://www.ryanmcdonough.co.uk
 *
 * LICENSE AND COPYRIGHT:  THIS CODE IS HEREBY RELEASED INTO THE PUBLIC DOMAIN
 * Ryan McDonough releases and disclaims ALL RIGHTS AND TITLE IN
 * THIS CODE OR ANY DERIVATIVES. Anyone may be freely use it for any purpose.
 *
 * Basically the same as the license in the UHEPRNG.js file by GRC
 */

(function($){

 	$.fn.extend({ 
 		
 		uheprnGen: function(options) {	

 				var settings = $.extend({
            		range         : 10000,
            		count         : 10000
        		}, options);

				var prng = uheprng(); // instantiate our uheprng for requesting PRNs
	  			var eventCount = 0;   // this counts events to introduce a (small) bit of additional entropy
	            var i,s = '';       // general purpose local vars

	            prng.addEntropy();
				    var prngState = prng.string(256);       // obtain 256 random printable characters
				    for ( var s='',i=0; i < 8; i++ ) {          // for displaying, break the 256-chars into 8 lines of 32
				      if ( i ) s += String.fromCharCode(10);      // firefox needs a CR/LF at the end of each 32-character line
				      s += prngState.substr(i*32,32);         // concatenate the string pieces into a larger composite
				    }

	    	    var display = '';

			    var range = settings.range;        
			    var count = settings.count;

			    var digits = Math.floor( Math.LOG10E * Math.log(range-1)) + 1; // maximum number of digits in the "range"

			    if ( display == '' ) {
			      // we are about to generate our PRNs, so we capture the current "SeedKey"
			      // from the webpage's form field and use it to setup our PRNG
			      prng.initState();                               // init the PRNG and its private hash function
			      prng.hashString(s);
			      
			      // with the PRNG initialized into a known starting state by the provided SeedKey
			      // we now pull the requested number of pseudo-random numbers from our the generator
			      for ( i = 0; i < count; i++ ) {         // iterate through, concatenating PRNs to the 'display' string
			        s = prng(range).toString();         // call our PRNG and convert the return to a string
			        while ( s.length < digits ) s = '0' + s;  // left-zero pad the result out to the maximum length of digits
			        display += s + ' ';               // concatenate the new string onto our growing 'display' string
			      }
			    }

			    val: {
			    	return display;
			    }
    		}
		  
	});

		
})(jQuery);