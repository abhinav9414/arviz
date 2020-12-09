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
    
      
      
    
      var element = document.getElementById("44d2a9e1-6cf4-4880-ab87-2e4a10d09421");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '44d2a9e1-6cf4-4880-ab87-2e4a10d09421' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4598f132-59ad-4308-8800-0d1d72f86b15":{"roots":{"references":[{"attributes":{},"id":"65450","type":"Selection"},{"attributes":{},"id":"65388","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65395"},{"id":"65396"},{"id":"65397"},{"id":"65398"},{"id":"65399"},{"id":"65400"},{"id":"65401"},{"id":"65402"}]},"id":"65405","type":"Toolbar"},{"attributes":{},"id":"65444","type":"BasicTickFormatter"},{"attributes":{},"id":"65379","type":"DataRange1d"},{"attributes":{},"id":"65457","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65433","type":"MultiLine"},{"attributes":{"toolbar":{"id":"65461"},"toolbar_location":"above"},"id":"65462","type":"ToolbarBox"},{"attributes":{},"id":"65452","type":"Selection"},{"attributes":{"formatter":{"id":"65444"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65414"}},"id":"65391","type":"LinearAxis"},{"attributes":{},"id":"65445","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"65402","type":"HoverTool"},{"attributes":{},"id":"65400","type":"UndoTool"},{"attributes":{},"id":"65383","type":"LinearScale"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65452"},"selection_policy":{"id":"65451"}},"id":"65421","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65428","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65438","type":"Circle"},{"attributes":{"below":[{"id":"65387"}],"center":[{"id":"65390"},{"id":"65394"}],"left":[{"id":"65391"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65419"},{"id":"65424"},{"id":"65429"},{"id":"65434"},{"id":"65439"},{"id":"65441"}],"title":{"id":"65442"},"toolbar":{"id":"65405"},"toolbar_location":null,"x_range":{"id":"65379"},"x_scale":{"id":"65383"},"y_range":{"id":"65381"},"y_scale":{"id":"65385"}},"id":"65378","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65441","type":"Span"},{"attributes":{},"id":"65455","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65417","type":"Triangle"},{"attributes":{},"id":"65454","type":"Selection"},{"attributes":{"source":{"id":"65431"}},"id":"65435","type":"CDSView"},{"attributes":{},"id":"65456","type":"Selection"},{"attributes":{},"id":"65458","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65404","type":"PolyAnnotation"},{"attributes":{"end":0.5,"start":-1.5},"id":"65381","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65427","type":"Circle"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"65450"},"selection_policy":{"id":"65449"}},"id":"65416","type":"ColumnDataSource"},{"attributes":{},"id":"65385","type":"LinearScale"},{"attributes":{"data_source":{"id":"65416"},"glyph":{"id":"65417"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65418"},"selection_glyph":null,"view":{"id":"65420"}},"id":"65419","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"65387"},"ticker":null},"id":"65390","type":"Grid"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65432","type":"MultiLine"},{"attributes":{"overlay":{"id":"65404"}},"id":"65399","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65418","type":"Triangle"},{"attributes":{"data_source":{"id":"65436"},"glyph":{"id":"65437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65438"},"selection_glyph":null,"view":{"id":"65440"}},"id":"65439","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65422","type":"MultiLine"},{"attributes":{"data_source":{"id":"65426"},"glyph":{"id":"65427"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65428"},"selection_glyph":null,"view":{"id":"65430"}},"id":"65429","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"65421"},"glyph":{"id":"65422"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65423"},"selection_glyph":null,"view":{"id":"65425"}},"id":"65424","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"65462"},{"id":"65460"}]},"id":"65463","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65403","type":"BoxAnnotation"},{"attributes":{},"id":"65453","type":"UnionRenderers"},{"attributes":{},"id":"65401","type":"SaveTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65437","type":"Circle"},{"attributes":{"toolbars":[{"id":"65405"}],"tools":[{"id":"65395"},{"id":"65396"},{"id":"65397"},{"id":"65398"},{"id":"65399"},{"id":"65400"},{"id":"65401"},{"id":"65402"}]},"id":"65461","type":"ProxyToolbar"},{"attributes":{},"id":"65396","type":"PanTool"},{"attributes":{"source":{"id":"65421"}},"id":"65425","type":"CDSView"},{"attributes":{},"id":"65451","type":"UnionRenderers"},{"attributes":{"axis":{"id":"65391"},"dimension":1,"ticker":null},"id":"65394","type":"Grid"},{"attributes":{"overlay":{"id":"65403"}},"id":"65397","type":"BoxZoomTool"},{"attributes":{},"id":"65395","type":"ResetTool"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65456"},"selection_policy":{"id":"65455"}},"id":"65431","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"65442","type":"Title"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"65454"},"selection_policy":{"id":"65453"}},"id":"65426","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"65378"},0,0]]},"id":"65460","type":"GridBox"},{"attributes":{},"id":"65398","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"65431"},"glyph":{"id":"65432"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65433"},"selection_glyph":null,"view":{"id":"65435"}},"id":"65434","type":"GlyphRenderer"},{"attributes":{},"id":"65449","type":"UnionRenderers"},{"attributes":{"source":{"id":"65416"}},"id":"65420","type":"CDSView"},{"attributes":{"data":{"x":[-29.8454020018613,-29.85632121495365],"y":[0.0,-1.0]},"selected":{"id":"65458"},"selection_policy":{"id":"65457"}},"id":"65436","type":"ColumnDataSource"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65414","type":"FixedTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65423","type":"MultiLine"},{"attributes":{"source":{"id":"65426"}},"id":"65430","type":"CDSView"},{"attributes":{"axis_label":"Log","formatter":{"id":"65445"},"ticker":{"id":"65388"}},"id":"65387","type":"LinearAxis"},{"attributes":{"source":{"id":"65436"}},"id":"65440","type":"CDSView"}],"root_ids":["65463"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"4598f132-59ad-4308-8800-0d1d72f86b15","root_ids":["65463"],"roots":{"65463":"44d2a9e1-6cf4-4880-ab87-2e4a10d09421"}}];
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