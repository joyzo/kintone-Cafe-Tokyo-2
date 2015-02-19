jQuery.noConflict();

(function($, PLUGIN_ID) {
    "use strict";

    kintone.events.on('app.record.detail.show', function(event) {
        var config = kintone.plugin.app.getConfig(PLUGIN_ID);

        var check = document.getElementsByName('sendMail');
        if (check.length == 0) {
            var button = document.createElement("button");
            button.appendChild(document.createTextNode("メール送信"));
            button.setAttribute("name", "sendMail");

            var span = document.createElement("span");
            span.appendChild(button);

            var elButtonSpace = kintone.app.record.getHeaderMenuSpaceElement();
            elButtonSpace.appendChild(span);

            button.addEventListener('click', function () {
                sendMail(event, config);
            });
        }
    });

    function sendMail(event, config){
        var rec = event.record;
        var contents = 'api_user='+config['user_param']+
                         '&api_key='+config['key_param']+
                         '&to='+encodeURIComponent(rec[config['to_code']]['value'])+
                         '&toname='+encodeURIComponent(rec[config['to_name_code']]['value'])+
                         '&subject='+encodeURIComponent(rec[config['subject_code']]['value'])+
                         '&text='+encodeURIComponent(rec[config['text_code']]['value'])+
                         '&from='+encodeURIComponent(config['from_param']);

        var proxyConfig = kintone.plugin.app.getProxyConfig(config['proxy_url'], config['proxy_method']);
        kintone.plugin.app.proxy(PLUGIN_ID, config['proxy_url'], config['proxy_method'], {}, contents, function(body, status, headers) {
          var resp = JSON.parse(body);
            console.log('statusCode: ' + status);
            console.log(resp);
            if(status===200) {
                alert("メール送信しました！");
            } else {
                alert("メール送信に失敗しました！");
            }
        });
        return event;
    }

})(jQuery, kintone.$PLUGIN_ID);
