(function(a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.d = function(a, c, d) {
        b.o(a, c) || Object.defineProperty(a, c, {
            configurable: !1,
            enumerable: !0,
            get: d
        })
    }, b.n = function(a) {
        var c = a && a.__esModule ? function() {
            return a['default']
        } : function() {
            return a
        };
        return b.d(c, 'a', c), c
    }, b.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, b.p = '', b(b.s = 0)
})([function(a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(1),
        e = c.n(d),
        f = c(5);
    HTMLElement.prototype.sparkle = function(a) {
        a = a || {};
        var b = this.currentStyle || window.getComputedStyle(this);
        'relative' !== b.position && 'absolute' !== b.position && 'fixed' !== b.position && (this.style.position = 'relative');
        let c = new f.a(a);
        c.fillParentElement(), this.insertAdjacentElement(a.position || 'beforeend', c), c.animate()
    }, NodeList.prototype.sparkle = function(a) {
        this.forEach((b) => {
            b.sparkle(a)
        })
    }, HTMLElement.prototype.stopSparkling = function() {
        this.querySelectorAll('sparkle-div').forEach((a) => a.remove)
    }, NodeList.prototype.stopSparkling = function() {
        this.forEach((a) => a.stopSparkling)
    }
}, function(a, b, c) {
    var d = c(2);
    'string' == typeof d && (d = [
        [a.i, d, '']
    ]);
    c(4)(d, {
        insert: 'head',
        singleton: !1
    });
    d.locals && (a.exports = d.locals)
}, function(a, b, c) {
    b = a.exports = c(3)(!1), b.push([a.i, 'sparkle-div {\n  display: block;\n  overflow: hidden;\n}\nsparkle-div.cover {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\nsparkle-div sparkle-star-div {\n  display: block;\n  position: absolute;\n  animation-name: sparkle;\n  animation-duration: 4s;\n  animation-timing-function: linear;\n  object-fit: contain;\n}\nsparkle-div sparkle-star-div * {\n  object-fit: contain;\n}\n@keyframes sparkle {\n  0% {\n    transform: scale(0) rotate(0deg);\n    opacity: 0;\n  }\n  67% {\n    transform: scale(3) rotate(360deg);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(0) rotate(540deg);\n    opacity: 0;\n  }\n}\n', ''])
}, function(a) {
    'use strict';

    function b(a, b) {
        var d = a[1] || '',
            e = a[3];
        if (!e) return d;
        if (b && 'function' == typeof btoa) {
            var f = c(e),
                g = e.sources.map(function(a) {
                    return '/*# sourceURL='.concat(e.sourceRoot).concat(a, ' */')
                });
            return [d].concat(g).concat([f]).join('\n')
        }
        return [d].join('\n')
    }

    function c(a) {
        var b = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b);
        return '/*# '.concat(c, ' */')
    }
    a.exports = function(a) {
        var c = [];
        return c.toString = function() {
            return this.map(function(c) {
                var d = b(c, a);
                return c[2] ? '@media '.concat(c[2], '{').concat(d, '}') : d
            }).join('')
        }, c.i = function(a, b) {
            'string' == typeof a && (a = [
                [null, a, '']
            ]);
            for (var d, e = {}, f = 0; f < this.length; f++) d = this[f][0], null != d && (e[d] = !0);
            for (var g, h = 0; h < a.length; h++) g = a[h], null != g[0] && e[g[0]] || (b && !g[2] ? g[2] = b : b && (g[2] = '('.concat(g[2], ') and (').concat(b, ')')), c.push(g))
        }, c
    }
}, function(a, b, c) {
    'use strict';

    function d(a, b) {
        for (var c = [], d = {}, e = 0; e < a.length; e++) {
            var f = a[e],
                g = b.base ? f[0] + b.base : f[0],
                h = f[1],
                i = f[2],
                j = f[3],
                k = {
                    css: h,
                    media: i,
                    sourceMap: j
                };
            d[g] ? d[g].parts.push(k) : c.push(d[g] = {
                id: g,
                parts: [k]
            })
        }
        return c
    }

    function e(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = l[d.id],
                f = 0;
            if (e) {
                for (e.refs++; f < e.parts.length; f++) e.parts[f](d.parts[f]);
                for (; f < d.parts.length; f++) e.parts.push(k(d.parts[f], b))
            } else {
                for (var g = []; f < d.parts.length; f++) g.push(k(d.parts[f], b));
                l[d.id] = {
                    id: d.id,
                    refs: 1,
                    parts: g
                }
            }
        }
    }

    function f(a) {
        var b = document.createElement('style');
        if ('undefined' == typeof a.attributes.nonce) {
            var d = c.nc;
            d && (a.attributes.nonce = d)
        }
        if (Object.keys(a.attributes).forEach(function(c) {
                b.setAttribute(c, a.attributes[c])
            }), 'function' == typeof a.insert) a.insert(b);
        else {
            var e = m(a.insert || 'head');
            if (!e) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');
            e.appendChild(b)
        }
        return b
    }

    function g(a) {
        return null !== a.parentNode && void a.parentNode.removeChild(a)
    }

    function h(a, b, c, d) {
        var e = c ? '' : d.css;
        if (a.styleSheet) a.styleSheet.cssText = n(b, e);
        else {
            var f = document.createTextNode(e),
                g = a.childNodes;
            g[b] && a.removeChild(g[b]), g.length ? a.insertBefore(f, g[b]) : a.appendChild(f)
        }
    }

    function i(a, b, c) {
        var d = c.css,
            e = c.media,
            f = c.sourceMap;
        if (e && a.setAttribute('media', e), f && btoa && (d += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))), ' */')), a.styleSheet) a.styleSheet.cssText = d;
        else {
            for (; a.firstChild;) a.removeChild(a.firstChild);
            a.appendChild(document.createTextNode(d))
        }
    }

    function k(a, b) {
        var c, d, e;
        if (b.singleton) {
            var j = p++;
            c = o || (o = f(b)), d = h.bind(null, c, j, !1), e = h.bind(null, c, j, !0)
        } else c = f(b), d = i.bind(null, c, b), e = function() {
            g(c)
        };
        return d(a),
            function(b) {
                if (b) {
                    if (b.css === a.css && b.media === a.media && b.sourceMap === a.sourceMap) return;
                    d(a = b)
                } else e()
            }
    }
    var l = {},
        j = function() {
            var a;
            return function() {
                return 'undefined' == typeof a && (a = !!(window && document && document.all && !window.atob)), a
            }
        }(),
        m = function() {
            var a = {};
            return function(b) {
                if ('undefined' == typeof a[b]) {
                    var c = document.querySelector(b);
                    if (window.HTMLIFrameElement && c instanceof window.HTMLIFrameElement) try {
                        c = c.contentDocument.head
                    } catch (a) {
                        c = null
                    }
                    a[b] = c
                }
                return a[b]
            }
        }(),
        n = function() {
            var a = [];
            return function(b, c) {
                return a[b] = c, a.filter(Boolean).join('\n')
            }
        }(),
        o = null,
        p = 0;
    a.exports = function(a, b) {
        b = b || {}, b.attributes = 'object' == typeof b.attributes ? b.attributes : {}, b.singleton || 'boolean' == typeof b.singleton || (b.singleton = j());
        var c = d(a, b);
        return e(c, b),
            function(a) {
                for (var f = [], g = 0; g < c.length; g++) {
                    var h = c[g],
                        i = l[h.id];
                    i && (i.refs--, f.push(i))
                }
                if (a) {
                    var k = d(a, b);
                    e(k, b)
                }
                for (var m, n = 0; n < f.length; n++)
                    if (m = f[n], 0 === m.refs) {
                        for (var o = 0; o < m.parts.length; o++) m.parts[o]();
                        delete l[m.id]
                    }
            }
    }
}, function(a, b, c) {
    'use strict';
    var d = c(6);
    class e extends HTMLElement {
        constructor(a) {
            super(), a = a || {}, this.count = a.count || 3, this.size = a.size || {
                width: '15px',
                height: '15px'
            }, this.minAge = a.minAge || 2e3, this.maxAge = a.maxAge || 5e3;
            var b = `<svg width="100%" height="100%" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M1.125,4.95l4.462,0l1.913,-3.825l0.637,3.825l5.738,0l-4.463,3.188l0.638,5.737l-3.187,-3.825l-4.463,3.825l1.913,-5.737l-3.188,-3.188Z" style="fill:#fff;"></path></svg>`;
            if (a.starsource && ('string' == typeof a.starsource ? b = a.starsource : this.starsource = a.starsource), !this.starsource) {
                let a = document.createElement('div');
                a.style.display = 'block', a.innerHTML = b, a.width = this.size.width, a.height = this.size.height, this.starsource = a, this.starsource.style.visibility = 'hidden', this.starsource.style.width = this.size.width, this.starsource.style.height = this.size.height, this.insertAdjacentElement('beforeend', this.starsource)
            }
        }
        fillParentElement() {
            this.classList.add('cover')
        }
        animate() {
            for (let a, b = 0; b < this.count; b++) a = new d.a(this), this.insertAdjacentElement('beforeend', a)
        }
    }
    b.a = e, customElements.define('sparkle-div', e)
}, function(a, b) {
    'use strict';
    class c extends HTMLElement {
        constructor(a) {
            var b = Math.floor;
            super();
            let d = a.starsource.cloneNode(!0);
            d.style.visibility = 'visible', this.insertAdjacentElement('beforeend', d);
            let e = a.minAge + (a.maxAge - a.minAge) * Math.random();
            this.style.animationDuration = e + 'ms';
            let f = -(a.starsource.clientHeight / 2) + b(Math.random() * a.clientHeight),
                g = -(a.starsource.clientWidth / 2) + b(Math.random() * a.clientWidth);
            this.style.top = f + 'px', this.style.left = g + 'px';
            var h = this;
            window.setTimeout(() => {
                h.remove(), a.insertAdjacentElement('beforeend', new c(a))
            }, e)
        }
    }
    b.a = c, customElements.define('sparkle-star-div', c)
}]);
//# sourceMappingURL=sparkle.min.js.map
