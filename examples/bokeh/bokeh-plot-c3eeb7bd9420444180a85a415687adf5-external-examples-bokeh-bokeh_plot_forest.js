(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("849a4d84-05fa-4c30-bbb9-671c1073785c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '849a4d84-05fa-4c30-bbb9-671c1073785c' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"676545c0-011d-480b-9738-48796f1fb4df":{"roots":{"references":[{"attributes":{"data_source":{"id":"68245"},"glyph":{"id":"68246"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68247"},"selection_glyph":null,"view":{"id":"68249"}},"id":"68248","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68210"}},"id":"68214","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68360"},"selection_policy":{"id":"68359"}},"id":"68290","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"68368"},{"id":"68366"}]},"id":"68369","type":"Column"},{"attributes":{"data_source":{"id":"68250"},"glyph":{"id":"68251"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68252"},"selection_glyph":null,"view":{"id":"68254"}},"id":"68253","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68175","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"68205"},"glyph":{"id":"68206"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68207"},"selection_glyph":null,"view":{"id":"68209"}},"id":"68208","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68320"},"selection_policy":{"id":"68319"}},"id":"68190","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68220"},"glyph":{"id":"68221"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68222"},"selection_glyph":null,"view":{"id":"68224"}},"id":"68223","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68175"}},"id":"68170","type":"LassoSelectTool"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68324"},"selection_policy":{"id":"68323"}},"id":"68200","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68334"},"selection_policy":{"id":"68333"}},"id":"68225","type":"ColumnDataSource"},{"attributes":{},"id":"68171","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68272","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"68358"},"selection_policy":{"id":"68357"}},"id":"68285","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"68176"}],"tools":[{"id":"68166"},{"id":"68167"},{"id":"68168"},{"id":"68169"},{"id":"68170"},{"id":"68171"},{"id":"68172"},{"id":"68173"}]},"id":"68367","type":"ProxyToolbar"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68186","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68212","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68206","type":"Line"},{"attributes":{"data_source":{"id":"68280"},"glyph":{"id":"68281"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68282"},"selection_glyph":null,"view":{"id":"68284"}},"id":"68283","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68346"},"selection_policy":{"id":"68345"}},"id":"68255","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68225"}},"id":"68229","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68231","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68302","type":"Circle"},{"attributes":{"formatter":{"id":"68313"},"ticker":{"id":"68159"}},"id":"68158","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68247","type":"Line"},{"attributes":{"data_source":{"id":"68190"},"glyph":{"id":"68191"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68192"},"selection_glyph":null,"view":{"id":"68194"}},"id":"68193","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68292","type":"Line"},{"attributes":{"data_source":{"id":"68275"},"glyph":{"id":"68276"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68277"},"selection_glyph":null,"view":{"id":"68279"}},"id":"68278","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68215"}},"id":"68219","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68187","type":"Line"},{"attributes":{"source":{"id":"68240"}},"id":"68244","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68287","type":"Circle"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68338"},"selection_policy":{"id":"68337"}},"id":"68235","type":"ColumnDataSource"},{"attributes":{},"id":"68166","type":"ResetTool"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68344"},"selection_policy":{"id":"68343"}},"id":"68250","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68326"},"selection_policy":{"id":"68325"}},"id":"68205","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68196","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68291","type":"Line"},{"attributes":{"data_source":{"id":"68235"},"glyph":{"id":"68236"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68237"},"selection_glyph":null,"view":{"id":"68239"}},"id":"68238","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68356"},"selection_policy":{"id":"68355"}},"id":"68280","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68232","type":"Line"},{"attributes":{"source":{"id":"68265"}},"id":"68269","type":"CDSView"},{"attributes":{"overlay":{"id":"68174"}},"id":"68168","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"68210"},"glyph":{"id":"68211"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68212"},"selection_glyph":null,"view":{"id":"68214"}},"id":"68213","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68205"}},"id":"68209","type":"CDSView"},{"attributes":{"axis":{"id":"68162"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68165","type":"Grid"},{"attributes":{"data_source":{"id":"68255"},"glyph":{"id":"68256"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68257"},"selection_glyph":null,"view":{"id":"68259"}},"id":"68258","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68190"}},"id":"68194","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68236","type":"Line"},{"attributes":{},"id":"68156","type":"LinearScale"},{"attributes":{"data_source":{"id":"68230"},"glyph":{"id":"68231"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68232"},"selection_glyph":null,"view":{"id":"68234"}},"id":"68233","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68271","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68207","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68277","type":"Line"},{"attributes":{"data_source":{"id":"68295"},"glyph":{"id":"68296"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68297"},"selection_glyph":null,"view":{"id":"68299"}},"id":"68298","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68257","type":"Circle"},{"attributes":{"data_source":{"id":"68300"},"glyph":{"id":"68301"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68302"},"selection_glyph":null,"view":{"id":"68304"}},"id":"68303","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68185"}},"id":"68189","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68237","type":"Line"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68342"},"selection_policy":{"id":"68341"}},"id":"68245","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68220"}},"id":"68224","type":"CDSView"},{"attributes":{"source":{"id":"68260"}},"id":"68264","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68246","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68322"},"selection_policy":{"id":"68321"}},"id":"68195","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68262","type":"Line"},{"attributes":{"source":{"id":"68280"}},"id":"68284","type":"CDSView"},{"attributes":{"source":{"id":"68235"}},"id":"68239","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68227","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68301","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68267","type":"Line"},{"attributes":{},"id":"68167","type":"PanTool"},{"attributes":{"source":{"id":"68300"}},"id":"68304","type":"CDSView"},{"attributes":{},"id":"68172","type":"SaveTool"},{"attributes":{"source":{"id":"68255"}},"id":"68259","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68286","type":"Circle"},{"attributes":{"source":{"id":"68270"}},"id":"68274","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68217","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68297","type":"Line"},{"attributes":{"formatter":{"id":"68312"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68309"}},"id":"68162","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68211","type":"Circle"},{"attributes":{"source":{"id":"68285"}},"id":"68289","type":"CDSView"},{"attributes":{},"id":"68154","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68241","type":"Circle"},{"attributes":{"data_source":{"id":"68225"},"glyph":{"id":"68226"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68227"},"selection_glyph":null,"view":{"id":"68229"}},"id":"68228","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68290"}},"id":"68294","type":"CDSView"},{"attributes":{"source":{"id":"68250"}},"id":"68254","type":"CDSView"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68330"},"selection_policy":{"id":"68329"}},"id":"68215","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68350"},"selection_policy":{"id":"68349"}},"id":"68265","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"68149"},0,0]]},"id":"68366","type":"GridBox"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68216","type":"Line"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68332"},"selection_policy":{"id":"68331"}},"id":"68220","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68362"},"selection_policy":{"id":"68361"}},"id":"68295","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"68173","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68252","type":"Line"},{"attributes":{"source":{"id":"68275"}},"id":"68279","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68261","type":"Line"},{"attributes":{"data_source":{"id":"68285"},"glyph":{"id":"68286"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68287"},"selection_glyph":null,"view":{"id":"68289"}},"id":"68288","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68256","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68166"},{"id":"68167"},{"id":"68168"},{"id":"68169"},{"id":"68170"},{"id":"68171"},{"id":"68172"},{"id":"68173"}]},"id":"68176","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"68340"},"selection_policy":{"id":"68339"}},"id":"68240","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68251","type":"Line"},{"attributes":{"data_source":{"id":"68240"},"glyph":{"id":"68241"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68242"},"selection_glyph":null,"view":{"id":"68244"}},"id":"68243","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68290"},"glyph":{"id":"68291"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68292"},"selection_glyph":null,"view":{"id":"68294"}},"id":"68293","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68222","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68266","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68192","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68328"},"selection_policy":{"id":"68327"}},"id":"68210","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68281","type":"Line"},{"attributes":{},"id":"68159","type":"BasicTicker"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68221","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68348"},"selection_policy":{"id":"68347"}},"id":"68260","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68364"},"selection_policy":{"id":"68363"}},"id":"68300","type":"ColumnDataSource"},{"attributes":{},"id":"68169","type":"WheelZoomTool"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68307","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68242","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68191","type":"Line"},{"attributes":{"source":{"id":"68295"}},"id":"68299","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68226","type":"Circle"},{"attributes":{"source":{"id":"68245"}},"id":"68249","type":"CDSView"},{"attributes":{"axis":{"id":"68158"},"ticker":null},"id":"68161","type":"Grid"},{"attributes":{"data_source":{"id":"68265"},"glyph":{"id":"68266"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68267"},"selection_glyph":null,"view":{"id":"68269"}},"id":"68268","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68200"},"glyph":{"id":"68201"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68202"},"selection_glyph":null,"view":{"id":"68204"}},"id":"68203","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68336"},"selection_policy":{"id":"68335"}},"id":"68230","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68270"},"glyph":{"id":"68271"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68272"},"selection_glyph":null,"view":{"id":"68274"}},"id":"68273","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68318"},"selection_policy":{"id":"68317"}},"id":"68185","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68352"},"selection_policy":{"id":"68351"}},"id":"68270","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68230"}},"id":"68234","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68296","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68174","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"68260"},"glyph":{"id":"68261"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68262"},"selection_glyph":null,"view":{"id":"68264"}},"id":"68263","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68282","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68276","type":"Line"},{"attributes":{},"id":"68319","type":"UnionRenderers"},{"attributes":{},"id":"68320","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"68305","type":"Title"},{"attributes":{},"id":"68329","type":"UnionRenderers"},{"attributes":{},"id":"68361","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68195"},"glyph":{"id":"68196"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68197"},"selection_glyph":null,"view":{"id":"68199"}},"id":"68198","type":"GlyphRenderer"},{"attributes":{},"id":"68357","type":"UnionRenderers"},{"attributes":{"source":{"id":"68195"}},"id":"68199","type":"CDSView"},{"attributes":{},"id":"68360","type":"Selection"},{"attributes":{},"id":"68312","type":"BasicTickFormatter"},{"attributes":{},"id":"68347","type":"UnionRenderers"},{"attributes":{"source":{"id":"68200"}},"id":"68204","type":"CDSView"},{"attributes":{},"id":"68344","type":"Selection"},{"attributes":{},"id":"68346","type":"Selection"},{"attributes":{},"id":"68334","type":"Selection"},{"attributes":{},"id":"68354","type":"Selection"},{"attributes":{},"id":"68348","type":"Selection"},{"attributes":{},"id":"68349","type":"UnionRenderers"},{"attributes":{},"id":"68363","type":"UnionRenderers"},{"attributes":{},"id":"68324","type":"Selection"},{"attributes":{},"id":"68331","type":"UnionRenderers"},{"attributes":{},"id":"68338","type":"Selection"},{"attributes":{},"id":"68340","type":"Selection"},{"attributes":{},"id":"68343","type":"UnionRenderers"},{"attributes":{},"id":"68318","type":"Selection"},{"attributes":{},"id":"68339","type":"UnionRenderers"},{"attributes":{},"id":"68356","type":"Selection"},{"attributes":{"data_source":{"id":"68215"},"glyph":{"id":"68216"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68217"},"selection_glyph":null,"view":{"id":"68219"}},"id":"68218","type":"GlyphRenderer"},{"attributes":{},"id":"68358","type":"Selection"},{"attributes":{},"id":"68351","type":"UnionRenderers"},{"attributes":{},"id":"68328","type":"Selection"},{"attributes":{},"id":"68352","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68197","type":"Circle"},{"attributes":{"data_source":{"id":"68185"},"glyph":{"id":"68186"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68187"},"selection_glyph":null,"view":{"id":"68189"}},"id":"68188","type":"GlyphRenderer"},{"attributes":{},"id":"68335","type":"UnionRenderers"},{"attributes":{},"id":"68342","type":"Selection"},{"attributes":{},"id":"68364","type":"Selection"},{"attributes":{},"id":"68330","type":"Selection"},{"attributes":{},"id":"68322","type":"Selection"},{"attributes":{},"id":"68355","type":"UnionRenderers"},{"attributes":{},"id":"68345","type":"UnionRenderers"},{"attributes":{},"id":"68362","type":"Selection"},{"attributes":{},"id":"68317","type":"UnionRenderers"},{"attributes":{},"id":"68313","type":"BasicTickFormatter"},{"attributes":{},"id":"68325","type":"UnionRenderers"},{"attributes":{},"id":"68321","type":"UnionRenderers"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68309","type":"FixedTicker"},{"attributes":{},"id":"68323","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"68367"},"toolbar_location":"above"},"id":"68368","type":"ToolbarBox"},{"attributes":{},"id":"68326","type":"Selection"},{"attributes":{},"id":"68337","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68202","type":"Line"},{"attributes":{},"id":"68327","type":"UnionRenderers"},{"attributes":{},"id":"68332","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68308","type":"DataRange1d"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68201","type":"Line"},{"attributes":{},"id":"68336","type":"Selection"},{"attributes":{},"id":"68353","type":"UnionRenderers"},{"attributes":{},"id":"68333","type":"UnionRenderers"},{"attributes":{"below":[{"id":"68158"}],"center":[{"id":"68161"},{"id":"68165"}],"left":[{"id":"68162"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68188"},{"id":"68193"},{"id":"68198"},{"id":"68203"},{"id":"68208"},{"id":"68213"},{"id":"68218"},{"id":"68223"},{"id":"68228"},{"id":"68233"},{"id":"68238"},{"id":"68243"},{"id":"68248"},{"id":"68253"},{"id":"68258"},{"id":"68263"},{"id":"68268"},{"id":"68273"},{"id":"68278"},{"id":"68283"},{"id":"68288"},{"id":"68293"},{"id":"68298"},{"id":"68303"}],"title":{"id":"68305"},"toolbar":{"id":"68176"},"toolbar_location":null,"x_range":{"id":"68307"},"x_scale":{"id":"68154"},"y_range":{"id":"68308"},"y_scale":{"id":"68156"}},"id":"68149","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68359","type":"UnionRenderers"},{"attributes":{},"id":"68341","type":"UnionRenderers"},{"attributes":{},"id":"68350","type":"Selection"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68354"},"selection_policy":{"id":"68353"}},"id":"68275","type":"ColumnDataSource"}],"root_ids":["68369"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"676545c0-011d-480b-9738-48796f1fb4df","root_ids":["68369"],"roots":{"68369":"849a4d84-05fa-4c30-bbb9-671c1073785c"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();