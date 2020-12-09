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
    
      
      
    
      var element = document.getElementById("910e1ca5-907d-48e3-8ab9-d6d03b934e89");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '910e1ca5-907d-48e3-8ab9-d6d03b934e89' but no matching script tag was found.")
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
                    
                  var docs_json = '{"feac46f0-88c5-416f-b24f-c8667f914f73":{"roots":{"references":[{"attributes":{"callback":null},"id":"85554","type":"HoverTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85607"},"ticker":{"id":"85544"}},"id":"85543","type":"LinearAxis"},{"attributes":{},"id":"85595","type":"BasicTickFormatter"},{"attributes":{},"id":"85517","type":"SaveTool"},{"attributes":{"axis":{"id":"85543"},"dimension":1,"ticker":null},"id":"85546","type":"Grid"},{"attributes":{"text":"tau"},"id":"85578","type":"Title"},{"attributes":{},"id":"85544","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85616"},"selection_policy":{"id":"85615"}},"id":"85589","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"85555"}},"id":"85549","type":"BoxZoomTool"},{"attributes":{},"id":"85609","type":"BasicTickFormatter"},{"attributes":{},"id":"85548","type":"PanTool"},{"attributes":{},"id":"85547","type":"ResetTool"},{"attributes":{"below":[{"id":"85503"}],"center":[{"id":"85506"},{"id":"85510"}],"left":[{"id":"85507"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85569"},{"id":"85571"},{"id":"85572"},{"id":"85573"},{"id":"85576"}],"title":{"id":"85578"},"toolbar":{"id":"85521"},"toolbar_location":null,"x_range":{"id":"85495"},"x_scale":{"id":"85499"},"y_range":{"id":"85497"},"y_scale":{"id":"85501"}},"id":"85494","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"85553","type":"SaveTool"},{"attributes":{},"id":"85550","type":"WheelZoomTool"},{"attributes":{},"id":"85597","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"85556"}},"id":"85551","type":"LassoSelectTool"},{"attributes":{},"id":"85511","type":"ResetTool"},{"attributes":{},"id":"85552","type":"UndoTool"},{"attributes":{"callback":null},"id":"85518","type":"HoverTool"},{"attributes":{"text":"mu"},"id":"85592","type":"Title"},{"attributes":{},"id":"85508","type":"BasicTicker"},{"attributes":{"source":{"id":"85589"}},"id":"85591","type":"CDSView"},{"attributes":{"overlay":{"id":"85519"}},"id":"85513","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"85586","type":"Span"},{"attributes":{"axis":{"id":"85507"},"dimension":1,"ticker":null},"id":"85510","type":"Grid"},{"attributes":{"data_source":{"id":"85580"},"glyph":{"id":"85581"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85582"},"selection_glyph":null,"view":{"id":"85584"}},"id":"85583","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85602"},"selection_policy":{"id":"85601"}},"id":"85566","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85588","type":"Dash"},{"attributes":{},"id":"85512","type":"PanTool"},{"attributes":{"axis":{"id":"85503"},"ticker":null},"id":"85506","type":"Grid"},{"attributes":{"data_source":{"id":"85589"},"glyph":{"id":"85588"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85591"}},"id":"85590","type":"GlyphRenderer"},{"attributes":{},"id":"85514","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"85585","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85604"},"selection_policy":{"id":"85603"}},"id":"85575","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"85539"}],"center":[{"id":"85542"},{"id":"85546"}],"left":[{"id":"85543"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85583"},{"id":"85585"},{"id":"85586"},{"id":"85587"},{"id":"85590"}],"title":{"id":"85592"},"toolbar":{"id":"85557"},"toolbar_location":null,"x_range":{"id":"85531"},"x_scale":{"id":"85535"},"y_range":{"id":"85533"},"y_scale":{"id":"85537"}},"id":"85530","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"85520"}},"id":"85515","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"85521"},{"id":"85557"}],"tools":[{"id":"85511"},{"id":"85512"},{"id":"85513"},{"id":"85514"},{"id":"85515"},{"id":"85516"},{"id":"85517"},{"id":"85518"},{"id":"85547"},{"id":"85548"},{"id":"85549"},{"id":"85550"},{"id":"85551"},{"id":"85552"},{"id":"85553"},{"id":"85554"}]},"id":"85619","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85568","type":"Circle"},{"attributes":{},"id":"85516","type":"UndoTool"},{"attributes":{},"id":"85495","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85614"},"selection_policy":{"id":"85613"}},"id":"85580","type":"ColumnDataSource"},{"attributes":{"end":1,"start":-0.05},"id":"85497","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85572","type":"Span"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85574","type":"Dash"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85587","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85581","type":"Circle"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85571","type":"Span"},{"attributes":{"data_source":{"id":"85575"},"glyph":{"id":"85574"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85577"}},"id":"85576","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85555","type":"BoxAnnotation"},{"attributes":{"source":{"id":"85575"}},"id":"85577","type":"CDSView"},{"attributes":{"source":{"id":"85566"}},"id":"85570","type":"CDSView"},{"attributes":{"data_source":{"id":"85566"},"glyph":{"id":"85567"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85568"},"selection_glyph":null,"view":{"id":"85570"}},"id":"85569","type":"GlyphRenderer"},{"attributes":{},"id":"85613","type":"UnionRenderers"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85573","type":"Span"},{"attributes":{},"id":"85614","type":"Selection"},{"attributes":{"axis":{"id":"85539"},"ticker":null},"id":"85542","type":"Grid"},{"attributes":{},"id":"85601","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85519","type":"BoxAnnotation"},{"attributes":{},"id":"85602","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85556","type":"PolyAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85597"},"ticker":{"id":"85504"}},"id":"85503","type":"LinearAxis"},{"attributes":{},"id":"85615","type":"UnionRenderers"},{"attributes":{},"id":"85616","type":"Selection"},{"attributes":{},"id":"85603","type":"UnionRenderers"},{"attributes":{},"id":"85537","type":"LinearScale"},{"attributes":{},"id":"85604","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85520","type":"PolyAnnotation"},{"attributes":{},"id":"85540","type":"BasicTicker"},{"attributes":{},"id":"85531","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85547"},{"id":"85548"},{"id":"85549"},{"id":"85550"},{"id":"85551"},{"id":"85552"},{"id":"85553"},{"id":"85554"}]},"id":"85557","type":"Toolbar"},{"attributes":{"children":[{"id":"85620"},{"id":"85618"}]},"id":"85621","type":"Column"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85595"},"ticker":{"id":"85508"}},"id":"85507","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85582","type":"Circle"},{"attributes":{"source":{"id":"85580"}},"id":"85584","type":"CDSView"},{"attributes":{"children":[[{"id":"85494"},0,0],[{"id":"85530"},0,1]]},"id":"85618","type":"GridBox"},{"attributes":{},"id":"85504","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"85619"},"toolbar_location":"above"},"id":"85620","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85511"},{"id":"85512"},{"id":"85513"},{"id":"85514"},{"id":"85515"},{"id":"85516"},{"id":"85517"},{"id":"85518"}]},"id":"85521","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85567","type":"Circle"},{"attributes":{},"id":"85499","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85609"},"ticker":{"id":"85540"}},"id":"85539","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"85533","type":"DataRange1d"},{"attributes":{},"id":"85535","type":"LinearScale"},{"attributes":{},"id":"85607","type":"BasicTickFormatter"},{"attributes":{},"id":"85501","type":"LinearScale"}],"root_ids":["85621"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"feac46f0-88c5-416f-b24f-c8667f914f73","root_ids":["85621"],"roots":{"85621":"910e1ca5-907d-48e3-8ab9-d6d03b934e89"}}];
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