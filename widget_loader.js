(function () {
    // Step 1: Load Tailwind CSS
    const loadTailwindCSS = () => {
        return new Promise((resolve, reject) => {
          const tailwindLink = document.createElement('script');
          tailwindLink.src = 'https://cdn.tailwindcss.com';
          tailwindLink.onload = () => {
            resolve();
          };
          tailwindLink.onerror = () => {
            console.error('Failed to load Tailwind CSS');
            reject(new Error('Failed to load Tailwind CSS'));
          };
          document.head.appendChild(tailwindLink);
        });
      };
      

      (async () => {
        try {
          await loadTailwindCSS(); // Wait until Tailwind CSS is loaded
        } catch (error) {
          console.error('Failed to load Tailwind CSS', error);
        }
      })();
      
  
    // Step 2: create widget-bot and add it to the DOM
    // const defineWidgetCreator = () => {
    //   class WidgetCreator extends HTMLElement {
    //     connectedCallback() {
    //     }
    //   }
  
    //   // Register the <widget-creator> element
    //   customElements.define('botimoz-widget', WidgetCreator);
    // };
  
    // 2.1
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

    // Step 3: Load actual script
    const loadBotScript = () => {
      const script = document.createElement('script');
      script.src = 'https://anish-saranga.github.io/Botify/botimoz.es.js'
      script.async = true;
      script.onload = () => console.log('Bot loaded');
      script.onerror = () => console.error('Failed to load the script');
      document.head.appendChild(script);
    };
  
    // Execute the steps
    loadTailwindCSS();
    // defineWidgetCreator();
    loadBotScript();
  })();
  