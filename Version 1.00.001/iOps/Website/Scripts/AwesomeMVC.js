var awe = function() {
    function E(a, b, c) {
        function f(a) {
            $.inArray(a, g) + 1||(g.push(a),(a=d("#" + a).data("o")) && a.data && d.each(a.data.vals, function(a, b) {
                $.inArray(b, e) + 1&&h.push(b);
                f(b)
            }))
        }
        var e = a.data.vals, h = [], g = [];
        1 < a.data.vals.length&&d.each(e, function(a, b) {
            $.inArray(b, h) + 1||f(b)
        });
        d.each(e, function(f, g) {
            var n = d("#" + g).data("o");
            $.inArray(g, h) + 1||(d("#" + g).bind("aweready", b),n && n.pch?d("#" + g).bind("awepch", function(c, d) {
                if (d) {
                    var f = d.p;
                    $.grep(e, function(a) {
                        return $.inArray(a, f) + 1
                    }).length?b(d):a.v.trigger("awepch",
                                               d)
                }
            }):c || d("#" + g).bind("change", function() {
                b({p:[g]})
            }))
        })
    }
    function B(a, b) {
        var c = 0;
        d.each(a.data.vals, function(a, b) {
            d("#" + b).data("notr")&&c++
        });
        0 == c&&b()
    }
    function M(a, b) {
        a.pch = 1;
        a.v.change(function(b, d) {
            if ((d=!d?{p:[]}:d) && !d.p)
            d.p.push(a.i);
            a.v.trigger("awepch", d)
        });
        B(a, b);
        E(a, function(c) {
            B(a, function() {
                b(c)
            })
        })
    }
    function q(a) {
        var b = a.p, c = b.d;
        b.i && $("#" + b.i).length&&$("#" + b.i).data("api").destroy();
        b.g&&($(".awe-popup[aweg=" + b.g + "]").each(function() {
            $(this).data("api")&&$(this).data("api").destroy()
        }),
        c.attr("aweg", b.g));
        c.addClass("awe-popup");
        b.i&&c.attr("id", b.i);
        awe.popup(a)
    }
    function A(a) {
        a.find(".awe-searchtxt").on("keydown", function(a) {
            13 == a.which&&(k(a),d(this).change().data("aweval", d(this).val()))
        })
    }
    function S(a, b) {
        if (a.sc)
            a.fm.on("change aweready", ":input", function() {
                d(this).val() != d(this).data("aweval")&&b()
            });
        else
            a.fm.on("click", ".awe-searchbtn", b)
    }
    function F(a, b) {
        var c = function() {
        };
        a.v.data("api", c);
        c.load = function(c) {
            c&&(c.params && (a.params=c.params),c.oparams && (a.oparams=c.oparams));
            b()
        };
        return c
    }
    function C(a, b, c) {
        a.v.trigger("aweload", [b,c])
    }
    function H(a, b) {
        a.v.trigger("awebeginload", [b])
    }
    function i(a, b) {
        a.v.trigger("change", b);
        N(a.v)
    }
    function N(a) {
        a.valid && 0 < a.closest("form").length&&a.valid()
    }
    function z(a, b) {
        var c;
        if (a.hasClass("awe-array")) {
            if (c=a.val())
                try {
                    c = d.parseJSON(c)
                }catch (f) {
                }
            else
                c = 0;
            c = c?c:[]
        }else
            c = [a.val()];
        return I(c, b)
    }
    function O(a) {
        var b = [], c;
        for (c in a)
            d.isArray(a[c])?b=b.concat(I(a[c], c)):b.push({name:c,value:a[c]});
        return b
    }
    function I(a, b) {
        var c = [];
        d.isArray(a)||
        (a=[a]);
        for (var f = 0;f < a.length;f++)
            c.push({name:b,value:a[f]});
        return c
    }
    function T(a) {
        a.data&&(a.data={keys:a.data.split("|")[0].split(";"),vals:a.data.split("|")[1].split(";")});
        a.pars&&(a.pars={keys:a.pars.split("|")[0].split(";"),vals:a.pars.split("|")[1].split(";")});
        return a
    }
    function r(a, b) {
        var c = [];
        a.v && !b&&(c=c.concat(z(a.v, "v")));
        a.data&&d.each(a.data.keys, function(b, e) {
            c = c.concat(z(d("#" + a.data.vals[b]), e))
        });
        a.pars&&d.each(a.pars.keys, function(b, d) {
            c = c.concat(I(a.pars.vals[b], d))
        });
        a.params&&
        (c=c.concat(O(a.params)));
        a.oparams&&(c=c.concat(O(a.oparams)));
        a.oparams = 0;
        a.parf&&(c=c.concat(O(a.parf())));
        return c
    }
    function P(a) {
        a = a.prev();
        a.hasClass("awe-loading")&&a.remove()
    }
    function k(a) {
        a && a.preventDefault?a.preventDefault():a.returnValue = !1
    }
    function s(a) {
        a.v = d("#" + a.i);
        a.f = a.v.parent();
        a.d = a.f.find(".awe-display");
        a.v.data("o", a)
    }
    function Q(a) {
        return a.outerHeight(!0) - a.height()
    }
    function U(a, b) {
        a?b.append('<tr class="awe-loadcont"><td>' + t + "</td></tr>"):b.append('<li class="awe-loadcont">' +
                                                                                t + "</li>")
    }
    function J(a, b, c) {
        c||(c=1);
        var d = r(a, a), d = d.concat(b);
        a.srl.empty();
        U(a.tl, a.srl);
        b = [{name:"page",value:c}];
        if (a.tl)
            var e = a.srl.closest("table").find("thead:first").html()?!1:!0, b = b.concat({name:"isTheadEmpty",value:e});
        w(a, a.searchUrl, d.concat(b), function(b) {
            b = awe.readd(b, a);
            a.srl.empty();
            V(a, b, d, c)
        })
    }
    function W(a, b, c) {
        if (null != b) {
            void 0 != b.Thead && c.closest("table").find("thead:first").html(b.Thead);
            var f = c.find(".awe-li").map(function() {
                return d(this).data("val")
            });
            void 0 != b.Content?
                 (b=d("<div/>").append(b.Content),b.find(".awe-li").each(function() {
                     0 <= d.inArray(d(this).data("val"), f)&&d(this).remove()
                 }),c.append(b.children())):d.each(b.Items, function(b, h) {
                     var g = a.mode?"":"<button type='button' class='awe-movebtn awe-btn'><i class='awe-icon'></i></button>";
                     0 > d.inArray(h.K, f)&&c.append("<li class='awe-li' data-val='" + h.K + "'>" + g + h.C + " </li>")
                 });
            a.dg&&c.find(".awe-li").draggable({cancel:"button",revert:"invalid",helper:"clone",cursor:"move"})
        }
    }
    function V(a, b, c, f) {
        W(a, b, a.srl);
        if (b.More)
            if (b=
                d('<div class="awe-morebtn">' + a.mt + "</div>").click(function() {
                    f++;
                    var b = d(this);
                    b.after("<div class='awe-loading'><span></span></div>");
                    b.hide();
                    var g = [{name:"isMoreClick",value:!0},{name:"page",value:f}];
                    if (a.tl)
                        var e = a.srl.closest("table").find("thead:first").html()?!1:!0, g = g.concat({name:"isTheadEmpty",value:e});
                    w(a, a.searchUrl, c.concat(g), function(b) {
                        V(a, awe.readd(b, a), c, f)
                    }, function() {
                        b.closest(".awe-li").remove()
                    })
                }),a.tl) {
                var e = a.srl.find(".awe-li:not(.awe-morecont):first > td").length, e = d('<tr class="awe-li awe-morecont"><td colspan="' +
                                                                                          e + '"></td></tr>');
                a.srl.append(e);
                a.srl.find("tr:last td").append(b)
            }else
                a.srl.append('<li class="awe-li awe-morecont"></li>'),a.srl.find("li:last").append(b)
    }
    function K(a, b) {
        return a.replace(/{(\d+)}/g, function(a, d) {
            return"undefined" != typeof b[d]?b[d]:a
        })
    }
    function w(a, b, c, d, e) {
        u(a, {url:b,data:c,success:d}, e)
    }
    function u(a, b, c) {
        b.type||(b.type="post");
        b.traditional = !0;
        d.ajax(b).always(c).fail(function(b, c, d) {
            awe.err(a, b, c, d)
        })
    }
    function R(a) {
        return!d(a.target).parents(".awe-nonselect").length && !d(a.target).hasClass("awe-nonselect")
    }
    function L(a, b, c) {
        for (var d = "";a <= b;a++)
            d+=G(a, c);
        return d
    }
    function G(a, b, c) {
        c||(c=a);
        return K("<a data-p='{0}' class='awe-btn awe-pager-btn {1}'><span class='awe-btn-content'>{2}</span></a>", [a,b != a?"":"awe-selected",c])
    }
    function Y() {
        var a = document.createElement("p");
        a.style.width = "100%";
        a.style.height = "200px";
        var b = document.createElement("div");
        b.style.position = "absolute";
        b.style.top = "0px";
        b.style.left = "0px";
        b.style.visibility = "hidden";
        b.style.width = "200px";
        b.style.height = "150px";
        b.style.overflow =
        "hidden";
        b.appendChild(a);
        document.body.appendChild(b);
        var c = a.offsetWidth;
        b.style.overflow = "scroll";
        a = a.offsetWidth;
        c == a&&(a=b.clientWidth);
        document.body.removeChild(b);
        return c - a
    }
    var d = jQuery;
    d(function() {
        d("body").append('<a href="http://aspnetawesome.com">built using trial version of asp.net mvc awesome 4.0 www.aspnetawesome.com</a>')
    });
    var t = "<div class='awe-loading'><span></span></div>";
    return{
        err:function() {
        },errMsg:function() {
            return""
        },test:function() {
        },ppk:"awe1_",grid:function(a) {
            function b() {
                if (v)
                    try {
                        v.setItem(a.pk,
                                  JSON.stringify([{pg:a.pg,So:a.So,columns:a.columns},x]))
                    }catch (b) {
                    }
            }
            function c(b) {
                return a.columns[b.data("i")]
            }
            function f() {
                l.find(".awe-groupable").draggable({helper:"clone",containment:j,cursorAt:{left:15},distance:5});
                i.droppable({accept:l.find(".awe-groupable"),activeClass:"awe-highlight",drop:function(b, c) {
                    var g = c.draggable.data("i"), g = a.columns[g];
                    if (!g.Gd) {
                        var h = 0;
                        d.each(a.columns, function(a, b) {
                            b.Gd && b.Gk > h&&(h=b.Gk)
                        });
                        g.Gd = 1;
                        g.Gk = h + 1;
                        e(1);
                        m()
                    }
                }})
            }
            function e(b) {
                i.empty();
                b||(l.empty(),j.find("colgroup").empty());
                for (var c = [], g = 0;g < a.columns.length;g++) {
                    var e = a.columns[g];
                    e.i = g;
                    e.Gd&&(c.push(e),e.Sort || (e.Sort=1));
                    if (!(e.Gd && !a.sgc || b)) {
                        var m = "<col " + (e.W?"style='width:" + e.W + "'":"") + " />";
                        j.find("colgroup").append(m);
                        a.sh&&(e=K("<th><div class='awe-col {3} {4} {5}' unselectable='on' data-i={0} >{1}{2}</div></th>", [g,e.N,n,e.S?"awe-sortable":"",e.G?"awe-groupable":"",p[e.Sort]]),l.append(e))
                    }
                }
                b||d.each(c, function() {
                    j.find("colgroup").prepend('<col class="awe-idn"/>');
                    l.prepend('<th class="awe-idn"></th>')
                });
                a.gl = c.length;
                c.sort(function(a, b) {
                    return a.Gk - b.Gk
                });
                d.each(c, function(a, b) {
                    i.find(".awe-col").length||i.empty();
                    i.append(K("<div class='awe-col {3}' data-i='{1}'><div class='awe-il awe-sortable'>{2}{0}</div><div class='awe-il'>{4}</div></div>", [b.N,b.i,n,p[b.Sort],b.Gr?'<i class="awe-rem"></i>':""]))
                });
                c.length||i.html(a.gbt);
                f();
                h()
            }
            function h() {
                var b = j[0], c = null;
                window.getComputedStyle?c=window.getComputedStyle(b).direction:b.currentStyle && (c=b.currentStyle.direction);
                "rtl" == c?j.addClass("awe-rtl"):
                j.addClass("awe-ltr");
                var b = j.height(), c = i.outerHeight(!0), g = j.find(".awe-footer").outerHeight(!0), e = j.find(".awe-header"), h = j.find(".awe-content"), f = d("<div></div>");
                f.css("overflow-y", "scroll");
                f.css("position", "relative");
                f.append("<p/>");
                j.append(f);
                var m = f.find("p").position().left;
                f.remove();
                f = 3 > m?"right":"left";
                a.h && e[0]&&(h.css("overflow-y", "scroll"),h.height(b - (c + g + e.outerHeight(!0)) - 1),e.css("padding-" + f, Y() + "px"),e[0].style.display="none",e[0].offsetHeight,e[0].style.display="block");
                a.mh&&
                h.css("min-height", a.mh - (c + g + e.outerHeight(!0)) - 1)
            }
            function g(a, b, c, d) {
                for (;;) {
                    var e = a.data("lvl");
                    if (!e)
                        break;
                    e = parseInt(e, 10);
                    if (e < b)
                        break;
                    if (e == b && !a.hasClass("awe-gfoot"))
                        break;
                    if (d == e && !a.hasClass("awe-gfoot") || d > e)
                        d = !1;
                    d||(c?a.hide():a.show());
                    a.hasClass("awe-collapsed") && !d?g(a.next(), b, c, e):g(a.next(), b, c, d);
                    break
                }
            }
            function m(c) {
                function g(b, c, e, f) {
                    function h(a) {
                        for (var b = "";0 < a && a--;)
                            b+="<td class='awe-idn'></td>";
                        return b
                    }
                    function m(b, c) {
                        b||(b="");
                        if ($.inArray(c, a.dates) + 1 && "/Date" == b.substr(0,
                                                                             5))
                            var e = new Date(parseInt(b.substr(6))), b = d.datepicker.formatDate(a.F, e);
                        return b
                    }
                    function n(a, b) {
                        var c = a, e = [], g;
                        for (g in b)
                            e.push(g);
                        d.each(e, function(a, d) {
                            var e = m(b[d], d);
                            c = c.split("." + d).join(e)
                        });
                        return c
                    }
                    function j(b, c) {
                        var e = "";
                        d(a.columns).each(function(d, g) {
                            if (g.Gd && !a.sgc)
                                return 1;
                            var f = "";
                            !c && (g.F || g.T)?g.F?f=eval(g.F)(b, g.P):g.T && (f=n(g.T, b)):f = m(b[g.P], g.P);
                            if ("<td"===f.toString().substring(0, 3))
                                e+=f;
                            else {
                                if (!f || "" == f)
                                    f = "&nbsp;";
                                e+="<td>" + f + "</td>"
                            }
                        });
                        return e
                    }
                    function X(a, b, c, d, e) {
                        return K("<tr {4} data-lvl='{0}' class='{1}'>{2}{3}</tr>",
                                 [b,c,h(f),j(a, e),d?"style='display:none;'":""])
                    }
                    var p = !1, i = [], l = b.Header;
                    if (l) {
                        var p = null != x[l.Key + c.toString()]?x[l.Key + c.toString()]:l.Collapsed, l = "<tr " + (e?"style='display:none;'":"") + " data-i='" + l.Key + c.toString() + "' data-lvl='" + c + "' class='awe-ghead" + (p?" awe-collapsed":"") + (a.cohc?" awe-ceb":"") + "'>", l = l + h(c - 1), k = a.columns.length + f - (c - 1);
                        a.sgc||(k-=f);
                        l+="<td colspan='" + k + "'><i class='awe-ce-ico" + (!a.cohc?" awe-ceb":"") + "'></i>" + b.Header.Content + "</td>";
                        i = i.concat(l + "</tr>")
                    }
                    !e && p&&(e=!0);
                    b.Groups&&
                    d.each(b.Groups, function(a, b) {
                        i = i.concat(g(b, c + 1, e, f))
                    });
                    b.Items&&d.each(b.Items, function(b, g) {
                        var f = 0 == b % 2?"":" awe-alt";
                        a.rcf&&(f+=" " + n(a.rcf, g));
                        i = i.concat(d(X(g, c + 1, "awe-row" + f, e, 0)).data("model", g))
                    });
                    b.Footer&&(i=i.concat(X(b.Footer, c, "awe-gfoot", e, 1)));
                    return i
                }
                var f, n = [], p = [];
                d.each(a.columns, function(a, b) {
                    b.Gd?n.push(b):0 != b.Sort && p.push(b)
                });
                n.sort(function(a, b) {
                    return a.Gk - b.Gk
                });
                p.sort(function(a, b) {
                    return a.So - b.So
                });
                f = n.concat(p);
                var l = ["","asc","desc"], i = r(a);
                c&&(a.pg=c);
                i.push({
                           name:"page",
                           value:a.pg
                       });
                for (c=0;c < f.length;c++)
                    i.push({name:"SortNames",value:f[c].P}),i.push({name:"SortDirections",value:l[f[c].Sort]});
                for (f=0;f < n.length;f++)
                    i.push({name:"Groups",value:n[f].P}),i.push({name:"Headers",value:n[f].N});
                a.sc&&i.push({name:"Cs",value:JSON.stringify(a.columns)});
                j.find(".awe-relbox").append(t);
                H(a, i);
                w(a, a.url, i, function(c) {
                    var f = awe.readd(c, a);
                    null != f&&(a.pg=f.Page,a.pg > f.PageCount && (a.pg=1,f.PageCount && 0 < f.PageCount && m()),c.Cs && (a.columns=JSON.parse(c.Cs)),e(),e(),b(),v || (x=
                                                                                                                                                                        {}),a.dates=f.Dates,k.find("tbody").empty().append(g(f.Data, 0, 0, f.GroupCount)),j.find(".awe-pager").html(8 > f.PageCount?L(1, f.PageCount, a.pg):5 > a.pg?L(1, 5, a.pg) + " ... " + G(f.PageCount, a.pg):a.pg > f.PageCount - 5?G(1, a.pg) + " ... " + L(f.PageCount - 5, f.PageCount, a.pg):G(1, a.pg) + " ... " + L(a.pg - 2, a.pg + 2, a.pg) + " ... " + G(f.PageCount, a.pg)),j.find(".awe-pager a").click(function() {
                                                                                                                                                                            j.find(".awe-pager .awe-selected").removeClass("awe-selected");
                                                                                                                                                                            d(this).addClass("awe-selected");
                                                                                                                                                                            a.pg = parseInt(d(this).data("p"));
                                                                                                                                                                            m()
                                                                                                                                                                        }));
                    h();
                    C(a, c, i);
                    a.lreq = i;
                    a.lres = c
                }, function() {
                    j.find(".awe-relbox .awe-loading").remove()
                })
            }
            var p = ["","awe-asc","awe-desc"], n = "<i class='awe-sord'></i>", j = d("#" + a.i);
            a.v = j;
            var k = j.find(".awe-table"), l = j.find(".awe-hrow"), i = j.find(".awe-groupbar"), x = {};
            a.So = 100;
            a.pg = 1;
            a.pk = awe.ppk + (!a.pk?a.i:a.pk) + a.prs;
            var u = d.extend(!0, {}, a), s = null, q = a.st;
            if (q)
                j.on("click", ".awe-row", function(a) {
                    if (R(a)) {
                        var b = 1;
                        if (a.shiftKey && null!==s && 2 == q) {
                            a.ctrlKey||d(this).parent().children().removeClass("awe-selected");
                            var a =
                                d(this).index(), c = s.index();
                            a > c&&(a=-(c=(a+=c) - c) + a);
                            d(this).parent().children().slice(a, c + 1).addClass("awe-selected")
                        }else
                            a.ctrlKey && 2 == q || 3 == q?(d(this).toggleClass("awe-selected"),s=d(this)):0 < q && (s=d(this),d(this).siblings(".awe-selected").removeClass("awe-selected"),d(this).hasClass("awe-selected")?b=0:d(this).addClass("awe-selected"));
                        b&&(window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges && window.getSelection().removeAllRanges():
                            document.selection && document.selection.empty());
                        j.trigger("aweselect")
                    }
                });
            var v = 0;
            try {
                if (1 == a.prs)
                    var A = {}, v = {setItem:function(a, b) {
                        A[a] = b
                    },getItem:function(a) {
                        return A[a]
                    }};
                else
                    2 == a.prs?v=sessionStorage:3 == a.prs && (v=localStorage)
            }catch (F) {
            }
            a.h&&d(window).unbind("resize", h).bind("resize", h);
            var y = function() {
            };
            j.data("api", y);
            y.lay = h;
            y.getRequest = function() {
                return a.lreq
            };
            y.getResult = function() {
                return a.lres
            };
            y.clearpersist = function() {
                v&&v.removeItem(a.pk)
            };
            y.reset = function() {
                x = {};
                a = d.extend(!0, {},
                             u);
                e(1);
                m(1)
            };
            y.getSelection = function() {
                return d(".awe-row.awe-selected", j).map(function() {
                    return d(this).data("model")
                }).get()
            };
            y.load = function(b) {
                if (b && (b.params && (a.params=b.params),b.oparams && (a.oparams=b.oparams),b.group && d.each(a.columns, function(a, c) {
                    var d = $.inArray(c.P, b.group) + 1;
                    d?(c.Gd=1,c.Gk=d):c.Gd = 0
                }),b.sort)) {
                    var c = 0;
                    d.each(a.columns, function(a, e) {
                        var f = 0;
                        d.each(b.sort, function(a, b) {
                            if (e.P == b.Prop)
                                return f=b,!1
                        });
                        f?(e.Sort=f.Sort,e.So=c++):e.Sort = 0
                    })
                }
                e(1);
                m()
            };
            j.find(".awe-reload").click(function() {
                y.reset()
            });
            j.on("click", ".awe-rem", function() {
                var f = c(d(this).closest(".awe-col")), g = f.Gd=0;
                d.each(a.columns, function(a, b) {
                    b.So < g&&(g=b.So)
                });
                f.So = g - 1;
                b();
                e(1);
                m(1)
            });
            k.on("click", ".awe-ceb", function() {
                var a = d(this).closest(".awe-ghead"), c = parseInt(a.data("lvl"), 10), e = a.next(), f = a.data("i");
                a.hasClass("awe-collapsed")?(a.removeClass("awe-collapsed"),g(e, c, !1),x[f]=0):(a.addClass("awe-collapsed"),g(e, c, !0),x[f]=1);
                b()
            });
            j.on("click", ".awe-sortable", function() {
                var e = d(this);
                e.parent().hasClass("awe-col")&&(e=
                                                 e.parent());
                var f = c(e), g = f.Sort + 1;
                3 == g&&(g=f.Gd?1:0);
                f.Sort = g;
                j.find("[data-i=" + e.data("i") + "]").removeClass("awe-asc awe-desc").addClass(p[g]);
                f.Gd||(a.s && d.each(a.columns, function(a, b) {
                    if (b.Gd || b.P == f.P)
                        return 1;
                    b.Sort = 0;
                    l.find("[data-i=" + a + "]").removeClass("awe-asc awe-desc")
                }),1 == g && (c(e).So=++a.So));
                b();
                m()
            });
            if (v) {
                var D = v.getItem(a.pk);
                if (D && (D=d.parseJSON(D)) && 2 == D.length) {
                    var z = D[0];
                    a.pg = z.pg;
                    a.So = z.So;
                    a.columns = z.columns;
                    x = D[1]
                }
            }else
                x = {};
            e();
            f();
            B(a, function() {
                m()
            });
            E(a, function() {
                B(a, function() {
                    m(1)
                })
            },
              !a.lpc)
        },form:function(a) {
            var b = "." + a.cl;
            d(document).off("submit.awe", b).on("submit.awe", b, function(b) {
                function f() {
                    a.notok = 1;
                    if (a.ua) {
                        var b = a, c = a.u, d = e.attr("action");
                        u(b, {url:!c?d:c,data:e.serialize(),success:function(b) {
                            "object"==typeof b || !a.ff?(a.sf && a.sf(b),e.trigger("aweformsuccess", b)):e.html(b);
                            a.notok = 0
                        }})
                    }else
                        e.data("aweex", 1),a.u && e.attr("action", a.u),e.submit()
                }
                var e = d(this);
                if (!e.data("aweex") && (k(b),!(a.bf && !1===a.bf(e)) && !a.notok)) {
                    if (a.c)
                        return a.p.d=d("<div>" + a.ms + "</div>"),a.p.btns=
                                                                  [{text:a.yes,click:function() {
                                                                      f();
                                                                      d(this).data("api").close()
                                                                  }},{text:a.no,click:function() {
                                                                      d(this).data("api").close()
                                                                  }}],q(a),a.p.d.data("api").open(),d(".ui-dialog-buttonset button").blur(),!1;
                    f()
                }
            })
        },autocomplete:function(a) {
            a.v = a.d=d("#" + a.i);
            a.v.data("numeric")&&awe.numeric(a.d);
            var b = null;
            a.k&&(b=d("#" + a.k));
            a.d.autocomplete({minLength:a.ml,source:function(b, f) {
                var e = r(a);
                u(a, {url:a.url,dataType:"json",data:e,success:function(a) {
                    f(d.map(a, function(a) {
                        return{label:a.C,value:a.C,id:a.K}
                    }))
                }})
            }});
            a.d.bind("autocompleteselect", function(c, d) {
                b&&b.val(d.item?d.item.id:null).trigger("change");
                a.d.trigger("change")
            });
            b&&a.d.keyup(function(a) {
                "13" != a.which&&b.val(null).trigger("change")
            })
        },numeric:function(a) {
            a.keydown(function(a) {
                var c = a.which;
                46 == c || (8 == c || 9 == c || 27 == c || 13 == c || 65 == c && !0===a.ctrlKey || 35 <= c && 39 >= c)||((48 > c || 57 < c) && (96 > c || 105 < c)?a.preventDefault():!0===a.shiftKey && k(a))
            })
        },txt:function(a) {
            a.d = a.v=d("#" + a.i);
            a.v.data("numeric")&&awe.numeric(a.d)
        },dtp:function(a) {
            s(a);
            var b = {
                dateFormat:a.format,
                changeMonth:a.cm,changeYear:a.cy,onClose:function() {
                    N(a.v)
                },onSelect:function() {
                    a.f.find(".awe-dpbtn").focus()
                }
            };
            a.min&&(b.minDate=a.min);
            a.max&&(b.maxDate=a.max);
            a.dfd&&(b.defaultDate=a.dfd);
            a.rtl&&(b.isRTL=a.rtl);
            a.d.datepicker(b);
            a.f.find(".awe-dpbtn").click(function(b) {
                k(b);
                a.v.datepicker("show").blur();
                d(this).focus()
            });
            a.f.find(".awe-clearbtn").click(function(b) {
                k(b);
                a.d.val("").change()
            })
        },ajaxList:function(a) {
            function b(b) {
                b||(b=1);
                J(a, [], b)
            }
            a.v = d("#" + a.i);
            a.srl = a.tl?a.v.find(".awe-srl"):
                    a.v;
            a.mode = "s";
            F(a, b);
            B(a, b);
            E(a, function() {
                B(a, function() {
                    b(1)
                })
            }, !a.lpc)
        },rcbl:function(a, b) {
            d.each(b, function(b, d) {
                a.d.append("<li><input " + (d.S?'checked="checked"':"") + 'id="' + a.i + "_item_" + b + '" name="' + a.v.data("name") + '" value="' + d.V + '" type="checkbox"/><label class="awe-label" for="' + a.i + "_item_" + b + '">' + d.T + "</label></li>")
            })
        },checkboxList:function(a) {
            function b(b) {
                a.d.before(t);
                var f = r(a);
                H(a, f);
                u(a, {
                      url:a.url,data:f,success:function(e) {
                          a.d.empty();
                          var h = awe.readd(e, a);
                          null != h&&awe.rcbl(a, h);
                          h = JSON.stringify(d(a.d.find("input:checked")).map(function() {
                              return d(this).val()
                          }).get());
                          "[]" == h&&(h="");
                          h != a.v.val()?(a.v.val(h),i(a, b)):b && a.v.trigger("awepch", b);
                          C(a, e, f)
                      }
                  }, function() {
                      P(a.d)
                  })
            }
            s(a);
            M(a, b);
            F(a, b);
            a.d.on("change", "input", function() {
                var b = JSON.stringify(d(a.d.find("input:checked")).map(function() {
                    return d(this).val()
                }).get());
                "[]" == b&&(b="");
                a.v.val(b);
                i(a)
            })
        },rrl:function(a, b) {
            d.each(b, function(b, d) {
                var e = "";
                !0 == d.S&&(e='checked="checked"');
                a.d.append('<li><input type="radio" value="' +
                           d.V + '" name="' + a.i + '" id="' + a.i + "_item_" + b + '"' + e + ' /><label class="awe-label" for="' + a.i + "_item_" + b + '" >' + d.T + "</label></li>")
            })
        },radioList:function(a) {
            function b(b) {
                a.d.before(t);
                var d = r(a);
                H(a, d);
                u(a, {url:a.url,data:d,success:function(e) {
                    a.d.empty();
                    var h = awe.readd(e, a);
                    null != h&&awe.rrl(a, h);
                    var h = "", g = a.d.find("input:radio:checked");
                    g.length&&(h=g.val());
                    a.v.val() != h?(a.v.val(h),i(a, b)):b && a.v.trigger("awepch", b);
                    C(a, e, d)
                }}, function() {
                    P(a.d)
                })
            }
            s(a);
            M(a, b);
            F(a, b);
            a.d.on("change", "input", function() {
                a.v.val(a.d.find("input:checked").val());
                i(a)
            })
        },lookup:function(a) {
            function b() {
                var b = d("<div class='awe-lookup-popup'><div class='awe-search'></div><div class='awe-list awe-srlcont'>" + (a.tl?"<table class='awe-ajaxlist awe-lookup-list awe-selectable'><thead></thead><tbody class='awe-srl'></tbody></table>":"<ul class='awe-ajaxlist awe-lookup-list awe-srl awe-selectable'></ul>") + "</div></div>");
                a.p.d = b;
                a.p.btns = [{text:a.ok,click:function() {
                    a.v.val(b.find(".awe-selected").data("val"));
                    i(a);
                    a.ms = 0;
                    b.data("api").close()
                }},{text:a.cancel,click:function() {
                    d(this).data("api").close()
                }}];
                q(a);
                a.fm = 0;
                a.soc = 1;
                b.bind("aweclose", function() {
                    a.ms&&b.find(".awe-li").removeClass("awe-selected");
                    a.ms = 0;
                    a.f.find(".awe-openbtn").focus()
                });
                a.srl = b.find(".awe-srl");
                a.srl.on("click", ".awe-li:not(.awe-morecont)", function(c) {
                    R(c)&&(b.find(".awe-li").removeClass("awe-selected"),d(this).addClass("awe-selected"),a.ms=1)
                }).on("dblclick", ".awe-li:not(.awe-morecont)", function(c) {
                    R(c)&&(a.v.val(d(this).data("val")),i(a),a.ms=0,b.data("api").close())
                });
                b.bind("aweresize", e)
            }
            function c(b) {
                a.d.html("");
                if (a.v.val()) {
                    a.d.html(t);
                    var c = r(a);
                    w(a, a.getUrl, c, function(d) {
                        a.d.html("");
                        var e = awe.readd(d, a);
                        null != e&&a.d.html(e.C);
                        a.hi && 1 != b&&(a.d.addClass("awe-changing"),a.d.removeClass("awe-changing", 1E3));
                        C(a, d, c)
                    })
                }
            }
            function f() {
                a.fm.find("[data-notr]").length||J(a, a.fm.find(":input").serializeArray())
            }
            function e() {
                var b = a.p.d, c = b.find(".awe-search:first").outerHeight(!0), d = Q(b.find(".awe-srlcont:first")), c = b.height() - (c + d + 10);
                c < a.p.mlh&&(c=a.p.mlh);
                b.find(".awe-list").css("height", c + "px")
            }
            s(a);
            a.soc = 1;
            a.mode = "s";
            E(a, function() {
                a.soc =
                !0
            });
            c(1);
            a.v.change(c);
            b();
            var h = function() {
            };
            h.initPopup = b;
            h.search = f;
            a.v.data("api", h);
            a.f.find(".awe-clearbtn").click(function(b) {
                k(b);
                a.v.val("");
                i(a);
                a.soc = !0
            });
            a.f.find(".awe-openbtn").click(function(b) {
                k(b);
                var c = a.p.d;
                c.data("api").open();
                a.fm||(a.fm=c.find(".awe-search"),a.fm.on("change", "*", e).submit(function(a) {
                    k(a);
                    a.stopPropagation();
                    f()
                }));
                a.soc&&(a.fm.html()?f():(a.sf?w(a, a.sf, {}, function(b) {
                    a.fm.html(b);
                    f();
                    e();
                    A(c);
                    awe.ff(a)
                }):(a.fm.html('<table><tr><td><input type="text" name="search" class="awe-searchtxt"/></td><td><button type="button" class="awe-searchbtn awe-btn">' +
                              a.st + "</button></td></tr></table>"),f(),A(c)),S.call(this, a, f)));
                a.soc = !1;
                e();
                awe.ff(a)
            })
        },add:function(a) {
            function b(b) {
                a.d.before(t);
                var f = r(a);
                H(a, f);
                w(a, a.url, f, function(e) {
                    a.d.empty();
                    var h = awe.readd(e, a);
                    null != h&&d.each(h, function(b, c) {
                        var d = "";
                        !0 == c.S&&(d="selected = 'selected'");
                        a.d.append("<option " + d + ' value="' + c.V + '">' + c.T + "</option>")
                    });
                    h = a.d.val();
                    "1" == a.v.data("notr")?(a.v.val(h),a.v.data("notr", 0),a.v.removeAttr("data-notr"),a.v.trigger("aweready")):a.v.val() != h?(a.v.val(h),i(a, b)):
                                                                                                                                 b && a.v.trigger("awepch", b);
                    C(a, e, f)
                }, function() {
                    P(a.d)
                })
            }
            s(a);
            M(a, b);
            F(a, b);
            a.d.keyup(function() {
                d(this).change()
            }).change(function() {
                a.v.val() != a.d.val()&&(a.v.val(a.d.val()),i(a))
            })
        },readd:function(a, b) {
            return"object" != typeof a?(awe.err(b, {responseText:a}),null):("object" == typeof a || "string" == typeof a) && null != a?a:null
        },ip:function(a) {
            a.f = d("#" + a.i);
            a.f.data("o", a)
        },open:function(a, b) {
            var c = d("#" + a + "-awein").data("o"), c = d.extend(!0, {}, c);
            d.extend(!0, c, b);
            if ("op" == c.type)
                awe.op({}, c);
            else if ("pf" ==
                     c.type)
                awe.pf({}, c);
            else
                throw a + " not initialized";
        },ff:function(a) {
            a.p.d.find(":tabbable:first").focus()
        },pf:function(a, b) {
            k(a);
            var c = d("<div/>");
            c.on("submit", "form", function(a) {
                k(a);
                if (!a.awesh && (a.awesh=1,!b.notok)) {
                    b.notok = 1;
                    var a = d(this), e = a.attr("method");
                    u(b, {url:a.attr("action"),data:a.serialize(),success:function(a) {
                        "object"==typeof a?(b.sf && b.sf(a, c),c.trigger("awepopupformsuccess", a),b.cs && c.data("api").close(),b.rs && location.reload(!0)):c.html(a)
                    },type:e}, function() {
                        b.notok = 0
                    })
                }
            });
            var f =
                d(t);
            c.html(f);
            u(b, {type:"get",data:r(T(b)),url:b.u,cache:!1,success:function(a) {
                c.html(a);
                awe.ff(b)
            }}, function() {
                f.remove()
            });
            for (var e = [], h = 0;h < b.b.length;h+=2)
                e.push({text:b.b[h],click:b.b[h + 1]});
            b.udb&&(e=e.concat([{text:b.ot,click:function() {
                c.find("form:first").submit()
            }},{text:b.ct,click:function() {
                c.data("api").close()
            }}]));
            b.p.d = c;
            b.p.btns = e;
            q(b);
            c.data("api").open()
        },op:function(a, b) {
            k(a);
            var c = d("<div/>");
            b.c&&c.html(b.c);
            var f = d(t);
            b.u&&(c.append(f),u(b, {
                                    type:"get",data:r(T(b)),url:b.u,
                                    cache:!1,success:function(a) {
                                        c.html(a)
                                    }
                                }, function() {
                                    f.remove()
                                }));
            for (var e = [], h = 0;h < b.b.length;h+=2)
                e.push({text:b.b[h],click:b.b[h + 1]});
            b.p.d = c;
            b.p.btns = e;
            q(b);
            c.data("api").open()
        },autoSize:1,popup:function(a) {
            var b = a.p, c = b.d;
            b.mlh = 0;
            var f = awe.autoSize, e = b.f;
            draggable = !0;
            b.p||(b.p="center");
            b.r||(b.r=!1);
            e&&(draggable=b.r=!1,b.m=!0);
            c.dialog({
                         draggable:draggable,width:b.w,height:b.h,modal:b.m,position:b.p,resizable:b.r,buttons:b.btns,autoOpen:!1,title:b.t,resizeStop:function() {
                             b.w = c.dialog("option",
                                            "width");
                             b.h = c.dialog("option", "height");
                             b.p = c.dialog("option", "position")
                         },dragStop:function() {
                             b.p = c.dialog("option", "position")
                         }
                     });
            c.on("dialogclose", function() {
                $(this).trigger("aweclose")
            }).on("dialogresize", function() {
                $(this).trigger("aweresize")
            });
            a = "awe-uidialog";
            b.pc&&(a=a + " " + b.pc);
            c.dialog("option", {dialogClass:a});
            var h = function() {
            };
            if (e || f)
                h=function(a) {
                    if (!a || a.target == window || a.target == document) {
                        var a = d(window).height(), f = d(window).width(), a = {
                            height:b.h > a - 5 || e?a - 20:b.h,width:b.w > f - 10 ||
                                                                     e?f - 10:b.w
                        };
                        e||(a.position=b.p);
                        c.dialog("option", a).trigger("aweresize")
                    }
                },d(window).on("resize", h),h(),c.on("change", h);
            c.on("aweclose", function() {
                b.isOpen = 0;
                b.cl&&b.cl();
                b.dntr||(c.find("*").remove(),c.remove(),(f || e) && d(window).off("resize", h))
            });
            var g = function() {
            };
            g.open = function() {
                c.dialog("open");
                b.isOpen = 1;
                h()
            };
            g.close = function() {
                c.dialog("close")
            };
            g.destroy = function() {
                g.close();
                d(window).off("resize", h);
                c.remove()
            };
            c.data("api", g)
        },multilookup:function(a) {
            function b() {
                var b = d("<div class='awe-multilookup-popup'><div class='awe-search'></div><div class='awe-list awe-srlcont'>" +
                          (a.tl?"<table class='awe-ajaxlist awe-lookup-list'><thead></thead><tbody class='awe-srl'></tbody></table>":"<ul class='awe-ajaxlist awe-lookup-list awe-srl'></ul>") + "</div><div class='awe-list awe-selcont' >" + (a.tl?"<table class='awe-ajaxlist awe-lookup-list'><thead></thead><tbody class='awe-sel'></tbody></table>":"<ul class='awe-ajaxlist awe-lookup-list awe-sel'></ul>") + "</div></div>");
                a.p.d = b;
                a.p.btns = [{
                        text:a.ok,click:function() {
                            a.v.val(g().length?JSON.stringify(g()):null);
                            a.v.next().empty();
                            var b =
                                g();
                            d.each(b, function(c) {
                                a.v.next().append("<input type='hidden' name='" + a.v.data("name") + "' value='" + String(b[c]).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "' />")
                            });
                            i(a);
                            a.ms = 0;
                            d(this).data("api").close()
                        }
                    },{text:a.cancel,click:function() {
                        d(this).data("api").close()
                    }}
                ];
                q(a);
                a.fm = 0;
                a.soc = 1;
                b.bind("aweclose", function() {
                    a.ms&&(a.soc=!0);
                    a.ms = 0;
                    a.f.find(".awe-openbtn").focus()
                });
                a.srl = b.find(".awe-srl");
                a.sel = b.find(".awe-sel");
                a.srl.on("click",
                         ".awe-movebtn", f);
                a.sel.on("click", ".awe-movebtn", e);
                a.dg&&(b.find(".awe-srlcont").droppable({accept:"#" + a.p.i + " .awe-selcont .awe-li",activeClass:"awe-highlight",drop:function(b, c) {
                    c.draggable.prependTo(a.srl);
                    a.ms = 1
                }}),b.find(".awe-selcont").droppable({accept:"#" + a.p.i + " .awe-srlcont .awe-li",activeClass:"awe-highlight",drop:function(b, c) {
                    c.draggable.prependTo(a.sel);
                    a.ms = 1
                }}));
                b.bind("aweresize", h)
            }
            function c() {
                if (!a.fm.find("[data-notr]").length) {
                    var b = a.fm.find(":input").serializeArray();
                    a.loaded?
                    J(a, I(g(), "selected").concat(b)):J(a, z(a.v, "selected").concat(b))
                }
            }
            function f() {
                var b = d(this);
                setTimeout(function() {
                    b.closest(".awe-li").prependTo(a.sel);
                    a.ms = 1
                }, 1)
            }
            function e() {
                var b = d(this);
                setTimeout(function() {
                    b.closest(".awe-li").prependTo(a.srl);
                    a.ms = 1
                }, 1)
            }
            function h() {
                var b = a.p.d, c = b.height() - (b.find(".awe-search").outerHeight(!0) + Q(b.find(".awe-srlcont")) + Q(b.find(".awe-selcont")) + 10);
                c < a.p.mlh&&(c=a.p.mlh);
                b.find(".awe-list").css("height", 0.5 * c + "px")
            }
            function g() {
                return a.sel.find(".awe-li").map(function() {
                    return d(this).data("val")
                }).get()
            }
            function m(b) {
                var c = a.d.empty();
                if (a.v.val()) {
                    a.d.html("<li>" + t + "</li>");
                    var e = r(a);
                    w(a, a.getMultipleUrl, e, function(f) {
                        a.d.html("");
                        var g = awe.readd(f, a);
                        if (null != g) {
                            if ("object" != typeof f) {
                                awe.err(a, {responseText:f});
                                return
                            }
                            d.each(g, function(d, e) {
                                c.append("<li>" + e.C + "</li>");
                                1 == b&&a.v.next().append("<input type='hidden' name='" + a.v.data("name") + "' value='" + e.K + "' />")
                            });
                            c.change();
                            a.hi && 1 != b&&(a.d.addClass("awe-changing"),a.d.removeClass("awe-changing", 1E3))
                        }
                        C(a, f, e)
                    })
                }
            }
            s(a);
            a.soc = 1;
            a.v.on("change",
                   function() {
                       a.v.val()||a.v.next().empty().append("<input type='checkbox' name='" + a.v.data("name") + "' />")
                   });
            E(a, function() {
                a.soc = !0
            });
            a.v.change(m);
            m(1);
            b();
            var p = function() {
            };
            p.initPopup = b;
            a.v.data("api", p);
            a.f.find(".awe-clearbtn").click(function(b) {
                k(b);
                a.v.next().empty();
                a.v.val("");
                i(a);
                N(a.v);
                a.soc = !0
            });
            a.f.find(".awe-openbtn").click(function(b) {
                k(b);
                var d = a.p.d;
                d.data("api").open();
                a.fm||(a.fm=d.find(".awe-search"),a.fm.on("change", "*", h).submit(function(a) {
                    k(a);
                    a.stopPropagation();
                    c()
                }));
                if (a.soc) {
                    a.loaded =
                    0;
                    a.fm.html()?c():(a.sf?w(a, a.sf, {}, function(b) {
                        a.fm.html(b);
                        c();
                        h();
                        A(d);
                        awe.ff(a)
                    }):(a.fm.html('<table><tr><td><input type="text" name="search" class="awe-searchtxt"/></td><td><button type="button" class="awe-searchbtn awe-btn">' + a.st + "</button></td></tr></table>"),c(),A(d)),S.call(this, a, c));
                    a.sel.html("");
                    U(a.tl, a.sel);
                    b = r(a, a);
                    b = b.concat(z(a.v, "selected"));
                    if (a.tl)
                        var e = a.srl.closest("table").find("thead:first").html()?!1:!0, b = b.concat({name:"isTheadEmpty",value:e});
                    w(a, a.selectedUrl, b, function(b) {
                        a.sel.empty();
                        b = awe.readd(b, a);
                        null != b&&(W(a, b, a.sel),a.loaded=1)
                    })
                }
                awe.ff(a);
                a.soc = !1;
                h()
            })
        }
    }
}();