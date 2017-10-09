
$(function () {
    $('#chTheme').change(changeTheme);

    $('#chLang').change(function (e) {
        $.post(_root + "Mui/Change", { l: $(this).val() }, function () {
            location.reload();
        });
    });

    //bind the window min-height to window size
    adjustLayout();
    $(window).on('resize', adjustLayout);
    
    //wrapGrids();
    //$(document).ajaxComplete(wrapGrids);
    
    if (_isMobileOrTablet) {
        awe.ff = function (o) {
            o.p.d.find(':tabbable').blur();//override jQueryUI dialog autofocus
        };
    }

    //parsing the unobtrusive attributes when we get content via ajax
    //$(document).ajaxComplete(function () {
    //    $.validator.unobtrusive.parse(document);
    //    //make server-side generated validation errors look like the client side ones
    //    $('.field-validation-error').each(function () {
    //        if (!$(this).find('span').length) {
    //            var x = $(this).html();
    //            $(this).html('<span>' + x + '</span>');
    //        }
    //    });
    //});

    // on ie hitting enter doesn't trigger change, 
    // all searchtxt inputs will trigger change on enter in all browsers
    $('.searchtxt').each(function () {
        $(this).data('myval', $(this).val());
    });
    $('.searchtxt').on('change', function (e) {
        if ($(this).val() != $(this).data('myval')) {
            $(this).data('myval', $(this).val());
        } else {
            e.stopImmediatePropagation();
        }
    }).on('keyup', function (e) {
        if (e.which == 13) {
            e.preventDefault();
            if ($(this).val() != $(this).data('myval')) {
                $(this).change();
            }
        }
    });
});

//wrap grids for horizontal scrolling on small screens
//function wrapGrids() {
//    $('.awe-grid:not([wrapped]), table.awe-ajaxlist:not([wrapped])').each(function () {
//        var mw = 700;
//        if ($(this).data('mw')) {
//            mw = $(this).data('mw');
//        }

//        $(this).wrap('<div style="width:100%; overflow:auto;"></div>')
//            .wrap('<div style="min-width:' + mw + 'px;padding-bottom:0px;"></div>')
//            .attr('wrapped', 'wrapped');
//    });
//}

function changeTheme() {
    var v = $(this).val().split("|");
    var theme = v[0];
    var jqTheme = v[1];
    $('#jqStyle').attr('href', "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/themes/" + jqTheme + "/jquery-ui.css");
    $('#demoStyle').attr('href', _root + "Content/themes/" + theme + "/Site.css");
    $.post(_root + "ChangeTheme/Change", { s: theme });
}

// o.Type is being set in Crudere.cs to the entity's type name (lower case)

//append the html for the created country
function createCountry(o) {
    $('#Countries').prepend(o.Content);
    $('#Countries .awe-li:first').hide().fadeIn();
}

//append the html for the created country (inside the lookup popup)
function lookupCreateCountry(o) {
    $('#CountryId-awepw .awe-srl').prepend(o.Content);
    $('#CountryId-awepw .awe-srl .awe-li:first').hide().fadeIn();
}

function passchanged(o) {
    $("<div> password for " + o.Login + " was successfuly changed </div>").dialog();
}

function createUser(o) {
    $('#Users').parent().find('tbody').prepend(o.Content);
}

function adjustLayout() {
    $("#main").css("min-height", ($(window).height() - 120) + "px");
}

function setjQueryValidateDateFormat(format) {
    //setting the correct date format for jquery.validate
    jQuery.validator.addMethod(
        'date',
        function (value, element, params) {
            if (this.optional(element)) {
                return true;
            }
            var result = false;
            try {
                $.datepicker.parseDate(format, value);
                result = true;
            } catch (err) {
                result = false;
            }
            return result;
        },
        ''
        );
}

storg = function () {
    if (localStorage)
        return localStorage;
    var list = {};
    return {
        setItem: function (key, value) {
            list[key] = value;
        },
        getItem: function (key) {
            return list[key];
        }
    };
}();

function Paramaterize(gateTag)
{
    var pattern = /Gate\d+/gi;
    gateTag = gateTag.replace(pattern, "[@Gate]");
    return gateTag;
}
