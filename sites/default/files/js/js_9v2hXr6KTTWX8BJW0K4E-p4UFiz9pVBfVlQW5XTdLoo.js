Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n!=1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Se produjo un error HTTP AJAX.","HTTP Result Code: !status":"C\u00f3digo de Resultado HTTP: !status","An AJAX HTTP request terminated abnormally.":"Una solicitud HTTP de AJAX termin\u00f3 de manera anormal.","Debugging information follows.":"A continuaci\u00f3n se detalla la informaci\u00f3n de depuraci\u00f3n.","Path: !uri":"Ruta: !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Hide":"Ocultar","Show":"Mostrar","Please wait...":"Espere, por favor...","Re-order rows by numerical weight instead of dragging.":"Reordenar las filas por peso num\u00e9rico en lugar de arrastrar.","Show row weights":"Mostrar pesos de la fila","Hide row weights":"Ocultar pesos de la fila","Drag to re-order":"Arrastre para reordenar","Changes made in this table will not be saved until the form is submitted.":"Los cambios realizados en esta tabla no se guardar\u00e1n hasta que se env\u00ede el formulario","Edit":"Editar","@number comments per page":"@number comentarios por p\u00e1gina","(active tab)":"(solapa activa)","Requires a title":"Necesita un t\u00edtulo","Not published":"No publicado","Don\u0027t display post information":"No mostrar informaci\u00f3n del env\u00edo","Select all rows in this table":"Seleccionar todas las filas de esta tabla","Deselect all rows in this table":"Quitar la selecci\u00f3n a todas las filas de esta tabla","@title dialog":"Di\u00e1logo @title","Configure":"Configurar","Hide summary":"Ocultar resumen","Edit summary":"Editar resumen","Not in menu":"No est\u00e1 en un men\u00fa","New revision":"Nueva revisi\u00f3n","No revision":"Sin revisi\u00f3n","By @name on @date":"Por @name en @date","By @name":"Por @name","Automatic alias":"Alias autom\u00e1tico","Alias: @alias":"Alias: @alias","No alias":"Sin alias","Autocomplete popup":"Ventana emergente con autocompletado","Searching for matches...":"Buscando coincidencias","Not restricted":"Sin restricci\u00f3n","Restricted to certain pages":"Restringido a algunas p\u00e1ginas","Not customizable":"No personalizable","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"Los cambios sobre estos bloques no se guardar\u00e1n hasta que no pulse el bot\u00f3n \u003Cem\u003EGuardar bloques\u003C\/em\u003E.","The block cannot be placed in this region.":"El bloque no se puede colocar en esta regi\u00f3n.","Translatable":"Traducible","Not translatable":"No traducible","Restricted to certain languages":"Restringido a ciertos idiomas","Customize dashboard":"Personalizar panel de control","Add":"Agregar","Recent":"Reciente","All":"Todo(s)","Loading token browser...":"Cargando navegador de comodines...","Available tokens":"Comodines disponibles","Insert this token into your form":"Inserte este comod\u00edn en su formulario","First click a text field to insert your tokens into.":"Primero haga clic en un campo de texto en el que quiera insertar sus patrones de reemplazo.","Remove this pane?":"\u00bfEliminar este panel?","Hide layout designer":"Ocultar el maquetador de dise\u00f1o","Show layout designer":"Mostrar maquetador de dise\u00f1o.","Hide description":"Esconder descripci\u00f3n","Show description":"Mostrar descripci\u00f3n","Also allow !name role to !permission?":"\u00bfTambi\u00e9n permitir al rol !name el permiso !permission?","OK":"OK","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"El archivo seleccionado %filename no puede ser subido. Solo se permiten archivos con las siguientes extensiones: %extensions.","Enabled":"Activado","Disabled":"Desactivado","Remove group":"Eliminar grupo","Apply (all displays)":"Aplicar (todas las presentaciones)","Revert to default":"Volver al valor inicial","Apply (this display)":"Aplicar (esta presentaci\u00f3n)","Upload":"Subir al servidor","You can not perform this operation.":"No puede realizar esta operaci\u00f3n.","Do you want to refresh the current directory?":"\u00bfQuiere actualizar la vista de este directorio?","Only files with the following extensions are allowed: %files-allowed.":"S\u00f3lo se permiten archivos con las siguientes extensiones: %files-allowed.","Delete selected files?":"\u00bfBorrar los documentos seleccionados?","Please select a thumbnail.":"Seleccione una minatura, por favor.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Especifique unas dimensiones dentro de las permitidas, por favor. Eso va desde 1 \u00d7 1 a @dimensions.","Please select a file.":"Seleccione un documento, por favor.","Log messages":"Registrar mensajes","%filename is not an image.":"%filename no es una imagen.","You must select at least %num files.":"Debe seleccionar al menos %num documentos.","You are not allowed to operate on more than %num files.":"No tiene permiso para actuar sobre m\u00e1s de %num documentos.","Close":"Cerrar","Change view":"Cambiar vista","Insert file":"Insertar archivo","Changes to the checkout panes will not be saved until the \u003Cem\u003ESave configuration\u003C\/em\u003E button is clicked.":"Los cambios a los paneles de pedido no ser\u00e1n guardados hasta que el bot\u00f3n de \u003Cem\u003E Guardar Configuraci\u00f3n \u003C\/em\u003E sea presionado.","This permission is inherited from the authenticated user role.":"Este permiso se hereda del rol de usuario registrado.","From @title":"De @title","To @title":"A @title","Created @date":"Creado @date","New order":"Nuevo pedido","Updated @date":"Actualizado @date","Done":"Hecho","Select":"Seleccionar","none":"ninguno","Save":"Guardar","Loading...":"Cargando...","Submit":"Enviar","Cancel":"Cancelar","all":"todo","New":"Nuevo","Add file":"Agregar archivo","Ignored from settings":"Ignorado por los ajustes","No results":"No hay resultados","clear":"limpiar","Modules installed within the last week.":"M\u00f3dulos instalados en la \u00faltima semana.","No modules added within the last week.":"No hay m\u00f3dulos adicionados en la \u00faltima semana.","Modules enabled\/disabled within the last week.":"M\u00f3dulos habilitados\/deshabilitados en la \u00faltima semana.","No modules were enabled or disabled within the last week.":"No hay m\u00f3dulos habilitados o deshabilitados en la \u00faltima semana.","@enabled of @total":"@enabled de @total"}} };;
(function(){
  function sortDrupalBehaviors() {
    var weights = {};
    for (var k in Drupal.behaviors) {
      var v = Drupal.behaviors[k];
      var pieces = k.split('.');
      if (pieces.length == 2 && pieces[1] === 'weight') {
        // This v is not a behavior, but a weight setting for another behavior.
        weights[pieces[0]] = v;
        delete Drupal.behaviors[k];
      }
      else if (typeof weights[k] != 'number') {
        // This v is a behavior object, but it might contain a weight setting.
        if (typeof v == 'object' && v && typeof v.weight == 'number') {
          weights[k] = v.weight;
        }
        else if (weights[k] == undefined) {
          weights[k] = false;
        }
      }
    }

    var ww = [0];
    var by_weight = {0: {}};
    for (var k in weights) {
      if (Drupal.behaviors[k] == undefined) {
        continue;
      }
      var w = weights[k];
      w = (typeof w == 'number') ? w : 0;
      if (by_weight[w] == undefined) {
        by_weight[w] = {};
        ww.push(w);
      }
      by_weight[w][k] = Drupal.behaviors[k];
    }
    ww.sort(function(a,b){return a - b;});

    // Other scripts that want to mess with behaviors, will only see those with weight = 0.
    Drupal.behaviors = by_weight[0];

    var sorted = [];
    for (var i = 0; i < ww.length; ++i) {
      var w = ww[i];
      sorted.push(by_weight[w]);
    }
    return sorted;
  }

  var attachBehaviors_original = Drupal.attachBehaviors;

  Drupal.attachBehaviors = function(context, settings) {
    var sorted = sortDrupalBehaviors();
    Drupal.attachBehaviors = function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;
      // Execute all of them.
      for (var i = 0; i < sorted.length; ++i) {
        jQuery.each(sorted[i], function() {
          if (typeof this.attach == 'function') {
            this.attach(context, settings);
          }
        });
      }
    }
    Drupal.attachBehaviors.apply(this, [context, settings]);
  };

})();

;
function mediaParse($url) {
    var media = {};
    // http://youtube.com/watch/*
    // http://youtube.com/embed/*
    // http://youtube.com/v/*
    // http://youtube.com/?v=*
    // http://youtu.be/*
    // http://gdata.youtube.com/feeds/api/videos/*
    var youtube = [
        /youtube\.com\/watch[#\?].*?v=([^"\& ]+)/i,
        /youtube\.com\/embed\/([^"\&\? ]+)/i,
        /youtube\.com\/v\/([^"\&\? ]+)/i,
        /youtube\.com\/\?v=([^"\& ]+)/i,
        /youtu\.be\/([^"\&\? ]+)/i,
        /gdata\.youtube\.com\/feeds\/api\/videos\/([^"\&\? ]+)/i,
    ];

    var vimeo = [
        /vimeo\.com\/(\d+)/i,
        /vimeo\.com\/video\/(\d+)/i,
        /vimeo\.com\/groups\/.+\/videos\/(\d+)/i,
        /vimeo\.com\/channels\/.+#(\d+)/i,
        /vimeo\.com\/channels\/.+\/(\d+)/i,
    ];

    youtube.forEach(function (pattern) {
        var yt = pattern.exec($url);
        if (yt !== null) {
            media.type = 'youtube';
            media.id = yt[1];
            media.key = 'ytid';
        }
    });

    if (typeof media.type != 'undefined')
        return media;

    vimeo.forEach(function (pattern) {
        var vm = pattern.exec($url);
        if (vm !== null) {
            media.type = 'vimeo';
            media.id = vm[1];
            media.key = 'vimeoid';
        }
    });

    return media;
};;
/*
 * Author: Cong Nguyen
 * Author Email: nguyencongt3@gmail.com
 */

(function ($) {

  Drupal.behaviors.rsBuilder = {
    attach: function (context, settings) {
      settings = settings || Drupal.settings;
      if (!settings.rs || !settings.rs.builder || !settings.rs.default) {
        return;
      }
			settings.rs.builder.options.startwidth = settings.rs.builder.options.startwidth||1170;
			settings.rs.builder.options.startheight = settings.rs.builder.options.startheight||500;
			if (typeof settings.rs.builder.activeSlide == 'undefined') {
        settings.rs.builder.activeSlide = 0;
      }
      if (typeof settings.rs.builder.activeLayer == 'undefined') {
        settings.rs.builder.activeLayer = 0;
      }

      if (settings.rs.builder.slides.length == 0) {
        settings.rs.builder.slides = {
          "items": []
        };
      }
      $.each(['newLayer', 'newSlide', 'activeLayer', 'activeSlide', 'UI', 'attachBehavior'], function (k, v) {
        if (typeof settings.rs.builder[v] == 'undefined') {
          settings.rs.builder[v] = 0;
        }
      });

      $(".slider-revolution-form", context).once('rs-form', function () {
        var builderMarkup = '<div id="revolution-builder"><div id="global-form-wrapper">' + rsLayerForm(settings.rs.default.options) + '</div></div>';
        builderMarkup += '<div id="global-settings"><a href="#" data-trigger="slide-add"><i class="fa fa-plus"></i> New Slide</a>  <a href="#" data-trigger="global-settings"><i class="fa fa-cogs"></i> Global Settings</a></div>';
        builderMarkup += '<div id="slider-nav"><ul class="inline"></ul><div id="slider-nav-static"><a href="#" data-trigger="slide" data-index="static"><i class="fa fa-cubes"></i> Static Layers</a></div></div><div id="rs-ui-wrapper"><div id="rs-ui"></div><div></div></div>';
        builderMarkup += '<div class="rs-actions">';
        builderMarkup += '<ul class="action-links global-links"><li><a data-trigger="slide-preview" href="#" title=""><i class="fa fa-play"></i> Preview</a></li></ul>';
        builderMarkup += '<ul class="action-links slides-links"><li><a data-trigger="layer-add" href="#" title="Add new layer">Text</a></li><li><a data-trigger="layer-image-add" href="#" title="Add image layer">Image</a></li><li><a data-trigger="layer-video-add" href="#" title="Add video layer">Video</a></li></ul>';
        builderMarkup += '</div>';
        builderMarkup += '<div id="rs-layers"><div class="layer-items"></div><div class="layer-form"></div></div>';
        $(this).before(builderMarkup);
      });

      $('#revslider-admin-edit-form', context).on('submit', function () {
        $("textarea#edit-data", $(this)).val(JSON.stringify(settings.rs.builder));
      });

      $("#global-form-wrapper", context).once('init-dp', function () {
        if (settings.rs.builder.options.length == 0) settings.rs.builder.options = {
          startwidth: 1170,
					startheight: 500,
					shuffle: 'off',
          autoHeight: 'off',
          forceFullWidth: 'off',
          navigationType: 'bullet',
          navigationStyle: 'preview4',
          navigationHAlign: 'center',
          naigationVAlign: 'bottom',
          navigationHOffset: 0,
          navigationVOffset: 20
        };
        $("select,input,textarea", $(this)).each(function () {
          if (typeof (settings.rs.builder.options[$(this).attr('name')]) != 'undefined') {
            if ($(this).attr('type') == 'radio') {
              if ($(this).val() == settings.rs.builder.options[$(this).attr('name')]) {
                $(this).prop('checked', true);
              }

            } else {
              $(this).val(settings.rs.builder.options[$(this).attr('name')]);
            }
          } else {
            settings.rs.builder.options[$(this).attr('name')] = parseVal($(this).val());
          }
        });

        // Flash dependences
        $('select,input[type="text"],input[type="radio"]:checked,textarea', $("#global-form-wrapper", context)).each(function () {
          rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#global-form-wrapper"));
        });
      });

      $("#global-form-wrapper", context).on("change", 'select,input,textarea', function () {
        settings.rs.builder.options[$(this).attr('name')] = parseVal($(this).val());
        rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#global-form-wrapper"));
      });

    },
    weight: -20
  };

  Drupal.behaviors.rsSlide = {
    attach: function (context, settings) {
      settings = settings || Drupal.settings;
      if (!settings.rs || !settings.rs.builder || !settings.rs.default) {
        return;
      }

      var builder = settings.rs.builder;
			var currentSlide = builder.slides.items[builder.activeSlide];

      if (builder.activeSlide == 'static') {
        if (typeof builder.slides.static == 'undefined') {
          builder.slides.static = {
            'layers': []
          };
        }
        currentSlide = builder.slides.static;
      }

      $.each(settings.rs.default.layers, function (k, v) {
        if (v.layer_animation.end_transition['data-end']['#default_value'] == 0) {
          settings.rs.default.layers[k].layer_animation.end_transition['data-end']['#default_value'] = builder.options.delay;
        }
      });

      var slideNav = $("#slider-nav", context);
      var layerForm = $("#rs-layers .layer-form", context);

      if (builder.newSlide) {
        if (typeof (builder.slides.items) == 'undefined') {
          builder.slides.items = [];
        }
        builder.slides.items.push({
          "name": "New slider",
          "mainImage": {},
          "layers": [],
          "settings": {}
        });
        builder.newSlide = false;
        builder.activeSlide = builder.slides.items.length - 1;
      }

      if (typeof builder.cloneSlide != 'undefined' && typeof builder.slides.items[builder.cloneSlide] != 'undefined') {
        var cloneSlide = $.extend(true, {}, builder.slides.items[builder.cloneSlide]);
        cloneSlide['#weight'] = builder.slides.items.length;
        builder.slides.items.push(cloneSlide);
        builder.activeSlide = builder.slides.items.length - 1;
        builder.cloneSlide = -1;
      }

      if (typeof builder.delSlide != 'undefined' && typeof builder.slides.items[builder.delSlide] != 'undefined') {
        builder.slides.items.splice(builder.delSlide, 1);
        builder.activeSlide = 0;
        builder.uiRebuild = true;
        builder.uiCleanUp = 0;
        builder.delSlide = -1;
      }

      // Set again
      if (builder.activeSlide != 'static') {
        currentSlide = builder.slides.items[builder.activeSlide];
      }

      if (typeof (builder.slides.items) == 'undefined' || builder.slides.items.length == 0) {
        $("#slider-nav,#rs-ui,#rs-layers", context).addClass('rs-hidden');
        return;
      } else {
        $("#slider-nav,#rs-ui,#rs-layers", context).removeClass('rs-hidden');
      }

      if (builder.uiRebuild === true) {
        $("ul li", slideNav).remove();
      }

      builder.slides.items.forEach(function (slider, index) {
        // Layer tabs
        if (!$('a', slideNav).filter(function () {
            return $(this).data('index') == index;
          }).length) {
          slideNav.children("ul").append($('<li>').append($('<a href="#">').html(slider.name).data('trigger', 'slide').data('index', index)).append('<a href="#" title="Slide Settings" data-trigger="slide-settings"><i class="fa fa-cogs"></i></a>').append('<a href="#" title="Duplicate Slide" data-trigger="slide-clone"><i class="fa fa-files-o"></i></a>').append('<a href="#" title="Remove Slide" data-trigger="slide-delete"><i class="fa fa-trash-o"></i></a>'));
        }
        if (typeof (slider['#weight']) == 'undefined') {
          builder.slides.items[index]['#weight'] = index;
        }
      });

      slideNav.find('li').each(function () {
        if ($('a', $(this)).filter(function () {
            return $(this).data('index') == builder.activeSlide;
          }).length) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      })
      slideNav.find('a').each(function () {
        if ($(this).data('index') == builder.activeSlide) {
          $(this).addClass('slide-activated');
        } else {
          $(this).removeClass('slide-activated');
        }
      });

      layerForm.html('<div id="slide-form-wrapper">' + rsLayerForm(settings.rs.default.slides) + '</div>');

      // Slider settings
      if (builder.activeSlide != 'static') {
        $("select,input,textarea", $("#edit-general_slide_settings", context)).each(function () {
          if ($(this).attr('name') == 'name') {
            if (typeof (currentSlide['name']) != 'undefined') {
              $(this).val(currentSlide['name']);
            } else {
              currentSlide['name'] = parseVal($(this).val());
            }
          } else if (typeof (currentSlide.settings[$(this).attr('name')]) != 'undefined') {
            if ($(this).attr('type') == 'radio') {
              if ($(this).val() == currentSlide.settings[$(this).attr('name')]) {
                $(this).prop('checked', true);
              }

            } else {
              if ($(this).attr('name') == 'data-thumb') {
                $(this).parent().prev().html('<img src="' + currentSlide.settings[$(this).attr('name')].replace('public://', settings.rs.global.url) + '" />');
              }
              $(this).val(currentSlide.settings[$(this).attr('name')]);
            }
          } else {
            currentSlide.settings[$(this).attr('name')] = parseVal($(this).val());
          }
        });

        // Flash form after initial
        $('#edit-general_slide_settings', context).once('slide-init', function () {
          $('select,input,textarea', $("#edit-general_slide_settings", context)).each(function () {
            if ($(this).attr('type') == 'radio') {
              if ($(this).prop('checked')) {
                rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#slide-form-wrapper"));
              }
            } else {
              rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#slide-form-wrapper"));
            }
          });
        });

        // Get and set default value
        $("#edit-general_slide_settings").on("change", 'select,input,textarea', function () {
          if ($(this).attr('name') == 'name') {
            $('a', slideNav).filter(function () {
              return builder.activeSlide == $(this).data('index');
            }).html($(this).val());
            currentSlide.name = parseVal($(this).val());
          } else {
            currentSlide.settings[$(this).attr('name')] = parseVal($(this).val());
          }

          rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#edit-general_slide_settings"));
        });
        // End General & other settings
        // Main image settings
        $("select,input,textarea", $("#edit-main_image", context)).each(function () {
          if (typeof currentSlide.mainImage[$(this).attr('name')] != 'undefined') {
            if ($(this).attr('type') == 'radio') {
              if ($(this).val() == currentSlide.mainImage[$(this).attr('name')]) $(this).prop('checked', true);
            } else {
              if (($(this).attr('name') == 'data-lazyload' || $(this).attr('name') == 'src') && currentSlide.mainImage[$(this).attr('name')] != '') {
                $(this).parent().prev().html('<img src="' + currentSlide.mainImage[$(this).attr('name')].replace('public://', settings.rs.global.url) + '" />');
              }
              $(this).val(currentSlide.mainImage[$(this).attr('name')]);
            }
          } else {
            if ($(this).attr('type') == 'radio') {
              if ($(this).prop('checked')) currentSlide.mainImage[$(this).attr('name')] = parseVal($(this).val());
            } else {
              currentSlide.mainImage[$(this).attr('name')] = parseVal($(this).val());
            }
          }
        });

        // Flash form after initial
        $('#edit-main_image', context).once('main-img-init', function () {
          $('select,input,textarea', $("#edit-main_image", context)).each(function () {
            if ($(this).attr('type') == 'radio') {
              if ($(this).prop('checked')) {
                rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#edit-main_image"));
              }
            } else {
              rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#edit-main_image"));
            }
          });
        });
        // Get and set default value

        $("#edit-main_image").on("change", 'select,input,textarea', function () {
          if ($(this).attr('name') == 'data-kenburns' && $(this).val() == 'on') {
            $('select[name="data-bgfit"]', $("#edit-main_image")).val('cover').trigger('change');
          }
          currentSlide.mainImage[$(this).attr('name')] = $(this).val();
          rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#edit-main_image"));
        });
      }

      // End Main image settings
    },
    weight: -18
  };

  Drupal.behaviors.rsLayer = {
    attach: function (context, settings) {
      settings = settings || Drupal.settings;
      if (!settings.rs || !settings.rs.builder || !settings.rs.builder.slides || !settings.rs.builder.slides.items || !settings.rs.default) {
        return;
      }

      var builder = settings.rs.builder;
      var currentSlide, currentLayer;
      if (builder.activeSlide == 'static') {
        currentSlide = builder.slides.static;
        if (typeof builder.slides.static.layers[builder.activeLayer] != 'undefined') {
          currentLayer = builder.slides.static.layers[builder.activeLayer];
        }
      } else {
        if (typeof builder.slides.items[builder.activeSlide] != 'undefined') {
          currentSlide = builder.slides.items[builder.activeSlide];
          if (typeof builder.slides.items[builder.activeSlide].layers[builder.activeLayer] != 'undefined') {
            currentLayer = builder.slides.items[builder.activeSlide].layers[builder.activeLayer];
          }
        }

      }

      var layers = $("#rs-layers .layer-items", context);
      var layerForm = $("#rs-layers .layer-form", context);

      if (typeof (builder.slides.items) == 'undefined' || builder.slides.items.length == 0) {
        $('.rs-actions .slides-links').hide();
        return;
      } else {
        $('.rs-actions .slides-links').show();
      }

      if (builder.newLayer) {
        var newLayer = {
          "type": "text",
          "value": "New layer",
          "settings": {}
        };
        if (typeof (builder.layerType) != 'undefined') {
          newLayer.type = builder.layerType;
          newLayer.value = '';
        }
        // Set weight
        newLayer['#weight'] = currentSlide.layers.length + 1;
        $.each(currentSlide.layers, function (k, v) {
          if (typeof (currentSlide.layers[k]['#weight']) == 'undefined') {
            currentSlide.layers[k]['#weight'] = k;
          }
          //currentSlide.layers[k]['#weight'] += 1;
          //alert(currentSlide.layers[k]['#weight']);
        });
        // End set weight
        currentSlide.layers.push(newLayer);
        builder.newLayer = false;
        builder.layerType = '';
        builder.activeLayer = currentSlide.layers.length - 1;
        delete newLayer;
        builder.uiRebuild = true;
        builder.uiCleanUp = 0;
      }

      if (typeof builder.delLayer != 'undefined' && typeof currentSlide.layers[builder.delLayer] != 'undefined') {
        currentSlide.layers.splice(builder.delLayer, 1);
        builder.activeLayer = 0;
        builder.uiRebuild = true;
        builder.uiCleanUp = 0;
        builder.delLayer = -1;
      }

      if (typeof builder.cloneLayer != 'undefined' && typeof currentSlide.layers[builder.cloneLayer] != 'undefined') {
        var cloneLayer = $.extend(true, {}, currentSlide.layers[builder.cloneLayer]);
        cloneLayer['#weight'] = 0;
        $.each(currentSlide.layers, function (k, v) {
          if (typeof (currentSlide.layers[k]['#weight']) == 'undefined') {
            currentSlide.layers[k]['#weight'] = k;
          }
          currentSlide.layers[k]['#weight'] += 1;
        });
        currentSlide.layers.push(cloneLayer);
        builder.activeLayer = currentSlide.layers.length - 1;
        builder.cloneLayer = -1;
        builder.uiRebuild = true;
        builder.uiCleanUp = 0;
      }

      // Set active again if changed
      if (builder.activeSlide == 'static') {
        currentSlide = builder.slides.static;
        currentLayer = builder.slides.static.layers[builder.activeLayer];
      } else {
        currentLayer = builder.slides.items[builder.activeSlide].layers[builder.activeLayer];
        currentLayer = builder.slides.items[builder.activeSlide].layers[builder.activeLayer];
      }

      layers.html('');

      if (typeof (currentSlide.layers) == 'undefined' || currentSlide.layers.length == 0) {
        return;
      }
      if (builder.activeSlide == 'static') {
        currentSlide.settings = currentSlide.settings || {};
      }
      currentSlide.layers.forEach(function (layer, index) {
        var layerName = '';
        if (layer.type == 'text') {
          layerName = $('<div>' + layer.value + '</div>').text() || layer.value;
        } else {
          layerName = "Layer " + layer.type + ' ' + index;
        }
        layers.append('<div class="layer-item"><a class="layer-action" data-trigger="layer" data-layer="' + index + '" href="#"><span>' + layerName + '</span></a></div>');

        if (typeof (layer['#weight']) == 'undefined') {
          currentSlide.layers[index]['#weight'] = index;
        }
        currentSlide.settings['data-delay'] = currentSlide.settings['data-delay'] || builder.options.delay;
        if (currentSlide.settings['data-delay'] == '') {
          currentSlide.settings['data-delay'] = builder.options.delay;
        }
        if (typeof layer.settings['data-end'] == 'undefined' || layer.settings['data-end'] == '' || currentSlide.layers[index].settings['data-end'] > currentSlide.settings['data-delay']) {
          currentSlide.layers[index].settings['data-end'] = currentSlide.settings['data-delay'];
        }
      });

      if (layers.find('.layer-activated').children('a').data('layer') != builder.activeLayer) {
        layers.find('a[data-layer="' + builder.activeLayer + '"]').parent().addClass('layer-activated');
      } else {
        if (layers.find('.layer-activated').length) {
          layers.children(":first-child").addClass("layer-activated");
          builder.activeLayer = 0;
        }
      }

      layerForm.append('<div id="layer-form-wrapper" class="form-layer-' + currentLayer.type + '">' + rsLayerForm(settings.rs.default.layers[currentLayer.type]) + '</div>');
      if (currentLayer.type == 'video' && $('input[name="video-type"]:checked', layerForm).length == 0) {
        rsFlashForm('video-type', '', layerForm);
      }

      if (builder.activeSlide == 'static') {
        $('#edit-static_layer', layerForm).show();
      } else {
        $('#edit-static_layer', layerForm).hide();
      }

      // Form settings
      $("select,input,textarea", $("#layer-form-wrapper", context)).each(function () {
        if (typeof (currentLayer.settings[$(this).attr('name')]) != 'undefined') {
          if ($(this).attr('type') == 'radio') {
            if ($(this).val() == currentLayer.settings[$(this).attr('name')]) {
              $(this).prop('checked', true);
            }

          } else {
            $(this).val(currentLayer.settings[$(this).attr('name')]);
          }
        } else {
          if ($(this).attr('name') == 'data-startslide' || $(this).attr('name') == 'data-endslide') {
            if (builder.activeSlide == 'static') {
              currentLayer.settings[$(this).attr('name')] = parseVal($(this).val());
            }
          } else if ($(this).attr('type') == 'radio') {
            if ($(this).prop('checked')) {
              currentLayer.settings[$(this).attr('name')] = parseVal($(this).val());
            }
          } else {
            currentLayer.settings[$(this).attr('name')] = parseVal($(this).val());
          }
        }
      });

      // Flash layer form after initial
      $('#layer-form-wrapper', context).once('layer-init', function () {
        $('select,input[type="text"],input[type="radio"]:checked,textarea', $("#layer-form-wrapper", context)).each(function () {
          rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#layer-form-wrapper"));
        });
        if (currentLayer.type == 'video' && currentLayer.settings['video-type'] != 'html5' && currentLayer.settings['data-videoattributes'] == '') {
          currentLayer.settings['data-videoattributes'] = 'enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0';
          $('input[name="data-videoattributes"]', $(this)).val('enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0');
        }
      });

      $("#layer-form-wrapper", context).find('#edit-value').val(currentLayer.value);
      if (currentLayer.value != '' && currentLayer.type == 'image') {
        $('input[name="value"]', layerForm).parent().prev().html('<img src="' + currentLayer.value.replace('public://', Drupal.settings.rs.global.url) + '" />');
      }

      $("#layer-form-wrapper", context).on("change", 'select,input,textarea', function () {
        if ($(this).attr('name') == 'value') {
          currentLayer.value = parseVal($(this).val());
          if (currentLayer.type == 'video') {
            var mediaValue = mediaParse($(this).val());
            if (typeof mediaValue.type == 'undefined') {
              alert('Unable to handle the provided embed string or URL.');
            } else {
              $('input[name="video-type"][value="' + mediaValue.type + '"]', $(this).closest('#layer-form-wrapper')).prop('checked', true).trigger('change');
              currentLayer.settings['video-type'] = mediaValue.type;
              $('input[name="data-' + mediaValue.key + '"]', $(this).closest('#layer-form-wrapper')).val(mediaValue.id).trigger('change');
              currentLayer.settings['data-' + mediaValue.key] = mediaValue.id;
              if (mediaValue.type == 'youtube') {
                $('input[name="data-videoposter"]', $('#layer-form-wrapper')).val('http://img.youtube.com/vi/' + mediaValue.id + '/maxresdefault.jpg').trigger('change');
              } else {
                $.ajax({
                  type: 'GET',
                  url: 'http://vimeo.com/api/v2/video/' + mediaValue.id + '.json',
                  jsonp: 'callback',
                  dataType: 'jsonp',
                  success: function (data) {
                    $('input[name="data-videoposter"]', $('#layer-form-wrapper')).val(data[0].thumbnail_large).trigger('change');
                  }
                });
              }
            }
          }
        } else if ($(this).attr('name') == 'video-fullscreen') {
          if ($(this).val() == 'on') {
            $('input[name="data-forcecover"][value="true"]', $("#layer-form-wrapper", context)).prop('checked', true).trigger('change');
          }
          currentLayer.settings[$(this).attr('name')] = parseVal($(this).val());
        } else if ($(this).attr('name') == 'data-startslide' || $(this).attr('name') == 'data-endslide') {
          if (builder.activeSlide == 'static') {
            currentLayer.settings[$(this).attr('name')] = parseVal($(this).val());
          }
        } else {
          currentLayer.settings[$(this).attr('name')] = parseVal($(this).val());
        }
        rsFlashForm($(this).attr('name'), $(this).val(), $(this).closest("#layer-form-wrapper"));
      });
    },
    weight: -16
  };


  function parseVal(v) {
    if (v === '' || isNaN(v)) {
      return v;
    } else {
      return parseFloat(v);
    }
  }


  // Render form
  function rsLayerForm(form, parent) {
    var output = {
      '#value': "",
      '#prefix': "",
      '#suffix': ""
    };

    if (typeof form != 'object') return output["#value"];

    if (typeof (form['#type']) != 'undefined' && $.inArray(form['#type'], ['vertical', 'horizontal']) != -1) {
      parent = form['#type'];
      output["#prefix"] = '<div class="' + parent + '-tabs-panes">';
      output["#suffix"] = '</div>';
    }

    $.each(form, function (key, item) {
			if(typeof item == 'undefined') return;
      if (typeof (item["#default_value"]) != 'undefined' || typeof (item["#options"]) != 'undefined') {
        output["#value"] += rsLayerFormElement(key, item);
      } else {
        if (typeof (item["#name"]) != 'undefined') {
          output["#value"] += '<fieldset id="edit-' + key + '" class="collapsible form-wrapper"><legend><span class="fieldset-legend">' + item["#name"] + '</span></legend><div class="fieldset-wrapper"><div class="elements-wrapper">' + rsLayerForm(item) + '</div></div></fieldset>';
        } else {
          output["#value"] += rsLayerForm(item, parent);
        }
      }
    });

    return output["#prefix"] + output["#value"] + output["#suffix"];
  }

  function rsLayerFormElement(name, settings) {
    var element = '',
      label = name,
      type = null,
      dataType = '',
      surfix = '',
      attrs = [];
    if (typeof (settings["#name"]) != 'undefined') {
      label = settings["#name"];
    }

    if (typeof settings['#attributes'] != 'undefined') {
      attrs.push(settings['#attributes']);
    }

    if (typeof (settings["#type"]) != 'undefined') {
      type = settings["#type"];
    } else if (typeof (settings["#options"]) != 'undefined') {
      if (settings['#options'].length > 3 || Object.keys(settings['#options']).length > 3) {
        type = 'select';
      } else {
        $.each(settings["#options"], function (k, v) {
          if (typeof v != 'string') type = 'select';
        });
      }
      if (type == null) type = 'radio';
    }

    if (typeof settings['#data_type'] != 'undefined') {
      dataType = 'data-type="' + settings['#data_type'] + '"';
    }

    if (typeof settings['#surfix'] != 'undefined') {
      surfix = settings['#surfix'];
    }

    if (type == 'select') {
      element += '<div class="form-item form-type-select form-item-' + name + '">';
      element += '<label for="edit-' + name + '">' + label + '</label>';
      if (typeof settings['#multiple'] != 'undefined' && settings['#multiple']) {
        element += '<select multiple name="' + name + '" id="edit-' + name + '" class="filter-list form-select">';
      } else {
        element += '<select name="' + name + '" id="edit-' + name + '" class="filter-list form-select">';
      }
      $.each(settings["#options"], function (k, v) {
        if (typeof v != 'array' && typeof v != 'object') {
          if (settings['#default_value'] == v) {
            element += '<option selected="selected" value="' + k + '">' + v + '</option>';
          } else {
            element += '<option value="' + k + '">' + v + '</option>';
          }
        } else {
          element += '<optgroup label="' + k + '">';
          $.each(v, function (i, j) {
            if (settings['#default_value'] == i) {
              element += '<option selected="selected" value="' + i + '">' + j + '</option>';
            } else {
              element += '<option value="' + i + '">' + j + '</option>';
            }
          });
          element += '</optgroup>';
        }
      });
      element += '</select>';
      element += surfix;
      if (typeof settings['#description'] != 'undefined' && settings['#description'].trim() != '') {
        element += '<div class="description">' + settings['#description'] + '</div>';
      }
      element += '</div>';
    } else if (type == 'radio') {
      element += '<div class="form-item form-type-radios form-item-' + name + '">';
      element += '<label for="edit-' + name + '">' + label + '</label>';
      element += '<div class="form-radios" id="edit-' + name + '"><div class="form-item form-type-radio form-item-' + name + '">';
      $.each(settings["#options"], function (k, v) {
        element += '<div class="form-item form-type-radio form-item-data-' + name + '">';
        if (settings["#default_value"] == k) {
          element += '<input type="radio" class="form-radio" checked="checked" value="' + k + '" name="' + name + '" id="edit-' + name + '-' + v + '"> <label for="edit-' + name + '-' + v + '" class="option">' + v + '</label>';
        } else {
          element += '<input type="radio" class="form-radio" value="' + k + '" name="' + name + '" id="edit-' + name + '-' + v + '"> <label for="edit-' + name + '-' + v + '" class="option">' + v + '</label>';
        }
        element += '</div>';
      });
      element += '</div>';
      element += '</div>';
      if (typeof settings['#description'] != 'undefined' && settings['#description'].trim() != '') {
        element += '<div class="description">' + settings['#description'] + '</div>';
      }
      element += '</div>';
    } else if (type == 'textarea') {
      element += '<div class="form-item form-type-textarea form-item-' + name + '">';
      element += '<label for="edit-' + name + '">' + label + '</label>';
      element += '<div class="form-textarea-wrapper resizable"><textarea class="form-textarea" rows="2" name="' + name + '" id="edit-' + name + '">' + settings["#default_value"] + '</textarea></div>';
      if (typeof settings['#description'] != 'undefined' && settings['#description'].trim() != '') {
        element += '<div class="description">' + settings['#description'] + '</div>';
      }
      element += '</div>';
    } else {
      if (settings['#data_type'] == 'media') {
        element += '<div class="media-wrapper media-' + name + '">';
        element += '<div class="form-item form-item-preview form-item-' + name + '-preview"><div class="no-data">Select<br/>media</div></div>';
      }
      element += '<div class="form-item form-type-textfield form-item-' + name + '">';
      element += '<label for="edit-' + name + '">' + label + '</label><input type="text" class="form-text" value="' + settings["#default_value"] + '" name="' + name + '" id="edit-' + name + '" ' + dataType + ' ' + attrs.join(" ") + '> ' + surfix;
      if (typeof settings['#description'] != 'undefined' && settings['#description'].trim() != '') {
        element += '<div class="description">' + settings['#description'] + '</div>';
      }
      element += '</div>';
      if (settings['#data_type'] == 'media') {
        element += '</div>';
      }
    }

    return element;
  }


  Drupal.behaviors.rsUI = {
    attach: function (context, settings) {
      settings = settings || Drupal.settings;
      if (!settings.rs || !settings.rs.builder || !settings.rs.builder.slides || !settings.rs.builder.slides.items || !settings.rs.default) {
        return;
      }

      var builder = settings.rs.builder;
      var currentSlide, currentLayer;
      if (builder.activeSlide == 'static') {
        currentSlide = builder.slides.static;
        if (typeof builder.slides.static.layers[builder.activeLayer] != 'undefined') {
          currentLayer = builder.slides.static.layers[builder.activeLayer];
        }
      } else {
        if (typeof builder.slides.items[builder.activeSlide] != 'undefined') {
          currentSlide = builder.slides.items[builder.activeSlide];
          if (typeof builder.slides.items[builder.activeSlide].layers[builder.activeLayer] != 'undefined') {
            currentLayer = builder.slides.items[builder.activeSlide].layers[builder.activeLayer];
          }
        }
      }

      if (typeof (builder.slides.items) == 'undefined' || builder.slides.items.length == 0) {
        return;
      }

      var UI = $("#rs-ui-wrapper", context);
      var layerForm = $("#layer-form-wrapper", context);
      var slideForm = $("#slide-form-wrapper", context);
      var layers = $("#rs-layers .layer-items", context);
      var slideNav = $("#slider-nav", context);

      UI.once('init-ui', function () {
        builder.UI = 0;
        if (UI.data('activated-slide') == 'undefined' || UI.data('activated-slide') != builder.activeSlide) {
          UI.data('activated-slide', builder.activeSlide);
        }

        // Fixed value for test.
        $('#rs-ui', $(this)).css('height', builder.options.startheight + 'px');
        $('#rs-ui', $(this)).css('width', builder.options.startwidth + 'px');
        //$(this).css('width', '100%');
        $(this).css('height', (parseInt(builder.options.startheight) + 2) + 'px');
      });


      if (typeof (builder.uiCleanUp) == 'undefined' || builder.UI == 0) {
        builder.uiCleanUp = 0;
      }

      if (typeof builder.uiRebuild != 'undefined' && builder.uiRebuild === true) {
        $('div.rs-ui-layer', UI).remove();
        layers.removeClass('sort-processed');
        $(">ul", slideNav).removeClass('slide-sort-processed');
        builder.uiRebuild = false;
      }


      $(">ul", slideNav).once('slide-sort', function () {
        $('li', slideNav).sort(function (a, b) {
          var weightA = parseInt(builder.slides.items[$('a', a).data('index')]['#weight']);
          var weightB = parseInt(builder.slides.items[$('a', b).data('index')]['#weight']);
          return (weightA < weightB) ? -1 : (weightA > weightB) ? 1 : 0;
        }).appendTo($(">ul", slideNav));

        $(this).sortable({
          axis: "x",
          stop: function (event, ui) {
            $('li', $(this)).each(function () {
              builder.slides.items[$(this).children('a').data('index')]['#weight'] = $(this).index() + 1;
            });
          }
        }).disableSelection();
      });
      $(">ul", slideNav).sortable("refresh");


      // Media preview
      $(".form-item-preview", UI.parent()).on('click', function () {
        var filehandle = $(this);
        var isDialog = false;

        if (filehandle.closest('.ui-dialog-content').length && filehandle.closest('.ui-dialog-content').attr('id') == 'slide-form-wrapper' && $('#slide-form-wrapper', context).dialog("isOpen")) {
          $('#slide-form-wrapper', context).dialog("close");
          isDialog = true;
        }

        Drupal.media.popups.mediaBrowser(function (files) {
          var media = files[0];
          if (isDialog) {
            filehandle.html(media.preview);
            $('a[data-trigger="slide-settings"]', UI.parent()).trigger('click');
            $('input', filehandle.next()).val(media.uri).trigger('change');
            rsFlashUI(builder, UI);
          } else {
            currentLayer.fid = media.fid;
            filehandle.html(media.preview);

            $('input[name="value"]', filehandle.closest('#layer-form-wrapper')).val(media.uri).trigger('change');
          }
        });

      });

      if ($('input[name="value"]', layerForm).val() != '') {
        $('input[name="video-type"]', layerForm).on('click', function () {
          return false;
        });
      }

      // End media

      $("#revslider-admin-edit-form", context).on("change", 'select,input,textarea', function () {
        switch ($(this).attr('name')) {
          case 'startheight':
            UI.css('height', $(this).val() + 'px');
            break;
          case 'startwidth':
            UI.css('width', $(this).val() + 'px');
            break;
        }
      });

      if (UI.data('activated-slide') != builder.activeSlide) {
        builder.UI = 0;
        $('#rs-ui', UI).html("");
        $('.main-image', UI).remove();
        UI.data('activated-slide', builder.activeSlide);
      }

      currentSlide.layers.forEach(function (layer, index) {
        if (typeof layer.settings['ui-lock'] == 'undefined' || typeof layer.settings['ui-eye'] == 'undefined') {
          currentSlide.layers[index].settings['ui-lock'] = false;
          currentSlide.layers[index].settings['ui-eye'] = false;
        }
        if (!UI.find('div[data-layer="' + index + '"]').length) {
          $('#rs-ui', UI).append(rsRenderElementUI(layer, index));

          UI.find('div[data-layer="' + index + '"]').css('z-index', (layer['#weight'] + 5));
          if (layer.settings.class !== '' && layer.settings.class.trim() !== '') {
            UI.find('div[data-layer="' + index + '"]').addClass(layer.settings.class);
          }

          // First time flash after render.
          if (index == builder.activeLayer) {
            rsFlashAlignUI($('.slider-revolution-form', context).parent(), layer.settings, index, true);
          } else {
            rsFlashAlignUI($('.slider-revolution-form', context).parent(), layer.settings, index, false);
          }

          if (currentSlide.layers[index].settings['ui-eye'] == true) {
            $('div[data-layer="' + index + '"]', UI).addClass('eye-hidden');
          }
          $('div[data-layer="' + index + '"] div.rs-ui-inner', UI).resizable({
            aspectRatio: (layer.type == 'text') ? false : true,
            disabled: currentSlide.layers[index].settings['ui-lock'],
            stop: function (event, ui) {
              currentLayer = settings.rs.builder.slides.items[settings.rs.builder.activeSlide].layers[settings.rs.builder.activeLayer];
              if (currentSlide.layers[index].type == 'video') {
                if (index == builder.activeLayer) {
                  $("#layer-form-wrapper", context).find('[name="data-videowidth"]').val(ui.size.width);
                  $("#layer-form-wrapper", context).find('[name="data-videoheight"]').val(ui.size.height);
                }
                currentSlide.layers[index].settings['data-videowidth'] = Math.round(ui.size.width, 0);
                currentSlide.layers[index].settings['data-videoheight'] = Math.round(ui.size.height, 0);
              } else {
                if (index == builder.activeLayer) {
                  $("#layer-form-wrapper", context).find('[name="width"]').val(ui.size.width);
                  $("#layer-form-wrapper", context).find('[name="height"]').val(ui.size.height);
                }
                currentSlide.layers[index].settings['width'] = Math.round(ui.size.width, 0);
                currentSlide.layers[index].settings['height'] = Math.round(ui.size.height, 0);
              }
              //Drupal.attachBehaviors();
            }
          });
          $('div[data-layer="' + index + '"]', UI).draggable({
            start: function (event, ui) {
              builder.activeLayer = $(this).data('layer');
            },
            disabled: currentSlide.layers[index].settings['ui-lock'],
            stop: function (event, ui) {
              $("#layer-form-wrapper", context).find('[name="data-x"]').val(ui.position.top);
              $("#layer-form-wrapper", context).find('[name="data-y"]').val(ui.position.left);
              $("#layer-form-wrapper", context).find('[name="data-hoffset"]').val('');
              $("#layer-form-wrapper", context).find('[name="data-voffset"]').val('');
              var currentSlide = null;
              if (settings.rs.builder.activeSlide == 'static') {
                currentSlide = settings.rs.builder.slides.static;
              } else {
                currentSlide = settings.rs.builder.slides.items[settings.rs.builder.activeSlide];
              }
              currentLayer = currentSlide.layers[settings.rs.builder.activeLayer];
              currentLayer.settings['data-x'] = ui.position.left;
              currentLayer.settings['data-y'] = ui.position.top;
              //Drupal.attachBehaviors();
            }
          });
        }

        //$('div[data-layer="'+index+'"]', UI).css({'width': currentSlide.layers[index].settings['width'], 'height': currentSlide.layers[index].settings['height']});
        $('div[data-layer="' + index + '"]', UI).addClass(currentSlide.layers[index].settings['styling-captions']);

        $.each(rsRotation(layer), function (k, v) {
          $('div[data-layer="' + index + '"]', UI).css(k, v);
        });

                ['width', 'height', 'data-videowidth', 'data-videoheight', '2d-rotation', 'left-corner', 'right-corner', 'custom_style'].forEach(function (k) {
          $.each(currentSlide.layers, function (key, layer) {
            if (typeof (layer.settings[k]) != 'undefined' && layer.settings[k] != '') {
              rsUpdateElementUI(k, layer.settings[k], $('#rs-ui', UI), builder, key);
            }
          });
        });
      });

      $(".rs-ui-layer", UI).removeClass('rs-ui-activated');
      $(".rs-ui-layer", UI).hover(function () {
        $(this).addClass('rs-ui-hover');
      }, function () {
        $(this).removeClass('rs-ui-hover');
      });

      $('.rs-ui-layer[data-layer="' + builder.activeLayer + '"]', UI).addClass('rs-ui-activated');

      $('#global-form-wrapper', context).on('change', '[name="slider_layout"]', function () {
        rsFlashUI(builder, UI);
      });

      // Tooltip for all form elements
      $('.elements-wrapper .form-item', UI.parent()).each(function () {
        $(this).once('tooltip', function () {
          if ($('.description', $(this)).length) {
            $('<span class="rs-ui-tooltip"><i class="fa fa-question-circle"></i></span>').insertBefore($('.description', $(this)));
            $('.rs-ui-tooltip', $(this)).attr('title', function () {
              return $(this).next('.description').html();
            });
          }
        });
      });
      // End tooltips

      builder.UI = 1;

      // Main UI & Background
      rsFlashUI(builder, UI);
      if (currentSlide.layers.length == 0 || typeof (currentLayer) == 'undefined') {
        return;
      }
      $('#edit-main_image', slideForm).on('change', 'input,select,textarea', function () {
        rsFlashUI(builder, UI);
      });


      /**
       * Disabled form
       */
      if (currentLayer.settings['ui-lock'] == true) {
        $("select,input,textarea", layerForm).each(function () {
          $(this).prop('disabled', true);
        });
      }

      /** Classes **/
      var classes = currentLayer.settings['class'].split(" ");
      var captionClasses = currentLayer.settings['styling-captions'].split(" ");
      $("#edit-layer .elements-wrapper:first", layerForm).once('ui-classes', function () {
        $(this).after('<div class="classes-wrapper"><div class="ui-classes"></div><div class="ui-classes-caption"></div></div>');
        $.each(classes, function (k, v) {
          if (v !== "" && v.trim() !== '') {
            $(".ui-classes", layerForm).append('<div class="ui-class-item"><a class="ui-rid" data-ui-parent="classes" data-ui-class="' + v + '" href="#"><i class="fa fa-times"></i></a> <span class="ui-class-name">' + v + '</span></div>');
          }
        });
        $.each(captionClasses, function (k, v) {
          if (v !== "" && v.trim() !== '') {
            $(".ui-classes-caption", layerForm).append('<div class="ui-class-item"><span class="ui-class-name" data-ui-class="' + v + '">' + v + '</span></div>');
          }
        });
      });


      layerForm.on("change", 'select,input,textarea', function () {
        if ($(this).attr('name') == 'class') {
          var newClasses = $(this).val().trim().split(" ");
          $.each(newClasses, function (k, v) {
            if ($.inArray(v, classes) == -1 && v != "") {
              classes.push(v);
              $('div[data-layer="' + builder.activeLayer + '"]', UI).addClass(v);
              $(".ui-classes", layerForm).append('<div class="ui-class-item"><a class="ui-rid" data-ui-parent="classes" data-ui-class="' + v + '" href="#"><i class="fa fa-times"></i></a> <span class="ui-class-name">' + v + '</span></div>');
            }
          });
          currentLayer.settings['class'] = classes.join(" ");
        } else if ($(this).attr('name') == 'styling-captions') {
          $(this).children('option').each(function () {
            $('div[data-layer="' + builder.activeLayer + '"]', UI).removeClass($(this).attr('value'));
            $('.ui-class-name[data-ui-class="' + $(this).attr('value') + '"]', layerForm).parent().remove();
          });
          $('div[data-layer="' + builder.activeLayer + '"]', UI).addClass($(this).val());

          $(".ui-classes-caption", layerForm).append('<div class="ui-class-item"><span class="ui-class-name" data-ui-class="' + $(this).val() + '">' + $(this).val() + '</span></div>');
        } else if ($(this).attr('name') == 'value') {
          if (currentLayer.type == 'text') {
            $('a[data-layer="' + builder.activeLayer + '"] span', layers).html($('<div>' + $(this).val() + '</div>').text() || $(this).val());
          }
        } else if ($(this).attr('name') == 'data-videoposter') {
          rsUpdateElementUI($(this).attr('name'), $(this).val(), UI, builder, builder.activeLayer);
        }

        if (builder.UI) {
          rsUpdateElementUI($(this).attr('name'), $(this).val(), UI, builder, builder.activeLayer);
        }
      });

      $('.classes-wrapper', layerForm).on('click', 'a.ui-rid', function () {
        if (currentLayer.settings['ui-lock'] == true) return false;
        classes.splice(classes.indexOf($(this).data('ui-class')), 1);
        currentLayer.settings['class'] = classes.join(" ");
        $('input[name="class"]', layerForm).val(classes.join(" "));

        $('div[data-layer="' + builder.activeLayer + '"]', UI).removeClass($(this).data('ui-class'));
        $(this).parent().remove();
        return false;
      });

      /** Align **/
      var alignForm = $("#edit-align_position_styling", layerForm);
      var dataX = currentLayer.settings['data-x'];
      var dataY = currentLayer.settings['data-y'];
      var uiAlign = '<div class="ui-xy">';
      $.each([['left', 'top'], ['center', 'top'], ['right', 'top'], ['left', 'center'], ['center', 'center'], ['right', 'center'], ['left', 'bottom'], ['center', 'bottom'], ['right', 'bottom']], function (k, v) {
        uiAlign += '<div class="square" data-ui-x="' + v[0] + '" data-ui-y="' + v[1] + '"></div>';
      });
      uiAlign += '</div>';
      $('#edit-align_position_styling .elements-wrapper', layerForm).once('ui-align', function () {
        $(this).before(uiAlign);
        rsFlashAlignUI($('.slider-revolution-form', context).parent(), currentLayer.settings, builder.activeLayer, false);
      });
      var align = {
        'data-x': currentLayer.settings['data-x'],
        'data-y': currentLayer.settings['data-y'],
        'data-hoffset': currentLayer.settings['data-hoffset'],
        'data-voffset': currentLayer.settings['data-voffset']
      };

      var defaultAlign = settings.rs.default.layers[currentLayer.type]['general_parameters']['align_position_styling'];
      $('.square', layerForm).on('click', function () {
        if (currentLayer.settings['ui-lock'] == true) return false;
        if (!$(this).hasClass('active')) {
          $('.square', layerForm).removeClass('active');
          //$(".form-item", alignForm).hide();
          switch ($(this).data('ui-x')) {
            case 'left':
              if ($(this).attr('data-ui-y') == 'top') {
                align['data-x'] = 'left';
                align['data-y'] = 'top';
                align['data-hoffset'] = defaultAlign['data-x']['#default_value']; // OffetX
                align['data-voffset'] = defaultAlign['data-y']['#default_value']; // OffsetY
              } else if ($(this).data('ui-y') == 'center') {
                align['data-x'] = 'left';
                align['data-y'] = 'center';
                align['data-hoffset'] = defaultAlign['data-x']['#default_value'];
                align['data-voffset'] = 0;
              } else if ($(this).data('ui-y') == 'bottom') {
                align['data-x'] = 'left';
                align['data-y'] = 'bottom';
                align['data-hoffset'] = defaultAlign['data-x']['#default_value'];
                align['data-voffset'] = defaultAlign['data-y']['#default_value'];
              }
              break;
            case 'center':
              if ($(this).data('ui-y') == 'top') {
                align['data-x'] = 'center';
                align['data-y'] = 'top';
                align['data-hoffset'] = 0;
                align['data-voffset'] = defaultAlign['data-y']['#default_value'];
              } else if ($(this).data('ui-y') == 'center') {
                align['data-x'] = 'center';
                align['data-y'] = 'center';
                align['data-hoffset'] = 0;
                align['data-voffset'] = 0;
              } else if ($(this).data('ui-y') == 'bottom') {
                align['data-x'] = 'center';
                align['data-y'] = 'bottom';
                align['data-hoffset'] = 0;
                align['data-voffset'] = defaultAlign['data-y']['#default_value'];
              }
              break;
            case 'right':
              if ($(this).data('ui-y') == 'top') {
                align['data-x'] = 'right';
                align['data-y'] = 'top';
                align['data-hoffset'] = defaultAlign['data-x']['#default_value'];
                align['data-voffset'] = 0;
              } else if ($(this).data('ui-y') == 'center') {
                align['data-x'] = 'right';
                align['data-y'] = 'center';
                align['data-hoffset'] = defaultAlign['data-x']['#default_value'];
                align['data-voffset'] = 0;
              } else if ($(this).data('ui-y') == 'bottom') {
                align['data-x'] = 'right';
                align['data-y'] = 'bottom';
                align['data-hoffset'] = defaultAlign['data-x']['#default_value'];
                align['data-voffset'] = defaultAlign['data-y']['#default_value'];
              }
              break;
            default:
              break;
          }
        }

        currentLayer.settings['data-x'] = align['data-x'];
        currentLayer.settings['data-y'] = align['data-y'];
        currentLayer.settings['data-hoffset'] = align['data-hoffset'];
        currentLayer.settings['data-voffset'] = align['data-voffset'];

        rsFlashAlignUI($('.slider-revolution-form', context).parent(), currentLayer.settings, builder.activeLayer, true);

      });



      /** Start stop time **/
      $('.layer-item', layers).each(function () {
        var dataLayer = $('a.layer-action', $(this)).data('layer');
        var uiLock = currentSlide.layers[dataLayer].settings['ui-lock'] == false ? 'fa-unlock' : 'fa-lock';
        var uiEye = currentSlide.layers[dataLayer].settings['ui-eye'] == false ? 'fa-eye' : 'fa-eye-slash';
        $(this).once('ui-slider', function () {
          $(this).append('<div class="ui-layer-weight"><i class="fa fa-sort"></i><span>' + ($('.layer-item', layers).index($(this)) + 1) + '</span></div>');
          $(this).append($('<div class="ui-layer-eye"><i class="fa ' + uiEye + '"></i></div>')).find('.' + uiEye).click(function () {
            $(this).toggleClass('fa-eye-slash fa-eye');
            $('.rs-ui-layer[data-layer="' + dataLayer + '"]', UI).toggleClass('eye-hidden');
            if ($(this).hasClass('fa-eye')) {
              currentSlide.layers[dataLayer].settings['ui-eye'] = false;
            } else {
              currentSlide.layers[dataLayer].settings['ui-eye'] = true;
            }
          });

          $(this).append($('<div class="ui-layer-lock"><i class="fa ' + uiLock + '"></i></div>')).find('.' + uiLock).click(function () {
            $(this).toggleClass('fa-lock fa-unlock');
            if ($(this).hasClass('fa-lock')) {
              $('.rs-ui-layer[data-layer="' + dataLayer + '"]', UI).draggable("disable");
              $('.rs-ui-layer[data-layer="' + dataLayer + '"]  div.rs-ui-inner', UI).resizable("disable");
              if (dataLayer == builder.activeLayer) {
                $('select,input,textarea', layerForm).each(function () {
                  $(this).prop('disabled', true);
                });
              }
              $("input", $(this).closest('.layer-item')).prop('disabled', true);
              $('.layer-slider', $(this).closest('.layer-item')).slider("option", "disabled", true);
              currentSlide.layers[dataLayer].settings['ui-lock'] = true;
            } else {
              $('.rs-ui-layer[data-layer="' + dataLayer + '"]', UI).draggable("enable");
              $('.rs-ui-layer[data-layer="' + dataLayer + '"]  div.rs-ui-inner', UI).resizable("enable");
              if (dataLayer == builder.activeLayer) {
                $('select,input,textarea', layerForm).each(function () {
                  $(this).prop('disabled', false);
                });
              }
              $("input", $(this).closest('.layer-item')).prop('disabled', false);
              $('.layer-slider', $(this).closest('.layer-item')).slider("option", "disabled", false);
              currentSlide.layers[dataLayer].settings['ui-lock'] = false;
            }

          });
          $(this).append('<div class="ui-layer-type"><i class="fa fa-' + ((currentSlide.layers[dataLayer].type == 'image') ? 'image' : (currentSlide.layers[dataLayer].type == 'text' ? 'font' : 'play')) + '"></i></div>');
          $(this).append('<div class="ui-layer-slider"><div class="layer-slider"></div></div>');
          $(this).append('<div class="ui-layer-times"><input class="time-start" name="time-start" value="' + currentSlide.layers[dataLayer].settings['data-start'] + '"><input class="time-stop" name="time-stop" value="' + currentSlide.layers[dataLayer].settings['data-end'] + '"></div>');
          $(this).append('<div class="ui-layer-operate"><div class="layer-operate"><a href="#" data-layer="' + dataLayer + '" data-trigger="layer-clone" title="Clone this layer"><i class="fa fa-files-o"></i><span>Clone</span></a><a href="#" data-layer="' + dataLayer + '" data-trigger="layer-delete" title="Delete this layer"><i class="fa fa-trash-o"></i><span>Delete</span></a></div></div>');
          $('.form-item-data-start, .form-item-data-end', layerForm).hide();

          if (currentSlide.layers[dataLayer].settings['ui-lock']) {
            $(this).find('input').prop('disabled', true);
          }
        });


        $('.layer-action', $(this)).width($(this).outerWidth() - 112 - 106 - 60).css({
          'margin-left': '132px'
        });
        currentSlide.settings['data-delay'] = currentSlide.settings['data-delay'] || builder.options.delay;
        var slider_max = currentSlide.settings['data-delay'] || builder.options.delay;
        $('.layer-slider', $(this)).slider({
          range: true,
          min: 0,
          max: slider_max,
          disabled: currentSlide.layers[dataLayer].settings['ui-lock'],
          values: [currentSlide.layers[dataLayer].settings['data-start'], currentSlide.layers[dataLayer].settings['data-end']],
          slide: function (event, ui) {
            currentSlide.layers[dataLayer].settings['data-start'] = ui.values[0];
            currentSlide.layers[dataLayer].settings['data-end'] = ui.values[1];
            if (dataLayer == builder.activeLayer) {
              $('input[name="data-start"]', layerForm).val(ui.values[0]);
              $('input[name="data-end"]', layerForm).val(ui.values[1]);
            }

            $(this).closest('.layer-item').find('input[name="time-start"]').val(ui.values[0]);
            $(this).closest('.layer-item').find('input[name="time-stop"]').val(ui.values[1]);
          }
        });
      });

      $('#edit-data-delay').on('change', function () {
        $('.layer-slider').slider("option", {
          max: $(this).val()
        });
      });

      $('.layer-item', layers).on('change', 'input', function () {
        var sliderLE = $('a.layer-action', $(this).closest('.layer-item')).data('layer');
        if ($(this).attr('name') == 'time-start') {
          currentSlide.layers[sliderLE].settings['data-start'] = parseVal($(this).val());
          $('.layer-slider', $(this).closest('.layer-item')).slider('values', 0, $(this).val());
        } else if ($(this).attr('name') == 'time-stop') {
          currentSlide.layers[sliderLE].settings['data-end'] = parseVal($(this).val());
          $('.layer-slider', $(this).closest('.layer-item')).slider('values', 1, $(this).val());
        }
      });

      // Sortable layers
      $('.layer-item', layers).sort(function (a, b) {
        var weightA = parseInt(currentSlide.layers[$('a.layer-action', a).data('layer')]['#weight']);
        var weightB = parseInt(currentSlide.layers[$('a.layer-action', b).data('layer')]['#weight']);
        return (weightA < weightB) ? -1 : (weightA > weightB) ? 1 : 0;
      }).appendTo(layers);

      layers.once('sort', function () {
        $(this).sortable({
          axis: 'y',
          stop: function (event, ui) {
            $('.layer-item', $(this)).each(function () {
              $('.ui-layer-weight span', $(this)).html($(this).index() + 1);
              currentSlide.layers[$(this).children('a').data('layer')]['#weight'] = $(this).index() + 1;
              $('.rs-ui-layer[data-layer="' + $(this).children('a').data('layer') + '"]', UI).css('z-index', ($(this).index() + 5));
            });
          }
        }); //.disableSelection();
      });

      layers.sortable("refresh");

      // Custom animate
      var af = rsAnimateForm(currentLayer.type, settings.rs.default.layers);
      var afMarkup = '<div class="random-wrapper"><a href="#" class="random-animate button">Random</a></div>';
      $.each(af, function (k, v) {
        afMarkup += '<div id="af-' + k + '">';
        if (k == 'test') {
          afMarkup += '  <div class="af-label">' + v['#name'] + '</div>';
          afMarkup += rsLayerForm(v, k);
        } else {
          afMarkup += '  <div class="af-label">' + v['#name'] + '</div>';
          if (typeof v['#default'] == 'undefined') {
            afMarkup += '<div class="af-wrapper af-wrapper-' + k + '">';
            $.each(v, function (i, j) {
              if (i != '#name') {
                if (typeof j['#suffix'] == 'undefined') {
                  j['#suffix'] = '';
                }
                afMarkup += '<div class="af-item">';
                afMarkup += '<div class="af-' + i + ' af-ui-slider" data-min="' + j['#min'] + '" data-max="' + j['#max'] + '" data-name="' + i + '" data-af-default="' + j['#default'] + '"></div>';
                afMarkup += '<div class="af-form-' + i + ' af-ui-form"><label>' + j['#name'] + ': </label><span class="af-field-text">' + j['#default'] + '</span>&nbsp;' + j['#suffix'] + '</div>';
                afMarkup += '</div>';
              }
            });
            afMarkup += '</div>';
          } else {
            if (typeof v['#suffix'] == 'undefined') {
              v['#suffix'] = '';
            }
            afMarkup += '<div class="af-item">';
            afMarkup += '<div class="af-' + k + ' af-ui-slider" data-min="' + v['#min'] + '" data-max="' + v['#max'] + '" data-name="' + k + '" data-af-default="' + v['#default'] + '"></div>';
            afMarkup += '<div class="af-form-' + k + ' af-ui-form"><label>' + v['#name'] + '</label><span class="af-field-text">' + v['#default'] + '</span>&nbsp;' + v['#suffix'] + '</div>';
            afMarkup += '</div>';
          }

          afMarkup += '</div>';
        }
      });

      $('#edit-layer_animation a.button-animate').each(function () {
        var buttonClick = $(this);
        $(this).once('custom-animate', function () {
          $(this).after('<div class="custom-animate-wrapper custom-animate-' + $(this).data('trigger') + '">' + afMarkup + '</div>');
          $(this).on('click', function () {
            $('.custom-animate-wrapper', $(this).parent()).dialog({
              width: 800,
              //height: 600,
              modal: true,
              close: function () {
                $(this).dialog('destroy');
              },
              buttons: [
                {
                  text: "Save",
                  click: function () {
                    var afValues = {};
                    $('.af-ui-slider', $('.custom-animate-wrapper div').not('#af-test')).each(function () {
                      if ($(this).data('name')) {
                        afValues[$(this).data('name')] = $(this).next('.af-ui-form').children('.af-field-text').text();
                      }
                    });

                    if (buttonClick.data('trigger') == 'incoming') {
                      $('select[name="incoming-classes"]', layerForm).val('customin').trigger('change');
                      $('input[name="data-customin"]', layerForm).val(rsAnimateValue(afValues)).trigger('change');
                    } else if (buttonClick.data('trigger') == 'outgoing') {
                      $('select[name="outgoing-classes"]', layerForm).val('customout').trigger('change');
                      $('input[name="data-customout"]', layerForm).val(rsAnimateValue(afValues)).trigger('change');
                    }

                    $(this).dialog("close");
                  }
                                },
                {
                  text: "Cancel",
                  click: function () {
                    $(this).dialog("close");
                  }
                                }
                            ]
            });
          });

          $('.af-ui-slider', $(this).parent()).each(function () {
            $(this).slider({
              min: $(this).data('min'),
              max: $(this).data('max'),
              value: $(this).data('af-default'),
              slide: function (event, ui) {
                $('.af-ui-form span.af-field-text', $(this).parent()).text(ui.value);
              },
              change: function (event, ui) {
                $('.af-ui-form span.af-field-text', $(this).parent()).text(ui.value);
              }
            });
          });

          var customAfValue = $('input', buttonClick.parent().next()).val();
          if (customAfValue !== '') {
            $.each(rsParseAnimate(customAfValue), function (k, v) {
              if (k == 'transformOrigin') {
                $('.af-ui-slider[data-name="' + k + 'X"]', buttonClick.parent()).slider("option", "value", v[0]);
                $('.af-ui-slider[data-name="' + k + 'Y"]', buttonClick.parent()).slider("option", "value", v[1]);
                $('.af-form-transformOriginX .af-field-text', buttonClick.parent()).text(v[0]);
                $('.af-form-transformOriginY .af-field-text', buttonClick.parent()).text(v[1]);
              } else {
                $('.af-ui-slider[data-name="' + k + '"]', buttonClick.parent()).slider("option", "value", v);
                $('.af-form-' + k + ' .af-field-text', buttonClick.parent()).text(v);
              }
            });
          }

        });
      });

      // End custom animate

      // End UI form

      if (builder.uiCleanUp == 0) {
        builder.uiCleanUp = 1;
        setTimeout(function () {
          $.each(currentSlide.layers, function (k, v) {
            rsFlashAlignUI(UI.parent(), v.settings, k, false);
          });
        }, 500);
      }

    },
    weight: -14
  };

  function rsFlashForm(key, value, form) {
    var conditions = rsConditions();
    if (typeof conditions[key] != 'undefined') {
      var id, list = [];
      $.each(conditions[key], function (k, v) {
        if (typeof v['#operate'] == 'undefined' || v['#operate'] == '=' || v['#operate'] == '') {
          if ($.inArray(value, v['#values']) != -1) {
            id = k;
          }
          list = list.concat(v['#childrens']);
        } else if (conditions[key][k]['#operate'] == '#') {
          if ($.inArray(value, v['#values']) == -1) {
            id = k;
          }
          list = list.concat(v['#childrens']);
        } else {
          console.log('Operator is undefined!');
        }
      });

      if (typeof id == 'undefined' || typeof conditions[key][id]['#form'] == 'undefined' || conditions[key][id]['#form'] == '') {
        return;
      }

      switch (conditions[key][id]['#form']) {
        case 'hide':
          $.each(list, function (k, v) {
            var formElement = $('[name="' + v + '"]', form);

            if ($.inArray(v, conditions[key][id]['#childrens']) == -1) {
              if (formElement.attr('type') == 'radio') {
                formElement.closest('.form-type-radios').hide();
              } else {
                formElement.parent().hide();
              }
            } else {
              if (formElement.attr('type') == 'radio') {
                formElement.closest('.form-type-radios').show();
              } else {
                formElement.parent().show();
              }
            }
          });
          break;
        case 'disable':
          $.each(list, function (k, v) {
            var formElement = $('[name="' + v + '"]', form);

            if ($.inArray(v, conditions[key][id]['#childrens']) == -1) {
              formElement.attr('disabled', 'disabled');
              if (formElement.attr('type') == 'radio') {
                formElement.closest('.form-type-radios').addClass('item-disabled');
              } else {
                formElement.parent().addClass('item-disabled');
              }
            } else {
              formElement.removeAttr('disabled', 'disabled');
              if (formElement.attr('type') == 'radio') {
                formElement.closest('.form-type-radios').removeClass('item-disabled');
              } else {
                formElement.parent().removeClass('item-disabled');
              }
            }
          });

          break;
      }
    }

    return;
  }

  function rsFlashAlignUI(UI, values, index, form) {
    var layerUI = $('.rs-ui-layer[data-layer="' + index + '"]', UI);
    var widthUI = $('#rs-ui', UI).innerWidth();
    var heightUI = $('#rs-ui', UI).innerHeight();
    var xySelect;
    var uiPosition = {};

    // Set UI
    $('.ui-xy .square').removeClass('active');
    if (!isNaN(values['data-x']) && !isNaN(values['data-y'])) {
      uiPosition = {
        'top': values['data-y'],
        'left': values['data-x']
      };
      xySelect = $('.ui-xy .square[data-ui-x="left"][data-ui-y="top"]');
    } else {
      if (isNaN(values['data-x']) && isNaN(values['data-y'])) {
        xySelect = $('.ui-xy .square[data-ui-x="' + values['data-x'] + '"][data-ui-y="' + values['data-y'] + '"]');
        switch (values['data-x']) {
          case 'left':
            if (values['data-y'] == 'top') {
              uiPosition = {
                'top': values['data-voffset'],
                'left': values['data-hoffset']
              };
            } else if (values['data-y'] == 'center') {
              uiPosition = {
                'top': heightUI / 2 - layerUI.outerHeight() / 2 + parseFloat(values['data-voffset']),
                'left': values['data-hoffset']
              };
            } else if (values['data-y'] == 'bottom') {
              uiPosition = {
                'bottom': values['data-voffset'],
                'left': values['data-hoffset']
              };
            }
            break;
          case 'center':
            if (values['data-y'] == 'top') {
              uiPosition = {
                'top': values['data-voffset'],
                'left': widthUI / 2 - layerUI.outerWidth() / 2 + parseInt(values['data-hoffset'])
              };
            } else if (values['data-y'] == 'center') {
              uiPosition = {
                'top': heightUI / 2 - layerUI.outerHeight() / 2 + parseInt(values['data-voffset']),
                'left': widthUI / 2 - layerUI.outerWidth() / 2 + parseInt(values['data-hoffset'])
              };
            } else if (values['data-y'] == 'bottom') {
              uiPosition = {
                'bottom': values['data-voffset'],
                'left': widthUI / 2 - layerUI.outerWidth() / 2 + parseInt(values['data-hoffset'])
              };
            }
            break;
          case 'right':
            if (values['data-y'] == 'top') {
              uiPosition = {
                'top': values['data-voffset'],
                'right': values['data-hoffset']
              };
            } else if (values['data-y'] == 'center') {
              uiPosition = {
                'top': heightUI / 2 - layerUI.outerHeight() / 2 + parseInt(values['data-voffset']),
                'right': values['data-hoffset']
              };
            } else if (values['data-y'] == 'bottom') {
              uiPosition = {
                'bottom': values['data-voffset'],
                'right': values['data-hoffset']
              };
            }
            break;
        }
      } else if (isNaN(values['data-x'])) {
        switch (values['data-x']) {
          case 'left':
            uiPosition = {
              'top': values['data-y'],
              'left': values['data-hoffset']
            };
            xySelect = $('.ui-xy .square[data-ui-x="left"][data-ui-y="top"]');
            break;
          case 'center':
            uiPosition = {
              'top': values['data-y'],
              'left': widthUI / 2 - layerUI.outerWidth() / 2 + parseInt(values['data-hoffset'])
            };
            xySelect = $('.ui-xy .square[data-ui-x="center"][data-ui-y="top"]');
            break;
          case 'right':
            uiPosition = {
              'top': values['data-y'],
              'right': values['data-hoffset']
            };
            xySelect = $('.ui-xy .square[data-ui-x="right"][data-ui-y="top"]');
            break;
        }
      } else if (isNaN(values['data-y'])) {
        switch (values['data-y']) {
          case 'top':
            uiPosition = {
              'top': values['data-voffset'],
              'left': values['data-x']
            };
            xySelect = $('.ui-xy .square[data-ui-x="left"][data-ui-y="top"]');
            break;
          case 'center':
            uiPosition = {
              'top': heightUI / 2 - layerUI.outerHeight() / 2 + parseInt(values['data-voffset']),
              'left': values['data-x']
            };
            xySelect = $('.ui-xy .square[data-ui-x="left"][data-ui-y="center"]');
            break;
          case 'bottom':
            uiPosition = {
              'bottom': values['data-voffset'],
              'left': values['data-x']
            };
            xySelect = $('.ui-xy .square[data-ui-x="left"][data-ui-y="center"]');
            break;
        }
      } else {
        uiPosition = {
          'top': values['data-y'],
          'left': values['data-x']
        };
        values['data-hoffset'] = '';
        values['data-voffset'] = '';
        xySelect = $('.ui-xy .square[data-ui-x="left"][data-ui-y="top"]');
      }
    }

    if (form) {
      $.each(['data-x', 'data-y', 'data-hoffset', 'data-voffset'], function (k, v) {
        $('#layer-form-wrapper input[name="' + v + '"]', UI).val(values[v]).trigger('change');
      });
    }

    if (layerUI.hasClass('rs-ui-activated')) {
      if (!isNaN(values['data-x'])) {
        $('input[name="data-hoffset"]', UI).attr('readonly', 'readonly').parent().addClass('item-disabled');
      } else {
        $('input[name="data-hoffset"]', UI).removeAttr('readonly').parent().removeClass('item-disabled');
      }
      if (!isNaN(values['data-y'])) {
        $('input[name="data-voffset"]', UI).attr('readonly', 'readonly').parent().addClass('item-disabled');
      } else {
        $('input[name="data-voffset"]', UI).removeAttr('readonly').parent().removeClass('item-disabled');
      }
    }

    if (typeof xySelect != 'undefined') xySelect.addClass('active');

    $.each(['top', 'left', 'right', 'bottom'], function (k, v) {
      if (uiPosition.hasOwnProperty(v)) {
        layerUI.css(v, Math.round(parseFloat(uiPosition[v])) + 'px');
      } else {
        layerUI.css(v, "auto");
      }
    });
  }

  function rsRenderElementUI(layer, index) {
    var layerUI = '';
    var styleUI = [];
    switch (layer.type) {
      case 'text':
        layerUI += '<div class="rs-ui-inner"><span>' + layer.value + rsContentAdvParams(layer) + '</span></div>';
        break;
      case 'image':
        layerUI += '<div class="rs-ui-inner"><span><img src="' + layer.value.replace('public://', Drupal.settings.rs.global.url) + '" /></span></div>';
        break;
      case 'video':
        if (layer.type == 'video' && layer.settings['video-fullscreen'] == 'on') {
          layerUI += '<div class="rs-ui-inner" style="width: 100%; height: 100%;"><span><img style="width: 100%; height: 100%;" src="' + layer.settings['data-videoposter'] + '" /></span></div>';
        } else {
          layerUI += '<div class="rs-ui-inner"><span><img src="' + layer.settings['data-videoposter'] + '" /></span></div>';
        }
        break;
    }

    return '<div data-trigger="ui-layer" data-layer="' + index + '" style="' + styleUI.join("; ") + '" class="tp-caption rs-ui-layer rs-ui-layer-' + layer.type + '">' + layerUI + '</div>';
  }

  function rsContentAdvParams(layer) {
    var output = '';
    if (typeof layer.settings['left-corner'] != 'undefined') {
      if (layer.settings['left-corner'] == 'curved') {
        output += '<div class="frontcorner"></div>';
      } else if (layer.settings['left-corner'] == 'reverced') {
        output += '<div class="frontcornertop"></div>';
      }
    }

    if (typeof layer.settings['right-corner'] != 'undefined') {
      if (layer.settings['right-corner'] == 'curved') {
        output += '<div class="backcorner"></div>';
      } else if (layer.settings['right-corner'] == 'reverced') {
        output += '<div class="backcornertop"></div>';
      }
    }

    return output;
  }

  function rsUpdateElementUI(key, value, UI, settings, activeLayer) {
    var currentSlide;
    if (settings.activeSlide == 'static') {
      currentSlide = settings.slides.static;
    } else {
      currentSlide = settings.slides.items[settings.activeSlide];
    }
    if (typeof activeLayer == 'undefined') {
      activeLayer = settings.activeLayer;
    }
    var layerUI = UI.find('div[data-layer="' + activeLayer + '"]');
    switch (key) {
      case 'value':
        switch (currentSlide.layers[activeLayer].type) {
          case 'text':
            $('span', layerUI).html(value);
            break;
          case 'image':
            $('img', layerUI).attr('src', value.replace('public://', Drupal.settings.rs.global.url));
            break;
          default:
            break;
        }
        break;
      case 'data-x':
      case 'data-y':
      case 'data-hoffset':
      case 'data-voffset':
        rsFlashAlignUI(UI.parent(), currentSlide.layers[activeLayer].settings, activeLayer, false);
        break;
      case 'left-corner':
        layerUI.find('div.frontcorner').remove();
        layerUI.find('div.frontcornertop').remove();
        if (value == 'curved') {
          layerUI.append('<div class="frontcorner"></div>');
        } else if (value == 'reverced') {
          layerUI.append('<div class="frontcornertop"></div>');
        }
        break;
      case 'right-corner':
        layerUI.find('div.backcorner').remove();
        layerUI.find('div.backcornertop').remove();
        if (value == 'curved') {
          layerUI.append('<div class="backcorner"></div>');
        } else if (value == 'reverced') {
          layerUI.append('<div class="backcornertop"></div>');
        }
        break;
      case 'width':
      case 'height':
      case 'data-videowidth':
      case 'data-videoheight':
        if (currentSlide.layers[activeLayer].type == 'video' && currentSlide.layers[activeLayer].settings['video-fullscreen'] == 'on') {
          value = '100%';
        }
        if (value != '') {
          if (key == 'data-videowidth') key = 'width';
          if (key == 'data-videoheight') key = 'height';
          if (!isNaN(value) && String(value).indexOf('%') == -1) {
            value = value + 'px';
          }
          if (currentSlide.layers[activeLayer].type == 'image' || currentSlide.layers[activeLayer].type == 'video') {
            $('img', layerUI).css(key, value);
            layerUI.css(key, value);
          } else {
            layerUI.css(key, value);
          }
        }
        rsFlashAlignUI(UI.parent(), currentSlide.layers[activeLayer].settings, activeLayer, false);
        break;
      case 'data-videoposter':
        $('img', layerUI).attr('src', value);
        break;
      case '2d-rotation':
      case '2d-rotation-origin-x':
      case '2d-rotation-origin-x':
        $.each(rsRotation(currentSlide.layers[activeLayer]), function (k, v) {
          layerUI.css(k, v);
        });
        break;
      case 'video-fullscreen':
        if (currentSlide.layers[activeLayer].settings['video-fullscreen'] == 'on') {
          rsUpdateElementUI('data-videowidth', '100%', UI, settings, activeLayer);
          rsUpdateElementUI('data-videoheight', '100%', UI, settings, activeLayer);
        } else {
          rsUpdateElementUI('data-videowidth', currentSlide.layers[activeLayer].settings['data-videowidth'], UI, settings, activeLayer);
          rsUpdateElementUI('data-videoheight', currentSlide.layers[activeLayer].settings['data-videoheight'], UI, settings, activeLayer);
        }
        break;
      case 'custom_style':
        $('.rs-ui-inner > span', layerUI).attr('style', value);
        break;
      default:
        break;
    }

    $('.frontcorner', layerUI).css({
      'left': '-' + layerUI.outerHeight() + 'px',
      'border-left-width': layerUI.outerHeight(),
      'border-top-width': layerUI.outerHeight(),
      'border-top-color': layerUI.css('background-color')
    });
    $('.frontcornertop', layerUI).css({
      'left': '-' + layerUI.outerHeight() + 'px',
      'border-left-width': layerUI.outerHeight(),
      'border-bottom-width': layerUI.outerHeight(),
      'border-bottom-color': layerUI.css('background-color')
    });

    $('.backcorner', layerUI).css({
      'right': '-' + layerUI.outerHeight() + 'px',
      'border-right-width': layerUI.outerHeight(),
      'border-bottom-width': layerUI.outerHeight(),
      'border-bottom-color': layerUI.css('background-color')
    });
    $('.backcornertop', layerUI).css({
      'right': '-' + layerUI.outerHeight() + 'px',
      'border-right-width': layerUI.outerHeight(),
      'border-top-width': layerUI.outerHeight(),
      'border-top-color': layerUI.css('background-color')
    });
  }

  function rsRenderSlide(item, builder) {
    var output = '';
    var vars = rsAttributes(item.settings);
    var layers = [];
    $.each(item.layers, function (k, v) {
      layers[v['#weight']] = rsRenderLayer(v, builder);
    });

    layers.sort(rsSortWeight);

    output += '<li class"' + vars.classes.join(" ") + '" ' + vars.attributes.join(" ") + '>';
    output += rsRenderMainLayer(item.mainImage);
    output += layers.join("\n");
    output += '</li>';

    return output;
  }

  function rsCaptionLoop(loops, value) {
    var attrs = [];
    var splices = rsSpliceAttributes('caption-loop', value);
    $.each(splices, function (k, v) {
      if (typeof splices[v] == 'undefined') {
        attrs.push(v.replace('caption_loop_', '') + '="' + loops[v] + '"');
      }
    });
    return attrs;
  }

  function rsRenderLayer(layer, builder) {
    var output = '';
    var vars = rsAttributes(layer.settings);
    var loops = rsCaptionLoop(vars.loops, layer.settings['caption-loop']);

    vars.captionClasses.push('tp-caption');
    if (layer.settings['tp-resizeme'] == 'yes' && layer.type != 'video') {
      vars.captionClasses.push('tp-resizeme');
    }

    if (typeof layer.slideType != 'undefined' && layer.slideType == 'static') {
      vars.captionClasses.push('tp-static-layer');
    }

    if (builder.options['parallax_enabled'] == 'on') {
      vars.captionClasses.push(layer.settings['layer_parallax_level']);
    }

    vars.style.push('z-index:' + (20 - parseInt(layer['#weight'])) + ';');

    switch (layer.type) {
      case 'text':
        if (layer.settings['2d-rotation'] != 0 || layer.settings['caption-loop'] != '') {
          output += '<div style="' + vars.style.join(' ') + ' class="' + vars.captionClasses.join(" ") + '" ' + vars.attributes.join(" ") + '><div style="' + vars.innerStyle.join(' ') + rsRenderRotation(layer).join(";") + '" class="tp-layer-inner-rotation ' + vars.classes.join(" ") + '" ' + loops.join(' ') + '>' + layer.value + rsContentAdvParams(layer) + '</div></div>';
        } else {
          output += '<div style="' + vars.style.join(' ') + ' ' + vars.innerStyle.join(' ') + '" class="' + vars.classes.join(" ") + ' ' + vars.captionClasses.join(" ") + '" ' + vars.attributes.join(" ") + '>' + layer.value + rsContentAdvParams(layer) + '</div>';
        }
        break;
      case 'image':
        if (layer.settings['2d-rotation'] != 0 || layer.settings['caption-loop'] != '') {
          output += '<div style="' + vars.style.join(' ') + '" class="' + vars.captionClasses.join(" ") + '" ' + vars.attributes.join(" ") + '><div style="' + rsRenderRotation(layer).join(";") + '" class="tp-layer-inner-rotation ' + vars.classes.join(" ") + '" ' + loops.join(' ') + '><img style="' + vars.innerStyle.join(' ') + '" src="' + layer.value.replace('public://', Drupal.settings.rs.global.url) + '" /></div></div>';
        } else {
          output += '<div style="' + vars.style.join(' ') + '" class="' + vars.classes.join(" ") + ' ' + vars.captionClasses.join(" ") + '" ' + vars.attributes.join(" ") + '><img style="' + vars.innerStyle.join(' ') + '" src="' + layer.value.replace('public://', Drupal.settings.rs.global.url) + '" /></div>';
        }
        break;
      case 'video':
        output += '<div style="' + vars.style.join(' ') + ' ' + vars.style.join(' ') + '" class="' + vars.classes.join(" ") + ' ' + vars.captionClasses.join(" ") + '" ' + vars.attributes.join(" ") + '></div>';
        break;
      default:
        break;
    }
    return output;
  }

  function rsRotation(layer) {
    var rotation = {
      '-moz-transfor': '',
      '-ms-transform': '',
      '-o-transform': '',
      '-webkit-transform': '',
      'transform': '',
      '-moz-transform-origin': '',
      '-ms-transform-origin': '',
      '-o-transform-origin': '',
      '-webkit-transform-origin': '',
      'transform-origin': ''
    };

    if (layer.settings['2d-rotation'] != 0) {
      rotation = {
        '-moz-transform': 'rotate(' + layer.settings['2d-rotation'] + 'deg)',
        '-ms-transform': 'rotate(' + layer.settings['2d-rotation'] + 'deg)',
        '-o-transform': 'rotate(' + layer.settings['2d-rotation'] + 'deg)',
        '-webkit-transform': 'rotate(' + layer.settings['2d-rotation'] + 'deg)',
        'transform': 'rotate(' + layer.settings['2d-rotation'] + 'deg)',
        '-moz-transform-origin': layer.settings['2d-rotation-origin-x'] + '% ' + layer.settings['2d-rotation-origin-y'] + '%',
        '-ms-transform-origin': layer.settings['2d-rotation-origin-x'] + '% ' + layer.settings['2d-rotation-origin-y'] + '%',
        '-o-transform-origin': layer.settings['2d-rotation-origin-x'] + '% ' + layer.settings['2d-rotation-origin-y'] + '%',
        '-webkit-transform-origin': layer.settings['2d-rotation-origin-x'] + '% ' + layer.settings['2d-rotation-origin-y'] + '%',
        'transform-origin': layer.settings['2d-rotation-origin-x'] + '% ' + layer.settings['2d-rotation-origin-y'] + '%'
      }
    }
    return rotation;
  }

  function rsRenderRotation(layer) {
    var rotation = [];
    $.each(rsRotation(layer), function (k, v) {
      rotation.push(k + ": " + v);
    });
    return rotation;
  }

  // Move condition to separate, it is features.
  function rsConditions(type) {
    var conditions = {
      //'data-splitin': ['data-elementdelay'],
      //'data-splitout': ['data-endelementdelay'],
      //'data-endeasing': ['outgoing-classes', 'data-customout', 'data-endspeed'],

      // Slider options
      'navigationType': [
        {
          '#values': ['', 'none'],
          '#childrens': ['navigationHAlign', 'naigationVAlign', 'navigationHOffset', 'navigationVOffset'],
          '#operate': '#',
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'slider_layout': [
        {
          '#values': ['fixed'],
          '#childrens': ['minHeight'],
          '#operate': '=',
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['custom'],
          '#childrens': ['minHeight'],
          '#operate': '=',
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['auto'],
          '#childrens': ['fullWidth', 'autoHeight', 'minHeight', 'forceFullWidth'],
          '#operate': '=',
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['full'],
          '#childrens': ['fullWidth', 'autoHeight', 'minHeight', 'fullScreenAlignForce', 'forceFullWidth', 'fullScreen', 'fullScreenOffsetContainer', 'fullScreenOffset'],
          '#operate': '=',
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'parallax_enabled': [
        {
          '#values': ['on'],
          '#childrens': ['parallaxDisableOnMobile', 'parallax', 'parallaxBgFreeze', 'parallaxLevels'],
          '#operate': '=',
          '#setting': 'destroy',
          '#form': 'disable'
                },
        {
          '#values': ['', 'off'],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'disable'
                }
            ],

      // Slide settings
      'data-kenburns': [
        {
          '#values': ['on'],
          '#childrens': ['data-bgposition', 'data-bgfitstart', 'data-bgpositionend', 'data-bgfitend', 'data-ease', 'data-duration'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['', 'off'],
          '#childrens': ['data-bgposition', 'data-bgfit'],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],

      // Layer settings
      'video-type': [
        {
          '#values': ['youtube'],
          '#childrens': ['value', 'data-autoplay', 'data-autoplayonlyfirsttime', 'data-nextslideatend', 'data-ytid', 'data-videoattributes', 'data-videocontrols', 'data-videowidth', 'data-videoheight', 'data-aspectratio'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['vimeo'],
          '#childrens': ['value', 'data-autoplay', 'data-autoplayonlyfirsttime', 'data-nextslideatend', 'data-vimeoid', 'data-videoattributes', 'data-videocontrols', 'data-videowidth', 'data-videoheight', 'data-aspectratio'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['html5'],
          '#childrens': ['data-autoplay', 'data-autoplayonlyfirsttime', 'data-nextslideatend', 'data-videopreload', 'data-videoattributes', 'data-videomp4', 'data-videoogv', 'data-videowebm', 'data-videocontrols', 'data-videowidth', 'data-videoheight', 'data-forcecover', 'data-forcerewind', 'data-aspectratio', 'data-volume', 'data-videoposter', 'data-videoloop'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': [''],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'data-autoplay': [
        {
          '#values': ['true'],
          '#childrens': ['data-autoplayonlyfirsttime'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['false', ''],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'video-fullscreen': [
        {
          '#values': ['off'],
          '#childrens': ['data-videowidth', 'data-videoheight'],
          '#setting': '',
          '#form': 'hide'
                },
        {
          '#values': ['on', ''],
          '#childrens': [],
          '#setting': '',
          '#form': 'hide'
                }
            ],
      'data-forcecover': [
        {
          '#values': ['false', ''],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['true'],
          '#childrens': ['data-dottedoverlay', 'data-aspectratio'],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'data-bgfit': [
        {
          '#values': ['percentage'],
          '#childrens': ['bgfit-percentage-width', 'bgfit-percentage-height'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['cover', 'contain', 'normal', ''],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'caption-loop': [
        {
          '#values': ['rs-pendulum', 'rs-rotate'],
          '#childrens': ['caption_loop_data-speed', 'caption_loop_data-easing', 'caption_loop_data-startdeg', 'caption_loop_data-enddeg', 'caption_loop_data-origin-x', 'caption_loop_data-origin-y'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['rs-slideloop'],
          '#childrens': ['caption_loop_data-speed', 'caption_loop_data-easing', 'caption_loop_data-xs', 'caption_loop_data-xe', 'caption_loop_data-ys', 'caption_loop_data-ye'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['rs-pulse'],
          '#childrens': ['caption_loop_data-speed', 'caption_loop_data-easing', 'caption_loop_data-zoomstart', 'caption_loop_data-zoomend'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['rs-wave'],
          '#childrens': ['caption_loop_data-speed', 'caption_loop_data-origin-x', 'caption_loop_data-origin-y', 'caption_loop_data-angle', 'caption_loop_data-radius'],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': [''],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'incoming-classes': [
        {
          '#values': ['sft', 'sfb', 'sfr', 'sfl', 'lft', 'lfb', 'lfr', 'lfl', 'skewfromleft', 'skewfromright', 'skewfromleftshort', 'skewfromrightshort', 'fade', 'randomrotate'],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['customin'],
          '#childrens': ['data-customin'],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ],
      'outgoing-classes': [
        {
          '#values': ['stt', 'stb', 'str', 'stl', 'ltt', 'ltb', 'ltr', 'ltl', 'skewtoleft', 'skewtoright', 'skewtoleftshort', 'skewtorightshort', 'fadeout', 'randomrotateout'],
          '#childrens': [],
          '#setting': 'destroy',
          '#form': 'hide'
                },
        {
          '#values': ['customout'],
          '#childrens': ['data-customout'],
          '#setting': 'destroy',
          '#form': 'hide'
                }
            ]
    };

    return conditions[type] || conditions;
  }

  function rsSpliceAttributes(key, value) {
    var splice = [];
    var conditions = rsConditions(key);

    if (typeof conditions != 'undefined') {
      var id, list = [];
      $.each(conditions, function (i, j) {
        if (typeof j['#operate'] == 'undefined' || j['#operate'] == '=' || j['#operate'] == '') {
          if ($.inArray(value, j['#values']) != -1 || $.inArray(String(value), j['#values']) != -1) {
            id = i;
          } else {
            list = list.concat(j['#childrens']);
          }
        } else if (conditions[i]['#operate'] == '#') {
          if ($.inArray(value, j['#values']) == -1 || $.inArray(String(value), j['#values']) == -1) {
            id = i;
          } else {
            list = list.concat(j['#childrens']);
          }
        } else {
          console.log('Operator is undefined!');
        }
      });

      if (typeof id != 'undefined' && conditions[id]['#setting'] == 'destroy') {
        $.each(list, function (m, n) {
          if ($.inArray(n, conditions[id]['#childrens']) == -1 && n != 'data-bgfit') {
            splice.push(n);
          }
        });
      }
    }

    return splice;
  }

  function rsAttributes(options) {
    var settings = $.extend(true, {}, options);
    var vars = {
        "classes": [],
        "captionClasses": [],
        "attributes": [],
        "style": [],
        "innerStyle": [],
        "loops": {}
      },
      captionClasses = ['incoming-classes', 'outgoing-classes'],
      classes = ['class', 'classes', 'styling-captions', 'caption-loop'],
      loops = ['caption_loop_data-speed', 'caption_loop_data-easing', 'caption_loop_data-startdeg', 'caption_loop_data-enddeg', 'caption_loop_data-xs', 'caption_loop_data-xe', 'caption_loop_data-ys', 'caption_loop_data-ye', 'caption_loop_data-zoomstart', 'caption_loop_data-zoomend', 'caption_loop_data-origin-x', 'caption_loop_data-origin-y', 'caption_loop_data-angle', 'caption_loop_data-radius'],
      blackList = ['name', 'state', 'tp-resizeme', 'ui-eye', 'ui-lock', 'left-corner', 'right-corner', '2d-rotation', '2d-rotation-origin-x', '2d-rotation-origin-y', 'width', 'height', 'custom_style', 'video-type', 'bgfit-percentage-width', 'bgfit-percentage-width', 'video-fullscreen', 'loopSingleSlide'],
      attrs = {},
      splice = [],
      conditions = rsConditions();

    if (settings.hasOwnProperty('video-type')) {
      vars.captionClasses.push('tp-videolayer');
      if (settings['video-fullscreen'] == 'on') {
        vars.captionClasses.push('fulllscreenvideo');
        settings['data-videoheight'] = '100%';
        settings['data-videowidth'] = '100%';
      }
    }

    $.each(settings, function (k, v) {
      // Check conditional
      splice = splice.concat(rsSpliceAttributes(k, v));

      if (k == 'data-bgfitstart' || k == 'data-bgfit') {
        if (settings['data-kenburns'] == 'on') {
          attrs['data-bgfit'] = 'data-bgfit="' + settings['data-bgfitstart'] + '"';
        } else if (k == 'data-bgfit') {
          attrs[k] = k + '="' + v + '"';
        }
      } else if ($.inArray(k, blackList) == -1) {
        if ($.inArray(k, classes) != -1) {
          vars.classes.push(v);
        } else if ($.inArray(k, captionClasses) != -1) {
          if (!(k == 'outgoing-classes' && v == '')) {
            vars.captionClasses.push(v);
          }
        } else if ($.inArray(k, loops) != -1) {
          vars.loops[k] = v;
        } else {
          if (v !== "") {
            //if (!isNaN(v)) v = Math.round(v);
            if (k == 'src') v = v.replace('public://', Drupal.settings.rs.global.url);
            if (k == 'data-lazyload') v = v.replace('public://', Drupal.settings.rs.global.url);
            if (k == 'data-thumb') v = v.replace('public://', Drupal.settings.rs.global.url);
            attrs[k] = k + '="' + v + '"';
          }
        }
      } else {
        if ($.inArray(k, ['width', 'height']) != -1) {
          if (String(v).indexOf('%') == -1 && String(v).indexOf('px') == -1) {
            vars.innerStyle.push(k + ':' + v + 'px;');
          } else {
            vars.innerStyle.push(k + ':' + v + ';');
          }
        } else if (k == 'custom_style') {
          vars.style.push(v + ';');
        }
      }
    });
    //fullscreen-container -> fullscreenbanner
    //fullwidthbanner-container --> fullwidthabanner
    //

    $.each(attrs, function (k, v) {
      if ($.inArray(k, splice) == -1) {
        vars.attributes.push(v);
      }
    });

    return vars;
  }

  function rsBackgroundStyle(builder) {
    var currentSlide;
    if (builder.activeSlide == 'static') {
      currentSlide = $.extend(true, {}, builder.slides.static);
      currentSlide.mainImage = {
        'bgfit-percentage-height': 100,
        'bgfit-percentage-width': 100,
        'data-bgfit': "normal",
        'data-bgfitend': "",
        'data-bgfitstart': "",
        'data-bgposition': "center top",
        'data-bgpositionend': "left top",
        'data-bgrepeat': "repeat",
        'data-duration': "",
        'data-ease': "Linear.easeNone",
        'data-kenburns': "off",
        'data-lazyload': "",
        'src': Drupal.settings.rs.global.dir + "/images/trans_tile.png"
      };
    } else {
      currentSlide = builder.slides.items[builder.activeSlide];
    }

    var startheight = builder.options.startheight;
    var startwidth = builder.options.startwidth;
    if (String(startheight).indexOf('%') == -1 && String(startheight).indexOf('px') == -1) {
      startheight += 'px';
    }
    if (String(startwidth).indexOf('%') == -1 && String(startwidth).indexOf('px') == -1) {
      startwidth += 'px';
    }

    var styleUI = {
      // Fixed layer
      'fixed': {
        'cover': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': 'cover'
          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'contain': {
          'parent': {
            'height': startheight,
            'max-width': startwidth
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': 'contain'
          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'percentage': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': currentSlide.mainImage['bgfit-percentage-width'] + '% ' + currentSlide.mainImage['bgfit-percentage-height'] + '%'
          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'normal': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth
          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        }
      },
      // Auto layer
      'auto': {
        'cover': {
          'parent': {
            'height': startheight,
            'margin': '0px auto',
            'max-width': '100%'
          },
          'background': {
            'width': '100%',
            'min-width': startwidth,
            'background-size': 'cover'

          },
          'container': {
            'width': startwidth,
            'height': startheight,
            'margin': '0 auto'
          }
        },
        'contain': {
          'parent': {
            'height': startheight,
            'margin': '0px auto',
            'max-width': startwidth
          },
          'background': {
            'width': '100%',
            'min-width': startwidth,
            'background-size': 'contain'
          },
          'container': {
            'width': startwidth,
            'height': startheight,
            'margin': '0 auto'
          }
        },
        'percentage': {
          'parent': {
            'height': startheight,
            'margin': '0px auto',
            'max-width': '100%'
          },
          'background': {
            'width': '100%',
            'min-width': startwidth,
            'background-size': currentSlide.mainImage['bgfit-percentage-width'] + '% ' + currentSlide.mainImage['bgfit-percentage-height'] + '%'
          },
          'container': {
            'width': startwidth,
            'height': startheight,
            'margin': '0 auto'
          }
        },
        'normal': {
          'parent': {
            'height': startheight,
            'margin': '0px auto',
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth
          },
          'container': {
            'width': startwidth,
            'height': startheight,
            'margin': '0 auto'
          }
        }
      },
      // Custom layer
      'custom': {
        'cover': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': 'cover'

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'contain': {
          'parent': {
            'height': startheight,
            'max-width': startwidth
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': 'contain'

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'percentage': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': currentSlide.mainImage['bgfit-percentage-width'] + '% ' + currentSlide.mainImage['bgfit-percentage-height'] + '%'

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'percentage': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        }
      },
      // Full layer
      'full': {
        'cover': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': 'cover'

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'contain': {
          'parent': {
            'height': startheight,
            'max-width': startwidth
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': 'contain'

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'percentage': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth,
            'background-size': currentSlide.mainImage['bgfit-percentage-width'] + '% ' + currentSlide.mainImage['bgfit-percentage-height'] + '%'

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        },
        'normal': {
          'parent': {
            'height': startheight,
            'max-width': '100%'
          },
          'background': {
            'height': startheight,
            'min-width': startwidth

          },
          'container': {
            'width': startwidth,
            'height': startheight
          }
        }
      }
    };

    if (typeof styleUI[builder.options['slider_layout']] != 'undefined' && typeof styleUI[builder.options['slider_layout']][currentSlide.mainImage['data-bgfit']] != 'undefined') {
      var element = {
        'parent': [],
        'background': [],
        'container': []
      };
      $.each(styleUI[builder.options['slider_layout']][currentSlide.mainImage['data-bgfit']].parent, function (k, v) {
        element.parent.push(k + ': ' + v);
      });
      $.each(styleUI[builder.options['slider_layout']][currentSlide.mainImage['data-bgfit']].background, function (k, v) {
        element.background.push(k + ': ' + v);
      });
      $.each(styleUI[builder.options['slider_layout']][currentSlide.mainImage['data-bgfit']].container, function (k, v) {
        element.container.push(k + ': ' + v);
      });

      element.background.push('background-image: url("' + currentSlide.mainImage.src.replace('public://', Drupal.settings.rs.global.url) + '")');
      element.background.push('background-repeat: ' + currentSlide.mainImage['data-bgrepeat']);
      element.background.push('background-position: ' + currentSlide.mainImage['data-bgposition']);

      return element;
    }
    return false;
  }

  function rsFlashUI(builder, UI) {
    var wrapperStyleUI = rsBackgroundStyle(builder);
    if ($(".main-image", UI).length == 0) UI.prepend('<div class="main-image"></div>');

    if (wrapperStyleUI != false) {
      $(".main-image", UI).parent().attr('style', wrapperStyleUI.parent.join('; '));
      $(".main-image", UI).attr('style', wrapperStyleUI.background.join('; '));
      $("#rs-ui", UI).attr('style', wrapperStyleUI.container.join('; '));
    }
  }

  function rsRenderMainLayer(img) {
    var vars = rsAttributes(img);
    return '<img class="' + vars.classes.join(" ") + '" ' + vars.attributes.join(" ") + ' style="' + vars.style.join(" ") + '" />';
  }

  function rsSortWeight(a, b) {
    var a_weight = (!isNaN(a['#weight'])) ? a['#weight'] : 0;
    var b_weight = (!isNaN(b['#weight'])) ? b['#weight'] : 0;
    return (a_weight < b_weight) ? -1 : ((a_weight > b_weight) ? 1 : 0);
  }

  function rsOptions(options) {
    var blackList = [];

    $.each(options, function (k, v) {
      blackList = blackList.concat(rsSpliceAttributes(k, v));
    });

    $.each(blackList, function (k, v) {
      delete options[v];
    });

    return options;
  }

  function rsAnimateValue(values) {
    var output = [];
    var animate = {
      x: 50,
      y: 150,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      skewX: 0,
      skewY: 0,
      opacity: 0,
      transformPerspective: 0,
      transformOrigin: '50% 50%'
    };

    animate.transformOrigin = values.transformOriginX + '% ' + values.transformOriginY + '%';

    $.each(animate, function (k, v) {
      if (typeof values[k] != 'undefined') {
        output.push(k + ':' + values[k]);
      } else {
        output.push(k + ':' + v);
      }
    });

    return output.join(';');
  }

  function rsParseAnimate(value) {
    var values = {};
    $.each(value.split(';'), function (k, v) {
      var item = v.split(':');
      if (item.length == 2) {
        if (item[0] == 'transformOrigin') {
          item[1] = item[1].replace(/%/g, '');
          item[1] = item[1].split(' ');
        }
        values[item[0]] = item[1];
      }
    });

    return values;
  }

  function rsAnimateForm(type, layers) {
    var animate = {
      //Transition
      'transition': {
        '#name': 'Transition',
        'x': {
          '#name': 'X',
          '#min': -2000,
          '#max': 2000,
          '#default': 0
        },
        'y': {
          '#name': 'Y',
          '#min': -2000,
          '#max': 2000,
          '#default': 0
        },
        'z': {
          '#name': 'Z',
          '#min': -2000,
          '#max': 2000,
          '#default': 0
        }
      },
      //Rotation
      'rotation': {
        '#name': 'Rotation',
        'rotationX': {
          '#name': 'X',
          '#min': -980,
          '#max': 980,
          '#default': 0,
          '#suffix': '°'
        },
        'rotationY': {
          '#name': 'Y',
          '#min': -980,
          '#max': 980,
          '#default': 0,
          '#suffix': '°'
        },
        'rotationZ': {
          '#name': 'Z',
          '#min': -980,
          '#max': 980,
          '#default': 0,
          '#suffix': '°'
        }
      },
      //Scale
      'scale': {
        '#name': 'Scale',
        'scaleX': {
          '#name': 'X',
          '#min': 0,
          '#max': 800,
          '#default': 100,
          '#suffix': '%'
        },
        'scaleY': {
          '#name': 'Y',
          '#min': 0,
          '#max': 800,
          '#default': 100,
          '#suffix': '%'
        }
      },
      //Skew
      'skew': {
        '#name': 'Skew',
        'skewX': {
          '#name': 'X',
          '#min': -180,
          '#max': 180,
          '#default': 0,
          '#suffix': '°'
        },
        'skewY': {
          '#name': 'Y',
          '#min': -180,
          '#max': 180,
          '#default': 0,
          '#suffix': '°'
        }
      },
      //Opacity
      'opacity': {
        '#name': 'Opacity',
        '#min': 0,
        '#max': 100,
        '#default': 0,
        '#suffix': '%'
      },
      //Perspective
      'transformPerspective': {
        '#name': 'Perspective',
        '#min': -3000,
        '#max': 3000,
        '#default': 600,
        '#suffix': 'px'
      },
      //Origin
      'origin': {
        '#name': 'Origin',
        'transformOriginX': {
          '#name': 'X',
          '#min': -200,
          '#max': 200,
          '#default': 50,
          '#suffix': '%'
        },
        'transformOriginY': {
          '#name': 'Y',
          '#min': -200,
          '#max': 200,
          '#default': 50,
          '#suffix': '%'
        }
      },

      //Test Parameters
      'test': {
        '#name': 'Test Parameters',
        'test-speed': {
          '#name': 'Speed',
          '#default_value': 1000,
          '#suffix': 'ms'
        },
        'test-easing': {
          '#name': 'Easing',
          '#default_value': '',
          '#options': layers[type]['layer_animation']['start_transition']['data-easing']['#options'] //'data-easing'
        },
        'test-animate': {
          '#name': 'Animate',
          '#default_value': '',
          '#options': layers['text']['layer_animation']['start_transition']['data-splitin']['#options']
        },
        'test-delay': {
          '#name': 'Delay',
          '#default_value': 0.10,
          '#suffix': 'ms'
        }
      }
    };

    return animate;
  }

  Drupal.behaviors.layerPreview = {
    attach: function (context, settings) {
      settings = settings || Drupal.settings;
      if (!settings.rs || !settings.rs.builder || !settings.rs.builder.slides || !settings.rs.builder.slides.items || !settings.rs.default) {
        return;
      }

      var builder = settings.rs.builder;
      var currentLayer;
      if (builder.activeSlide == 'static') {
        if (typeof builder.slides.static.layers[builder.activeLayer] != 'undefined') {
          currentLayer = builder.slides.static.layers[builder.activeLayer];
        }
      } else {
        if (typeof (builder.slides.items[builder.activeSlide]) != 'undefined' && typeof (builder.slides.items[builder.activeSlide].layers[builder.activeLayer]) != 'undefined') {
          currentLayer = builder.slides.items[builder.activeSlide].layers[builder.activeLayer];
        }
      }

      $('#layer-form-wrapper', context).once('layer-preview', function () {
        var ops = getPreviewOps();
        var rsPreview;
        var customType;
        var afValues = {};
        var layer = $.extend(true, {}, currentLayer);
        var unTrigger = ['custom_style', 'class', 'styling-captions', 'width', 'height', 'value', 'data-slideindex', 'tp-resizeme', 'data-captionhidden', 'id', 'classes', 'title', 'rel', 'data-x', 'data-y', 'data-hoffset', 'data-voffset'];
        layer.type = 'text';
        layer.value = 'SAMPLE DATA';
        $.each(unTrigger, function (k, v) {
          if (typeof layer[v] != 'undefined') layer.settings['class'] = '';
        });
        layer.settings['data-x'] = 'center';
        layer.settings['data-y'] = 'center';
        layer.settings['data-hoffset'] = 0;
        layer.settings['data-voffset'] = 0;
        layer.settings['custom_style'] = 'font-size: 16px; line-height: 24px;';
        layer.settings['styling-captions'] = 'largegreenbg';
        $.each(layer.settings, function (k, v) {
          if ($.inArray(k, ['video-type','layer-link', 'data-videomp4', 'data-videowebm', 'data-videoogv', 'data-videoposter', 'data-ytid', 'data-vimeoid', 'video-size', 'video-fullscreen', 'data-videowidth', 'data-videoheight', 'data-forcecover', 'data-dottedoverlay', 'data-aspectratio', 'data-autoplay', 'data-autoplayonlyfirsttime', 'data-nextslideatend', 'data-forcerewind', 'data-volume', 'data-videopreload', 'data-videocontrols', 'data-videoloop', 'data-videoattributes']) != -1) {
            delete layer.settings[k];
          }
        });
        layer.settings['data-start'] = 300;
        layer.settings['data-end'] = 3000;
        rsPreview = rsLivePreview(layer, $("#edit-layer_animation"), ops, settings);

        $('#edit-layer_animation a.button-animate').on('click', function () {
          var buttonClick = $(this);

          $('.af-ui-slider', $('.ui-dialog .custom-animate-wrapper div').not('#af-test')).each(function () {
            if ($(this).data('name')) {
              afValues[$(this).data('name')] = $(this).next('.af-ui-form').children('.af-field-text').text();
            }
          });

          if (buttonClick.data('trigger') == 'incoming') {
            customType = 'incoming';
            layer.settings['incoming-classes'] = 'customin';
            layer.settings['data-customin'] = rsAnimateValue(afValues);
            layer.settings['data-speed'] = $('.ui-dialog #af-test input[name="test-speed"]').val();
            layer.settings['data-splitin'] = $('.ui-dialog #af-test select[name="test-animate"]').val();
            layer.settings['data-easing'] = $('.ui-dialog #af-test select[name="test-easing"]').val();
            layer.settings['data-elementdelay'] = $('.ui-dialog #af-test input[name="test-delay"]').val();
          } else if (buttonClick.data('trigger') == 'outgoing') {
            customType = 'outgoing';
            layer.settings['outgoing-classes'] = 'customout';
            layer.settings['data-customout'] = rsAnimateValue(afValues);
            layer.settings['data-endspeed'] = $('.ui-dialog #af-test input[name="test-speed"]').val();
            layer.settings['data-splitout'] = $('.ui-dialog #af-test select[name="test-animate"]').val();
            layer.settings['data-endeasing'] = $('.ui-dialog #af-test select[name="test-easing"]').val();
            layer.settings['data-endelementdelay'] = $('.ui-dialog #af-test input[name="test-delay"]').val();
          }

        });

        $('.custom-animate-wrapper').on('click', '.random-animate', function () {
          var parentManimate = $(this).closest('.custom-animate-wrapper');
          $('.af-ui-slider', parentManimate).each(function () {
            afValues[$(this).data('name')] = Math.floor(Math.random() * (parseInt($(this).data('max')) - parseInt($(this).data('min')))) + parseInt($(this).data('min'));
          });

          if (parentManimate.hasClass('custom-animate-incoming')) {
            layer.settings['data-customin'] = rsAnimateValue(afValues);
          }

          if (parentManimate.hasClass('custom-animate-outgoing')) {
            layer.settings['data-customout'] = rsAnimateValue(afValues);
          }

          rsPreview.revpause();
          rsPreview.remove();
          rsPreview = rsLivePreview(layer, parentManimate, ops, settings);

          $.each(afValues, function (k, v) {
            $('.af-ui-slider[data-name="' + k + '"]', parentManimate).slider("option", "value", v);
          });

          return false;
        });

        $('.custom-animate-wrapper', context).on('dialogopen', function () {
          rsPreview.revpause();
          rsPreview.remove();
          rsPreview = rsLivePreview(layer, $(this), ops, settings);
        });

        $('.custom-animate-wrapper', context).on('dialogbeforeclose', function () {
          rsPreview.revpause();
          rsPreview.remove();
        });

        $('.custom-animate-wrapper', context).on('dialogclose', function () {
          $.each(['incoming-classes', 'data-customin', 'data-speed', 'data-splitin', 'data-easing', 'data-elementdelay', 'outgoing-classes', 'data-customout', 'data-endspeed', 'data-splitout', 'data-endeasing', 'data-endelementdelay'], function (k, v) {
            layer.settings[v] = currentLayer.settings[v];
          });
          rsPreview = rsLivePreview(layer, $("#edit-layer_animation"), ops, settings);
        });

        $('.af-ui-slider', context).on('slidestop', function (event, ui) {
          afValues[$(this).data('name')] = ui.value;
          if (customType == 'incoming') {
            layer.settings['data-customin'] = rsAnimateValue(afValues);
          } else if (customType == 'outgoing') {
            layer.settings['data-customout'] = rsAnimateValue(afValues);
          }
          rsPreview.revpause();
          rsPreview.remove();
          rsPreview = rsLivePreview(layer, $(this).closest('.custom-animate-wrapper'), ops, settings);
        });

        $('#af-test').on('change', 'input,select', function () {
          if (customType == 'incoming') {
            layer.settings['data-speed'] = $('.ui-dialog #af-test input[name="test-speed"]').val();
            layer.settings['data-splitin'] = $('.ui-dialog #af-test select[name="test-animate"]').val();
            layer.settings['data-easing'] = $('.ui-dialog #af-test select[name="test-easing"]').val();
            layer.settings['data-elementdelay'] = $('.ui-dialog #af-test input[name="test-delay"]').val();
          } else if (customType == 'outgoing') {
            layer.settings['data-endspeed'] = $('.ui-dialog #af-test input[name="test-speed"]').val();
            layer.settings['data-splitout'] = $('.ui-dialog #af-test select[name="test-animate"]').val();
            layer.settings['data-endeasing'] = $('.ui-dialog #af-test select[name="test-easing"]').val();
            layer.settings['data-endelementdelay'] = $('.ui-dialog #af-test input[name="test-delay"]').val();
          }
          rsPreview.revpause();
          rsPreview.remove();
          rsPreview = rsLivePreview(layer, $(this).closest('.custom-animate-wrapper'), ops, settings).val();
        });


        $('#layer-form-wrapper', context).on('change', 'input,select,textarea', function () {
          if ($.inArray($(this).attr('name'), unTrigger) == -1) {
            rsPreview.revpause();
            layer.settings[$(this).attr('name')] = $(this).val();
            if (($('select[name="incoming-classes"]').val() == 'customin' && $('input[name="data-customin"]').val() == '') || ($('select[name="outgoing-classes"]').val() == 'customout' && $('input[name="data-customout"]').val() == '')) {
              return;
            }
            rsPreview.revpause();
            rsPreview.remove();
            rsPreview = rsLivePreview(layer, $("#edit-layer_animation"), ops, settings);
          }
        });


      });

    },
    weight: -12
  }

  function rsLivePreview(layer, selector, ops, settings) {
    var rsPreview;
    $('#live-layer-preview').remove();
    selector.prepend('<div id="live-layer-preview"></div>');
    ops.startwidth = $('#live-layer-preview').innerWidth();
    ops.startheight = $('#live-layer-preview').innerHeight();
    $('#live-layer-preview').append('<div class="tp-banner-container"><div class="tp-banner"><ul><li class="preview-layer-content" data-masterspeed="1000" data-transition="fade"><img src="' + settings.rs.global.dir + '/images/trans_tile.png" data-bgposition="center top" data-bgfit="normal" data-bgrepeat="repeat" /></li></ul><div class="tp-bannertimer"></div></div></div>');
    $('#live-layer-preview li').append(rsRenderLayer(layer, settings.rs.builder));
    $('#live-layer-preview li').clone().insertAfter('#live-layer-preview li');
    rsPreview = $('#live-layer-preview .tp-banner').revolution(ops);
    return rsPreview;
  }

  function getPreviewOps() {
    return {
      delay: 4000,
      startwidth: 960,
      startheight: 500,
      startWithSlide: 0,
      fullScreenAlignForce: "off",
      autoHeight: "off",
      minHeight: "off",

      shuffle: "off",

      onHoverStop: "off",

      thumbWidth: 100,
      thumbHeight: 50,
      thumbAmount: 3,

      hideThumbsOnMobile: "off",
      hideNavDelayOnMobile: 1500,
      hideBulletsOnMobile: "off",
      hideArrowsOnMobile: "off",
      hideThumbsUnderResoluition: 0,

      hideThumbs: 0,
      hideTimerBar: "on",

      keyboardNavigation: "on",

      navigationType: "none",
      navigationArrows: "none",
      navigationStyle: "round",

      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 30,
      navigationVOffset: 30,

      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,


      touchenabled: "on",
      swipe_velocity: "0.7",
      swipe_max_touches: "1",
      swipe_min_touches: "1",
      drag_block_vertical: "false",

      parallax: "mouse+scroll",
      parallaxBgFreeze: "on",
      parallaxLevels: [10, 7, 4, 3, 2, 5, 4, 3, 2, 1],
      parallaxDisableOnMobile: "off",
      stopLoop: "off",
      stopAtSlide: -1,
      stopAfterLoops: -1,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      hideSliderAtLimit: 0,

      dottedOverlay: "none",

      spinned: "spinner4",

      fullWidth: "off",
      forceFullWidth: "off",
      fullScreen: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "0px",

      panZoomDisableOnMobile: "off",

      simplifyAll: "off",
      shadow: 0
    };
  }

  $(document).ready(function () {
    //$("body").tooltip();
    var revPreview;
    var wrapper = $(".slider-revolution-form").parent();
    wrapper.on('click', 'a,.rs-ui-layer', function () {
      if (!Drupal.settings.rs || !Drupal.settings.rs.builder || !Drupal.settings.rs.default) {
        return;
      }
      var trigger = false;
      switch ($(this).data('trigger')) {
        case 'settings':
          $("#global-form-wrapper", wrapper).dialog({
            width: "80%",
            height: 600,
            modal: true,
            close: function () {
              $(this).dialog('destroy');
            }
          });
          break;
        case 'slide':
          if($(this).data('index') == 'static'){
            Drupal.settings.rs.builder.uiCleanUp = 0;
            Drupal.settings.rs.builder.activeSlide = 'static';
            trigger = true;
          }
          else if ($(this).data('index') != 'undefined') {
            Drupal.settings.rs.builder.uiCleanUp = 0;
            Drupal.settings.rs.builder.activeSlide = $(this).data('index');
            Drupal.settings.rs.builder.activeLayer = 0;
            trigger = true;
          }
          break;
        case 'slide-add':
          trigger = true;
          Drupal.settings.rs.builder.newSlide = true;
          Drupal.settings.rs.builder.activeLayer = 0;
          break;
        case 'slide-delete':
          var del = confirm("Are you sure you want to delete this slide?");
          if (del == true) {
            Drupal.settings.rs.builder.delSlide = Drupal.settings.rs.builder.activeSlide;
            trigger = true;
          }
          break;
          /*
          case 'slide-preview':
              if ($('#revolution-builder #ui-preview').length) {
                  $(this).html('<i class="fa fa-play"></i> Preview');

                  if (typeof revPreview != 'undefined') {
                      revPreview.revpause();
                      revPreview.remove();
                  }

                  $("body").find('#rs-ui-wrapper').parent().removeClass('preview-processed');
                  $("body").find('#rs-ui-wrapper').animate({
                      'height': (parseInt(Drupal.settings.rs.builder.options.startheight) + 2)
                  });

                  $('body').find('#rs-layers').show();
                  $('#revslider-admin-edit-form').show();

                  $('.action-links li a, #global-settings a', $("body").find('#rs-ui-wrapper').parent()).each(function () {
                      $(this).show();
                  });

                  $('#revolution-builder #ui-preview').slideDown(500, function () {
                      $(this).remove();
                  });
              } else {
                  var preview = [];
                  var staticLayer = [];
                  var bannerClass = '';
                  var previewOutput = '';
                  var previewData = $.extend(true, {}, Drupal.settings.rs.builder);
                  $(this).text('Stop preview');
                  $.each(previewData.slides.items, function (key, item) {
                      preview.push(rsRenderSlide(item, previewData));
                  });

                  if (typeof previewData.slides.static != 'undefined' && typeof previewData.slides.static.layers != 'undefined') {
                      $.each(previewData.slides.static.layers, function (key, item) {
                          item.slideType = 'static';
                          staticLayer.push(rsRenderLayer(item, previewData));
                      });
                  }
                  if (previewData.options['slider_layout'] == 'full') {
                      bannerClass = 'fullscreen';
                  } else if (previewData.options['slider_layout'] == 'auto') {
                      bannerClass = 'fullwidth';
                  } else if (previewData.options['slider_layout'] == 'custom') {
                      bannerClass = 'custom';
                  } else if (previewData.options['slider_layout'] == 'fixed') {
                      bannerClass = 'fixed';
                  }

                  $("body").find('#rs-ui-wrapper').parent().addClass('preview-processed');

                  $('body').find('#rs-ui-wrapper').animate({
                      'height': 0
                  });
                  $('body').find('#rs-layers').hide();
                  $('#revslider-admin-edit-form').hide();

                  $('.action-links li a, #global-settings a', $("body").find('#rs-ui-wrapper').parent()).each(function () {
                      if ($(this).data('trigger') != 'slide-preview') {
                          $(this).hide();
                      }
                  });

                  previewOutput += '<ul>' + preview.join("\n") + '</ul>';
                  if (staticLayer.length != 0) {
                      previewOutput += '<div class="tp-static-layers">'+ staticLayer.join("\n") +'</div>';
                  }


                  $("#revolution-builder").append('<div id="ui-preview"><div class="' + bannerClass + '-container"><div class="' + bannerClass + 'banner banner">'+ previewOutput +'</div></div></div>');
                  var options = previewData.options;
                  $.each(options, function (k, v) {
                      if (v == '') {
                          delete options[k];
                      } else if (k == 'parallaxLevels') {
                          options[k] = $.parseJSON(v);
                      } else if (!isNaN(v)) {
                          options[k] = parseFloat(v);
                      } else {
                          if (v.trim() == '') {
                              delete options[k];
                          }
                      }
                  });

                  options = rsOptions(options);
                  revPreview = $('#revolution-builder #ui-preview .banner').revolution(options);
              }
              break;*/
        case 'slide-settings':
          $("#slide-form-wrapper", wrapper).dialog({
            title: "Slide Settings",
            width: "80%",
            height: 600,
            modal: true,
            close: function () {
              $(this).dialog('destroy');
            },
            buttons: [
              {
                text: 'Done',
                click: function () {
                  $(this).dialog("close");
                }
                            }
                        ]
          });
          break;
        case 'slide-clone':
          Drupal.settings.rs.builder.cloneSlide = Drupal.settings.rs.builder.activeSlide;
          trigger = true;
          break;
        case 'layer':
          $('.layer-item', $(this).closest(".layer-items")).removeClass("layer-activated");
          $(this).closest(".layer-item").addClass("layer-activated");
          trigger = true;
          Drupal.settings.rs.builder.activeLayer = $(this).data('layer');
          break;
        case 'layer-add':
          trigger = true;
          Drupal.settings.rs.builder.newLayer = true;
          Drupal.settings.rs.builder.layerType = 'text';
          break;
        case 'layer-image-add':
          trigger = true;
          Drupal.settings.rs.builder.newLayer = true;
          Drupal.settings.rs.builder.layerType = 'image';
          break;
        case 'layer-video-add':
          trigger = true;
          Drupal.settings.rs.builder.newLayer = true;
          Drupal.settings.rs.builder.layerType = 'video';
          break;
        case 'layer-clone':
          Drupal.settings.rs.builder.cloneLayer = $(this).data('layer');
          trigger = true;
          break;
        case 'layer-delete':
          var del = confirm("Are you sure you want to delete this layer?");
          if (del == true) {
            Drupal.settings.rs.builder.delLayer = $(this).data('layer');
            trigger = true;
          }
          break;
        case 'ui-layer':
          trigger = true;
          Drupal.settings.rs.builder.activeLayer = $(this).data('layer');
          break;
        case 'incoming':
        case 'outgoing':
          //
          break;
        default:
          break;
      }
      if (trigger) {
        Drupal.attachBehaviors();
      }
      return false;
    });
  });

})(jQuery);;
(function ($) {
    var $rsdialog = $('<div id="rs-global-settings-dialog"><div class="inner"></div></div>');
    Drupal.ajax.prototype.commands.rs_global_settings = function (ajax, response, status) {
        if (response.data) {
            $('.inner', $rsdialog).html(response.data);
            Drupal.attachBehaviors($('.inner', $rsdialog), Drupal.settings);
        }
    };
    Drupal.ajax.prototype.commands.rs_preview = function (ajax, response, status) {
        if (response.data) {
            $('#revolution-builder').html(response.data);
            var $exitpreview = $('<a href="#">Exit preview</a>');
            $exitpreview.click(function(){
                $(this).remove();
                $('#revolution-builder').html('');
            });
            $('#revolution-builder').before($exitpreview);
            $('html, body').animate({
                scrollTop: '0px'
            }, 800);
            $('.rs-banner').css('display','block');
            Drupal.attachBehaviors($('#revolution-builder'));
        }
    };
    Drupal.behaviors.revslider_global_settings = {
        attach: function (context, settings) {
            //Attach font and custom css
            settings.rs.builder.options.google_fonts = settings.rs.builder.options.google_fonts || '';
            settings.rs.builder.options.custom_css = settings.rs.builder.options.custom_css || '';
            $('head').find('link.google_fonts').remove();
            $('head').find('style.custom_css').remove();
            var fonts = settings.rs.builder.options.google_fonts.split('|');
            $(fonts).each(function(){
                $('head').append('<link class="google_fonts" rel="stylesheet" href="'+this+'" type="text/css" />');
            });
            $('head').append('<style type="text/css" class="custom_css">'+settings.rs.builder.options.custom_css+'</style>');
            $rsdialog.dialog({
                width: '90%',
                height: '600',
                autoOpen: false,
                modal: true,
                title: Drupal.t('Global Settings'),
                buttons: [
                    {
                        text: Drupal.t('Save'),
                        click: function(){
                            var data = $rsdialog.find('form').serializeArray();
                            var ignore = ['form_token','form_build_id','form_id'];
                            $('head').find('link.google_fonts').remove();
                            $(data).each(function(){
                                if(ignore.indexOf(this.name) < 0){
                                    settings.rs.builder.options[this.name] = this.value;
                                    if(this.name == 'google_fonts' && this.value != ''){
                                        var fonts = this.value.split('|');
                                        $(fonts).each(function(){
                                            $('head').append('<link class="google_fonts" rel="stylesheet" href="'+this+'" type="text/css" />');
                                        });
                                    }
                                    if(this.name == 'custom_css'){
                                        $('head').find('style.custom_css').remove();
                                        $('head').append('<style type="text/css" class="custom_css">'+this.value+'</style>');
                                    }
                                }
                            });
                            $(this).dialog('close');
                        }
                    },
                    {
                        text: Drupal.t('Cancel'),
                        click: function(){
                            $(this).dialog('close');
                        }
                    }
                ]
            })
            $('[data-trigger=global-settings]').once('revslider', function () {
                $(this).click(function () {
                    var ajax = new Drupal.ajax(true, '#no_master', {
                        url: Drupal.settings.basePath + '?q=admin/content/revslider/global_settings'
                    });
                    ajax.options.data = $.extend(ajax.options.data, settings.rs.builder.options);
                    ajax.eventResponse(ajax, {})
                    $rsdialog.dialog('open');
                    return false;
                });
            });
            $('[data-trigger=slide-preview]').once('revslider', function() {
                $(this).click(function(){
                    var ajax = new Drupal.ajax(true, '#ui-preview', {
                        url: Drupal.settings.basePath + '?q=admin/content/revslider/preview'
                    });
                    var data = JSON.stringify(settings.rs.builder);
                    ajax.options.data = $.extend(ajax.options.data, {data:data});
                    ajax.eventResponse(ajax, {})
                    return false;
                });
            });
        }
    }
})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;

/**
 * @file: Popup dialog interfaces for the media project.
 *
 * Drupal.media.popups.mediaBrowser
 *   Launches the media browser which allows users to pick a piece of media.
 *
 * Drupal.media.popups.mediaStyleSelector
 *  Launches the style selection form where the user can choose what
 *  format/style they want their media in.
 */

(function ($) {
namespace('Drupal.media.popups');

/**
 * Media browser popup. Creates a media browser dialog.
 *
 * @param {function}
 *   onSelect Callback for when dialog is closed, received (Array media, Object
 *   extra);
 * @param {Object}
 *   globalOptions Global options that will get passed upon initialization of
 *   the browser. @see Drupal.media.popups.mediaBrowser.getDefaults();
 * @param {Object}
 *   pluginOptions Options for specific plugins. These are passed to the plugin
 *   upon initialization.  If a function is passed here as a callback, it is
 *   obviously not passed, but is accessible to the plugin in
 *   Drupal.settings.variables. Example:
 *   pluginOptions = {library: {url_include_patterns:'/foo/bar'}};
 * @param {Object}
 *   widgetOptions Options controlling the appearance and behavior of the modal
 *   dialog. @see Drupal.media.popups.mediaBrowser.getDefaults();
 */
Drupal.media.popups.mediaBrowser = function (onSelect, globalOptions, pluginOptions, widgetOptions) {
  // Get default dialog options.
  var options = Drupal.media.popups.mediaBrowser.getDefaults();

  // Add global, plugin and widget options.
  options.global = $.extend({}, options.global, globalOptions);
  options.plugins = pluginOptions;
  options.widget = $.extend({}, options.widget, widgetOptions);

  // Find the URL of the modal iFrame.
  var browserSrc = options.widget.src;

  if ($.isArray(browserSrc) && browserSrc.length) {
    browserSrc = browserSrc[browserSrc.length - 1];
  }

  // Create an array of parameters to send along to the iFrame.
  var params = {};

  // Add global field widget settings and plugin information.
  $.extend(params, options.global);
  params.plugins = options.plugins;

  // Append the list of parameters to the iFrame URL as query parameters.
  browserSrc += '&' + $.param(params);

  // Create an iFrame with the iFrame URL.
  var mediaIframe = Drupal.media.popups.getPopupIframe(browserSrc, 'mediaBrowser');

  // Attach an onLoad event.
  mediaIframe.bind('load', options, options.widget.onLoad);

  // Create an array of Dialog options.
  var dialogOptions = options.dialog;

  // Setup the dialog buttons.
  var ok = Drupal.t('OK');
  var notSelected = Drupal.t('You have not selected anything!');

  dialogOptions.buttons[ok] = function () {
    // Find the current file selection.
    var selected = this.contentWindow.Drupal.media.browser.selectedMedia;

    // Alert the user if a selection has yet to be made.
    if (selected.length < 1) {
      alert(notSelected);

      return;
    }

    // Select the file.
    onSelect(selected);

    // Close the dialog.
    $(this).dialog('close');
  };

  // Create a jQuery UI dialog with the given options.
  var dialog = mediaIframe.dialog(dialogOptions);

  // Allow the dialog to react to re-sizing, scrolling, etc.
  Drupal.media.popups.sizeDialog(dialog);
  Drupal.media.popups.resizeDialog(dialog);
  Drupal.media.popups.scrollDialog(dialog);
  Drupal.media.popups.overlayDisplace(dialog.parents(".ui-dialog"));

  return mediaIframe;
};

/**
 * Retrieves a list of default settings for the media browser.
 *
 * @return
 *   An array of default settings.
 */
Drupal.media.popups.mediaBrowser.getDefaults = function () {
  return {
    global: {
      types: [], // Types to allow, defaults to all.
      enabledPlugins: [] // If provided, a list of plugins which should be enabled.
    },
    widget: { // Settings for the actual iFrame which is launched.
      src: Drupal.settings.media.browserUrl, // Src of the media browser (if you want to totally override it)
      onLoad: Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad // Onload function when iFrame loads.
    },
    dialog: Drupal.media.popups.getDialogOptions()
  };
};

/**
 * Sets up the iFrame buttons.
 */
Drupal.media.popups.mediaBrowser.mediaBrowserOnLoad = function (e) {
  var options = e.data;

  // Ensure that the iFrame is defined.
  if (this.contentWindow.Drupal.media == undefined) {
    return;
  }

  // Check if a selection has been made and press the 'ok' button.
  if (this.contentWindow.Drupal.media.browser.selectedMedia.length > 0) {
    var ok = Drupal.t('OK');
    var ok_func = $(this).dialog('option', 'buttons')[ok];

    ok_func.call(this);

    return;
  }
};

/**
 * Finalizes the selection of a file.
 *
 * Alerts the user if a selection has yet to be made, triggers the file
 * selection and closes the modal dialog.
 */
Drupal.media.popups.mediaBrowser.finalizeSelection = function () {
  // Find the current file selection.
  var selected = this.contentWindow.Drupal.media.browser.selectedMedia;

  // Alert the user if a selection has yet to be made.
  if (selected.length < 1) {
    alert(notSelected);

    return;
  }

  // Select the file.
  onSelect(selected);

  // Close the dialog.
  $(this).dialog('close');
};

/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *   The mediaFile you are requesting this formatting form for.
 *   @todo: should this be fid? That's actually all we need now.
 *
 * @param Function
 *   onSubmit Function to be called when the user chooses a media style. Takes
 *   one parameter (Object formattedMedia).
 *
 * @param Object
 *   options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaStyleSelector = function (mediaFile, onSelect, options) {
  var defaults = Drupal.media.popups.mediaStyleSelector.getDefaults();

  // @todo: remove this awful hack :(
  if (typeof defaults.src === 'string' ) {
    defaults.src = defaults.src.replace('-media_id-', mediaFile.fid) + '&fields=' + encodeURIComponent(JSON.stringify(mediaFile.fields));
  }
  else {
    var src = defaults.src.shift();

    defaults.src.unshift(src);
    defaults.src = src.replace('-media_id-', mediaFile.fid) + '&fields=' + encodeURIComponent(JSON.stringify(mediaFile.fields));
  }

  options = $.extend({}, defaults, options);

  // Create an iFrame with the iFrame URL.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaStyleSelector');

  // Attach an onLoad event.
  mediaIframe.bind('load', options, options.onLoad);

  // Create an array of Dialog options.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  // Setup the dialog buttons.
  var ok = Drupal.t('OK');
  var notSelected = Drupal.t('Very sorry, there was an unknown error embedding media.');

  dialogOptions.buttons[ok] = function () {
    // Find the current file selection.
    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();
    formattedMedia.options = $.extend({}, mediaFile.attributes, formattedMedia.options);

    // Alert the user if a selection has yet to be made.
    if (!formattedMedia) {
      alert(notSelected);

      return;
    }

    // Select the file.
    onSelect(formattedMedia);

    // Close the dialog.
    $(this).dialog('close');
  };

  // Create a jQuery UI dialog with the given options.
  var dialog = mediaIframe.dialog(dialogOptions);

  // Allow the dialog to react to re-sizing, scrolling, etc.
  Drupal.media.popups.sizeDialog(dialog);
  Drupal.media.popups.resizeDialog(dialog);
  Drupal.media.popups.scrollDialog(dialog);
  Drupal.media.popups.overlayDisplace(dialog.parents(".ui-dialog"));

  return mediaIframe;
};

Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad = function (e) {
};

Drupal.media.popups.mediaStyleSelector.getDefaults = function () {
  return {
    src: Drupal.settings.media.styleSelectorUrl,
    onLoad: Drupal.media.popups.mediaStyleSelector.mediaBrowserOnLoad
  };
};

/**
 * Style chooser Popup. Creates a dialog for a user to choose a media style.
 *
 * @param mediaFile
 *   The mediaFile you are requesting this formatting form for.
 *   @todo: should this be fid? That's actually all we need now.
 *
 * @param Function
 *   onSubmit Function to be called when the user chooses a media style. Takes
 *   one parameter (Object formattedMedia).
 *
 * @param Object
 *   options Options for the mediaStyleChooser dialog.
 */
Drupal.media.popups.mediaFieldEditor = function (fid, onSelect, options) {
  var defaults = Drupal.media.popups.mediaFieldEditor.getDefaults();

  // @todo: remove this awful hack :(
  defaults.src = defaults.src.replace('-media_id-', fid);
  options = $.extend({}, defaults, options);

  // Create an iFrame with the iFrame URL.
  var mediaIframe = Drupal.media.popups.getPopupIframe(options.src, 'mediaFieldEditor');

  // Attach an onLoad event.
  mediaIframe.bind('load', options, options.onLoad);

  // Create an array of Dialog options.
  var dialogOptions = Drupal.media.popups.getDialogOptions();

  // Setup the dialog buttons.
  var ok = Drupal.t('OK');
  var notSelected = Drupal.t('Very sorry, there was an unknown error embedding media.');

  dialogOptions.buttons[ok] = function () {
    // Find the current file selection.
    var formattedMedia = this.contentWindow.Drupal.media.formatForm.getFormattedMedia();

    // Alert the user if a selection has yet to be made.
    if (!formattedMedia) {
      alert(notSelected);

      return;
    }

    // Select the file.
    onSelect(formattedMedia);

    // Close the dialog.
    $(this).dialog('close');
  };

  // Create a jQuery UI dialog with the given options.
  var dialog = mediaIframe.dialog(dialogOptions);

  // Allow the dialog to react to re-sizing, scrolling, etc.
  Drupal.media.popups.sizeDialog(dialog);
  Drupal.media.popups.resizeDialog(dialog);
  Drupal.media.popups.scrollDialog(dialog);
  Drupal.media.popups.overlayDisplace(dialog);

  return mediaIframe;
};

Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad = function (e) {

};

Drupal.media.popups.mediaFieldEditor.getDefaults = function () {
  return {
    // @todo: do this for real
    src: '/media/-media_id-/edit?render=media-popup',
    onLoad: Drupal.media.popups.mediaFieldEditor.mediaBrowserOnLoad
  };
};

/**
 * Generic functions to both the media-browser and style selector.
 */

/**
 * Returns the commonly used options for the dialog.
 */
Drupal.media.popups.getDialogOptions = function () {
  return {
    title: Drupal.t('Media browser'),
    buttons: {},
    dialogClass: Drupal.settings.media.dialogOptions.dialogclass,
    modal: Drupal.settings.media.dialogOptions.modal,
    draggable: Drupal.settings.media.dialogOptions.draggable,
    resizable: Drupal.settings.media.dialogOptions.resizable,
    minWidth: Drupal.settings.media.dialogOptions.minwidth,
    width: Drupal.settings.media.dialogOptions.width,
    height: Drupal.settings.media.dialogOptions.height,
    position: Drupal.settings.media.dialogOptions.position,
    overlay: {
      backgroundColor: Drupal.settings.media.dialogOptions.overlay.backgroundcolor,
      opacity: Drupal.settings.media.dialogOptions.overlay.opacity
    },
    zIndex: Drupal.settings.media.dialogOptions.zindex,
    close: function (event, ui) {
      var elem = $(event.target);
      var id = elem.attr('id');
      if(id == 'mediaStyleSelector') {
        $(this).dialog("destroy");
        $('#mediaStyleSelector').remove();
      }
      else {
        $(this).dialog("destroy");
        $('#mediaBrowser').remove();
      }
    }
  };
};

/**
 * Get an iframe to serve as the dialog's contents. Common to both plugins.
 */
Drupal.media.popups.getPopupIframe = function (src, id, options) {
  var defaults = {width: '100%', scrolling: 'auto'};
  var options = $.extend({}, defaults, options);

  return $('<iframe class="media-modal-frame"/>')
  .attr('src', src)
  .attr('width', options.width)
  .attr('id', id)
  .attr('scrolling', options.scrolling);
};

Drupal.media.popups.overlayDisplace = function (dialog) {
  if (parent.window.Drupal.overlay && jQuery.isFunction(parent.window.Drupal.overlay.getDisplacement)) {
    var overlayDisplace = parent.window.Drupal.overlay.getDisplacement('top');

    if (dialog.offset().top < overlayDisplace) {
      dialog.css('top', overlayDisplace);
    }
  }
}

/**
 * Size the dialog when it is first loaded and keep it centered when scrolling.
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.sizeDialog = function (dialogElement) {
  if (!dialogElement.is(':visible')) {
    return;
  }

  var windowWidth = $(window).width();
  var dialogWidth = windowWidth * 0.8;
  var windowHeight = $(window).height();
  var dialogHeight = windowHeight * 0.8;

  dialogElement.dialog("option", "width", dialogWidth);
  dialogElement.dialog("option", "height", dialogHeight);
  dialogElement.dialog("option", "position", 'center');

  $('.media-modal-frame').width('100%');
}

/**
 * Resize the dialog when the window changes.
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.resizeDialog = function (dialogElement) {
  $(window).resize(function() {
    Drupal.media.popups.sizeDialog(dialogElement);
  });
}

/**
 * Keeps the dialog centered when the window is scrolled.
 *
 * @param jQuery dialogElement
 *  The element which has .dialog() attached to it.
 */
Drupal.media.popups.scrollDialog = function (dialogElement) {
  // Keep the dialog window centered when scrolling.
  $(window).scroll(function() {
    if (!dialogElement.is(':visible')) {
      return;
    }

    dialogElement.dialog("option", "position", 'center');
  });
}

})(jQuery);
;
