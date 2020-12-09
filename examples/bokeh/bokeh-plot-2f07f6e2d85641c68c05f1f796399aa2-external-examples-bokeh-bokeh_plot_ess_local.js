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
    
      
      
    
      var element = document.getElementById("0abf8ff1-eed1-452b-abc9-9df8a1590756");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0abf8ff1-eed1-452b-abc9-9df8a1590756' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e60d9245-0a9b-4dac-8719-bf3207e953ee":{"roots":{"references":[{"attributes":{"data_source":{"id":"67988"},"glyph":{"id":"67987"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67990"}},"id":"67989","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"67996"},"ticker":{"id":"67960"}},"id":"67959","type":"LinearAxis"},{"attributes":{},"id":"67964","type":"PanTool"},{"attributes":{},"id":"68002","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"67973"}],"tools":[{"id":"67963"},{"id":"67964"},{"id":"67965"},{"id":"67966"},{"id":"67967"},{"id":"67968"},{"id":"67969"},{"id":"67970"}]},"id":"68008","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"67959"},"dimension":1,"ticker":null},"id":"67962","type":"Grid"},{"attributes":{"axis":{"id":"67955"},"ticker":null},"id":"67958","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67972","type":"PolyAnnotation"},{"attributes":{},"id":"68003","type":"Selection"},{"attributes":{"children":[{"id":"68009"},{"id":"68007"}]},"id":"68010","type":"Column"},{"attributes":{},"id":"67998","type":"BasicTickFormatter"},{"attributes":{},"id":"67960","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67963"},{"id":"67964"},{"id":"67965"},{"id":"67966"},{"id":"67967"},{"id":"67968"},{"id":"67969"},{"id":"67970"}]},"id":"67973","type":"Toolbar"},{"attributes":{},"id":"67969","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67983","type":"Circle"},{"attributes":{"source":{"id":"67982"}},"id":"67986","type":"CDSView"},{"attributes":{"below":[{"id":"67955"}],"center":[{"id":"67958"},{"id":"67962"}],"left":[{"id":"67959"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67985"},{"id":"67989"},{"id":"67991"},{"id":"67992"}],"title":{"id":"67993"},"toolbar":{"id":"67973"},"toolbar_location":null,"x_range":{"id":"67947"},"x_scale":{"id":"67951"},"y_range":{"id":"67949"},"y_scale":{"id":"67953"}},"id":"67946","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"67972"}},"id":"67967","type":"LassoSelectTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"67992","type":"Span"},{"attributes":{},"id":"67949","type":"DataRange1d"},{"attributes":{"overlay":{"id":"67971"}},"id":"67965","type":"BoxZoomTool"},{"attributes":{},"id":"67963","type":"ResetTool"},{"attributes":{},"id":"67953","type":"LinearScale"},{"attributes":{"data_source":{"id":"67982"},"glyph":{"id":"67983"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67984"},"selection_glyph":null,"view":{"id":"67986"}},"id":"67985","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"67998"},"ticker":{"id":"67956"}},"id":"67955","type":"LinearAxis"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"67991","type":"Span"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"67987","type":"Dash"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67971","type":"BoxAnnotation"},{"attributes":{"source":{"id":"67988"}},"id":"67990","type":"CDSView"},{"attributes":{},"id":"68005","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67984","type":"Circle"},{"attributes":{"children":[[{"id":"67946"},0,0]]},"id":"68007","type":"GridBox"},{"attributes":{},"id":"67951","type":"LinearScale"},{"attributes":{},"id":"67947","type":"DataRange1d"},{"attributes":{},"id":"67966","type":"WheelZoomTool"},{"attributes":{},"id":"67996","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"68008"},"toolbar_location":"above"},"id":"68009","type":"ToolbarBox"},{"attributes":{},"id":"67956","type":"BasicTicker"},{"attributes":{"text":"mu"},"id":"67993","type":"Title"},{"attributes":{},"id":"68004","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"67970","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68003"},"selection_policy":{"id":"68002"}},"id":"67982","type":"ColumnDataSource"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68005"},"selection_policy":{"id":"68004"}},"id":"67988","type":"ColumnDataSource"},{"attributes":{},"id":"67968","type":"UndoTool"}],"root_ids":["68010"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e60d9245-0a9b-4dac-8719-bf3207e953ee","root_ids":["68010"],"roots":{"68010":"0abf8ff1-eed1-452b-abc9-9df8a1590756"}}];
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