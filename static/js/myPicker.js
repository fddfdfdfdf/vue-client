!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.myPicker = t() : e.myPicker = t()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var s = i[n] = {i: n, l: !1, exports: {}};
            return e[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports
        }

        var i = {};
        return t.m = e, t.c = i, t.d = function (e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
        }, t.n = function (e) {
            var i = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }("undefined" != typeof self && self, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var s = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 6)
            }([function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(11);
                t.default = n(document)
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    WHEEL_HEIGHT: 85,
                    WHEEL_ITEM_ANGLE: 15,
                    WHEEL_ITEM_HIGHT: 85 - 70.72,
                    WHEEL_TRANSITION_TIME: 400
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(12);
                t.default = {
                    startAnimation: function (e) {
                        return n.startAnimation(e)
                    }, stopAnimation: function (e) {
                        n.stopAnimation(e)
                    }, easeIn: function (e, t, i, s) {
                        return n.easeIn(e, t, i, s)
                    }, easeOut: function (e, t, i, s) {
                        return n.easeOut(e, t, i, s)
                    }, easeInOut: function (e, t, i, s) {
                        return n.easeInOut(e, t, i, s)
                    }
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(13);
                e.exports = function (e, t, i) {
                    var s = Math.round(200 * e / i);
                    return s = Math.max(-100, s), s = Math.min(100, s), e < 0 ? -1 * n[Math.abs(s)] : n[Math.abs(s)]
                }
            }, function (e, t, i) {
                "use strict";

                function n() {
                    var e = this;
                    this.audio = (0, a.default)("<audio></audio>")[0], this.audio.src = A, (0, a.default)(this.audio).on("loadedmetadata", function () {
                        e.audio.volume = .2
                    }), window.aa = this.audio
                }

                var s = i(0), a = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(s), A = i(14);
                n.prototype.play = function () {
                    try {
                        this.audio && (this.audio.play(), this.audio.currentTime = 0)
                    } catch (e) {
                        console.error(e)
                    }
                };
                var o;
                e.exports = function () {
                    return o || (o = new n)
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = void 0, s = navigator.userAgent;
                t.default = {
                    isIE: function () {
                        return null == n && (n = function () {
                            var e = void 0, t = {4: 8, 5: 9, 6: 10, 7: 11};
                            return (e = s.match(/MSIE (\d+)/i)) && e[1] ? !!+e[1] : !(!(e = s.match(/Trident\/(\d+)/i)) || !e[1]) && (!!t[e[1]] || !1)
                        }()), n
                    }, isWebKit: function () {
                        return s.indexOf("AppleWebKit") > -1
                    }, isFirefox: function () {
                        return s.indexOf("Gecko") > -1 && -1 == s.indexOf("KHTML")
                    }
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(7);
                e.exports = function (e) {
                    return new n.Picker(e)
                }
            }, function (e, t, i) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var s = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }();
                Object.defineProperty(t, "__esModule", {value: !0});
                var a = i(8), A = i(9), o = i(10), r = i(15), l = i(5), u = i(16), c = i(17);
                i(18);
                var h = function () {
                    function e(t) {
                        n(this, e), this._wheels = [], this._cols = [], this.version = "0.1.4", this._option = u.default.assign({}, A.default, t), this._frame = new c(this, this._option);
                        var i = [], s = 0;
                        if (Array.isArray(this._option.cols)) if (0 === this._option.cols.length || "string" == typeof this._option.cols[0]) i.push(new a.Col(this._option.cols)); else for (s = 0; s < this._option.cols.length; s++) i.push(new a.Col(this._option.cols[s])); else i.push(new a.Col(this._option.cols));
                        this._cols = i, this._wheels = [];
                        for (var h, V = 0; V < i.length; V++) {
                            var f = i[V];
                            h = !l.default.isIE() && this._option.isPerspective ? new o.Wheel3D(this, f, this._option, V) : new r.Wheel(this, f, this._option, V), this._wheels.push(h), this._frame.body().append(h.getDOM());
                            var d = this;
                            h.addSelectItemListener(function (e) {
                                return function (t, i) {
                                    "function" == typeof d._option.onSelectItem && d._option.onSelectItem.call(d, e, t, i)
                                }
                            }(V))
                        }
                        for (var p = 0; p < i.length; p++) d.setValue(p, d._option.setValues[p]);
                        this._visible = !1
                    }

                    return s(e, [{
                        key: "show", value: function () {
                            this._frame.showCover(), this._frame.showFrame(), this._visible = !0
                        }
                    }, {
                        key: "hide", value: function () {
                            this._frame.hideCover(), this._frame.hideFrame(), this._visible = !1
                        }
                    }, {
                        key: "close", value: function () {
                            this._frame.close(), this._frame.hideCover(), this._option = null, this._wheels.forEach(function (e) {
                                return e.destroy()
                            }), this._wheels = null, this._frame = null, this._cols = null
                        }
                    }, {
                        key: "setOptions", value: function (e, t, i) {
                            this._wheels[e] && this._wheels[e].setOptions(t, i)
                        }
                    }, {
                        key: "getOptions", value: function (e) {
                            return this._wheels[e] ? this._wheels[e].getOptions() : null
                        }
                    }, {
                        key: "setValue", value: function (e, t) {
                            this._wheels[e] && this._wheels[e].selectOption(t)
                        }
                    }, {
                        key: "getValue", value: function (e) {
                            if (null == e) {
                                var t, i = [];
                                for (t = 0; t < this._cols.length; t++) i.push(this._wheels[t].getValue());
                                return i
                            }
                            if (this._wheels[e]) return this._wheels[e].getValue()
                        }
                    }, {
                        key: "visible", get: function () {
                            return this._visible
                        }
                    }]), e
                }();
                t.Picker = h
            }, function (e, t, i) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var s = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }();
                Object.defineProperty(t, "__esModule", {value: !0});
                var a = function () {
                    function e(t) {
                        n(this, e), this.prefix = "", this.suffix = "", this.labelKey = "label", this.valueKey = "value", this.type = 0, Array.isArray(t) ? (this.options = t, this.type = 1) : (this.options = t.options || [], this.options.length > 0 ? "string" == typeof this.options[0] ? this.type = 1 : this.type = 2 : this.type = 0, this.prefix = t.prefix || "", this.suffix = t.suffix || "", this.labelKey = t.labelKey || this.labelKey, this.valueKey = t.valueKey || this.valueKey)
                    }

                    return s(e, [{
                        key: "push", value: function (e) {
                            this.options.push(e)
                        }
                    }, {
                        key: "set", value: function (e, t) {
                            0 == this.type && (this.type = "string" == typeof t ? 1 : 2), this.options[e] = t
                        }
                    }, {
                        key: "setCol", value: function () {
                        }
                    }, {
                        key: "getValue", value: function (e) {
                            return 1 == this.type ? this.options[e] : this.options[e][this.valueKey]
                        }
                    }, {
                        key: "getLabel", value: function (e) {
                            return 1 == this.type ? this.options[e] : this.options[e][this.labelKey]
                        }
                    }]), e
                }();
                t.Col = a
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = {
                    cols: [[]],
                    setValues: [],
                    onSelectItem: null,
                    onOkClick: null,
                    onCancelClick: null,
                    fontSize: 15,
                    isPerspective: !0,
                    hasVoice: !0,
                    title: "",
                    buttons: ["确定", "取消"],
                    zIndex: 100
                };
                t.default = n
            }, function (e, t, i) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }();
                Object.defineProperty(t, "__esModule", {value: !0});
                var A = i(0), o = i(2), r = i(1), l = i(3), u = i(4)(), c = function () {
                    function e(t, i, s, a) {
                        function o(e) {
                            var t = e.currentTarget;
                            for (c.offsetTop = 0; t;) {
                                c.offsetTop += t.offsetTop;
                                var t = t.parentElement
                            }
                            var i = e.touches ? e.touches[0].clientY - c.offsetTop : e.clientY - c.offsetTop;
                            c.startDrag(i)
                        }

                        function l(e) {
                            var t = e.touches ? e.touches[0].clientY - c.offsetTop : e.clientY - c.offsetTop;
                            c.drag(t)
                        }

                        function u() {
                            c.endDrag()
                        }

                        n(this, e), this.maxAngle = 0, this.minAngle = 0, this.radius = r.default.WHEEL_HEIGHT / Math.sqrt(5), this.visibleAngle = 0, this.em = function () {
                            return Math.min(window.innerWidth, window.innerHeight) / 100
                        }, this.offsetTop = 0, this.originalAngle = 0, this.lastIndexAngle = 0, this.changeMaxAngle = 0, this.angle = 0, this.selectedIndex = -1, this.animationId = -1, this.speed = 0, this.timeStamp = 0, this.lastY = 0, this.isDraging = !1, this.audio = null, this.list = [], this.valueHashMap = {}, this.onSelectItemCallbackList = [], this.picker = t, this.option = s, this.index = a, this.dom = A.default('<div class="picker-wheel3d"><div class="picker-label"><span class="picker-text"></span></div><ul></ul><div class="picker-label"><span class="picker-text"></span></div></div>').css("height", r.default.WHEEL_HEIGHT / 100 + "em"), this.contains = this.dom.find("ul"), this.visibleAngle = 90 - Math.acos(this.radius / r.default.WHEEL_HEIGHT * 2) / Math.PI * 180, this.labelKey = i.labelKey, this.itemValueKey = i.valueKey;
                        var c = this;
                        this.dom[0].addEventListener("touchstart", o), this.dom[0].addEventListener("mousedown", o), this.dom[0].addEventListener("touchmove", l), this.dom[0].addEventListener("mousemove", l), this.dom[0].addEventListener("touchend", u), this.dom[0].addEventListener("mouseup", u), this.dom[0].addEventListener("mouseleave", u), this.dom.find(".picker-label").css("transform", "translateZ(" + this.radius / 100 + "em) scale(0.75)"), this.setSuffix(i.suffix), this.setPrefix(i.prefix), this.setOptions(i.options, null, !0)
                    }

                    return a(e, [{
                        key: "startDrag", value: function (e) {
                            this.lastY = -1 * (r.default.WHEEL_HEIGHT / 2 - e / this.em()), this.timeStamp = Date.now(), this.isDraging = !0, this.offsetTop = this.dom[0].offsetTop, this.originalAngle = this.angle, this.changeMaxAngle = 0, this.lastIndexAngle = this.selectedIndex;
                            for (var t = this.dom[0].parentElement; t; t = t.parentElement) this.offsetTop += t.offsetTop;
                            o.default.stopAnimation(this.animationId)
                        }
                    }, {
                        key: "drag", value: function (e) {
                            if (this.isDraging) {
                                var t = -1 * (r.default.WHEEL_HEIGHT / 2 - e / this.em()),
                                    i = (l(this.lastY, this.radius, r.default.WHEEL_HEIGHT) - l(t, this.radius, r.default.WHEEL_HEIGHT)) / Math.PI * 180,
                                    n = i + this.angle;
                                this.changeMaxAngle = Math.max(Math.abs(this.originalAngle - n), this.changeMaxAngle), this.setAngle(n), this.lastY = t, this.speed = i ? i / (Date.now() - this.timeStamp) : 0, this.timeStamp = Date.now()
                            }
                        }
                    }, {
                        key: "endDrag", value: function () {
                            if (this.isDraging) {
                                var e = this.speed * Math.abs(this.speed) * 8 * r.default.WHEEL_TRANSITION_TIME,
                                    t = e + this.angle, i = this.calcSelectedIndexByAngle(t);
                                this.selectIndex(i, !0), this.isDraging = !1, this.lastY = 0, this.speed = 0
                            }
                        }
                    }, {
                        key: "setOptions", value: function (e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = this;
                            if (e = e || [], !Array.isArray(e)) throw new TypeError("list is not a array.");
                            n.contains.html(""), this.list = e, this.valueHashMap = {}, this.maxAngle = r.default.WHEEL_ITEM_ANGLE * Math.max(0, this.list.length - 1);
                            var a, o = 0, l = this.radius * Math.PI * r.default.WHEEL_ITEM_ANGLE / 180;
                            if (this.list.forEach(function (e, t) {
                                    "object" === (void 0 === e ? "undefined" : s(e)) ? (a = e[n.labelKey], n.valueHashMap[e[n.itemValueKey]] = o) : (a = e, n.valueHashMap[e] = o);
                                    var i = A.default("<li></li>");
                                    i.append(A.default('<span class="picker-text"></span>').text(a));
                                    var u = r.default.WHEEL_ITEM_ANGLE * -t;
                                    i.css("transform", "rotateX(" + u + "deg) translateZ(" + n.radius / 100 + "em) scale(0.75)").css("padding", l / 5.9 / 100 + "em 0").css("height", l / 100 + "em").css("line-height", l / 100 + "em"), i.data("angle", u), i.data("index", o), n.contains.append(i);
                                    var c = function (e) {
                                        n.changeMaxAngle < 1 && (n.isDraging = !1, n.lastY = 0, n.speed = 0, n.selectIndex(t, !0), e.stopPropagation(), e.preventDefault())
                                    };
                                    i[0].addEventListener("mouseup", c), i[0].addEventListener("touchend", c), o++
                                }), this.flushLabel(), i) return void(e.length > 0 ? (this.selectedIndex = 0, "object" === s(e[0]) ? this.selectedValue = this.list[0][this.itemValueKey] : this.selectedValue = this.list[0]) : (this.selectedIndex = -1, this.selectedValue = void 0));
                            e.length > 0 ? null != t && null != this.valueHashMap[t] ? this.selectOption(t) : null != this.valueHashMap[this.selectedValue] ? this.selectOption(this.selectedValue) : this.selectIndex(0) : (this.selectedIndex = -1, this.selectedValue = void 0)
                        }
                    }, {
                        key: "getOptions", value: function () {
                            return this.list
                        }
                    }, {
                        key: "selectOption", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (null != this.valueHashMap[e]) {
                                var i = this.valueHashMap[e];
                                this.selectIndex(i, t)
                            }
                        }
                    }, {
                        key: "selectIndex", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.calcAngleBySelectedIndex(e);
                            if (o.default.stopAnimation(this.animationId), t) {
                                var n = 0, a = this, A = function t() {
                                    n++;
                                    var A = o.default.easeOut(n, a.angle, i - a.angle, 50);
                                    if (Math.abs(A - i) < 1 && (A = i), a.setAngle(A), A != i) a.animationId = o.default.startAnimation(t); else {
                                        var r = a.selectedIndex;
                                        a.selectedIndex = e, a.selectedValue = a.list[e], "object" == s(a.selectedValue) && (a.selectedValue = a.selectedValue[a.itemValueKey]), r != a.selectedIndex && a.toggleSelected(a.selectedIndex, a.selectedValue)
                                    }
                                };
                                a.animationId = o.default.startAnimation(A)
                            } else {
                                var r = this.selectedIndex;
                                this.setAngle(i), this.selectedIndex = e, this.selectedValue = this.list[e], "object" == s(this.selectedValue) && (this.selectedValue = this.selectedValue[this.itemValueKey]), r != this.selectedIndex && this.toggleSelected(this.selectedIndex, this.selectedValue)
                            }
                        }
                    }, {
                        key: "setAngle", value: function (e) {
                            if (e = this.rangeAngle(e), this.option.hasVoice && this.picker.visible) {
                                var t = this.lastIndexAngle, i = this.calcSelectedIndexByAngle(e);
                                t != i && this.option.hasVoice && u.play(), this.lastIndexAngle = i
                            }
                            return this.contains.css("transform", "rotateX(" + e + "deg)"), this.angle = e, this.flushLabel(), e
                        }
                    }, {
                        key: "calcSelectedIndexByAngle", value: function (e) {
                            return e = this.rangeAngle(e), Math.round(Math.abs(e / r.default.WHEEL_ITEM_ANGLE))
                        }
                    }, {
                        key: "calcAngleBySelectedIndex", value: function (e) {
                            return e * r.default.WHEEL_ITEM_ANGLE
                        }
                    }, {
                        key: "rangeAngle", value: function (e) {
                            return e = Math.max(this.minAngle, e), e = Math.min(this.maxAngle, e)
                        }
                    }, {
                        key: "flushLabel", value: function () {
                            var e = this;
                            this.dom.find("li").each(function (t, i) {
                                i = A.default(i);
                                var n = i.data("angle") + e.angle;
                                n > e.visibleAngle || n < -e.visibleAngle ? "none" != i.css("display") && i.css("display", "none") : "block" != i.css("display") && i.css("display", "block")
                            })
                        }
                    }, {
                        key: "getValue", value: function () {
                            return this.selectedValue
                        }
                    }, {
                        key: "setSuffix", value: function (e) {
                            this.dom.find(".picker-label .picker-text").eq(1).text(e)
                        }
                    }, {
                        key: "setPrefix", value: function (e) {
                            this.dom.find(".picker-label .picker-text").eq(0).text(e)
                        }
                    }, {
                        key: "toggleSelected", value: function (e, t) {
                            var i = this;
                            this.onSelectItemCallbackList.forEach(function (n) {
                                n.call(i, e, t)
                            })
                        }
                    }, {
                        key: "addSelectItemListener", value: function (e) {
                            this.onSelectItemCallbackList.push(e)
                        }
                    }, {
                        key: "removeSelectItemListener", value: function (e) {
                            this.onSelectItemCallbackList = this.onSelectItemCallbackList.filter(function (t) {
                                return t !== e
                            })
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.onSelectItemCallbackList = null
                        }
                    }, {
                        key: "getDOM", value: function () {
                            return this.dom
                        }
                    }]), e
                }();
                t.Wheel3D = c
            }, function (e, t) {
                !function (t, i) {
                    "use strict";
                    "object" == typeof e && "object" == typeof e.exports ? e.exports = i : t.$ = i(t.document)
                }("undefined" != typeof window ? window : this, function (e) {
                    function t(t) {
                        if (t = t.trim(), "<" === t[0]) {
                            var i = e.createElement("DIV");
                            return i.innerHTML = t, c(i.children)
                        }
                        return c([])
                    }

                    function i(e) {
                        var e = c(e);
                        return r.textContent = "", e.each(function (e, t) {
                            r.appendChild(t)
                        }), r
                    }

                    function n(e, t, n) {
                        e.each(function (s, a) {
                            s != e.length - 1 ? n(this, i(t.clone())) : n(this, i(t))
                        })
                    }

                    function s(e, t, i, n, s) {
                        return void 0 === s ? e.length ? i(e[0], n) : void 0 : e.each(function (e, i) {
                            return t(i, n, s)
                        })
                    }

                    function a(e) {
                        return e.replace(/-\S/g, function (e) {
                            return e[1].toUpperCase()
                        })
                    }

                    function A(e, t) {
                        var i = e.cloneNode(!0);
                        return t && e[u] && (i[u] = e[u]), i
                    }

                    function o(e) {
                        var t;
                        if (1 == e.nodeType) delete e[u], t = e.children; else {
                            if (!e || null == e.length) return;
                            t = e
                        }
                        for (var i; i < t.length; i++) o(t[i])
                    }

                    var r = e.createDocumentFragment(), l = ("" + Date.now() + Math.random()).replace(".", ""),
                        u = "$$mjid" + l, c = function (e) {
                            return new c.fn.init(e)
                        };
                    return c.fn = c.prototype = {
                        $$mjid: l, init: function (i) {
                            if (!i) return this;
                            if ("string" == typeof i) {
                                if (i = i.trim(), "<" === i[0]) return c(t(i));
                                var n = e.querySelectorAll(i);
                                return c(n)
                            }
                            if ("object" == typeof i && !isNaN(i.length)) {
                                for (var s = 0, a = 0; s < i.length; s++) {
                                    var A = i[s];
                                    A && 1 == A.nodeType && (this[a] = A, a++)
                                }
                                return this.length = a, this
                            }
                            return i.nodeType ? (this.length = 1, this[0] = i, this) : void 0
                        }, length: 0, each: function (e) {
                            for (var t = 0; t < this.length && ("function" != typeof e || !1 !== e.call(this[t], t, this[t])); t++) ;
                            return this
                        }, eq: function (e) {
                            return c(this[e])
                        }, add: function (e) {
                            return e && 1 == e.nodeType && (this[this.length++] = e), this
                        }, find: function (e) {
                            return s(this, null, function (e, t) {
                                return c(e.querySelectorAll(t))
                            }, e)
                        }, append: function (e) {
                            return n(this, c(e), function (e, t) {
                                e.appendChild(t)
                            }), this
                        }, appendTo: function (e) {
                            return c(e).append(this), this
                        }, prepend: function (e) {
                            return n(this, c(e), function (e, t) {
                                e.childNodes.length ? e.insertBefore(t, e.childNodes[0]) : e.appendChild(t)
                            }), this
                        }, prependTo: function (e) {
                            return c(e).prepend(this), this
                        }, after: function (e) {
                            return n(this, c(e), function (e, t) {
                                e.parentNode.lastChild == e ? e.parentNode.appendChild(t) : e.parentNode.insertBefore(t, e.nextSibling)
                            }), this
                        }, insertAfter: function (e) {
                            return c(e).after(this), this
                        }, before: function (e) {
                            return n(this, c(e), function (e, t) {
                                e.parentNode.insertBefore(t, e)
                            }), this
                        }, insertBefore: function (e) {
                            return c(e).before(this), c(this[0])
                        }, clone: function () {
                            var e = [];
                            return this.each(function (t, i) {
                                e.push(A(i, !0))
                            }), c(e)
                        }, remove: function () {
                            return this.each(function (e, t) {
                                t.parentElement && t.parentElement.removeChild(t)
                            }), this
                        }, data: function (e, t) {
                            return s(this, function (e, t, i) {
                                e[u] || (e[u] = {}), e[u][t] = i
                            }, function (e, t) {
                                return e[u] && e[u][t]
                            }, e, t)
                        }, attr: function (e, t) {
                            return s(this, function (e, t, i) {
                                e.setAttribute(t, i)
                            }, function (e, t) {
                                return e.getAttribute(t)
                            }, e, t)
                        }, removeAttr: function (e) {
                            return this.each(function (t, i) {
                                e && i.removeAttr(e)
                            })
                        }, addClass: function (e) {
                            return this.each(function (t, i) {
                                e && i.classList.add(e)
                            })
                        }, removeClass: function (e) {
                            return this.each(function (t, i) {
                                e && i.classList.remove(e)
                            })
                        }, hasClass: function (e) {
                            return !!this.length && this[0].classList.contains(e)
                        }, toggleClass: function (e) {
                            return this.each(function (t, i) {
                                e && (i.classList.contains(e) ? i.classList.remove(e) : i.classList.add(e))
                            })
                        }, prop: function (e, t) {
                            return s(this, function (e, t, i) {
                                e[t] = i
                            }, function (e, t) {
                                return e[t]
                            }, e, t)
                        }, html: function (e) {
                            return s(this, function (e, t, i) {
                                o(e.children || {length: 0}), e.innerHTML = i
                            }, function (e, t) {
                                return e.innerHTML
                            }, "-", e)
                        }, text: function (e) {
                            return s(this, function (e, t, i) {
                                e.textContent = i
                            }, function (e, t) {
                                return e.textContent
                            }, "-", e)
                        }, val: function (e) {
                            return s(this, function (e, t, i) {
                                e.value = i
                            }, function (e, t) {
                                return e.value
                            }, "-", e)
                        }, hide: function () {
                            return this.each(function (e, t) {
                                t.style.display && c(t).data("my-jquery-style-display", t.style.display), t.style.display = "none"
                            })
                        }, show: function () {
                            return this.each(function (e, t) {
                                t.style.display = c(t).data("my-jquery-style-display") || ""
                            })
                        }, css: function (e, t) {
                            return s(this, function (e, t, i) {
                                e.style[a(t)] = i
                            }, function (e, t) {
                                return e.style[a(t)]
                            }, e, t)
                        }, on: function (e, t) {
                            return this.each(function (i, n) {
                                if ("function" == typeof t) {
                                    var s = function (e) {
                                        !1 === t.call(this, e) && (e.preventDefault(), e.stopPropagation())
                                    };
                                    s.fn = t;
                                    var a = c(n).data("my-jquery-event-cache") || {};
                                    a[e] = a[e] || [], a[e].push(s), this.addEventListener(e, s, !1), c(this).data("my-jquery-event-cache", a)
                                }
                            })
                        }, off: function (e, t) {
                            return this.each(function (i, n) {
                                var s = c(this).data("my-jquery-event-cache");
                                if (s) {
                                    var a = this;
                                    if (s[e] instanceof Array) {
                                        var A = [];
                                        s[e].forEach(function (i) {
                                            "function" == typeof t ? t == i.fn ? a.removeEventListener(e, i, !1) : A.push(i) : a.removeEventListener(e, i, !1)
                                        }), s[e] = A, c(this).data("my-jquery-event-cache", s)
                                    }
                                }
                            })
                        }, toggle: function (e) {
                            return this.each(function (t, i) {
                                "function" == typeof this[e] && this[e]()
                            })
                        }
                    }, c.fn.init.prototype = c.fn, c
                })
            }, function (e, t, i) {
                "use strict";
                for (var n, s, a = 0, A = ["ms", "moz", "webkit", "o"], o = 0; o < A.length && !window.requestAnimationFrame; ++o) n = window[A[o] + "RequestAnimationFrame"], s = window[A[o] + "CancelAnimationFrame"] || window[A[o] + "CancelRequestAnimationFrame"];
                n = n || window.requestAnimationFrame || function (e, t) {
                    var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), s = window.setTimeout(function () {
                        e(i + n)
                    }, n);
                    return a = i + n, s
                }, s = s || window.cancelAnimationFrame || window.cancelRequestAnimationFrame || function (e) {
                    clearTimeout(e)
                }, e.exports = {
                    startAnimation: function (e) {
                        return n(e)
                    }, stopAnimation: function (e) {
                        s(e)
                    }, easeIn: function (e, t, i, n) {
                        return i * (e /= n) * e * e * e + t
                    }, easeOut: function (e, t, i, n) {
                        return i * ((e = e / n - 1) * e * e + 1) + t
                    }, easeInOut: function (e, t, i, n) {
                        return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
                    }
                }
            }, function (e, t, i) {
                "use strict";
                e.exports = {
                    0: 0,
                    1: .006180474730027776,
                    2: .012361758667979887,
                    3: .01854466178595427,
                    4: .024729995586343003,
                    5: .030918573871856408,
                    6: .03711121352142655,
                    7: .043308735273995536,
                    8: .04951196452223301,
                    9: .05572173211827738,
                    10: .06193887519365582,
                    11: .06816423799561012,
                    12: .07439867274213974,
                    13: .08064304049816978,
                    14: .08689821207536214,
                    15: .0931650689582126,
                    16: .09944450425921704,
                    17: .1057374237060475,
                    18: .11204474666385271,
                    19: .11836740719599605,
                    20: .12470635516675682,
                    21: .13106255738976524,
                    22: .13743699882620672,
                    23: .1438306838371266,
                    24: .1502446374944947,
                    25: .15667990695605222,
                    26: .163137562909363,
                    27: .16961870109094018,
                    28: .1761244438868085,
                    29: .18265594202141244,
                    30: .189214376342388,
                    31: .1958009597093892,
                    32: .20241693899591295,
                    33: .20906359721390222,
                    34: .21574225577183714,
                    35: .2224542768780669,
                    36: .22920106610229693,
                    37: .23598407510944647,
                    38: .24280480458155373,
                    39: .24966480734504126,
                    40: .2565656917224997,
                    41: .26350912513022323,
                    42: .2704968379450743,
                    43: .27753062766690556,
                    44: .28461236340577195,
                    45: .2917439907265723,
                    46: .298927536887646,
                    47: .30616511651426775,
                    48: .3134589377530486,
                    49: .3208113089590395,
                    50: .32822464597399087,
                    51: .3357014800618854,
                    52: .3432444665767064,
                    53: .3508563944476478,
                    54: .35854019657886727,
                    55: .3662989612747276,
                    56: .37413594481766604,
                    57: .38205458534478537,
                    58: .39005851819157766,
                    59: .3981515928975172,
                    60: .4063378920994586,
                    61: .41462175257587425,
                    62: .42300778874928274,
                    63: .4315009190073606,
                    64: .4401063952672662,
                    65: .4488298362852176,
                    66: .45767726530766856,
                    67: .4666551527757603,
                    68: .47577046493656705,
                    69: .4850307193901132,
                    70: .4944440488195467,
                    71: .5040192744255141,
                    72: .5137659909310855,
                    73: .523694665462527,
                    74: .5338167531736872,
                    75: .5441448332086339,
                    76: .5546927695451231,
                    77: .5654759025098686,
                    78: .5765112784180985,
                    79: .5878179270265199,
                    80: .5994171995371129,
                    81: .6113331840998124,
                    82: .6235932216642447,
                    83: .6362285534378791,
                    84: .6492751433974548,
                    85: .6627747373240171,
                    86: .6767762470698537,
                    87: .6913375909489355,
                    88: .7065281883018284,
                    89: .7224324166263504,
                    90: .7391545276252866,
                    91: .7568258524516188,
                    92: .7756157498195769,
                    93: .7957489855645078,
                    94: .8175348626997212,
                    95: .8414195586288256,
                    96: .8680892494981647,
                    97: .8987014263951989,
                    98: .935517870959519,
                    99: .9843911534692572,
                    100: 1.1071487177940906
                }
            }, function (e, t) {
                e.exports = "data:audio/mpeg;base64,SUQzAwAAAAACPVRBTEIAAAABAAAAVENPTgAAAAEAAABUSVQyAAAAAQAAAFRQRTEAAAABAAAAVFJDSwAAAAEAAABUWUVSAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAEAAAGuQCPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+urq6urq6urq6urq6urq6urq6urq6urq6u6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6/////////////////////////////////8AAAAeTEFNRTMuOTlyBJwAAAAALhMAADUgJANyQQABrgAABrkfUWHWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vAxAAAA5gBQ3QAAArvJu6/M4BIhIKgoegEQ8/8DMz/Pgf+Yf8BwB+Z+b+ADgDw/8+o7VqAHMDBTAEFQenlPGADeAWECp4LYcVu9VS9CSRlFhkxw1oMkWM4jYWZOwux2kYYKQWsQ/2ZaUwdEtrLj/YqSyOwMh4qeJUr7XMoYikU+IQ0Fl0qjk87jLrdekgfWb+RhON84zDsakKgs3Zou0k5nT9ylE43Waiz7cwfWGpbM3rXMP1hzuFJScikNSFdLvQXPWYEqZ4yq3KaWd1zPOx//nn+cHSnUZqZYyWap5ZWy7/41ioa/pDolQNStZm24myAA0oAUsytJS4qVtLyfMrafUJqVaJSmQrtBIraqcZqrtu95KNI5Tb+dX71Vet2iXNymBj6gporC+5XVsSQTKC2K/35teC8/0KL/Ff/DEEyiT8rZKIyGuoyeRCzI7wpna5Q2KpYgzmMbLM2XlUCNv/oaWZSlouqkB3Zb7aW79MPu16Zr2jv1vKHhqqZmIaHhnb/SsKAAAAAnUXYNay0jZfhQ+kLcL/BQ6ZSJ0DwHKktA4gjBzi4QMDNC+5PGxEWWbh40wv+9jpbNzzEOEnImHyHThqblErKOHjUUkLlFjHeHR6Nq1opOiMmMmikPRZ/u/x0Cth2kTD7P+kpMxMPLuzvDuzxt5IyAAAAAT4RIEE6AqAAYh4w4CYYcQCEJbMcTOkDjlQ4CXbZKsEICzN+AkpphSMMLBX4hBMIAvInATJvUotAhWGpsGVGrKHEJUEr6wj7S4DFigYJAEKqhw1KjypsnuPCUiwz6RR9m+iRb5Fxo0DuEj06kR1A1DDs5jIKWtturEoLjFDV5jvHH8cef///1e28q4udUp5b876l8u22Gw9HwtDYAAAAAADQL1KAwBl18Zc1OLY7qQ/Dtb/YVtTHz+dBb4SUL6wf9iQ0E6aaWnOVk//Zl9dJdnet0b1//9sX76evxGZ3NZ//+zDE9oBKCIFfvPMACOsSai6eIAXrTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+3DE9IAOXMFX+ZiAAoaaKj81kABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxPwACcCNT7mngAAAAD/DgAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/w=="
            }, function (e, t, i) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }();
                Object.defineProperty(t, "__esModule", {value: !0});
                var A = i(0), o = i(2), r = i(1), l = (i(3), i(4)()), u = function () {
                    function e(t, i, s, a) {
                        function o(e) {
                            var t = e.currentTarget;
                            for (c.offsetTop = 0; t;) {
                                c.offsetTop += t.offsetTop;
                                var t = t.parentElement
                            }
                            var i = e.touches ? e.touches[0].clientY - c.offsetTop : e.clientY - c.offsetTop;
                            c.startDrag(i)
                        }

                        function l(e) {
                            var t = e.touches ? e.touches[0].clientY - c.offsetTop : e.clientY - c.offsetTop;
                            c.drag(t)
                        }

                        function u() {
                            c.endDrag()
                        }

                        n(this, e), this.maxDistance = 0, this.minDistance = 0, this.em = function () {
                            return Math.min(window.innerWidth, window.innerHeight) / 100
                        }, this.offsetTop = 0, this.originalDistance = 0, this.lastIndexDistance = 0, this.changeMaxDistance = 0, this.distance = 0, this.selectedIndex = -1, this.animationId = -1, this.speed = 0, this.timeStamp = 0, this.lastY = 0, this.isDraging = !1, this.audio = null, this.list = [], this.valueHashMap = {}, this.onSelectItemCallbackList = [], this.picker = t, this.option = s, this.index = a, this.dom = A.default('<div class="picker-wheel">\n                <div class="picker-label"><span class="picker-text"></span></div>\n                <ul></ul>\n                <div class="picker-label"><span class="picker-text"></span></div>\n            </div>').css("height", r.default.WHEEL_HEIGHT / 100 + "em"), this.contains = this.dom.find("ul"), this.setDistance(0), this.labelKey = i.labelKey, this.itemValueKey = i.valueKey;
                        var c = this;
                        this.dom[0].addEventListener("touchstart", o), this.dom[0].addEventListener("mousedown", o), this.dom[0].addEventListener("touchmove", l), this.dom[0].addEventListener("mousemove", l), this.dom[0].addEventListener("touchend", u), this.dom[0].addEventListener("mouseup", u), this.dom[0].addEventListener("mouseleave", u), this.setSuffix(i.suffix), this.setPrefix(i.prefix), this.setOptions(i.options, null, !0)
                    }

                    return a(e, [{
                        key: "startDrag", value: function (e) {
                            this.lastY = -1 * (r.default.WHEEL_HEIGHT / 2 - e / this.em()), this.timeStamp = Date.now(), this.isDraging = !0, this.offsetTop = this.dom[0].offsetTop, this.originalDistance = this.distance, this.changeMaxDistance = 0, this.lastIndexDistance = this.selectedIndex;
                            for (var t = this.dom[0].parentElement; t; t = t.parentElement) this.offsetTop += t.offsetTop;
                            o.default.stopAnimation(this.animationId)
                        }
                    }, {
                        key: "drag", value: function (e) {
                            if (this.isDraging) {
                                var t = -1 * (r.default.WHEEL_HEIGHT / 2 - e / this.em()), i = this.lastY - t,
                                    n = i + this.distance;
                                this.changeMaxDistance = Math.max(Math.abs(this.originalDistance - n), this.changeMaxDistance), this.setDistance(n), this.lastY = t, this.speed = i ? i / (Date.now() - this.timeStamp) : 0, this.timeStamp = Date.now()
                            }
                        }
                    }, {
                        key: "endDrag", value: function () {
                            if (this.isDraging) {
                                var e = this.speed * Math.abs(this.speed) * 8 * r.default.WHEEL_TRANSITION_TIME,
                                    t = e + this.distance, i = this.calcSelectedIndexByDistance(t);
                                this.selectIndex(i, !0), this.isDraging = !1, this.lastY = 0, this.speed = 0
                            }
                        }
                    }, {
                        key: "setOptions", value: function (e, t) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = this;
                            if (e = e || [], !Array.isArray(e)) throw new TypeError("list is not a array.");
                            n.contains.html(""), this.list = e, this.valueHashMap = {}, this.maxDistance = r.default.WHEEL_ITEM_HIGHT * Math.max(0, this.list.length - 1);
                            var a, o = 0;
                            if (this.list.forEach(function (e, t) {
                                    "object" === (void 0 === e ? "undefined" : s(e)) ? (a = e[n.labelKey], n.valueHashMap[e[n.itemValueKey]] = o) : (a = e, n.valueHashMap[e] = o);
                                    var i = A.default("<li></li>").css("top", r.default.WHEEL_ITEM_HIGHT / 100 * o + "em");
                                    i.append(A.default('<span class="picker-text"></span>').text(a));
                                    var l = r.default.WHEEL_ITEM_HIGHT * -t;
                                    i.data("distance", l), i.data("index", o), n.contains.append(i);
                                    var u = function (e) {
                                        n.changeMaxDistance < .1 && (n.isDraging = !1, n.lastY = 0, n.speed = 0, n.selectIndex(t, !0), e.stopPropagation(), e.preventDefault())
                                    };
                                    i[0].addEventListener("mouseup", u), i[0].addEventListener("touchend", u), o++
                                }), i) return void(e.length > 0 ? (this.selectedIndex = 0, "object" === s(e[0]) ? this.selectedValue = this.list[0][this.itemValueKey] : this.selectedValue = this.list[0]) : (this.selectedIndex = -1, this.selectedValue = void 0));
                            e.length > 0 ? null != t && null != this.valueHashMap[t] ? this.selectOption(t) : null != this.valueHashMap[this.selectedValue] ? this.selectOption(this.selectedValue) : this.selectIndex(0) : (this.selectedIndex = -1, this.selectedValue = void 0)
                        }
                    }, {
                        key: "getOptions", value: function () {
                            return this.list
                        }
                    }, {
                        key: "selectOption", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (null != this.valueHashMap[e]) {
                                var i = this.valueHashMap[e];
                                this.selectIndex(i, t)
                            }
                        }
                    }, {
                        key: "selectIndex", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.calcDistanceBySelectedIndex(e);
                            if (o.default.stopAnimation(this.animationId), t) {
                                var n = 0, a = this, A = function t() {
                                    n++;
                                    var A = o.default.easeOut(n, a.distance, i - a.distance, 50);
                                    if (Math.abs(A - i) < 1 && (A = i), a.setDistance(A), A != i) a.animationId = o.default.startAnimation(t); else {
                                        var r = a.selectedIndex;
                                        a.selectedIndex = e, a.selectedValue = a.list[e], "object" == s(a.selectedValue) && (a.selectedValue = a.selectedValue[a.itemValueKey]), r != a.selectedIndex && a.toggleSelected(a.selectedIndex, a.selectedValue)
                                    }
                                };
                                a.animationId = o.default.startAnimation(A)
                            } else {
                                var r = this.selectedIndex;
                                this.setDistance(i), this.selectedIndex = e, this.selectedValue = this.list[e], "object" == s(this.selectedValue) && (this.selectedValue = this.selectedValue[this.itemValueKey]), r != this.selectedIndex && this.toggleSelected(this.selectedIndex, this.selectedValue)
                            }
                        }
                    }, {
                        key: "setDistance", value: function (e) {
                            if (e = this.rangeDistance(e), this.option.hasVoice && this.picker.visible) {
                                var t = this.lastIndexDistance, i = this.calcSelectedIndexByDistance(e);
                                t != i && this.option.hasVoice && l.play(), this.lastIndexDistance = i
                            }
                            return this.contains.css("transform", "translateY(" + (r.default.WHEEL_HEIGHT / 2 - r.default.WHEEL_ITEM_HIGHT / 2 - e) / 100 + "em)"), this.distance = e, e
                        }
                    }, {
                        key: "calcSelectedIndexByDistance", value: function (e) {
                            return e = this.rangeDistance(e), Math.round(Math.abs(e / r.default.WHEEL_ITEM_HIGHT))
                        }
                    }, {
                        key: "calcDistanceBySelectedIndex", value: function (e) {
                            return e * r.default.WHEEL_ITEM_HIGHT
                        }
                    }, {
                        key: "rangeDistance", value: function (e) {
                            return e = Math.max(this.minDistance, e), e = Math.min(this.maxDistance, e)
                        }
                    }, {
                        key: "getValue", value: function () {
                            return this.selectedValue
                        }
                    }, {
                        key: "setSuffix", value: function (e) {
                            this.dom.find(".picker-label .picker-text").eq(1).text(e)
                        }
                    }, {
                        key: "setPrefix", value: function (e) {
                            this.dom.find(".picker-label .picker-text").eq(0).text(e)
                        }
                    }, {
                        key: "toggleSelected", value: function (e, t) {
                            var i = this;
                            this.onSelectItemCallbackList.forEach(function (n) {
                                n.call(i, e, t)
                            })
                        }
                    }, {
                        key: "addSelectItemListener", value: function (e) {
                            this.onSelectItemCallbackList.push(e)
                        }
                    }, {
                        key: "removeSelectItemListener", value: function (e) {
                            this.onSelectItemCallbackList = this.onSelectItemCallbackList.filter(function (t) {
                                return t !== e
                            })
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.onSelectItemCallbackList = null
                        }
                    }, {
                        key: "getDOM", value: function () {
                            return this.dom
                        }
                    }]), e
                }();
                t.Wheel = u
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    assign: function (e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                        if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                        for (var s = Object(e), a = 1; a < arguments.length; a++) {
                            var A = arguments[a];
                            if (void 0 !== A && null !== A) {
                                A = Object(A);
                                for (var o = Object.keys(A), r = 0, l = o.length; r < l; r++) {
                                    var u = o[r], c = Object.getOwnPropertyDescriptor(A, u);
                                    void 0 !== c && c.enumerable && (s[u] = A[u])
                                }
                            }
                        }
                        return s
                    }
                }
            }, function (e, t, i) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function s(e, t) {
                    this.picker = e, this.option = t, this.cover = (0, A.default)("<div class='my-picker-cover' style='z-index: " + t.zIndex + "'>").hide(), this.frame = (0, A.default)('<div class="picker picker-frame" style="z-index: ' + (t.zIndex + 1) + '"><header class="picker-head"><a class="picker-btn-cancel"><span class="picker-header-text"></span></a><h4 class="picker-title"><span class="picker-header-text"></span></h4><span class="picker-selected">已选0</span><a class="picker-btn-ok"><span class="picker-header-text"></span></a></header><div class="picker-body"></div></div>').css("height", (r.default.WHEEL_HEIGHT + 15) / 100 + "em").hide(), this.frame.find(".picker-body")[0].addEventListener("touchstart", function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }), !u.default.isIE() && this.option.isPerspective && this.frame.addClass("s-3d").find(".picker-body").css("perspective", r.default.WHEEL_HEIGHT / 100 + "em").css("webkitPerspective", r.default.WHEEL_HEIGHT / 100 + "em").css("mozPerspective", r.default.WHEEL_HEIGHT / 100 + "em").css("msPerspective", r.default.WHEEL_HEIGHT / 100 + "em"), this.frame.find(".picker-title .picker-header-text").text(t.title), this.frame.find(".picker-btn-cancel .picker-header-text").text(t.buttons[1] || "取消"), this.frame.find(".picker-btn-ok .picker-header-text").text(t.buttons[0] || "确定"), (0, A.default)("body").append(this.frame).append(this.cover);
                    var i = this;
                    this.frame.find(".picker-btn-cancel").on("click", function (e) {
                        "function" == typeof i.option.onCancelClick && i.option.onCancelClick.call(i.picker), i.picker.hide()
                    }), this.frame.find(".picker-btn-ok").on("click", function (t) {
                        if ("function" == typeof i.option.onOkClick) {
                            if (!1 === i.option.onOkClick.call(i.picker, e.getValue())) return
                        }
                        i.picker.hide()
                    }), this._resizeHandle = function () {
                        this.frame.css("fontSize", Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight)*0.7 + "px")
                    }.bind(this), window.addEventListener("resize", this._resizeHandle), this._resizeHandle()
                }

                var a = i(0), A = n(a), o = i(1), r = n(o), l = i(5), u = n(l);
                s.prototype = {
                    showCover: function () {
                        this.cover.show(), this.cover.addClass("s-open")
                    }, hideCover: function () {
                        this.cover.removeClass("s-open");
                        var e = this;
                        setTimeout(function () {
                            e.cover.hide()
                        }, 500)
                    }, showFrame: function () {
                        this.frame.show(), this.frame.addClass("s-open")
                        this.frame.addClass("s-big-show")
                    }, hideFrame: function () {
                        this.frame.removeClass("s-open");
                        this.frame.removeClass("s-big-show")
                        var e = this;
                        setTimeout(function () {
                            e.frame.hide()
                        }, 500)
                    }, dom: function () {
                        return this.frame
                    }, body: function () {
                        return this.frame.find(".picker-body")
                    }, close: function () {
                        this.remove(), window.removeEventListener("resize", this._resizeHandle)
                    }, remove: function () {
                        this.frame.remove()
                    }
                }, e.exports = s
            }, function (e, t) {
            }])
        })
    }])
});
//# sourceMappingURL=my-picker.min.js.map