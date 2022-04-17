/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
  var options = {
    rowHeight: 140,
    margins: 4,
    lastRow: 'justify'
  };
  $('.article-gallery').justifiedGallery(options);
}


$(document).ready(function() {

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    /**
     * Display the menu if the menu icon is clicked.
     */
    var menu = $("#menu");
    var menu_icon = $("#menu-icon, #menu-icon-tablet");
    menu_icon.click(function() {
      if (menu.css('visibility') === 'hidden') {
        menu.css("visibility", "visible");
        menu_icon.addClass('active');
      } else {
        menu.css("visibility", "hidden");
        menu_icon.removeClass('active');
      }
      return false;
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu.length) {
      $(window).on('scroll', function() {
        var topDistance = $("#menu > #nav").offset().top;

        // hide only the navigation links on desktop
        if (menu.css('visibility') !== 'hidden' && topDistance < 50) {
          $("#menu > #nav").show();
        } else if (menu.css('visibility') !== 'hidden' && topDistance > 100) {
          $("#menu > #nav").hide();
        }

        // on tablet, hide the navigation icon as well and show a "scroll to top
        // icon" instead
        if ( ! $( "#menu-icon" ).is(":visible") && topDistance < 50 ) {
          $("#menu-icon-tablet").show();
          $("#top-icon-tablet").hide();
        } else if (! $( "#menu-icon" ).is(":visible") && topDistance > 100) {
          $("#menu-icon-tablet").hide();
          $("#top-icon-tablet").show();
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($( "#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on('scroll', function() {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop){
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu's on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page, 
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > ul > #top").hide();
          $("#actions-footer > ul > #menu").show();
        } else if (topDistance > 100) {
          $("#actions-footer > ul > #menu").hide();
          $("#actions-footer > ul > #top").show();
        }
      });
    }
  }
});













/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Courier New";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [ {
    "tag": "javascript",
    "count": "1765836"
}, {
    "tag": "java",
    "count": "1517355"
}, {
    "tag": "c#",
    "count": "1287629"
}, {
    "tag": "php",
    "count": "1263946"
}, {
    "tag": "android",
    "count": "1174721"
}, {
    "tag": "python",
    "count": "1116769"
}, {
    "tag": "jquery",
    "count": "944983"
}, {
    "tag": "html",
    "count": "805679"
}, {
    "tag": "c++",
    "count": "606051"
}, {
    "tag": "ios",
    "count": "591410"
}, {
    "tag": "css",
    "count": "574684"
}, {
    "tag": "mysql",
    "count": "550916"
}, {
    "tag": "sql",
    "count": "479892"
}, {
    "tag": "asp.net",
    "count": "343092"
}, {
    "tag": "ruby-on-rails",
    "count": "303311"
}, {
    "tag": "c",
    "count": "296963"
}, {
    "tag": "arrays",
    "count": "288445"
}, {
    "tag": "objective-c",
    "count": "286823"
}, {
    "tag": ".net",
    "count": "280079"
}, {
    "tag": "r",
    "count": "277144"
}, {
    "tag": "node.js",
    "count": "263451"
}, {
    "tag": "angularjs",
    "count": "257159"
}, {
    "tag": "json",
    "count": "255661"
}, {
    "tag": "sql-server",
    "count": "253824"
}, {
    "tag": "swift",
    "count": "222387"
}, {
    "tag": "iphone",
    "count": "219827"
}, {
    "tag": "regex",
    "count": "203121"
}, {
    "tag": "ruby",
    "count": "202547"
}, {
    "tag": "ajax",
    "count": "196727"
}, {
    "tag": "django",
    "count": "191174"
}, {
    "tag": "excel",
    "count": "188787"
}, {
    "tag": "xml",
    "count": "180742"
}, {
    "tag": "asp.net-mvc",
    "count": "178291"
}, {
    "tag": "linux",
    "count": "173278"
}, {
    "tag": "angular",
    "count": "154447"
}, {
    "tag": "database",
    "count": "153581"
}, {
    "tag": "wpf",
    "count": "147538"
}, {
    "tag": "spring",
    "count": "147456"
}, {
    "tag": "wordpress",
    "count": "145801"
}, {
    "tag": "python-3.x",
    "count": "145685"
}, {
    "tag": "vba",
    "count": "139940"
}, {
    "tag": "string",
    "count": "136649"
}, {
    "tag": "xcode",
    "count": "130591"
}, {
    "tag": "windows",
    "count": "127680"
}, {
    "tag": "reactjs",
    "count": "125021"
}, {
    "tag": "vb.net",
    "count": "122559"
}, {
    "tag": "html5",
    "count": "118810"
}, {
    "tag": "eclipse",
    "count": "115802"
}, {
    "tag": "multithreading",
    "count": "113719"
}, {
    "tag": "mongodb",
    "count": "110348"
}, {
    "tag": "laravel",
    "count": "109340"
}, {
    "tag": "bash",
    "count": "108797"
}, {
    "tag": "git",
    "count": "108075"
}, {
    "tag": "oracle",
    "count": "106936"
}, {
    "tag": "pandas",
    "count": "96225"
}, {
    "tag": "postgresql",
    "count": "96027"
}, {
    "tag": "twitter-bootstrap",
    "count": "94348"
}, {
    "tag": "forms",
    "count": "92995"
}, {
    "tag": "image",
    "count": "92131"
}, {
    "tag": "macos",
    "count": "90327"
}, {
    "tag": "algorithm",
    "count": "89670"
}, {
    "tag": "python-2.7",
    "count": "88762"
}, {
    "tag": "scala",
    "count": "86971"
}, {
    "tag": "visual-studio",
    "count": "85825"
}, {
    "tag": "list",
    "count": "84392"
}, {
    "tag": "excel-vba",
    "count": "83948"
}, {
    "tag": "winforms",
    "count": "83600"
}, {
    "tag": "apache",
    "count": "83367"
}, {
    "tag": "facebook",
    "count": "83212"
}, {
    "tag": "matlab",
    "count": "82452"
}, {
    "tag": "performance",
    "count": "81443"
}, {
    "tag": "css3",
    "count": "78250"
}, {
    "tag": "entity-framework",
    "count": "78243"
}, {
    "tag": "hibernate",
    "count": "76123"
}, {
    "tag": "typescript",
    "count": "74867"
}, {
    "tag": "linq",
    "count": "73128"
}, {
    "tag": "swing",
    "count": "72333"
}, {
    "tag": "function",
    "count": "72043"
}, {
    "tag": "amazon-web-services",
    "count": "71155"
}, {
    "tag": "qt",
    "count": "69552"
}, {
    "tag": "rest",
    "count": "69138"
}, {
    "tag": "shell",
    "count": "68854"
}, {
    "tag": "azure",
    "count": "67431"
}, {
    "tag": "firebase",
    "count": "66411"
}, {
    "tag": "api",
    "count": "66158"
}, {
    "tag": "maven",
    "count": "66113"
}, {
    "tag": "powershell",
    "count": "65467"
}, {
    "tag": ".htaccess",
    "count": "65014"
}, {
    "tag": "sqlite",
    "count": "64888"
}, {
    "tag": "file",
    "count": "62783"
}, {
    "tag": "codeigniter",
    "count": "62393"
}, {
    "tag": "unit-testing",
    "count": "61909"
}, {
    "tag": "perl",
    "count": "61752"
}, {
    "tag": "loops",
    "count": "61015"
}, {
    "tag": "symfony",
    "count": "60820"
}, {
    "tag": "selenium",
    "count": "59855"
}, {
    "tag": "google-maps",
    "count": "59616"
}, {
    "tag": "csv",
    "count": "59600"
}, {
    "tag": "uitableview",
    "count": "59011"
}, {
    "tag": "web-services",
    "count": "58916"
}, {
    "tag": "cordova",
    "count": "58195"
}, {
    "tag": "class",
    "count": "58055"
}, {
    "tag": "numpy",
    "count": "57132"
}, {
    "tag": "google-chrome",
    "count": "56836"
}, {
    "tag": "ruby-on-rails-3",
    "count": "55962"
}, {
    "tag": "android-studio",
    "count": "55801"
}, {
    "tag": "tsql",
    "count": "55736"
}, {
    "tag": "validation",
    "count": "55531"
} ];

series.dataFields.word = "tag";
series.dataFields.value = "count";

series.heatRules.push({
 "target": series.labels.template,
 "property": "fill",
 "min": am4core.color("#999999"),
 "max": am4core.color("#FFFFFF"),
 "dataField": "value"
});

series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
series.labels.template.urlTarget = "_blank";
series.labels.template.tooltipText = "{word}: {value}";

var hoverState = series.labels.template.states.create("hover");
hoverState.properties.fill = am4core.color("#FF3333");















/**
  Breaking Bad

  A tribute to the best fucking series in the world. 

  Just some CSS and SVG. I created the SVG from the original Logo with
  Photoshop (path) and Illustrator (SVG).

  The original Logo is © by American Movie Classics Company LLC.
  

  2012 by Tim Pietrusky
  timpietrusky.com
**/

/**
 * @Gray Ghost Visuals: The theme is for you!
 * 
 * Thanks to televisiontunes.com for the Breaking Bad theme
 * http://www.televisiontunes.com/Breaking_Bad.html
 */
 var audio = $('audio').get(0),
 _paused = $('svg[role="paused"]'),
 _playing = $('svg[role="playing"]');

audio.src = Modernizr.audio.ogg ? 
'http://timpietrusky.com/audio/lab/breaking_bad_intro.ogg' : 
'http://timpietrusky.com/audio/lab/breaking_bad_intro.mp3';

_paused.click(function() {
$(this).css('display', 'none');
_playing.css('display', 'block');
audio.play();
});

_playing.click(function() {
$(this).css('display', 'none');
_paused.css('display', 'block');
audio.pause();
});

// Set to start
$("audio").bind('ended', function(){
 _playing.css('display', 'none');
 _paused.css('display', 'block');
 this.currentTime = 0;
});

/**
* Thanks to Ed Welch for his "smoke"-effect
* http://astronautz.com/wordpress/creating-realistic-particle-effect-with-html5-canvas/
*/
var lastRender = new Date().getTime();
var context;
var smoke_1 = new ParticleEmitter();
var smoke_2 = new ParticleEmitter();
var smoke_3 = new ParticleEmitter();
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 400;
var dirtyLeft = 0;
var dirtyTop = 0;
var dirtyRight = CANVAS_WIDTH;
var dirtyBottom = CANVAS_HEIGHT;
var windVelocity = 0.01;
var count = 0;

window.requestAnimFrame = (function () {
 return  window.requestAnimationFrame   ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame    ||
     window.oRequestAnimationFrame      ||
     window.msRequestAnimationFrame     ||
     function ( c ) {
         window.setTimeout( c, 16.6 );
     };
})();

init();

function init() {
 var canvas = $('#smoke').get(0);
 if (canvas.getContext) {
     context = canvas.getContext('2d');
 } else {
     return;
 }

 canvas.width = CANVAS_WIDTH;
 canvas.height = CANVAS_HEIGHT;

 var img_smoke_1 = new Image(),
     img_smoke_2 = new Image(),
     img_smoke_3 = new Image();

 img_smoke_1.src = 'http://timpietrusky.com/img/lab/smoke_1.png';
 img_smoke_2.src = 'http://timpietrusky.com/img/lab/smoke_2.png';
 img_smoke_3.src = 'http://timpietrusky.com/img/lab/smoke_3.png';

 smoke_1.m_alpha = 0.2;
 smoke_3.m_speed = 0.001;
 smoke_1.init(.142, .631, 90, img_smoke_1);

 smoke_2.m_alpha = 0.3;
 smoke_2.init(.322, .753, 90, img_smoke_2);

 smoke_3.m_alpha = 0.1;
 smoke_3.m_speed = 0.02;
 smoke_3.init(.222, .553, 90, img_smoke_3);

 requestAnimFrame(render);
}

function ParticleEmitter() {
 this.m_x;
 this.m_y;
 this.m_dieRate;
 this.m_image;
 this.m_speed = 0.04;
 this.m_alpha = 1.0;

 this.m_listParticle = [];

 // ParticleEmitter().init function
 // xScale = number between 0 and 1. 0 = on left side 1 = on top
 // yScale = number between 0 and 1. 0 = on top 1 = on bottom
 // particles = number of particles
 // image = smoke graphic for each particle
 this.init = function(xScale, yScale, particles, image) {
     // the effect is positioned relative to the width and height of the
     // canvas
     this.m_x = CANVAS_WIDTH * xScale;
     this.m_y = CANVAS_HEIGHT * yScale;
     this.m_image = image;
     this.m_dieRate = 0.95;
     // start with smoke already in place
     for ( var n = 0; n < particles; n++) {
         this.m_listParticle.push(new Particle());
         this.m_listParticle[n].init(this, n * 50000 * this.m_speed);
     }
 }

 this.update = function(timeElapsed) {
     for ( var n = 0; n < this.m_listParticle.length; n++) {
         this.m_listParticle[n].update(timeElapsed);
     }
 }

 this.render = function(context) {
     for ( var n = 0; n < this.m_listParticle.length; n++) {
         this.m_listParticle[n].render(context);
     }
 }
};

function Particle() {
 this.m_x;
 this.m_y;
 this.m_age;
 this.m_xVector;
 this.m_yVector;
 this.m_scale;
 this.m_alpha;
 this.m_canRegen;
 this.m_timeDie;
 this.m_emitter;

 this.init = function(emitter, age) {
     this.m_age = age;
     this.m_emitter = emitter;
     this.m_canRegen = true;
     this.startRand();
 }

 this.isAlive = function() {
     return this.m_age < this.m_timeDie;
 }

 this.startRand = function() {
     // smoke rises and spreads
     this.m_xVector = Math.random() * 0.5 - 0.25;
     this.m_yVector = -1.5 - Math.random();
     this.m_timeDie = 20000 + Math.floor(Math.random() * 12000);

     var invDist = 1.0 / Math.sqrt(this.m_xVector * this.m_xVector
             + this.m_yVector * this.m_yVector);
     // normalise speed
     this.m_xVector = this.m_xVector * invDist * this.m_emitter.m_speed;
     this.m_yVector = this.m_yVector * invDist * this.m_emitter.m_speed;
     // starting position within a 20 pixel area
     this.m_x = (this.m_emitter.m_x + Math.floor(Math.random() * 20) - 10);
     this.m_y = (this.m_emitter.m_y + Math.floor(Math.random() * 20) - 10);
     // the initial age may be > 0. This is so there is already a smoke trail
     // in
     // place at the start
     this.m_x += (this.m_xVector + windVelocity) * this.m_age;
     this.m_y += this.m_yVector * this.m_age;
     this.m_scale = 0.01;
     this.m_alpha = 0.0;
 }

 this.update = function(timeElapsed) {
     this.m_age += timeElapsed;
     if (!this.isAlive()) {
         // smoke eventually dies
         if (Math.random() > this.m_emitter.m_dieRate) {
             this.m_canRegen = false;
         }
         if (!this.m_canRegen) {
             return;
         }
         // regenerate
         this.m_age = 0;
         this.startRand();
         return;
     }
     // At start the particle fades in and expands rapidly (like in real
     // life)
     var fadeIn = this.m_timeDie * 0.05;
     var startScale;
     var maxStartScale = 0.3;
     if (this.m_age < fadeIn) {
         this.m_alpha = this.m_age / fadeIn;
         startScale = this.m_alpha * maxStartScale;
         // y increases quicker because particle is expanding quicker
         this.m_y += this.m_yVector * 2.0 * timeElapsed;
     } else {
         this.m_alpha = 1.0 - (this.m_age - fadeIn)
                 / (this.m_timeDie - fadeIn);
         startScale = maxStartScale;
         this.m_y += this.m_yVector * timeElapsed;
     }
     // the x direction is influenced by wind velocity
     this.m_x += (this.m_xVector + windVelocity) * timeElapsed;
     this.m_alpha *= this.m_emitter.m_alpha;
     this.m_scale = 0.001 + startScale + this.m_age / 4000.0;
 }

 this.render = function(ctx) {
     if (!this.isAlive())
         return;
     ctx.globalAlpha = this.m_alpha;
     var height = this.m_emitter.m_image.height * this.m_scale;
     var width = this.m_emitter.m_image.width * this.m_scale;
     // round it to a integer to prevent subpixel positioning
     var x = Math.round(this.m_x - width / 2);
     var y = Math.round(this.m_y + height / 2);
     ctx.drawImage(this.m_emitter.m_image, x, y, width, height);
     if (x < dirtyLeft) {
         dirtyLeft = x;
     }
     if (x + width > dirtyRight) {
         dirtyRight = x + width;
     }
     if (y < dirtyTop) {
         dirtyTop = y;
     }
     if (y + height > dirtyBottom) {
         dirtyBottom = y + height;
     }
 }
};

function render() {
 // time in milliseconds
 var timeElapsed = new Date().getTime() - lastRender;
 lastRender = new Date().getTime();
 context.clearRect(dirtyLeft, dirtyTop, dirtyRight - dirtyLeft, dirtyBottom - dirtyTop);
 dirtyLeft = 1000;
 dirtyTop = 1000;
 dirtyRight = 0;
 dirtyBottom = 0;

 smoke_1.update(timeElapsed);
 smoke_1.render(context);

 smoke_2.update(timeElapsed);
 smoke_2.render(context);

 smoke_3.update(timeElapsed);
 smoke_3.render(context);

 windVelocity += (Math.random() - 0.5) * 0.002;
 if (windVelocity > 0.015) {
     windVelocity = 0.015;
 }
 if (windVelocity < 0.0) {
     windVelocity = 0.0;
 }

 requestAnimFrame(render);
}