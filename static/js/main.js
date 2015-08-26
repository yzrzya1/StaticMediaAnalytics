$(document).ready(function() {
    $('#nyt').click(function(){
        console.log('nyt click');
        $('#changeIframe').attr('src','http://topics.nytimes.com/top/reference/timestopics/people/c/hillary_rodham_clinton/index.html');
        $('#Media-container-info').html('Sites like The New York Times have many articles and posts about the 2016 Election, but it is difficult to know all the topics covered and the sentiment behind the discussions in this large amount of unstructured data.');
    });
    $('#hp').click(function(){
        console.log('hp click');
        $('#changeIframe').attr('src','http://www.huffingtonpost.com/stanley-fish/who-might-beat-hillary_b_7957298.html?utm_hp_ref=elections-2016');
        $('#Media-container-info').html('Sites like The Huffington Post have many articles and posts about the 2016 Election, but it is difficult to know all the topics covered and the sentiment behind the discussions in this large amount of unstructured data.');
    });
    var d = new Date();
    console.log($("#navTime"));
    document.getElementById("time").innerHTML = d.toDateString();
});


            // scrollTo function definition
            $.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}


            // toggles comments
            var pattern = new RegExp('[0-9]+_[0-9]+');
            //file = pattern.exec(document.URL)[0];
            function toggleComments(e) {

                $('ul#positive-comments').html('');
                $('ul#negative-comments').html('');


                old = document.getElementById('selected');
                if (old) {
                    old.id = '';
                    };
                e.id = 'selected';
                //e.css({'color' : 'blue', 'font-size' : '16pt;'});

                var header = e.childNodes[1].childNodes[0].innerText;

                if (document.getElementsByName(header)[0]){
                    return false
                    };

                var xhr = new XMLHttpRequest();

                xhr.open("GET", "/xmldata/NYT.txt_Output.xml", true);

                xhr.onload = function (e) {
                  if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                      xmlDoc = xhr.responseXML;
                      var i = 0;

                    while (xmlDoc.getElementsByTagName('header')[i].childNodes[0].nodeValue != header) {
                        //console.log(xmlDoc.getElementsByTagName('header')[i]);
                        i++;
                        }

                    var h = document.getElementById('comment-list');

                    $('h2#topic-header').text(header);

                    $('h3#topic-name').text(header);
                    x = xmlDoc.getElementsByTagName('header')[i].parentNode.getElementsByTagName('level_2');


                    var pc = 0;
                    var nc = 0;
                    for (i = 0; i < x.length; i++){
                        comment = x[i].getElementsByTagName('text')[0].childNodes[0].nodeValue;

                        sentiment = x[i].getElementsByTagName('sentiment')[0].childNodes[0].nodeValue;

                        link = x[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;

                        var list = document.createElement('li');
                        var linkNode = document.createElement('a');
                        var listNode = document.createTextNode(comment);

                        //linkNode.setAttribute('href', '#' + link);
                        linkNode.setAttribute('value', '#' + link);
                        linkNode.setAttribute('class', 'button-link');
                        linkNode.appendChild(listNode);

                        list.appendChild(linkNode);
                        list.setAttribute('class', sentiment);

                        if (sentiment == 'positive' & pc < 10){
                            $('ul#positive-comments').append(list);
                            pc++;
                            }
                        else if (sentiment == 'negative' & nc < 10) {
                            $('ul#negative-comments').append(list);
                            nc++;
                            };

                      }


                        var data = [
                            {
                                value: nc,
                                color:"#FF3300"
                            },
                            {
                                value : pc,
                                color : "#01DF01"
                            }
                        ]


                        score = (pc + 1)/ (pc + nc + 2);
                        $('.topic-score').text( score.toFixed(1));
                        $('#positive-count').text(pc.toString());
                        $('#negative-count').text(nc.toString());
                        var data3 = {
                                labels : ["Sep'13", "Oct'13", "Nov'13", "Dec'13", "Jan'14", "Feb'14"],
                                datasets : [
                                    {
                                        fillColor : "rgba(220,220,220,0.5)",
                                        strokeColor : "rgba(220,220,220,1)",
                                        pointColor : "rgba(220,220,220,1)",
                                        pointStrokeColor : "#fff",
                                        data : [6.3, 6.8, 9.7, 9.8, 6.6, 6.2]
                                    }
                                ]
                            }

                        //Get context with jQuery - using jQuery's .get() method.
                        var ctx2 = $("#myChart2").get(0).getContext("2d");
                        //This will get the first returned node in the jQuery collection.
                        ctx2.canvas.width = 100;
                        ctx2.canvas.height = 100;
                        var myNewChart2 = new Chart(ctx2);
                        new Chart(ctx2).Doughnut(data, {'percentageInnerCutout' : 50, 'animationEasing' : 'easeOutCubic', 'animationSteps' : 50});


                            //Get context with jQuery - using jQuery's .get() method.
                        var ctx3 = $("#myChart3").get(0).getContext("2d");
                        //This will get the first returned node in the jQuery collection.
                        ctx3.canvas.width = 400;
                        ctx3.canvas.height = 100;
                        var myNewChart3 = new Chart(ctx3);
                        new Chart(ctx3).Line(data3);



                    } else {
                      console.error(xhr.statusText);
                    }
                  }
                }; // end loading data function

                xhr.onerror = function (e) {
                  console.error(xhr.statusText);
                };
                xhr.send(null);
                };

                $(document).ready(function(){

                    $(document).on('click', '.button-link', function(){
                        var p = $(this).attr('value');
                        $('#review-text').scrollTo(p, {'offsetTop': '600'});
                        });



                    $('.text-comment').click(function(e) {
                        $($($(e.target).parent()).children('.link-buttons')).toggle();
                        });
                    $('.button-link').click(function() {
                        var tagID = $(this).attr('value');
                        alert(tagID);
                        $('.highlighted').removeClass('highlighted');
                        $(tagID).addClass('highlighted');

                        });
                    $('body').on('click', 'a.button-link', function() {
                        var tagID = $(this).attr('value');
                        var sentiment = $(this).parent().attr('class');
                        var tag = tagID.substring(1);
                        $('.highlighted').css('background-color', '').removeClass('highlighted');
                        if (sentiment == 'positive') {
                            $(document.getElementById(tag)).addClass('highlighted').css('background-color', '#58FA58');
                        }
                        else{
                            $(document.getElementById(tag)).addClass('highlighted').css('background-color', '#FA8258');
                            };
                        });
                    $('h4').click(function(e) {
                        $($($(e.target).parent()).children('ul')).toggle();
                        });

                        x = document.getElementsByClassName('topic-comment-block')[0];
                        toggleComments(x);
                    }); // end document.ready

// show dashboard
$('document').ready(function(){
    $('#dashboard').hide();
    $('#show-dashboard').on('click', function(){
        $('#problem-context').fadeOut(1000);
        $('#dashboard').fadeIn(3000);
        });
    });

//



            // scrollTo function definition
            $.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}


            // toggles comments
            var pattern = new RegExp('[0-9]+_[0-9]+');
            //file = pattern.exec(document.URL)[0];
            function toggleComments(e) {

                $('ul#positive-comments').html('');
                $('ul#negative-comments').html('');


                //document.getElementById('show-positive').checked = true;
                //document.getElementById('show-negative').checked = true;

                old = document.getElementById('selected');
                if (old) {
                    old.id = '';
                    };
                e.id = 'selected';
                //e.css({'color' : 'blue', 'font-size' : '16pt;'});

                var header = e.childNodes[1].childNodes[0].innerText;

                if (document.getElementsByName(header)[0]){
                    return false
                    };

                var xhr = new XMLHttpRequest();

                xhr.open("GET", "/xmldata/NYT.txt_Output.xml", true);

                xhr.onload = function (e) {
                  if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                      xmlDoc = xhr.responseXML;
                      var i = 0;

                    while (xmlDoc.getElementsByTagName('header')[i].childNodes[0].nodeValue != header) {
                        //console.log(xmlDoc.getElementsByTagName('header')[i]);
                        i++;
                        }

                    var h = document.getElementById('comment-list');

                    $('h2#topic-header').text(header);

                    $('h3#topic-name').text(header);
                    x = xmlDoc.getElementsByTagName('header')[i].parentNode.getElementsByTagName('level_2');

                    /*$('ul#positive-comments').append('<h4>Positive Comments</h4>');
                    $('ul#negative-comments').append('<h4>Negative Comments</h4>');*/

                    var pc = 0;
                    var nc = 0;
                    for (i = 0; i < x.length; i++){
                        comment = x[i].getElementsByTagName('text')[0].childNodes[0].nodeValue;

                        sentiment = x[i].getElementsByTagName('sentiment')[0].childNodes[0].nodeValue;

                        link = x[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;

                        var list = document.createElement('li');
                        var linkNode = document.createElement('a');
                        var listNode = document.createTextNode(comment);

                        //linkNode.setAttribute('href', '#' + link);
                        linkNode.setAttribute('value', '#' + link);
                        linkNode.setAttribute('class', 'button-link');
                        linkNode.appendChild(listNode);

                        list.appendChild(linkNode);
                        list.setAttribute('class', sentiment);

                        if (sentiment == 'positive' & pc < 10){
                            $('ul#positive-comments').append(list);
                            pc++;
                            }
                        else if (sentiment == 'negative' & nc < 10) {
                            $('ul#negative-comments').append(list);
                            nc++;
                            };

                      }


                        var data = [
                            {
                                value: nc,
                                color:"#FF3300"
                            },
                            {
                                value : pc,
                                color : "#01DF01"
                            }
                        ]


                        score = (pc + 1)/ (pc + nc + 2);
                        $('.topic-score').text( score.toFixed(1));
                        $('#positive-count').text(pc.toString());
                        $('#negative-count').text(nc.toString());
                        var data3 = {
                                labels : ["Sep'13", "Oct'13", "Nov'13", "Dec'13", "Jan'14", "Feb'14"],
                                datasets : [
                                    {
                                        fillColor : "rgba(220,220,220,0.5)",
                                        strokeColor : "rgba(220,220,220,1)",
                                        pointColor : "rgba(220,220,220,1)",
                                        pointStrokeColor : "#fff",
                                        data : [6.3, 6.8, 9.7, 9.8, 6.6, 6.2]
                                    }
                                ]
                            }
                                                    //Get context with jQuery - using jQuery's .get() method.
                        //var ctx = $("#myChart").get(0).getContext("2d");
                        //This will get the first returned node in the jQuery collection.
                        //var myNewChart = new Chart(ctx);
                        //new Chart(ctx).Doughnut(data);

                        //Get context with jQuery - using jQuery's .get() method.
                        var ctx2 = $("#myChart2").get(0).getContext("2d");
                        //This will get the first returned node in the jQuery collection.
                        ctx2.canvas.width = 100;
                        ctx2.canvas.height = 100;
                        var myNewChart2 = new Chart(ctx2);
                        new Chart(ctx2).Doughnut(data, {'percentageInnerCutout' : 50, 'animationEasing' : 'easeOutCubic', 'animationSteps' : 50});


                            //Get context with jQuery - using jQuery's .get() method.
                        var ctx3 = $("#myChart3").get(0).getContext("2d");
                        //This will get the first returned node in the jQuery collection.
                        ctx3.canvas.width = 400;
                        ctx3.canvas.height = 100;
                        var myNewChart3 = new Chart(ctx3);
                        new Chart(ctx3).Line(data3);



                    } else {
                      console.error(xhr.statusText);
                    }
                  }
                }; // end loading data function

                xhr.onerror = function (e) {
                  console.error(xhr.statusText);
                };
                xhr.send(null);
                };

                $(document).ready(function(){


                    //var c1 = $('.topic-chart');
                    //var container1 = $(c1).parent();

                    //var c2 = $('.trend-chart');
                    //var container2 = $(c2).parent();

                    //$(window).resize( respondCanvas );

                    //function respondCanvas(){
                        //c1.attr('width', $(container1).width() *1.2); //max width
                        //c1.attr('height', $(container1).height() * 1.2 ); //max height

                        //c2.attr('width', $(container2).width() * 4 ); //max width
                        //c2.attr('height', $(container2).height() *1.5 ); //max height

                        //console.log($(container2).width());
                            //Call a function to redraw other content (texts, images etc)
                    //};

                    //Initial call
                    //respondCanvas();



                    $(document).on('click', '.button-link', function(){
                        var p = $(this).attr('value');
                        $('#review-text').scrollTo(p, {'offsetTop': '600'});
                        });



                    $('.text-comment').click(function(e) {
                        $($($(e.target).parent()).children('.link-buttons')).toggle();
                        });
                    $('.button-link').click(function() {
                        var tagID = $(this).attr('value');
                        alert(tagID);
                        $('.highlighted').removeClass('highlighted');
                        $(tagID).addClass('highlighted');

                        });
                    $('body').on('click', 'a.button-link', function() {
                        var tagID = $(this).attr('value');
                        var sentiment = $(this).parent().attr('class');
                        var tag = tagID.substring(1);
                        $('.highlighted').css('background-color', '').removeClass('highlighted');
                        if (sentiment == 'positive') {
                            $(document.getElementById(tag)).addClass('highlighted').css('background-color', '#58FA58');
                        }
                        else{
                            $(document.getElementById(tag)).addClass('highlighted').css('background-color', '#FA8258');
                            };
                        });
                    $('h4').click(function(e) {
                        $($($(e.target).parent()).children('ul')).toggle();
                        });

                        x = document.getElementsByClassName('topic-comment-block')[0];
                        toggleComments(x);


                    }); // end document.ready




                    