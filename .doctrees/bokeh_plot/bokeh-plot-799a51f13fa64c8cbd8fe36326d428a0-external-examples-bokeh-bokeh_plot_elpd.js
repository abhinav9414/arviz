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
    
      
      
    
      var element = document.getElementById("f4b199d9-e8fa-483e-8cce-a9f063b2eaf9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f4b199d9-e8fa-483e-8cce-a9f063b2eaf9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"949475b0-1934-4754-9731-2d098369f22f":{"roots":{"references":[{"attributes":{"children":[[{"id":"67564"},0,0]]},"id":"67616","type":"GridBox"},{"attributes":{},"id":"67614","type":"Selection"},{"attributes":{"data_source":{"id":"67601"},"glyph":{"id":"67600"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67603"}},"id":"67602","type":"GlyphRenderer"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67607"},"ticker":{"id":"67578"}},"id":"67577","type":"LinearAxis"},{"attributes":{},"id":"67584","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67600","type":"Cross"},{"attributes":{"children":[{"id":"67618"},{"id":"67616"}]},"id":"67619","type":"Column"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67604","type":"Title"},{"attributes":{"formatter":{"id":"67609"},"ticker":{"id":"67574"}},"id":"67573","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67581"},{"id":"67582"},{"id":"67583"},{"id":"67584"},{"id":"67585"},{"id":"67586"},{"id":"67587"},{"id":"67588"}]},"id":"67591","type":"Toolbar"},{"attributes":{"overlay":{"id":"67589"}},"id":"67583","type":"BoxZoomTool"},{"attributes":{},"id":"67567","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"67591"}],"tools":[{"id":"67581"},{"id":"67582"},{"id":"67583"},{"id":"67584"},{"id":"67585"},{"id":"67586"},{"id":"67587"},{"id":"67588"}]},"id":"67617","type":"ProxyToolbar"},{"attributes":{},"id":"67587","type":"SaveTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67614"},"selection_policy":{"id":"67613"}},"id":"67601","type":"ColumnDataSource"},{"attributes":{},"id":"67578","type":"BasicTicker"},{"attributes":{},"id":"67609","type":"BasicTickFormatter"},{"attributes":{},"id":"67574","type":"BasicTicker"},{"attributes":{},"id":"67582","type":"PanTool"},{"attributes":{"axis":{"id":"67573"},"ticker":null},"id":"67576","type":"Grid"},{"attributes":{"axis":{"id":"67577"},"dimension":1,"ticker":null},"id":"67580","type":"Grid"},{"attributes":{},"id":"67613","type":"UnionRenderers"},{"attributes":{},"id":"67607","type":"BasicTickFormatter"},{"attributes":{},"id":"67581","type":"ResetTool"},{"attributes":{},"id":"67569","type":"LinearScale"},{"attributes":{"toolbar":{"id":"67617"},"toolbar_location":"above"},"id":"67618","type":"ToolbarBox"},{"attributes":{},"id":"67586","type":"UndoTool"},{"attributes":{},"id":"67565","type":"DataRange1d"},{"attributes":{"below":[{"id":"67573"}],"center":[{"id":"67576"},{"id":"67580"}],"left":[{"id":"67577"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67602"}],"title":{"id":"67604"},"toolbar":{"id":"67591"},"toolbar_location":null,"x_range":{"id":"67565"},"x_scale":{"id":"67569"},"y_range":{"id":"67567"},"y_scale":{"id":"67571"}},"id":"67564","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"67601"}},"id":"67603","type":"CDSView"},{"attributes":{},"id":"67571","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67590","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"67588","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67589","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"67590"}},"id":"67585","type":"LassoSelectTool"}],"root_ids":["67619"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"949475b0-1934-4754-9731-2d098369f22f","root_ids":["67619"],"roots":{"67619":"f4b199d9-e8fa-483e-8cce-a9f063b2eaf9"}}];
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