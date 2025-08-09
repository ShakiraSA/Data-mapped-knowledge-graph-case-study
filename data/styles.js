var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "shape" : "roundrectangle",
      "text-opacity" : 1.0,
      "font-size" : 15,
      "text-valign" : "center",
      "text-halign" : "center",
      "background-color" : "rgb(167,165,165)",
      "border-opacity" : 1.0,
      "width" : 75.0,
      "border-color" : "rgb(204,204,204)",
      "background-opacity" : 1.0,
      "height" : 35.0,
      "border-width" : 0.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[type = '']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[type = 'Molecular pathway']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[logFC > 1]",
    "css" : {
      "background-color" : "rgb(255,0,0)"
    }
  }, {
    "selector" : "node[logFC = 1]",
    "css" : {
      "background-color" : "rgb(255,0,0)"
    }
  }, {
    "selector" : "node[logFC > 0][logFC < 1]",
    "css" : {
      "background-color" : "mapData(logFC,0,1,rgb(255,255,255),rgb(255,0,0))"
    }
  }, {
    "selector" : "node[logFC > -1][logFC < 0]",
    "css" : {
      "background-color" : "mapData(logFC,-1,0,rgb(0,0,255),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[logFC = -1]",
    "css" : {
      "background-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "node[logFC < -1]",
    "css" : {
      "background-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "node[ id = '24320' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24352' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24384' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24416' ]",
    "css" : {
      "background-color" : "rgb(255,0,204)"
    }
  }, {
    "selector" : "node[ id = '24448' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24480' ]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[ id = '24512' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24544' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24322' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24354' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24386' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24418' ]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[ id = '24450' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24482' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24514' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24546' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24324' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24356' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24388' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24420' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24452' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24484' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24516' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24548' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24326' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24358' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24390' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24422' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24454' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24486' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24518' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24550' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24328' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24360' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24392' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24424' ]",
    "css" : {
      "background-color" : "rgb(255,0,204)"
    }
  }, {
    "selector" : "node[ id = '24456' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24488' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24520' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24552' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24330' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24362' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24394' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24426' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24458' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24490' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24522' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24554' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24332' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24364' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24396' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24428' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24460' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24492' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24524' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24556' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24334' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24366' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24398' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24430' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24462' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24494' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24526' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24336' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24368' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24400' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24432' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24464' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24496' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24528' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24338' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24370' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24402' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24434' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24466' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24498' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24530' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24562' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24308' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24340' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24372' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24404' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24436' ]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[ id = '24468' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24500' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24532' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24310' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24342' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24374' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24406' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24438' ]",
    "css" : {
      "background-color" : "rgb(255,40,213)"
    }
  }, {
    "selector" : "node[ id = '24470' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24502' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24534' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24312' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24344' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24376' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24408' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24440' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24472' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24504' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24536' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24314' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24346' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24378' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24410' ]",
    "css" : {
      "background-color" : "rgb(255,40,213)"
    }
  }, {
    "selector" : "node[ id = '24442' ]",
    "css" : {
      "background-color" : "rgb(255,0,204)"
    }
  }, {
    "selector" : "node[ id = '24474' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24506' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24538' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24316' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24348' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24380' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24412' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24444' ]",
    "css" : {
      "background-color" : "rgb(255,40,213)"
    }
  }, {
    "selector" : "node[ id = '24476' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24508' ]",
    "css" : {
      "background-color" : "rgb(247,255,0)"
    }
  }, {
    "selector" : "node[ id = '24540' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24318' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24350' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node[ id = '24382' ]",
    "css" : {
      "background-color" : "rgb(204,204,204)"
    }
  }, {
    "selector" : "node[ id = '24414' ]",
    "css" : {
      "background-color" : "rgb(255,0,204)"
    }
  }, {
    "selector" : "node[ id = '24446' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24478' ]",
    "css" : {
      "background-color" : "rgb(0,204,0)"
    }
  }, {
    "selector" : "node[ id = '24510' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal",
      "color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[ id = '24542' ]",
    "css" : {
      "font-family" : "Arial Vet",
      "font-weight" : "normal"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-color" : "rgb(0,0,0)",
      "line-color" : "rgb(0,0,0)",
      "font-size" : 10,
      "line-style" : "dashed",
      "source-arrow-shape" : "none",
      "opacity" : 1.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "source-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "content" : "",
      "width" : 2.0,
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]