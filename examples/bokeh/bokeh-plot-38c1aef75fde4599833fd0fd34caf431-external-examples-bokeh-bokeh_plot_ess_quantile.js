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
    
      
      
    
      var element = document.getElementById("95108962-aa7e-4858-b8a9-d4db55121000");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '95108962-aa7e-4858-b8a9-d4db55121000' but no matching script tag was found.")
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
                    
                  var docs_json = '{"64b1d1f2-2db9-4142-8d63-600a4ba3c525":{"roots":{"references":[{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"68100"},"ticker":{"id":"68069"}},"id":"68068","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"68082"}],"tools":[{"id":"68072"},{"id":"68073"},{"id":"68074"},{"id":"68075"},{"id":"68076"},{"id":"68077"},{"id":"68078"},{"id":"68079"}]},"id":"68110","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"68064"}],"center":[{"id":"68067"},{"id":"68071"}],"left":[{"id":"68068"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68094"},{"id":"68096"}],"title":{"id":"68097"},"toolbar":{"id":"68082"},"toolbar_location":null,"x_range":{"id":"68056"},"x_scale":{"id":"68060"},"y_range":{"id":"68058"},"y_scale":{"id":"68062"}},"id":"68055","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68058","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68092","type":"Circle"},{"attributes":{"toolbar":{"id":"68110"},"toolbar_location":"above"},"id":"68111","type":"ToolbarBox"},{"attributes":{"axis":{"id":"68064"},"ticker":null},"id":"68067","type":"Grid"},{"attributes":{},"id":"68100","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"68091"}},"id":"68095","type":"CDSView"},{"attributes":{},"id":"68073","type":"PanTool"},{"attributes":{"text":"sigma"},"id":"68097","type":"Title"},{"attributes":{},"id":"68062","type":"LinearScale"},{"attributes":{},"id":"68106","type":"UnionRenderers"},{"attributes":{},"id":"68056","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68102"},"ticker":{"id":"68065"}},"id":"68064","type":"LinearAxis"},{"attributes":{},"id":"68065","type":"BasicTicker"},{"attributes":{"callback":null},"id":"68079","type":"HoverTool"},{"attributes":{},"id":"68072","type":"ResetTool"},{"attributes":{"axis":{"id":"68068"},"dimension":1,"ticker":null},"id":"68071","type":"Grid"},{"attributes":{},"id":"68102","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68072"},{"id":"68073"},{"id":"68074"},{"id":"68075"},{"id":"68076"},{"id":"68077"},{"id":"68078"},{"id":"68079"}]},"id":"68082","type":"Toolbar"},{"attributes":{"children":[{"id":"68111"},{"id":"68109"}]},"id":"68112","type":"Column"},{"attributes":{},"id":"68069","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68096","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68081","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"68091"},"glyph":{"id":"68092"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68093"},"selection_glyph":null,"view":{"id":"68095"}},"id":"68094","type":"GlyphRenderer"},{"attributes":{},"id":"68107","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68093","type":"Circle"},{"attributes":{"children":[[{"id":"68055"},0,0]]},"id":"68109","type":"GridBox"},{"attributes":{"overlay":{"id":"68081"}},"id":"68076","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"68080"}},"id":"68074","type":"BoxZoomTool"},{"attributes":{},"id":"68077","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68107"},"selection_policy":{"id":"68106"}},"id":"68091","type":"ColumnDataSource"},{"attributes":{},"id":"68060","type":"LinearScale"},{"attributes":{},"id":"68075","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68080","type":"BoxAnnotation"},{"attributes":{},"id":"68078","type":"SaveTool"}],"root_ids":["68112"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"64b1d1f2-2db9-4142-8d63-600a4ba3c525","root_ids":["68112"],"roots":{"68112":"95108962-aa7e-4858-b8a9-d4db55121000"}}];
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