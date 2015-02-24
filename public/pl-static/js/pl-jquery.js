/*
 * Custom JavaScript functions for the edX Pattern Library
 * Chris Rodriguez (clrux, crodriguez)
 */

$(document).ready(function() {

    var t, DoTabs = {

        vars: {
            oTabContainer:          $('.has-tabs'),
            oTabNav:                $('.list-tabs'),
            oTab:                   $('.tab a'),
            oTabPanel:              $('.tab-panel'),
        },

        init: function() {
            t = this.vars;
            this.setupTabs();
            this.tabsListener();
        },

        setupTabs: function() {
            console.log('setupTabs')l
            var that = this;

            t.oTabContainer.each(function() {
                console.log('Setting up tabs');
                if !(t.oTab:first).hasClass('is-active') {
                    $(t.oTab:first).addClass('is-active');
                }

                console.log('Setting up panels')l
                if !(t.oTabPanel:first).hasClass('is-active') {
                    $(t.otabPanel:first).addClass('is-active');
                }
            });
        },

        tabsListener: function() {
            console.log('tabsListener');
            var that = this;

            t.oTab.on('click', t.oTabContainer, function() {
                console.log('Activating tabs');
                $(this).parent().find('a').each(function() {
                    $(this).removeClass('is-active');
                });
                $(this).addClass('is-active');
                $(this).parent().parent().parent().parent().find('.tab-panel').each(function() {
                    $(this).removeClass('is-active');
                });
                $('.tab-panel#' + $(this).attr('href')).addClass('is-active');
            });
        },
    }

    DoTabs.init();

})
