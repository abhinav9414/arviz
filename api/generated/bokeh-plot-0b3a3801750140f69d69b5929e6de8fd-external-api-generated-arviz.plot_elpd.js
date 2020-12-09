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
    
      
      
    
      var element = document.getElementById("bac154f1-b1f8-4555-9bd2-572e7df3c8da");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bac154f1-b1f8-4555-9bd2-572e7df3c8da' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d2c43e40-dbb4-462f-a743-6f8a226ccae5":{"roots":{"references":[{"attributes":{"source":{"id":"64646"}},"id":"64648","type":"CDSView"},{"attributes":{},"id":"64658","type":"UnionRenderers"},{"attributes":{},"id":"64632","type":"SaveTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"64659"},"selection_policy":{"id":"64658"}},"id":"64646","type":"ColumnDataSource"},{"attributes":{},"id":"64659","type":"Selection"},{"attributes":{"overlay":{"id":"64634"}},"id":"64628","type":"BoxZoomTool"},{"attributes":{},"id":"64616","type":"LinearScale"},{"attributes":{"toolbar":{"id":"64662"},"toolbar_location":"above"},"id":"64663","type":"ToolbarBox"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"64652"},"ticker":{"id":"64623"}},"id":"64622","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"64635","type":"PolyAnnotation"},{"attributes":{},"id":"64654","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"64618"},"ticker":null},"id":"64621","type":"Grid"},{"attributes":{},"id":"64652","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"64663"},{"id":"64661"}]},"id":"64664","type":"Column"},{"attributes":{},"id":"64623","type":"BasicTicker"},{"attributes":{"text":"centered model - non centered model"},"id":"64649","type":"Title"},{"attributes":{},"id":"64614","type":"LinearScale"},{"attributes":{},"id":"64619","type":"BasicTicker"},{"attributes":{"callback":null},"id":"64633","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"64634","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"64636"}],"tools":[{"id":"64626"},{"id":"64627"},{"id":"64628"},{"id":"64629"},{"id":"64630"},{"id":"64631"},{"id":"64632"},{"id":"64633"}]},"id":"64662","type":"ProxyToolbar"},{"attributes":{"formatter":{"id":"64654"},"ticker":{"id":"64619"}},"id":"64618","type":"LinearAxis"},{"attributes":{},"id":"64626","type":"ResetTool"},{"attributes":{"below":[{"id":"64618"}],"center":[{"id":"64621"},{"id":"64625"}],"left":[{"id":"64622"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"64647"}],"title":{"id":"64649"},"toolbar":{"id":"64636"},"toolbar_location":null,"x_range":{"id":"64610"},"x_scale":{"id":"64614"},"y_range":{"id":"64612"},"y_scale":{"id":"64616"}},"id":"64609","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"64631","type":"UndoTool"},{"attributes":{"axis":{"id":"64622"},"dimension":1,"ticker":null},"id":"64625","type":"Grid"},{"attributes":{"data_source":{"id":"64646"},"glyph":{"id":"64645"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"64648"}},"id":"64647","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"64645","type":"Cross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"64626"},{"id":"64627"},{"id":"64628"},{"id":"64629"},{"id":"64630"},{"id":"64631"},{"id":"64632"},{"id":"64633"}]},"id":"64636","type":"Toolbar"},{"attributes":{},"id":"64612","type":"DataRange1d"},{"attributes":{},"id":"64629","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"64635"}},"id":"64630","type":"LassoSelectTool"},{"attributes":{},"id":"64627","type":"PanTool"},{"attributes":{},"id":"64610","type":"DataRange1d"},{"attributes":{"children":[[{"id":"64609"},0,0]]},"id":"64661","type":"GridBox"}],"root_ids":["64664"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d2c43e40-dbb4-462f-a743-6f8a226ccae5","root_ids":["64664"],"roots":{"64664":"bac154f1-b1f8-4555-9bd2-572e7df3c8da"}}];
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