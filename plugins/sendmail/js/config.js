jQuery.noConflict();

(function($, PLUGIN_ID) {
  "use strict";

  $(document).ready(function() {
    var KEY = PLUGIN_ID;
    var config = kintone.plugin.app.getConfig(KEY);

    kintone.api(kintone.api.url('/k/v1/preview/form', true), 'GET', {'app': kintone.app.getId()}, function(resp) {
      for (var i = 0; i < resp.properties.length; i++) {
      var prop = resp.properties[i];
        switch (prop['type']){
          case 'SINGLE_LINE_TEXT':
            $('#to_code').append($('<option>').text(prop['label']).val(prop['code']));
            $('#to_name_code').append($('<option>').text(prop['label']).val(prop['code']));
            $('#subject_code').append($('<option>').text(prop['label']).val(prop['code']));
            $('#text_code').append($('<option>').text(prop['label']).val(prop['code']));
            break;
          case 'LINK':
            $('#to_code').append($('<option>').text(prop['label']).val(prop['code']));
            break;
          case 'MULTI_LINE_TEXT':
            $('#text_code').append($('<option>').text(prop['label']).val(prop['code']));
            break;
          case 'RICH_TEXT':
            $('#text_code').append($('<option>').text(prop['label']).val(prop['code']));
            break;
        }
      }

      if (config){
        $('#user_param').val(config['user_param']);
        $('#key_param').val(config['key_param']);
        $('#from_param').val(config['from_param']);
        $('#to_code').val(config['to_code']);
        $('#to_name_code').val(config['to_name_code']);
        $('#subject_code').val(config['subject_code']);
        $('#text_code').val(config['text_code']);
      }
    });

    $('#submit').click(function() {
      var config = {};
      config['user_param'] = $('#user_param').val();
      config['key_param'] = $('#key_param').val();
      config['from_param'] = $('#from_param').val();
      config['to_code'] = $('#to_code').val();
      config['to_name_code'] = $('#to_name_code').val();
      config['subject_code'] = $('#subject_code').val();
      config['text_code'] = $('#text_code').val();

      var url = 'https://sendgrid.com/api/mail.send.json';
      var headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
      };

      config['proxy_url'] = url;
      config['proxy_method'] = 'POST';

      kintone.plugin.app.setConfig(config);
      kintone.plugin.app.setProxyConfig(config['proxy_url'], config['proxy_method'], headers, {});
    });

    $('#cancel').click(function() {
      history.back();
    });
  });
})(jQuery,kintone.$PLUGIN_ID);
