function goList() {
    $("body,html").animate({
        scrollTop:$("#tplBtn").offset().top
    }, 200);
}

$(function() {
    var a, b = $("#navber ul li:first"), c = $("#navber ul li").length, d = b.innerWidth(), e = b.position().left;
    aleft = 30, cWidth = $("#navber ul li dl").innerWidth(), a = $("#navber div.nav-kuai"), 
    a.css({
        width:d,
        left:e + aleft
    }), $("#navber ul li").hover(function() {
        var b = $("#navber ul li").index(this), d = $("#navber ul").find("li").eq(b), e = d.innerWidth(), f = d.position().left, g = $(this).find("a").length;
        g > 1 && $(this).addClass("active"), a.stop().animate({
            width:e,
            left:f + aleft
        }, 300), c - 1 > b ? $(this).children("dl").css("left", -[ cWidth - e ] / 2).stop(!0, !0).slideDown(300) :$(this).children("dl").css("right", 0).stop(!0, !0).slideDown(300);
    }, function() {
        $(this).removeClass("active"), a.stop().animate({
            width:d,
            left:e + aleft + "px"
        }, 300), $(this).children("dl").stop(!0, !0).slideUp(300);
    });
}), $(function() {
    var $hov = $("#chact"), $div = $("#chact div.ewm"), pwth = $hov.outerWidth(), $ajt = $("#chact div.ewm i");
    $hov.hover(function() {
        if (screen.width > 1024) {
            $ajt.attr("class", "wxjta");
            $div.css({
                left:pwth + 10,
                top:-30
            });
        } else {
            $ajt.attr("class", "wxjtb");
            $div.css({
                right:0,
                top:30
            });
        }
        $div.show();
    }, function() {
        $div.hide();
    });
}), $(function() {
    var a = document.createElement("input");
    "placeholder" in a || $("input[placeholder]").each(function() {
        var a = $(this);
        a.val(a.attr("placeholder")).bind({
            focus:function() {
                a.val() === a.attr("placeholder") && a.val("");
            },
            blur:function() {
                var b = a.attr("placeholder");
                b && "" === a.val() && a.val(b);
            }
        });
    });
}), function($) {
    $.fn.banner = function(options) {
        var defaults = {
            t_id:"#banner",
            t_time:500,
            t_auto_time:7e3
        }, ops = $.extend(defaults, options), $dl = $(ops.t_id + " dl"), $dd = $(ops.t_id + " dl dd"), len = $dd.length, picTimer, index = 0;
        $dd.width($(ops.t_id).width()), $dl.width(len * $dd.width());
        var $btns = "<ul>";
        for (var i = 0; i < len; i++) $btns += "<li></li>";
        $(ops.t_id).append($btns), $(ops.t_id + " ul li:first").addClass("active");
        $(ops.t_id + " ul li").mouseenter(function() {
            index = $(this).index();
            showPics(index);
        }).eq(0).trigger("mouseenter");
        $(ops.t_id).hover(function() {
            clearInterval(picTimer);
        }, function() {
            picTimer = setInterval(function() {
                showPics(index);
                index++;
                if (index == len) {
                    index = 0;
                }
            }, 5e3);
        }).trigger("mouseleave");
        function showPics(index) {
            var nowLeft = -index * $dd.width();
            $dl.stop(!0, !0).animate({
                left:nowLeft
            }, ops.t_time), $(ops.t_id + " ul li").removeClass("active").eq(index).addClass("active");
        }
    };
}(jQuery), $.fn.tplbqx = function() {
    var $abtn = $("#tplBtn ul li .cbtn"), $boas = $("#picBox div.m-main-a");
    $abtn.eq(0).addClass("active");
    $boas.eq(0).show();
    $abtn.click(function() {
        var i = $("#tplBtn ul li .cbtn").index(this);
        $abtn.removeClass("active").eq(i).addClass("active");
        $boas.hide().eq(i).show();
    });
}, $.fn.dtlb = function() {
    var $boxb = $("#picLiBox"), $smboxb = $("#picLiBox .main-box"), $ulb = $("#picLiBox .main-box ul"), $lib = $("#picLiBox .main-box ul li"), btnb = '<a href="javascript:void(0)" class="btns btn-left"></a><a href="javascript:void(0)" class="btns btn-right"></a>', widthb = $lib.outerWidth(), rwidthb = widthb + 22, lenb = $lib.length, indexb = 0, startnumb = 4, pageb = 1, v_widthb = rwidthb * startnumb, page_countb = Math.ceil(lenb / startnumb), picTimerb;
    $boxb.append(btnb);
    $ulb.width(lenb * rwidthb);
    var $btnsb = $("#picLiBox a.btns"), $leftb = $("#picLiBox a.btn-left"), $rightb = $("#picLiBox a.btn-right");
    if (screen.width <= 1024) {
        $leftb.css({
            left:0
        });
        $rightb.css({
            right:0
        });
    }
    if (lenb > startnumb) {
        $leftb.click(function() {
            if (!$ulb.is(":animated")) {
                if (pageb == 1) {
                    $ulb.animate({
                        left:"-=" + v_widthb * (page_countb - 1)
                    }, "slow");
                    pageb = page_countb;
                } else {
                    $ulb.animate({
                        left:"+=" + v_widthb
                    }, "slow");
                    pageb--;
                }
            }
        });
        $rightb.click(function() {
            if (!$ulb.is(":animated")) {
                if (pageb == page_countb) {
                    $ulb.animate({
                        left:"0px"
                    }, "normal");
                    pageb = 1;
                } else {
                    $ulb.animate({
                        left:"-=" + v_widthb
                    }, "normal");
                    pageb++;
                }
            }
        });
    }
    $smboxb.hover(function() {
        clearInterval(picTimerb);
    }, function() {
        picTimerb = setInterval(function() {
            Scroll();
        }, 6e3);
    }).trigger("mouseleave");
    function Scroll() {
        if (!$ulb.is(":animated")) {
            if (pageb == page_countb) {
                $ulb.animate({
                    left:"0px"
                }, "normal");
                pageb = 1;
            } else {
                $ulb.animate({
                    left:"-=" + v_widthb
                }, "normal");
                pageb++;
            }
        }
    }
}, $.fn.dtlba = function() {
    var $box = $("#picLiBax"), $smbox = $("#picLiBax .main-box"), $ul = $("#picLiBax .main-box ul"), $li = $("#picLiBax .main-box ul li"), btn = '<a href="javascript:void(0)" class="btns btn-left"></a><a href="javascript:void(0)" class="btns btn-right"></a>', width = $li.outerWidth(), rwidth = width + 22, len = $li.length, index = 0, startnum = 4, page = 1, v_width = rwidth * startnum, page_count = Math.ceil(len / startnum), picTimer;
    $box.append(btn);
    $ul.width(len * rwidth);
    var $btns = $("#picLiBax a.btns"), $left = $("#picLiBax a.btn-left"), $right = $("#picLiBax a.btn-right");
    if (screen.width <= 1024) {
        $left.css({
            left:0
        });
        $right.css({
            right:0
        });
    }
    if (len > startnum) {
        $left.click(function() {
            if (!$ul.is(":animated")) {
                if (page == 1) {
                    $ul.animate({
                        left:"-=" + v_width * (page_count - 1)
                    }, "slow");
                    page = page_count;
                } else {
                    $ul.animate({
                        left:"+=" + v_width
                    }, "slow");
                    page--;
                }
            }
        });
        $right.click(function() {
            if (!$ul.is(":animated")) {
                if (page == page_count) {
                    $ul.animate({
                        left:"0px"
                    }, "normal");
                    page = 1;
                } else {
                    $ul.animate({
                        left:"-=" + v_width
                    }, "normal");
                    page++;
                }
            }
        });
    }
    $smbox.hover(function() {
        clearInterval(picTimer);
    }, function() {
        picTimer = setInterval(function() {
            Scroll();
        }, 6e3);
    }).trigger("mouseleave");
    function Scroll() {
        if (!$ul.is(":animated")) {
            if (page == page_count) {
                $ul.animate({
                    left:"0px"
                }, "normal");
                page = 1;
            } else {
                $ul.animate({
                    left:"-=" + v_width
                }, "normal");
                page++;
            }
        }
    }
}, $(function() {
    $("body").prepend('<div id="gotop" class="goTop"><a href="javascript:void(0)"></a></div>');
    $("#gotop a").click(function() {
        $("body,html").animate({
            scrollTop:0
        }, 500);
    });
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        var gotop = $("#gotop");
        if (top > 300) {
            gotop.show();
        } else {
            gotop.hide();
        }
    });
}), $.fn.jdhd = function() {
    var $btn = $("#jdbox ul.topbtns li"), $list = $("#jdbox ul.toplist li");
    $list.eq(0).addClass("show");
    $btn.click(function() {
        var index = $("#jdbox ul.topbtns li").index(this);
        $(this).addClass("active").siblings().removeClass("active show");
        $list.removeClass().eq(index).addClass("show");
    });
    $btn.hover(function() {
        $(this).addClass("on");
    }, function() {
        $(this).removeClass("on");
    });
}, $.fn.teams = function(options) {
    var li = $("#listA li"), span = li.find(".m-chact"), len = li.length, s = Math.ceil(len / 6);
    for (var i = 1; i <= s; i++) {
        if (6 * i - 3 < len) {
            li[6 * i - 3].style.marginRight = "29px";
        }
        if (6 * i - 2 < len) {
            li[6 * i - 2].style.marginRight = "29px";
        }
        if (6 * i - 1 < len) {
            li[6 * i - 1].style.marginRight = "0px";
            span.eq(6 * i - 1).find(".ewm-s").css({
                right:0,
                left:0
            });
        }
    }
    for (var i = 0; i < len; i++) {
        span.eq(i).hover(function() {
            $(this).children(".ewm-s").show();
        }, function() {
            $(this).children(".ewm-s").hide();
        });
    }
}, $.fn.teamb = function(options) {
    var li = $("#listA li"), span = li.find(".m-chact"), len = li.length, s = Math.ceil(len / 4);
    for (var i = 1; i <= s; i++) {
        if (4 * i - 2 < len) {
            li[4 * i - 2].style.marginRight = "66px";
        }
        if (4 * i - 1 < len) {
            li[4 * i - 1].style.marginRight = "0px";
            span.eq(4 * i - 1).find(".ewm-s").css({
                right:0,
                left:0
            });
        }
    }
    for (var i = 0; i < len; i++) {
        span.eq(i).hover(function() {
            $(this).children(".ewm-s").show();
        }, function() {
            $(this).children(".ewm-s").hide();
        });
    }
};