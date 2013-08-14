jQuery.uheprnGen
================

Ultra High Entropy Pseudo-Random Number Generator jQuery Plugin.
--------

That allows you to quickly generate... well... Ultra High Entropy Pseudo-Random Numbers.

---

$(this).uheprnGen(options); Returns: Random Numbers

*Description*
By passing a range &amp; count as options (or leaving it blank will use the defaults of 10000 &amp; 10000) to the uheprnGen plugin you will get a block of Psuedo Random Numbers back.

*Example*

<!-- language: lang-js -->
var options = { range: 10001, count: 10001 };
var x =  $(this).uheprngGen(options); $("#output").html(x);



So you can set the range and the count for generator, or leave them blank. In this example I set them both to 10001 and set the #output html to be the PRN generated.
