

var layouts = {
  '5' : {
    'name' : 'solid',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      }
    }
  },
  '2' : {
    'name' : 'party-fessewise',
    'parts' : {
      '0' : {
        'name' : 'top',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'bottom',
        'src' : '<rect width="200" height="125" x="0" y="125" />',
        'default' : '#333'
      }
    }
  },
  '3' : {
    'name' : 'party',
    'parts' : {
      '0' : {
        'name' : 'left',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'right',
        'src' : '<rect width="100" height="250" x="100" y="0" />',
        'default' : '#333'
      }
    }
  },
  '4' : {
    'name' : 'chief',
    'parts' : {
      '1' : {
        'name' : 'top',
        'src' : '<rect width="200" height="60" />',
        'default' : '#333'
      },
      '0' : {
        'name' : 'bottom',
        'src' : 'bkg',
        'default' : '#eee'
      }
    }
  },
  '7' : {
    'name' : 'tri-fesse',
    'parts' : {
      '3' : {
        'name' : 'top stripe',
        'src' : '<rect width="200" height="25" x="0" y="75" />',
        'default' : '#333'
      },
      '1' : {
        'name' : 'middle stripe',
        'src' : '<rect width="200" height="25" x="0" y="100" />',
        'default' : '#ccc'
      },
      '2' : {
        'name' : 'bottom stripe',
        'src' : '<rect width="200" height="25" x="0" y="125" />',
        'default' : '#333',
      },
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default': '#eee'
      }
    }
  },
  '6' : {
    'name' : 'Quarterly',
    'parts' : {
      '3' : {
        'name' : 'top left',
        'src' : '<rect width="100" height="125" x="0" y="0" />',
        'default' : '#333'
      },
      '1' : {
        'name' : 'top right',
        'src' : '<rect width="100" height="125" x="100" y="0" />',
        'default' : '#ccc'
      },
      '2' : {
        'name' : 'bottom left',
        'src' : '<rect width="100" height="125" x="0" y="125" />',
        'default' : '#333',
      },
      '0' : {
        'name' : 'bottom right',
        'src' : 'bkg',
        'default': '#eee'
      }
    }
  },
  '8' : {
    'name' : 'pile',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'spike',
        'src' : '<path d="M 0,16.341444 100,3.2840541 200,16.341444 98.625538,116.06599 z"/>',
        'default' : '#333'
      }
    }
  },
  '9' : {
    'name' : 'stripe sinister',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'stripe',
        'src' : '<path d="m 101.02296,5.3457474 46.39599,10.3084656 45.02151,46.044481 1.02295,37.873753 z"/>',
        'default' : '#333'
      },
      '2' : {
        'name' : 'corner',
        'src' : '<path d="m 147.41895,15.654213 45.02151,46.044481 1.71018,-43.219511 z" />',
        'default' : '#333'
      }
    }
  },
  '10' : {
    'name' : 'stripe',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'stripe',
        'src' : '<path d="M 98.43829,5.6513392 52.042308,15.959805 7.0207983,62.004286 5.9978483,99.878039 z"/>',
        'default' : '#333'
      },
      '2' : {
        'name' : 'corner',
        'src' : '<path d="m 4.2876366,15.959805 47.7546714,0 -45.0215097,46.044481 z" />',
        'default' : '#333'
      }
    }
  },
  '11' : {
    'name' : 'dotty',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'dot',
        'src' : '<path d="m 170.44119,125 c 0,38.90359 -31.5376,70.44119 -70.441192,70.44119 -38.903593,0 -70.441186,-31.5376 -70.441186,-70.44119 0,-38.903593 31.537593,-70.441187 70.441186,-70.441187 38.903592,0 70.441192,31.537594 70.441192,70.441187 z"/>',
        'default' : '#333'
      }
    }
  },
  '12' : {
    'name' : 'bend sinister',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'stripe',
        'src' : '<path d="M 219.57154,44.652516 C 207.01696,31.938424 194.46237,19.224331 181.90779,6.510237 125.50938,62.20108 69.110965,117.89192 12.712555,173.58276 c 12.55459,12.71409 25.10917,25.42819 37.66375,38.14228 C 106.77472,156.0342 163.17313,100.34336 219.57154,44.652516 z"/>',
        'default' : '#333'
      }
    }
  },
  '13' : {
    'name' : 'bend',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'stripe',
        'src' : '<path d="M -16.151149,41.216361 C -3.5965663,28.502269 8.9580173,15.788176 21.512601,3.0740818 77.911012,58.764925 134.30943,114.45577 190.70784,170.14661 178.15325,182.8607 165.59867,195.5748 153.04409,208.28889 96.645675,152.59805 40.247262,96.907203 -16.151149,41.216361 z"/>',
        'default' : '#333'
      }
    }
  },
  '14' : {
    'name' : 'fesse',
    'parts' : {
      '0' : {
        'name' : 'left',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'right',
        'src' : '<rect width="200" height="100" x="0" y="75" />',
        'default' : '#333'
      }
    }
  },
  '15' : {
    'name' : 'pale',
    'parts' : {
      '0' : {
        'name' : 'left',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'right',
        'src' : '<rect width="100" height="250" x="50" y="0" />',
        'default' : '#333'
      }
    }
  },
  '16' : {
    'name' : 'cross',
    'parts' : {
      '0' : {
        'name' : 'background',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'cross',
        'src' : '<g><rect width="50" height="250" x="75" y="0" /><rect width="50" height="250" x="75" y="0" /><rect width="200" height="50" x="0" y="75" /></g>',
        'default' : '#333'
      }
    }
  },
  '17' : {
    'name' : 'party bendwise',
    'parts' : {
      '0' : {
        'name' : 'top right',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'bottom left',
        'src' : '<path d="M -0.18947105,11.616843 199.50225,245.50225 l -199.00449,0 z"/>',
        'default' : '#333'
      }
    }
  },
  '18' : {
    'name' : 'party bendwise sinister',
    'parts' : {
      '0' : {
        'name' : 'top left',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'bottom right',
        'src' : '<path d="M 199.84586,12.057293 0.1541405,245.94271 l 199.0044895,0 z"/>',
        'default' : '#333'
      }
    }
  },
  '19' : {
    'name' : 'border',
    'parts' : {
      '0' : {
        'name' : 'outer',
        'src': 'bkg',
        'default' : '#eee',
      },
      '1' : {
        'name' : 'inner',
        'src' : '<path d="m 80.820046,198.96951 0,0 C 59.626961,183.13148 44.26093,165.25807 33.52854,138.44565 c -3.117763,-9.83432 -4.63327,-21.90802 -5.563707,-33.15041 -1.593399,-19.252747 0,-57.955281 0,-57.955281 0,0 30.944872,-2.138596 46.259902,-4.474657 8.522208,-0.824356 25.775263,-5.030055 25.775263,-5.030055 0,0 17.253052,4.669341 25.775262,5.493698 15.31456,2.336107 46.25991,4.474656 46.25991,4.474656 0,0 1.5934,38.702535 0,57.955269 -0.93044,11.2424 -2.44595,23.3161 -5.56372,33.15041 -10.73238,26.81196 -26.09841,44.68306 -47.2915,60.50532 -6.35515,4.74305 -19.179952,12.75015 -19.179952,12.75015 0,0 -12.824808,-8.47074 -19.179952,-13.2138 z" />',
        'default' : '#333'
      }
    }
  },
  '20' : {
    'name' : 'party saltirewise',
    'parts' : {
      '0' : {
        'name' : 'top',
        'src' : 'bkg',
        'default' : '#333'
      },
      '1' : {
        'name' : 'bottom',
        'src' : '<path d="M 100,125 1.0387286,224.75968 97.102573,259.80847 199.5,230.83358 z"/>',
        'default' : '#eee'
      },
      '2' : {
        'name' : 'right',
        'src' : '<path d="M 199.6485,15.619083 100,125 199.5,230.83358 224.24032,116.64205 z"/>',
        'default' : '#333'
      },
      '3' : {
        'name' : 'left',
        'src' : '<path d="M 0.5,14.355802 -41.421094,108.61763 1.0387286,224.75968 100,125 z"/>',
        'default' : '#333'
      }
    }
  },
  '22' : {
    'name' : 'chevron',
    'parts' : {
      '0' : {
        'name' : 'top',
        'src' : 'bkg',
        'default' : '#eee'
      },
      '1' : {
        'name' : 'chevron',
        'src' : '<path d="M 200.34375,200.9375 100,97.15625 -0.34375,200.9375 l 0,-63.30196 L 100,33.85429 200.34375,137.63554 z"/>',
        'default' : '#333'
      },
      '2' : {
        'name' : 'bottom',
        'src' : '<path d="M 200.34375,199.56304 100,95.781788 -0.34375,199.56304 100,244.14699 z"/>',
        'default' : '#333'
      }
    }
  },
}

var patterns = {
  '0' : {
    'name' : 'paly',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<rect width="25" height="50" x="0" />'
  },
  '1' : {
    'name' : 'barry',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<rect width="50" height="25" />'
  },
  '2' : {
    'name' : 'checky',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<rect width="25" height="25" /><rect width="25" height="25" x="25" y="25" />'
  },
  '3' : {
    'name' : 'bendy',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<g><polygon points="0,0 50,50, 25,50 0,25 " /><polygon points="50,0 50,25, 25,0" /></g>'
  },
  '4' : {
    'name' : 'bendy sinister',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<g><polygon points="50,0 0,50, 25,50 50,25 " /><polygon points="0,0 25,0, 0,25" /></g>'
  },
  '5' : {
    'name' : 'triangles',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<polygon points="0,0 50,50, 0,50" />'
  },
  '6' : {
    'name' : 'triangles sinister',
    'width' : '50',
    'height' : '50',
    'units' : 'userSpaceOnUse',
    'src' : '<polygon points="50,0 50,50, 0,50" />'
  },
}

var bkg = '<rect id="crest-shape-0" width="200" height="250" />';



function get_url_vars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

var vars = get_url_vars();
var settings = {
  '0' : {
    'color' : vars['p0c'] ? vars['p0c'] : '#E63217',
    'border' : vars['p0b'] ? vars['p0b'] : '0',
    'pattern' : vars['p0p'] ? vars['p0p'] : '-1',
    'pattern-color' : vars['p0t'] ? vars['p0t'] : 'red'
  },
  '1' : {
    'color' : vars['p1c'] ? vars['p1c'] : '#EBEBEB',
    'border' : vars['p1b'] ? vars['p1b'] : '0',
    'pattern' : vars['p1p'] ? vars['p1p'] : '1',
    'pattern-color' : vars['p1t'] ? vars['p1t'] : 'orange'
  },
  '2' : {
    'color' : vars['p2c'] ? vars['p2c'] : '#549926',
    'border' : vars['p2b'] ? vars['p2b'] : '0',
    'pattern' : vars['p2p'] ? vars['p2p'] : '-1',
    'pattern-color' : vars['p2t'] ? vars['p2t'] : 'blue'
  },
  '3' : {
    'color' : vars['p3c'] ? vars['p1c'] : '#CCCC06',
    'border' : vars['p3b'] ? vars['p3b'] : '0',
    'pattern' : vars['p3p'] ? vars['p3p'] : '-1',
    'pattern-color' : vars['p3t'] ? vars['p3t'] : '#eee'
  }
}
var current_layout = vars['l'] ? vars['l'] : '2';

function save_settings() {
  var s = '?l=' + current_layout;
  for (var p in settings) {
    s += '&p' + p + 'c=' + settings[p]['color'] +
       '&p' + p + 'b=' + settings[p]['border'] +
       '&p' + p + 'p=' + settings[p]['pattern'] +
       '&p' + p + 't=' + settings[p]['pattern-color'];
  }
  return s;
}

function refresh_crest() {
  $('#crest').html($('#crest').html());
}
function refresh_color(part_id) {
  $('#input-part-' + part_id + ' > .color-box').css('background-color', settings[part_id]['color']);
}

function set_details(part_id) {
  var s = settings[part_id];
  $('#crest-input-part-color')[0].color.fromString(s['color']);

  if (s['border'] == '1') {
    $('#crest-input-part-border').prop('checked', 'checked');
  } else {
    $('#crest-input-part-border').prop('checked', '');
  }

  $('#crest-input-part-pattern').val(s['pattern']);
  $('#crest-input-pat-color')[0].color.fromString(s['pattern-color']);
}

function updatePartColor(part) {
  var color = settings[part]['color'];
  $('#crest-shape-' + part).attr('fill', color);
  refresh_color(part);
}

function updatePartPatternColor(part) {
  var color = settings[part]['pattern-color'];
  $('#pat-inner-' + part).attr('fill', color);
}

function updatePartPattern(part) {
  var pat_id = settings[part]['pattern'];

  /* remove old pattern parts */
  $('#pat-part-' + part).remove();
  $('#pat-cont-' + part).remove();

  if (pat_id != '-1') {
    var pat = patterns[pat_id];

    var pat_ob = $('<pattern id="pat-part-' + part + '" ' +
      'width="' + pat['width'] + '" ' +
      'height="' + pat['height'] + '" ' +
      'patternUnits="' + pat['units'] + '" ></pattern>');

    var pat_inner = $('<g id="pat-inner-' + part + '"></g>');

    pat_inner.html(pat['src']);
    pat_ob.append(pat_inner);
    $('#part-pats').append(pat_ob);

    var part_ob = $('#crest-shape-' + part);
    var pat_container = part_ob.clone();
    pat_container.attr('id', 'pat-cont-' + part);
    pat_container.attr('stroke', 'none');
    updatePartPatternColor(part);
    pat_container.attr('fill', 'url(#pat-part-' + part + ')');
    pat_container.insertAfter(part_ob);
  }

  refresh_crest();
}

function colorChanged(c) {
  var color = $('#crest-input-part-color').val();
  var id = $('#crest-input-parts .active').data('partid');
  settings[id]['color'] = '#' + color;
  updatePartColor(id);
}

function patColorChanged(c) {
  var color = $('#crest-input-pat-color').val();
  var id = $('#crest-input-parts .active').data('partid');
  settings[id]['pattern-color'] = '#' + color;
  updatePartPatternColor(id);
}

function updatePartBorder(part) {
  if (settings[part]['border'] == '1') {
    $('#crest-shape-' + part).attr('stroke', '#000');
    $('#crest-shape-' + part).attr('stroke-width', '1.25');
  } else {
    $('#crest-shape-' + part).attr('stroke', 'none');
  }
}

function set_layout(layout) {
  var current_layout = layout;
  $('#crest-shapes').html('');
  $('#crest-input-parts').html('');
  for (var part_id in layouts[layout]['parts']) {
    var part = layouts[layout]['parts'][part_id];
    if (part['src'] == 'bkg') {
      var html = $('#crest-bkg > rect');
      html.attr('id', 'crest-shape-' + part_id);
    } else {
      var html = $(part['src']);
      html.attr('id', 'crest-shape-' + part_id);
      $('#crest-shapes').append(html);
    }

    updatePartColor(part_id);
    updatePartBorder(part_id);
    updatePartPattern(part_id);

    $('#crest-input-parts').append(
      '<li class="list-item" id="input-part-' + part_id + '" data-partid="' + part_id + '" >' +
      '<span class="color-box"></span> ' + part['name'] + ' </li>');

    refresh_color(part_id);
  }
  refresh_crest();
}

$(document).on('change', '#crest-input-part-pattern', function() {
  var id = $('#crest-input-parts .active').data('partid');
  settings[id]['pattern'] = $(this).val();
  updatePartPattern(id);
});

$(document).on('change', '#crest-input-part-border', function() {
  var id = $('#crest-input-parts .active').data('partid');

  if($(this).prop('checked')) {
    settings[id]['border'] = '1';
  } else {
    settings[id]['border'] = '0';
  }

  updatePartBorder(id);
});

$(document).on('click', '#crest-input-parts > li', function() {
  $('#crest-input-parts .active').removeClass('active');
  var id = $(this).data('partid');
  $(this).addClass('active');
  set_details(id);
  $('#panel-details').fadeIn();
  $('#panel-details > ul').hide();
  $('#panel-details > ul').fadeIn();

});

$(document).on('click', '#crest-input-layout > li', function() {
  $('#crest-input-layout .active').removeClass('active');
  var id = $(this).data('layoutid');
  $(this).addClass('active');
  set_layout(id);
  $('#panel-parts').fadeIn();
  $('#panel-parts > ul').hide();
  $('#panel-parts > ul').fadeIn();
});

$(document).on('click', '#crest-link-code', function() {
  $(this).attr('href', save_settings());
});

$(document).ready(function() {
  $('#crest').html($('#crest').html());
  for (var id in layouts) {
    $('#crest-input-layout').append(
      '<li class="list-item" data-layoutid="' + id + '" ><label>' +
      ' <i class="crest crest-' + id + '"> </i> ' + layouts[id]['name'] + ' </label></li>');
  }
  for (var id in patterns) {
    $('#crest-input-part-pattern').append(
      '<option value="' + id + '">' + patterns[id]['name'] + '</option>'
    );
  }
  $('#crest-input-part-pattern').append('<option value="-1"> none </option>');
  set_layout(vars['l'] ? vars['l'] : '12');
});
