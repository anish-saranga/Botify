(function () {
  
      const widget = document.createElement('botimoz-widget');
      widget.setAttribute('license', "YTI3NjlkMzMtNDNlYy00ZWEwLWFiYTQtMTI5NjIxNDEyMjc0O2M4ZDA1YjVmLWQzZjAtNGVmMy05YTgwLThmODA1OGRjMWUzZDs=")
      widget.setAttribute('bot_greeting', "Hello! How can I help you today?")
      widget.setAttribute('user_avatar', "https://keenwi.openhit.com/images/optalk/userAvatar.png")
      widget.setAttribute('bot_avatar', "https://keenwi.openhit.com/images/optalk/optalk-icon-white-logo.png")
      widget.setAttribute('bot_name', "Oppie")
      widget.setAttribute('show_powered_by', "true")
      widget.setAttribute('chat_bg_color', "white")
      widget.setAttribute('class', "absolute bottom-0 right-0")
  
      document.body.appendChild(widget);
  


      const loadBotScript = () => {
        const script = document.createElement('script');
        script.src = 'https://anish-saranga.github.io/Botify/botimoz.es.js'
        script.type = 'module';
        script.defer = true;
        script.onload = () => console.log('Bot loaded');
        script.onerror = () => console.error('Failed to load the script');
        document.head.appendChild(script);
      };
    
  
      loadBotScript();
    })();
    