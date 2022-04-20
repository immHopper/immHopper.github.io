// [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// Pieter Robberechts <http://github.com/probberechts>

/*exported searchFunc*/
var searchFunc = function (path, searchId, contentId) {

    function stripHtml(html) {
      html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
      html = html.replace(/<script([\s\S]*?)<\/script>/gi, "");
      html = html.replace(/<figure([\s\S]*?)<\/figure>/gi, "");
      html = html.replace(/<\/div>/ig, "\n");
      html = html.replace(/<\/li>/ig, "\n");
      html = html.replace(/<li>/ig, "  *  ");
      html = html.replace(/<\/ul>/ig, "\n");
      html = html.replace(/<\/p>/ig, "\n");
      html = html.replace(/<br\s*[\/]?>/gi, "\n");
      html = html.replace(/<[^>]+>/ig, "");
      return html;
    }
  
    function getAllCombinations(keywords) {
      var i, j, result = [];
  
      for (i = 0; i < keywords.length; i++) {
        for (j = i + 1; j < keywords.length + 1; j++) {
          result.push(keywords.slice(i, j).join(" "));
        }
      }
      return result;
    }
  
    $.ajax({
      url: path,
      dataType: "xml",
      success: function (xmlResponse) {
        // get contents from search data
        var dataset = $("entry", xmlResponse).map(function () {
          return {
            title: $("title", this).text(),
            content: $("content", this).text(),
            url: $("link", this).attr("href")
          };
        }).get();
  
        var $input = document.getElementById(searchId);
        if (!$input) { return; }
        var $resultContent = document.getElementById(contentId);
  
        $input.addEventListener("input", function () {
          var resultList = [];
          var keywords = getAllCombinations(this.value.trim().toLowerCase().split(" "))
            .sort(function (a, b) { return b.split(" ").length - a.split(" ").length; });
          $resultContent.innerHTML = "";
          if (this.value.trim().length <= 0) {
            return;
          }
          // perform local searching
          dataset.forEach(function (data) {
            var matches = 0;
            if (!data.title || data.title.trim() === "") {
              data.title = "Untitled";
            }
            var dataTitle = data.title.trim().toLowerCase();
            var dataContent = stripHtml(data.content.trim());
            var dataUrl = data.url;
            var indexTitle = -1;
            var indexContent = -1;
            var firstOccur = -1;
            // only match articles with contents
            if (dataContent !== "") {
              keywords.forEach(function (keyword) {
                indexTitle = dataTitle.indexOf(keyword);
                indexContent = dataContent.indexOf(keyword);
  
                if (indexTitle >= 0 || indexContent >= 0) {
                  matches += 1;
                  if (indexContent < 0) {
                    indexContent = 0;
                  }
                  if (firstOccur < 0) {
                    firstOccur = indexContent;
                  }
                }
              });
            }
            // show search results
            if (matches > 0) {
              var searchResult = {};
              searchResult.rank = matches;
              searchResult.str = "<li><a href='" + dataUrl + "' class='search-result-title'>" + dataTitle + "</a>";
              if (firstOccur >= 0) {
                // cut out 100 characters
                var start = firstOccur - 20;
                var end = firstOccur + 80;
  
                if (start < 0) {
                  start = 0;
                }
  
                if (start == 0) {
                  end = 100;
                }
  
                if (end > dataContent.length) {
                  end = dataContent.length;
                }
  
                var matchContent = dataContent.substr(start, end);
  
                // highlight all keywords
                var regS = new RegExp(keywords.join("|"), "gi");
                matchContent = matchContent.replace(regS, function (keyword) {
                  return "<em class=\"search-keyword\">" + keyword + "</em>";
                });
  
                searchResult.str += "<p class=\"search-result\">" + matchContent + "...</p>";
              }
              searchResult.str += "</li>";
              resultList.push(searchResult);
            }
          });
  
          if (resultList.length) {
            resultList.sort(function (a, b) {
              return b.rank - a.rank;
            });
            var result = "<ul class=\"search-result-list\">";
            for (var i = 0; i < resultList.length; i++) {
              result += resultList[i].str;
            }
            result += "</ul>";
            $resultContent.innerHTML = result;
          }
        });
      }
    });
  };
  
  /*exported searchBar*/
  
  $(function () {
  
    var $inputArea = $("input#search-input");
    var $resultArea = document.querySelector("div#search-result");
  
    $inputArea.focus(function () {
      var search_path = "search.xml";
      var path = "/" + search_path;
      searchFunc(path, 'search-input', 'search-result');
    });
  
    $inputArea.keydown(function (e) {
      if (e.which == 13) {
        e.preventDefault();
      }
    });
  
    var observer = new MutationObserver(function (mutationsList, observer) {
      if (mutationsList.length == 1) {
        if (mutationsList[0].addedNodes.length) {
          $(".search-no-result").hide();
        } else if (mutationsList[0].removedNodes.length) {
          $(".search-no-result").show(200);
        }
      }
    });
  
    observer.observe($resultArea, { childList: true });
  
  });