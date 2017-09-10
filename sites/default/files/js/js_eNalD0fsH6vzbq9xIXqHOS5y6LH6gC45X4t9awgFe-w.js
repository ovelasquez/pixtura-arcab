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
(function ($) {

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');
  this.displayWeight = null;

  // React to columns change to avoid making checks in the scroll callback.
  this.originalTable.bind('columnschange', function (e, display) {
    // This will force header size to be calculated on scroll.
    self.widthCalculated = (self.displayWeight !== null && self.displayWeight === display);
    self.displayWeight = display;
  });

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    var $that = null;
    var $stickyCell = null;
    var display = null;
    var cellWidth = null;
    // Resize header and its cell widths.
    // Only apply width to visible table cells. This prevents the header from
    // displaying incorrectly when the sticky header is no longer visible.
    for (var i = 0, il = this.originalHeaderCells.length; i < il; i += 1) {
      $that = $(this.originalHeaderCells[i]);
      $stickyCell = this.stickyHeaderCells.eq($that.index());
      display = $that.css('display');
      if (display !== 'none') {
        cellWidth = $that.css('width');
        // Exception for IE7.
        if (cellWidth === 'auto') {
          cellWidth = $that[0].clientWidth + 'px';
        }
        $stickyCell.css({'width': cellWidth, 'display': display});
      }
      else {
        $stickyCell.css('display', 'none');
      }
    }
    this.stickyTable.css('width', this.originalTable.outerWidth());
  }
};

})(jQuery);
;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;
(function ($) {

Drupal.ModuleFilter = {};

Drupal.ModuleFilter.explode = function(string) {
  var queryArray = string.match(/([a-zA-Z]+\:(\w+|"[^"]+")*)|\w+|"[^"]+"/g);
  if (!queryArray) {
    queryArray = new Array();
  }
  var i = queryArray.length;
  while (i--) {
    queryArray[i] = queryArray[i].replace(/"/g, "");
  }
  return queryArray;
};

Drupal.ModuleFilter.getState = function(key) {
  if (!Drupal.ModuleFilter.state) {
    Drupal.ModuleFilter.state = {};
    var cookie = $.cookie('DrupalModuleFilter');
    var query = cookie ? cookie.split('&') : [];
    if (query) {
      for (var i in query) {
        // Extra check to avoid js errors in Chrome, IE and Safari when
        // combined with JS like twitter's widget.js.
        // See http://drupal.org/node/798764.
        if (typeof(query[i]) == 'string' && query[i].indexOf('=') != -1) {
          var values = query[i].split('=');
          if (values.length === 2) {
            Drupal.ModuleFilter.state[values[0]] = values[1];
          }
        }
      }
    }
  }
  return Drupal.ModuleFilter.state[key] ? Drupal.ModuleFilter.state[key] : false;
};

Drupal.ModuleFilter.setState = function(key, value) {
  var existing = Drupal.ModuleFilter.getState(key);
  if (existing != value) {
    Drupal.ModuleFilter.state[key] = value;
    var query = [];
    for (var i in Drupal.ModuleFilter.state) {
      query.push(i + '=' + Drupal.ModuleFilter.state[i]);
    }
    $.cookie('DrupalModuleFilter', query.join('&'), { expires: 7, path: '/' });
  }
};

Drupal.ModuleFilter.Filter = function(element, selector, options) {
  var self = this;

  this.element = element;
  this.text = $(this.element).val();

  this.settings = Drupal.settings.moduleFilter;

  this.selector = selector;

  this.options = $.extend({
    delay: 500,
    striping: false,
    childSelector: null,
    empty: Drupal.t('No results'),
    rules: new Array()
  }, options);
  if (this.options.wrapper == undefined) {
    this.options.wrapper = $(self.selector).parent();
  }

  // Add clear button.
  this.element.after('<div class="module-filter-clear"><a href="#" class="js-hide">' + Drupal.t('clear') + '</a></div>');
  if (this.text) {
    $('.module-filter-clear a', this.element.parent()).removeClass('js-hide');
  }
  $('.module-filter-clear a', this.element.parent()).click(function() {
    self.element.val('');
    self.text = '';
    delete self.queries;
    self.applyFilter();
    self.element.focus();
    $(this).addClass('js-hide');
    return false;
  });

  this.updateQueries = function() {
    var queryStrings = Drupal.ModuleFilter.explode(self.text);

    self.queries = new Array();
    for (var i in queryStrings) {
      var query = { operator: 'text', string: queryStrings[i] };

      if (self.operators != undefined) {
        // Check if an operator is possibly used.
        if (queryStrings[i].indexOf(':') > 0) {
          // Determine operator used.
          var args = queryStrings[i].split(':', 2);
          var operator = args.shift();
          if (self.operators[operator] != undefined) {
            query.operator = operator;
            query.string = args.shift();
          }
        }
      }

      query.string = query.string.toLowerCase();

      self.queries.push(query);
    }

    if (self.queries.length <= 0) {
      // Add a blank string query.
      self.queries.push({ operator: 'text', string: '' });
    }
  };

  this.applyFilter = function() {
    self.results = new Array();

    self.updateQueries();

    if (self.index == undefined) {
      self.buildIndex();
    }

    self.element.trigger('moduleFilter:start');

    $.each(self.index, function(key, item) {
      var $item = item.element;

      for (var i in self.queries) {
        var query = self.queries[i];
        if (query.operator == 'text') {
          if (item.text.indexOf(query.string) < 0) {
            continue;
          }
        }
        else {
          var func = self.operators[query.operator];
          if (!(func(query.string, self, item))) {
            continue;
          }
        }

        var rulesResult = self.processRules(item);
        if (rulesResult !== false) {
          return true;
        }
      }

      $item.addClass('js-hide');
    });

    self.element.trigger('moduleFilter:finish', { results: self.results });

    if (self.options.striping) {
      self.stripe();
    }

    if (self.results.length > 0) {
      self.options.wrapper.find('.module-filter-no-results').remove();
    }
    else {
      if (!self.options.wrapper.find('.module-filter-no-results').length) {
        self.options.wrapper.append($('<p class="module-filter-no-results"/>').text(self.options.empty));
      };
    }
  };

  self.element.keyup(function(e) {
    switch (e.which) {
      case 13:
        if (self.timeOut) {
          clearTimeout(self.timeOut);
        }
        self.applyFilter();
        break;
      default:
        if (self.text != $(this).val()) {
          if (self.timeOut) {
            clearTimeout(self.timeOut);
          }

          self.text = $(this).val();

          if (self.text) {
            self.element.parent().find('.module-filter-clear a').removeClass('js-hide');
          }
          else {
            self.element.parent().find('.module-filter-clear a').addClass('js-hide');
          }

          self.element.trigger('moduleFilter:keyup');

          self.timeOut = setTimeout(self.applyFilter, self.options.delay);
        }
        break;
    }
  });

  self.element.keypress(function(e) {
    if (e.which == 13) e.preventDefault();
  });
};

Drupal.ModuleFilter.Filter.prototype.buildIndex = function() {
  var self = this;
  var index = new Array();
  $(this.selector).each(function(i) {
    var text = (self.options.childSelector) ? $(self.options.childSelector, this).text() : $(this).text();
    var item = {
      key: i,
      element: $(this),
      text: text.toLowerCase()
    };
    for (var j in self.options.buildIndex) {
      var func = self.options.buildIndex[j];
      item = $.extend(func(self, item), item);
    }
    $(this).data('indexKey', i);
    index.push(item);
    delete item;
  });
  this.index = index;
};

Drupal.ModuleFilter.Filter.prototype.processRules = function(item) {
  var self = this;
  var $item = item.element;
  var rulesResult = true;
  if (self.options.rules.length > 0) {
    for (var i in self.options.rules) {
      var func = self.options.rules[i];
      rulesResult = func(self, item);
      if (rulesResult === false) {
        break;
      }
    }
  }
  if (rulesResult !== false) {
    $item.removeClass('js-hide');
    self.results.push(item);
  }
  return rulesResult;
};

Drupal.ModuleFilter.Filter.prototype.stripe = function() {
  var self = this;
  var flip = { even: 'odd', odd: 'even' };
  var stripe = 'odd';

  $.each(self.index, function(key, item) {
    if (!item.element.hasClass('js-hide')) {
      item.element.removeClass('odd even')
        .addClass(stripe);
      stripe = flip[stripe];
    }
  });
};

$.fn.moduleFilter = function(selector, options) {
  var filterInput = this;
  filterInput.parents('.module-filter-inputs-wrapper').show();
  if (Drupal.settings.moduleFilter.setFocus) {
    filterInput.focus();
  }
  if (Drupal.settings.moduleFilter.expandedDescription) {
    $('#system-modules td.description .inner.expand').addClass('expanded');
  }
  filterInput.data('moduleFilter', new Drupal.ModuleFilter.Filter(this, selector, options));
};

})(jQuery);
;
(function($) {

var lastModuleItem;

Drupal.behaviors.moduleFilterPermissions = {
  attach: function(context) {
    $('.module-filter-inputs-wrapper', context).once('module-filter', function() {
      var filterInput = $('input[name="module_filter[name]"]', context);
      var selector = '#permissions tbody tr';

      // Move location of filter input.
      $('#permissions').parent().prepend(filterInput.parent().parent());

      filterInput.moduleFilter(selector, {
        wrapper: $('#permissions').parent(),
        childSelector: 'td.module',
        buildIndex: [
          function(moduleFilter, item) {
            item.isModule = (item.text != '') ? true : false;
            if (item.isModule) {
              item.children = new Array();
              lastModuleItem = item;
            }
            else {
              item.parent = lastModuleItem;
              lastModuleItem.children.push(item);
            }
            return item;
          }
        ]
      });

      var moduleFilter = filterInput.data('moduleFilter');

      moduleFilter.operators = {
        perm: function(string, moduleFilter, item) {
          if (!item.isModule) {
            if (item.name == undefined) {
              var $name = $('td.permission', item.element).clone();
              $('.description', $name).remove();
              item.name = $name.text().trim().toLowerCase();
            }

            if (item.name.indexOf(string) >= 0) {
              return true;
            }
          }
        }
      };

      moduleFilter.element.bind('moduleFilter:finish', function(e, data) {
        for (var i in moduleFilter.results) {
          if (moduleFilter.results[i].isModule) {
            for (var k in moduleFilter.results[i].children) {
              moduleFilter.results[i].children[k].element.removeClass('js-hide');
            }
          }
          else {
            moduleFilter.results[i].parent.element.removeClass('js-hide');
          }
        }
      });
    });
  }
};

})(jQuery);;
(function ($) {

/**
 * Shows checked and disabled checkboxes for inherited permissions.
 */
Drupal.behaviors.permissions = {
  attach: function (context) {
    var self = this;
    $('table#permissions').once('permissions', function () {
      // On a site with many roles and permissions, this behavior initially has
      // to perform thousands of DOM manipulations to inject checkboxes and hide
      // them. By detaching the table from the DOM, all operations can be
      // performed without triggering internal layout and re-rendering processes
      // in the browser.
      var $table = $(this);
      if ($table.prev().length) {
        var $ancestor = $table.prev(), method = 'after';
      }
      else {
        var $ancestor = $table.parent(), method = 'append';
      }
      $table.detach();

      // Create dummy checkboxes. We use dummy checkboxes instead of reusing
      // the existing checkboxes here because new checkboxes don't alter the
      // submitted form. If we'd automatically check existing checkboxes, the
      // permission table would be polluted with redundant entries. This
      // is deliberate, but desirable when we automatically check them.
      var $dummy = $('<input type="checkbox" class="dummy-checkbox" disabled="disabled" checked="checked" />')
        .attr('title', Drupal.t("This permission is inherited from the authenticated user role."))
        .hide();

      $('input[type=checkbox]', this).not('.rid-2, .rid-1').addClass('real-checkbox').each(function () {
        $dummy.clone().insertAfter(this);
      });

      // Initialize the authenticated user checkbox.
      $('input[type=checkbox].rid-2', this)
        .bind('click.permissions', self.toggle)
        // .triggerHandler() cannot be used here, as it only affects the first
        // element.
        .each(self.toggle);

      // Re-insert the table into the DOM.
      $ancestor[method]($table);
    });
  },

  /**
   * Toggles all dummy checkboxes based on the checkboxes' state.
   *
   * If the "authenticated user" checkbox is checked, the checked and disabled
   * checkboxes are shown, the real checkboxes otherwise.
   */
  toggle: function () {
    var authCheckbox = this, $row = $(this).closest('tr');
    // jQuery performs too many layout calculations for .hide() and .show(),
    // leading to a major page rendering lag on sites with many roles and
    // permissions. Therefore, we toggle visibility directly.
    $row.find('.real-checkbox').each(function () {
      this.style.display = (authCheckbox.checked ? 'none' : '');
    });
    $row.find('.dummy-checkbox').each(function () {
      this.style.display = (authCheckbox.checked ? '' : 'none');
    });
  }
};

})(jQuery);
;
(function($) {

/**
 * Live preview of Administration menu components.
 */
Drupal.behaviors.adminMenuLivePreview = {
  attach: function (context, settings) {
    $('input[name^="admin_menu_components"]', context).once('admin-menu-live-preview')
      .change(function () {
        var target = $(this).attr('rel');
        $(target).toggle(this.checked);
      })
      .trigger('change');
  }
};

/**
 * Automatically enables required permissions on demand.
 *
 * Many users do not understand that two permissions are required for the
 * administration menu to appear. Since Drupal core provides no facility for
 * this, we implement a simple manual confirmation for automatically enabling
 * the "other" permission.
 */
Drupal.behaviors.adminMenuPermissionsSetupHelp = {
  attach: function (context, settings) {
    $('#permissions', context).once('admin-menu-permissions-setup', function () {
      // Retrieve matrix/mapping - these need to use the same indexes for the
      // same permissions and roles.
      var $roles = $(this).find('th:not(:first)');
      var $admin = $(this).find('input[name$="[access administration pages]"]');
      var $menu = $(this).find('input[name$="[access administration menu]"]');

      // Retrieve the permission label - without description.
      var adminPermission = $.trim($admin.eq(0).parents('td').prev().children().get(0).firstChild.textContent);
      var menuPermission = $.trim($menu.eq(0).parents('td').prev().children().get(0).firstChild.textContent);

      $admin.each(function (index) {
        // Only proceed if both are not enabled already.
        if (!(this.checked && $menu[index].checked)) {
          // Stack both checkboxes and attach a click event handler to both.
          $(this).add($menu[index]).click(function () {
            // Do nothing when disabling a permission.
            if (this.checked) {
              // Figure out which is the other, check whether it still disabled,
              // and if so, ask whether to auto-enable it.
              var other = (this == $admin[index] ? $menu[index] : $admin[index]);
              if (!other.checked && confirm(Drupal.t('Also allow !name role to !permission?', {
                '!name': $roles[index].textContent,
                '!permission': (this == $admin[index] ? menuPermission : adminPermission)
              }))) {
                other.checked = 'checked';
              }
            }
          });
        }
      });
    });
  }
};

})(jQuery);
;
