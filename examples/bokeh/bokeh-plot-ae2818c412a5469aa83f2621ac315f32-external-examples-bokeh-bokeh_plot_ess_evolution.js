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
    
      
      
    
      var element = document.getElementById("c50c9207-3686-4a94-97ee-12b1629168e3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c50c9207-3686-4a94-97ee-12b1629168e3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3970963b-ac16-40f4-a7c4-2b257335bbe7":{"roots":{"references":[{"attributes":{"data_source":{"id":"67845"},"glyph":{"id":"67846"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67847"},"selection_glyph":null,"view":{"id":"67849"}},"id":"67848","type":"GlyphRenderer"},{"attributes":{"source":{"id":"67850"}},"id":"67854","type":"CDSView"},{"attributes":{},"id":"67879","type":"UnionRenderers"},{"attributes":{},"id":"67807","type":"DataRange1d"},{"attributes":{"source":{"id":"67840"}},"id":"67844","type":"CDSView"},{"attributes":{},"id":"67869","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"67884"},{"id":"67882"}]},"id":"67885","type":"Column"},{"attributes":{"axis":{"id":"67813"},"ticker":null},"id":"67816","type":"Grid"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"67843"},{"id":"67848"}]},"id":"67862","type":"LegendItem"},{"attributes":{"above":[{"id":"67861"}],"below":[{"id":"67813"}],"center":[{"id":"67816"},{"id":"67820"}],"left":[{"id":"67817"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67843"},{"id":"67848"},{"id":"67853"},{"id":"67858"},{"id":"67860"}],"title":{"id":"67864"},"toolbar":{"id":"67831"},"toolbar_location":null,"x_range":{"id":"67805"},"x_scale":{"id":"67809"},"y_range":{"id":"67807"},"y_scale":{"id":"67811"}},"id":"67804","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"67827","type":"SaveTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"67858"},{"id":"67853"}]},"id":"67863","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67880"},"selection_policy":{"id":"67879"}},"id":"67855","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"67828","type":"HoverTool"},{"attributes":{"data_source":{"id":"67855"},"glyph":{"id":"67856"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67857"},"selection_glyph":null,"view":{"id":"67859"}},"id":"67858","type":"GlyphRenderer"},{"attributes":{},"id":"67824","type":"WheelZoomTool"},{"attributes":{},"id":"67805","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67829","type":"BoxAnnotation"},{"attributes":{},"id":"67809","type":"LinearScale"},{"attributes":{},"id":"67867","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"67852","type":"Line"},{"attributes":{"children":[[{"id":"67804"},0,0]]},"id":"67882","type":"GridBox"},{"attributes":{"axis_label":"ESS","formatter":{"id":"67867"},"ticker":{"id":"67818"}},"id":"67817","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67830","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"67831"}],"tools":[{"id":"67821"},{"id":"67822"},{"id":"67823"},{"id":"67824"},{"id":"67825"},{"id":"67826"},{"id":"67827"},{"id":"67828"}]},"id":"67883","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67874"},"selection_policy":{"id":"67873"}},"id":"67840","type":"ColumnDataSource"},{"attributes":{},"id":"67880","type":"Selection"},{"attributes":{},"id":"67874","type":"Selection"},{"attributes":{},"id":"67876","type":"Selection"},{"attributes":{},"id":"67875","type":"UnionRenderers"},{"attributes":{},"id":"67873","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"67846","type":"Line"},{"attributes":{},"id":"67877","type":"UnionRenderers"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"67860","type":"Span"},{"attributes":{"text":"b"},"id":"67864","type":"Title"},{"attributes":{},"id":"67811","type":"LinearScale"},{"attributes":{"source":{"id":"67855"}},"id":"67859","type":"CDSView"},{"attributes":{"data_source":{"id":"67850"},"glyph":{"id":"67851"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67852"},"selection_glyph":null,"view":{"id":"67854"}},"id":"67853","type":"GlyphRenderer"},{"attributes":{},"id":"67826","type":"UndoTool"},{"attributes":{},"id":"67814","type":"BasicTicker"},{"attributes":{"overlay":{"id":"67830"}},"id":"67825","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"67847","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"67862"},{"id":"67863"}],"location":"center_right","orientation":"horizontal"},"id":"67861","type":"Legend"},{"attributes":{},"id":"67818","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67856","type":"Circle"},{"attributes":{},"id":"67878","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67876"},"selection_policy":{"id":"67875"}},"id":"67845","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67878"},"selection_policy":{"id":"67877"}},"id":"67850","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"67883"},"toolbar_location":"above"},"id":"67884","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67841","type":"Circle"},{"attributes":{},"id":"67821","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67821"},{"id":"67822"},{"id":"67823"},{"id":"67824"},{"id":"67825"},{"id":"67826"},{"id":"67827"},{"id":"67828"}]},"id":"67831","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67857","type":"Circle"},{"attributes":{"source":{"id":"67845"}},"id":"67849","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"67851","type":"Line"},{"attributes":{"overlay":{"id":"67829"}},"id":"67823","type":"BoxZoomTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"67869"},"ticker":{"id":"67814"}},"id":"67813","type":"LinearAxis"},{"attributes":{"axis":{"id":"67817"},"dimension":1,"ticker":null},"id":"67820","type":"Grid"},{"attributes":{},"id":"67822","type":"PanTool"},{"attributes":{"data_source":{"id":"67840"},"glyph":{"id":"67841"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67842"},"selection_glyph":null,"view":{"id":"67844"}},"id":"67843","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67842","type":"Circle"}],"root_ids":["67885"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3970963b-ac16-40f4-a7c4-2b257335bbe7","root_ids":["67885"],"roots":{"67885":"c50c9207-3686-4a94-97ee-12b1629168e3"}}];
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