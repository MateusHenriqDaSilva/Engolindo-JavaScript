(function () {
    "use strict";
    
    var dijkstra = require("./build/js/dijkstra.js"),
        BFS = dijkstra.search.BreadthFirstSearch,
        CSVParser = dijkstra.parse.CSVAdjacencyListParser,
        
        //Root node for BFS.
        rootNode = 1,
        
        //Callback invoked every time an edge is visited.
        onVisitCallback = function (parentNode, childNode) {
          console.log("Visiting: " + parentNode + " -> " + childNode);
        },
        
        //Callback invoked once the search is complete.
        onDoneCallback = function () {
          console.log("Search Complete");
        };
        
    CSVParser.parseAdjacencyList("input.csv", function (adjacencyList) {
      BFS.searchWithAdjacencyList(rootNode, adjacencyList, onVisitCallback, onDoneCallback);
    });
    
  }());