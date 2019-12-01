/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }
    

    function header() {
        document.write ('<header>\n'); 
        document.write ('<nav class="topnav" id="myTopnav">\n');
        document.write ('<a href="home.html"><img src="images/logo1.png" alt="logo"></a>\n');
        document.write ('<ul>\n');
        document.write ('<li><a href="home.html">HOME</a></li>\n');
        document.write ('<li><a href="about.html">ABOUT</a></li>\n');
        document.write ('<li><a href="menu.html">MENU</a></li>\n');
        document.write (' <li><a href="contact.html">CONTACT</a></li>\n');
        document.write ('<li><a href="faq.html">FAQ</a></li>\n');
        document.write ('<li><a href="collections.html">COLLECTIONS</a></li>\n');
        document.write ('<li><a href="news.html">NEWS</a></li>\n');
        document.write ('</ul>\n');
        document.write ('<a href="javascript:void(0);" class="icon" onclick="myFunction()">');
        document.write ('<i class="fa fa-bars"></i></a>\n');
        document.write ('</nav>');
        document.write (' </header>');
    }

    function footer() {
        document.write ('<footer>');
        document.write ('<div id="footer_inner" class="cf">');
        document.write ('<div id="footer_left">');
        document.write (' <ul>');
        document.write ('<li><a href="home.html">Home</a></li>');
        document.write ('<li><a href="contact.html">Join Us</a></li>');
        document.write ('<li><a href="faq.html#id">Comments</a></li>');
        document.write ('</ul>');
        document.write ('</div>');
        document.write ('<div id="footer_right">');
        document.write ('<dl>');
        document.write ('<dt>Adress</dt>');
        document.write ('<dd>1509 W 12th Ave, Vancouver, BC , V6H 3J2</dd>');
        document.write ('<dd><a href="https://goo.gl/maps/82aApUKkR7TXBvuL8" target="_blank">Google Map</a></Map>');
        document.write ('</dl>');
        document.write ('<dl>');
        document.write ('<dt>Contact</dt>');
        document.write (' <dd><a href="Tel:000-0000-000">Tel: 000-0000-000</a></dd>');
        document.write ('<dd><a href="mailto:info@alpha.com">E-Mail: info@alpha.com</a></dd>');
        document.write ('</dl>');
        document.write ('</div>');
        document.write ('</div>');
        document.write ('</footer>');
    }