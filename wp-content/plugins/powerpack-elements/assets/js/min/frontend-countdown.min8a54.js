!function(r){(PPCountdown=function(t,e,i){var s;this.id=t.id=e.data("id"),this.settings=t,this.node=e,this.wrap=this.node.find(".pp-countdown-wrapper"),this.timertype=t.timer_type,this.timer_format=t.timer_format,this.timer_layout=t.timer_layout,this.timer_labels=t.timer_labels,this.timer_labels_singular=t.timer_labels_singular,this.redirect_link=t.redirect_link.url,this.redirect_link_target=t.redirect_link_target,this.fixed_timer_action=t.fixed_timer_action,this.evergreen_timer_action=t.evergreen_timer_action,this.evergreen_date_days=t.days,this.evergreen_date_hour=t.hours,this.evergreen_date_minutes=t.minutes,this.evergreen_date_seconds=t.seconds,this.timezone=t.time_zone,this.timer_exp_text="","NULL"!==this.timezone&&""!==this.timezone||(this.timezone=null),"evergreen"===this.timertype?this.timer_date=new Date:this.timer_date=new Date(t.years,t.months-1,t.days,t.hours,t.minutes),t.timer_exp_text&&(this.timer_exp_text=t.timer_exp_text),"fixed"==this.timertype&&this._initFixedTimer(),"evergreen"==this.timertype&&(e="",s=0,i.cookie("countdown-"+t.id)==undefined&&(i.cookie("countdown-"+t.id,!0),i.cookie("countdown-"+t.id+"-currdate",new Date),i.cookie("countdown-"+t.id+"-day",this.evergreen_date_days),i.cookie("countdown-"+t.id+"-hour",this.evergreen_date_hour),i.cookie("countdown-"+t.id+"-min",this.evergreen_date_minutes),i.cookie("countdown-"+t.id+"-sec",this.evergreen_date_seconds)),e=new Date(i.cookie("countdown-"+t.id+"-currdate")),s=1e3*(parseFloat(24*this.evergreen_date_days*60*60)+parseFloat(60*this.evergreen_date_hour*60)+parseFloat(60*this.evergreen_date_minutes)+parseFloat(this.evergreen_date_seconds)),e.setTime(e.getTime()+s),this.timer_date=e,this._initEverGreenTimer()),this._initCountdown()}).prototype={_initCountdown:function(){fixed_timer_action=this.fixed_timer_action,settings=this.settings;var t="",t="fixed"==this.timertype?this.fixed_timer_action:this.evergreen_timer_action;r.cookie("countdown-"+settings.id+"expiremsg",null),r.cookie("countdown-"+settings.id+"redirect",null),r.cookie("countdown-"+settings.id+"redirectwindow",null),r.cookie("countdown-"+settings.id+"hide",null),r.cookie("countdown-"+settings.id+"reset",null),r.removeCookie("countdown-"+settings.id+"expiremsg"),r.removeCookie("countdown-"+settings.id+"redirect"),r.removeCookie("countdown-"+settings.id+"redirectwindow"),r.removeCookie("countdown-"+settings.id+"hide"),r.removeCookie("countdown-"+settings.id+"reset"),"msg"==t?r.cookie("countdown-"+settings.id+"expiremsg",settings.expire_message,{expires:365}):"redirect"==t?(r.cookie("countdown-"+settings.id+"redirect",settings.redirect_link,{expires:365}),r.cookie("countdown-"+settings.id+"redirectwindow",settings.redirect_link_target,{expires:365})):"hide"==t?r.cookie("countdown-"+settings.id+"hide","yes",{expires:365}):"reset"==t&&r.cookie("countdown-"+settings.id+"reset","yes",{expires:365})},_initFixedTimer:function(){0<(new Date).getTime()-this.timer_date.getTime()?"msg"==this.fixed_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?this.wrap.append(this.timer_exp_text):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text}):"redirect"==this.fixed_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?window.open(this.redirect_link,this.redirect_link_target):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text}):"hide"==this.fixed_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?this.wrap.countdown("destroy"):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text}):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(",")}):"msg"===this.fixed_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text}):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(",")}):"redirect"==this.fixed_timer_action?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text,onExpiry:this._redirectCounter}):"hide"==this.fixed_timer_action?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text,onExpiry:this._destroyCounter}):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:this.timer_exp_text})},_destroyCounter:function(){parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)&&jQuery(this).countdown("destroy")},_redirectCounter:function(){redirect_link=jQuery.cookie(jQuery(this)[0].id+"redirect"),redirect_link_target=jQuery.cookie(jQuery(this)[0].id+"redirectwindow"),parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)&&window.open(redirect_link,redirect_link_target)},_initEverGreenTimer:function(){0<(new Date).getTime()-this.timer_date.getTime()?"msg"==this.evergreen_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?this.wrap.append(r.cookie("countdown-"+this.settings.id+"expiremsg")):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:r.cookie("countdown-"+this.settings.id+"expiremsg")}):"redirect"==this.evergreen_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?window.open(this.redirect_link,this.redirect_link_target):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),onExpiry:this._redirectCounter}):"hide"==this.evergreen_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?this.wrap.countdown("destroy"):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),onExpiry:this._destroyCounter}):"reset"==this.evergreen_timer_action?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),onExpiry:this._restartCountdown}):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(",")}):"msg"==this.evergreen_timer_action?parseInt(window.location.href.toLowerCase().indexOf("?elementor"))===parseInt(-1)?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),expiryText:r.cookie("countdown-"+this.settings.id+"expiremsg")}):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(",")}):"redirect"==this.evergreen_timer_action?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),onExpiry:this._redirectCounter}):"hide"==this.evergreen_timer_action?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),onExpiry:this._destroyCounter}):"reset"==this.evergreen_timer_action?this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(","),onExpiry:this._restartCountdown}):this.wrap.countdown({until:this.timer_date,format:this.timer_format,layout:this.timer_layout,labels:this.timer_labels.split(","),timezone:this.timezone,labels1:this.timer_labels_singular.split(",")})},_restartCountdown:function(){r.cookie("countdown-"+settings.id+"-currdate",new Date),currdate=new Date(r.cookie("countdown-"+settings.id+"-currdate"));var t=r.cookie("countdown-"+settings.id+"-day"),e=r.cookie("countdown-"+settings.id+"-hour"),i=r.cookie("countdown-"+settings.id+"-min"),s=r.cookie("countdown-"+settings.id+"-sec"),t=1e3*(parseFloat(24*t*60*60)+parseFloat(60*e*60)+parseFloat(60*i)+parseFloat(s));currdate.setTime(currdate.getTime()+t),this.timer_date=currdate,jQuery(this).countdown("option",{until:this.timer_date})}};var t=function(t,e){var i=JSON.parse(t.find("[name=pp-countdown-settings]").val());new PPCountdown(i,t,e)};r(window).on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&(isEditMode=!0),elementorFrontend.hooks.addAction("frontend/element_ready/pp-countdown.default",t)})}(jQuery);