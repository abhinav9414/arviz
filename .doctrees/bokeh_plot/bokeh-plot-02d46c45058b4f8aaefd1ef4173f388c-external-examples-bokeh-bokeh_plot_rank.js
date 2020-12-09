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
    
      
      
    
      var element = document.getElementById("bbbacea2-0c1c-4cd3-b0bb-026ca35da9bb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bbbacea2-0c1c-4cd3-b0bb-026ca35da9bb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"03d88071-b292-481e-8927-e9a420ad63bd":{"roots":{"references":[{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90476"},"selection_policy":{"id":"90475"}},"id":"90417","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90401","type":"PolyAnnotation"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90468"},"ticker":{"id":"90435"}},"id":"90354","type":"LinearAxis"},{"attributes":{},"id":"90495","type":"Selection"},{"attributes":{"source":{"id":"90445"}},"id":"90449","type":"CDSView"},{"attributes":{},"id":"90468","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"90437","type":"Title"},{"attributes":{"data_source":{"id":"90417"},"glyph":{"id":"90418"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90419"},"selection_glyph":null,"view":{"id":"90421"}},"id":"90420","type":"GlyphRenderer"},{"attributes":{},"id":"90344","type":"DataRange1d"},{"attributes":{},"id":"90382","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90491"},"selection_policy":{"id":"90490"}},"id":"90445","type":"ColumnDataSource"},{"attributes":{},"id":"90478","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90422","type":"Span"},{"attributes":{"callback":null},"id":"90365","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90441","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90434","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90452","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90366","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90431","type":"VBar"},{"attributes":{},"id":"90480","type":"Selection"},{"attributes":{"source":{"id":"90423"}},"id":"90427","type":"CDSView"},{"attributes":{},"id":"90488","type":"UnionRenderers"},{"attributes":{"text":"mu"},"id":"90465","type":"Title"},{"attributes":{},"id":"90361","type":"WheelZoomTool"},{"attributes":{},"id":"90392","type":"ResetTool"},{"attributes":{"overlay":{"id":"90401"}},"id":"90396","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"90451"},"glyph":{"id":"90452"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90453"},"selection_glyph":null,"view":{"id":"90455"}},"id":"90454","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90447","type":"VBar"},{"attributes":{"overlay":{"id":"90400"}},"id":"90394","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90440","type":"VBar"},{"attributes":{},"id":"90475","type":"UnionRenderers"},{"attributes":{},"id":"90364","type":"SaveTool"},{"attributes":{"source":{"id":"90417"}},"id":"90421","type":"CDSView"},{"attributes":{},"id":"90493","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90478"},"selection_policy":{"id":"90477"}},"id":"90423","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90419","type":"VBar"},{"attributes":{"source":{"id":"90439"}},"id":"90443","type":"CDSView"},{"attributes":{},"id":"90393","type":"PanTool"},{"attributes":{},"id":"90348","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90358"},{"id":"90359"},{"id":"90360"},{"id":"90361"},{"id":"90362"},{"id":"90363"},{"id":"90364"},{"id":"90365"}]},"id":"90368","type":"Toolbar"},{"attributes":{},"id":"90397","type":"UndoTool"},{"attributes":{},"id":"90479","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90392"},{"id":"90393"},{"id":"90394"},{"id":"90395"},{"id":"90396"},{"id":"90397"},{"id":"90398"},{"id":"90399"}]},"id":"90402","type":"Toolbar"},{"attributes":{},"id":"90484","type":"BasicTickFormatter"},{"attributes":{},"id":"90342","type":"DataRange1d"},{"attributes":{},"id":"90469","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90430","type":"VBar"},{"attributes":{},"id":"90491","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"90463","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90412","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90484"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90385"}},"id":"90384","type":"LinearAxis"},{"attributes":{},"id":"90358","type":"ResetTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90418","type":"VBar"},{"attributes":{"axis":{"id":"90354"},"dimension":1,"ticker":null},"id":"90357","type":"Grid"},{"attributes":{"axis":{"id":"90384"},"ticker":null},"id":"90387","type":"Grid"},{"attributes":{},"id":"90359","type":"PanTool"},{"attributes":{"toolbar":{"id":"90498"},"toolbar_location":"above"},"id":"90499","type":"ToolbarBox"},{"attributes":{"children":[{"id":"90499"},{"id":"90497"}]},"id":"90500","type":"Column"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90416","type":"Span"},{"attributes":{"below":[{"id":"90350"}],"center":[{"id":"90353"},{"id":"90357"},{"id":"90416"},{"id":"90422"},{"id":"90428"},{"id":"90434"}],"left":[{"id":"90354"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90414"},{"id":"90420"},{"id":"90426"},{"id":"90432"}],"title":{"id":"90437"},"toolbar":{"id":"90368"},"toolbar_location":null,"x_range":{"id":"90342"},"x_scale":{"id":"90346"},"y_range":{"id":"90344"},"y_scale":{"id":"90348"}},"id":"90341","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90400","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"90350"},"ticker":null},"id":"90353","type":"Grid"},{"attributes":{"data_source":{"id":"90411"},"glyph":{"id":"90412"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90413"},"selection_glyph":null,"view":{"id":"90415"}},"id":"90414","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90444","type":"Span"},{"attributes":{"data_source":{"id":"90439"},"glyph":{"id":"90440"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90441"},"selection_glyph":null,"view":{"id":"90443"}},"id":"90442","type":"GlyphRenderer"},{"attributes":{},"id":"90490","type":"UnionRenderers"},{"attributes":{},"id":"90385","type":"BasicTicker"},{"attributes":{"overlay":{"id":"90367"}},"id":"90362","type":"LassoSelectTool"},{"attributes":{"source":{"id":"90411"}},"id":"90415","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90480"},"selection_policy":{"id":"90479"}},"id":"90429","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90495"},"selection_policy":{"id":"90494"}},"id":"90457","type":"ColumnDataSource"},{"attributes":{},"id":"90477","type":"UnionRenderers"},{"attributes":{},"id":"90473","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90367","type":"PolyAnnotation"},{"attributes":{},"id":"90398","type":"SaveTool"},{"attributes":{},"id":"90494","type":"UnionRenderers"},{"attributes":{"axis":{"id":"90388"},"dimension":1,"ticker":null},"id":"90391","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90493"},"selection_policy":{"id":"90492"}},"id":"90451","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90469"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90351"}},"id":"90350","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90413","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90425","type":"VBar"},{"attributes":{"below":[{"id":"90384"}],"center":[{"id":"90387"},{"id":"90391"},{"id":"90444"},{"id":"90450"},{"id":"90456"},{"id":"90462"}],"left":[{"id":"90388"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90442"},{"id":"90448"},{"id":"90454"},{"id":"90460"}],"title":{"id":"90465"},"toolbar":{"id":"90402"},"toolbar_location":null,"x_range":{"id":"90342"},"x_scale":{"id":"90380"},"y_range":{"id":"90344"},"y_scale":{"id":"90382"}},"id":"90377","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90346","type":"LinearScale"},{"attributes":{"source":{"id":"90429"}},"id":"90433","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90483"},"ticker":{"id":"90463"}},"id":"90388","type":"LinearAxis"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90456","type":"Span"},{"attributes":{"source":{"id":"90457"}},"id":"90461","type":"CDSView"},{"attributes":{},"id":"90492","type":"UnionRenderers"},{"attributes":{},"id":"90476","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90462","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90453","type":"VBar"},{"attributes":{},"id":"90380","type":"LinearScale"},{"attributes":{"children":[[{"id":"90341"},0,0],[{"id":"90377"},0,1]]},"id":"90497","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90474"},"selection_policy":{"id":"90473"}},"id":"90411","type":"ColumnDataSource"},{"attributes":{},"id":"90363","type":"UndoTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90428","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90424","type":"VBar"},{"attributes":{"data_source":{"id":"90457"},"glyph":{"id":"90458"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90459"},"selection_glyph":null,"view":{"id":"90461"}},"id":"90460","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90446","type":"VBar"},{"attributes":{"overlay":{"id":"90366"}},"id":"90360","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"90445"},"glyph":{"id":"90446"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90447"},"selection_glyph":null,"view":{"id":"90449"}},"id":"90448","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90450","type":"Span"},{"attributes":{},"id":"90395","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"90423"},"glyph":{"id":"90424"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90425"},"selection_glyph":null,"view":{"id":"90427"}},"id":"90426","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"90399","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"90368"},{"id":"90402"}],"tools":[{"id":"90358"},{"id":"90359"},{"id":"90360"},{"id":"90361"},{"id":"90362"},{"id":"90363"},{"id":"90364"},{"id":"90365"},{"id":"90392"},{"id":"90393"},{"id":"90394"},{"id":"90395"},{"id":"90396"},{"id":"90397"},{"id":"90398"},{"id":"90399"}]},"id":"90498","type":"ProxyToolbar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90489"},"selection_policy":{"id":"90488"}},"id":"90439","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"90435","type":"FixedTicker"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90459","type":"VBar"},{"attributes":{},"id":"90351","type":"BasicTicker"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90458","type":"VBar"},{"attributes":{},"id":"90474","type":"Selection"},{"attributes":{"data_source":{"id":"90429"},"glyph":{"id":"90430"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90431"},"selection_glyph":null,"view":{"id":"90433"}},"id":"90432","type":"GlyphRenderer"},{"attributes":{"source":{"id":"90451"}},"id":"90455","type":"CDSView"},{"attributes":{},"id":"90483","type":"BasicTickFormatter"},{"attributes":{},"id":"90489","type":"Selection"}],"root_ids":["90500"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"03d88071-b292-481e-8927-e9a420ad63bd","root_ids":["90500"],"roots":{"90500":"bbbacea2-0c1c-4cd3-b0bb-026ca35da9bb"}}];
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