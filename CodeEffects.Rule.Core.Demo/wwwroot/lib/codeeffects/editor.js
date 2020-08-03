﻿/* Code Effects Software © 2020 | https://CodeEffects.com | 5.0.18.2 | May 20, 2020 */
/* eslint-disable */

window || (this.window = this)
window.CodeEffects ||
    (window.CodeEffects = {
        typeName: 'CodeEffects',
        getName: function () {
            return 'CodeEffects'
        },
        __namespace: !0
    })
CodeEffects.register ||
    (CodeEffects.register = function (b) {
        var e = window
        b = b.split('.')
        for (var d = 0; d < b.length; d++) {
            var m = b[d],
                l = e[m]
            l ||
                ((l = e[m] = {
                    typeName: b.slice(0, d + 1).join('.'),
                    __namespace: !0
                }),
                    (l.getName = function () {
                        return this.typeName
                    }))
            e = l
        }
    })
CodeEffects.register('CodeEffects.Rule.Client')
CodeEffects.register('CodeEffects.Rule.Models')
CodeEffects.register('CodeEffects.Rule.Menu')
CodeEffects.register('CodeEffects.Rule.Calendar')
CodeEffects.register('CodeEffects.Rule.Time')
CodeEffects.register('CodeEffects.Rule.TextBox')
CodeEffects.register('CodeEffects.Rule.Common')
var $rule = CodeEffects.Rule
$rule.Models.RuleModel = function () { }
$rule.Models.OperatorType = {
    String: 0,
    Numeric: 1,
    Date: 2,
    Time: 3,
    Bool: 4,
    Enum: 6,
    Collection: 8,
    None: 16
}
$rule.Common.ValueInputType = { Fields: 0, User: 2, All: 4 }
$rule.Client.Element = function () { }
$rule.Client.FunctionType = { Name: 0, Param: 1, Comma: 2, End: 3, None: 4 }
$rule.Client.InputType = { Field: 0, Input: 1, None: 2 }
$rule.Client.CalculationType = {
    Field: 0,
    LeftParenthesis: 1,
    RightParenthesis: 2,
    Multiplication: 3,
    Division: 4,
    Addition: 6,
    Subtraction: 7,
    Number: 8,
    None: 9,
    Function: 10
}
$rule.Client.CollectionType = { Value: 0, Reference: 2, Generic: 4, None: 8 }
$rule.Client.SelectionType = { Exists: 0, DoesNotExist: 1, None: 2 }
$rule.Client.ElementType = {
    Flow: 0,
    Field: 1,
    Function: 2,
    Operator: 3,
    Value: 4,
    Clause: 6,
    Action: 7,
    LeftParenthesis: 8,
    RightParenthesis: 9,
    LeftBracket: 10,
    RightBracket: 11,
    Calculation: 12,
    Tab: 13,
    NewLine: 15,
    HtmlTag: 16,
    Setter: 17,
    LeftSource: 18,
    RightSource: 19,
    Where: 20,
    Exists: 22
}
$rule.Client.type = { IE: 0, Chrome: 1, Firefox: 2, Opera: 3, Other: 4 }
$rule.Client.browser = null
$rule.Client.version =
    Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject
        ? 11
        : 0
11 == $rule.Client.version ||
    (navigator.appName &&
        -1 < navigator.appName.toLowerCase().indexOf('explorer')) ||
    -1 < navigator.userAgent.indexOf(' MSIE ')
    ? (($rule.Client.browser = $rule.Client.type.IE),
        11 != $rule.Client.version &&
        ($rule.Client.version = parseFloat(
            navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]
        )))
    : -1 < navigator.userAgent.toLowerCase().indexOf(' firefox/')
        ? ($rule.Client.browser = $rule.Client.type.Firefox)
        : -1 < navigator.userAgent.toLowerCase().indexOf(' applewebkit/')
            ? ($rule.Client.browser = $rule.Client.type.Chrome)
            : (navigator.appName &&
                -1 < navigator.appName.toLowerCase().indexOf('opera')) ||
                -1 < navigator.userAgent.toLowerCase().indexOf('opera/')
                ? ($rule.Client.browser = $rule.Client.type.Opera)
                : ($rule.Client.browser = $rule.Client.type.Other)
if ($rule.Client.browser == $rule.Client.type.IE && 9 > $rule.Client.version)
    throw Error(
        'Your browser is not supported by Code Effects rules engine (CE482)'
    )
$rule.defined = function (b) {
    return null != b && 'undefined' != typeof b && 'NaN' != String(b)
}
$rule.isNumeric = function (b) {
    return !isNaN(parseFloat(b)) && isFinite(b)
}
$rule.isInteger = function (b) {
    return $rule.isNumeric(b) && 0 === b % 1
}
$rule.text = function (b, e) {
    if (!b.tagName) return null
    if ($rule.defined(e))
        $rule.defined(document.getElementsByTagName('BODY')[0].innerText)
            ? (b.innerText = e.toString())
            : (b.textContent = e.toString())
    else
        return $rule.defined(document.getElementsByTagName('BODY')[0].innerText)
            ? b.innerText
            : b.textContent
}
$rule.trim = function (b) {
    return $rule.defined(b) && 0 !== b.length ? b.replace(/^\s+|\s+$/g, '') : b
}
$rule.encode = function (b) {
    return !$rule.defined(b) || 1 > b.length
        ? b
        : String(b)
            .replace(/&/g, '&amp;')
            .replace(/ /g, '&nbsp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\\/g, '&#92;')
            .replace(/'/g, '&#39;')
}
$rule.decode = function (b, e) {
    if (!$rule.defined(b) || 4 > b.length) return b
    var d = b
    e ||
        (d = String(d)
            .replace(/&#92;/g, '\\')
            .replace(/&quot;/g, '"'))
    return String(d)
        .replace(/&#39;/g, "'")
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
}
$rule.highlight = function (b) {
    b.style.backgroundColor = '#ffff91'
}
$rule.dim = function (b) {
    b.style.backgroundColor = ''
}
$rule.getElementWidth = function (b) {
    return b.offsetWidth && 0 < b.offsetWidth
        ? b.offsetWidth
        : b.style.pixelWidth && 0 < b.style.pixelWidth
            ? b.style.pixelWidth
            : b.style.posWidth && 0 < b.style.posWidth
                ? b.style.posWidth
                : b.style.width && 0 < b.style.width.length
                    ? parseInt(b.style.width.substr(0, b.style.width.length - 2))
                    : 0
}
$rule.getElementHeight = function (b) {
    return $rule.defined(b.offsetHeight) && 0 < b.offsetHeight
        ? b.offsetHeight
        : $rule.defined(b.style.pixelHeight) && 0 < b.style.pixelHeight
            ? b.style.pixelHeight
            : $rule.defined(b.style.posHeight) && 0 < b.style.posHeight
                ? b.style.posHeight
                : $rule.defined(b.style.height) && 0 < b.style.height.length
                    ? parseInt(b.style.height.substr(0, b.style.height.length - 2), 10)
                    : 50
}
$rule.getWindowDimensions = function () {
    var b = 0,
        e = 0
    self.innerHeight
        ? ((b = window.innerHeight), (e = window.innerWidth))
        : document.documentElement && document.documentElement.clientHeight
            ? ((b = document.documentElement.clientHeight),
                (e = document.documentElement.clientWidth))
            : document.body &&
            ((b = document.body.clientHeight), (e = document.body.clientWidth))
    return { height: parseInt(b, 10), width: parseInt(e, 10) }
}
$rule.getScrollWidth = function () {
    var b =
        window.pageXOffset ||
        document.body.scrollLeft ||
        document.documentElement.scrollLeft
    return b ? b : 0
}
$rule.getScrollHeight = function () {
    var b =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop
    return b ? b : 0
}
$rule.position = function (b, e) {
    var d = $rule.getBounds(b),
        m = $rule.getBounds(e),
        l = $rule.getWindowDimensions(),
        q = $rule.getScrollHeight(),
        n = $rule.getScrollWidth()
    e.style.top =
        l.height > d.y - q + d.height + m.height
            ? d.y + d.height + 'px'
            : l.height - m.height + q - 4 + 'px'
    e.style.left =
        l.width > d.x - n + d.width + m.width
            ? d.x + d.width + 6 + 'px'
            : l.width - m.width + n - 4 + 'px'
}
$rule.leftAlign = function (b, e) {
    var d = $rule.getBounds(b),
        m = $rule.getBounds(e),
        l = $rule.getWindowDimensions(),
        q = $rule.getScrollWidth()
    e.style.left =
        l.width > d.x - q + d.width + m.width
            ? d.x + 'px'
            : l.width - m.width + q - 4 + 'px'
}
$rule.getType = function (b) {
    if (!$rule.defined(b.constructor)) throw Error('CL1')
    b = String(b.constructor).match(/function\s+(\w+)/)
    return $rule.defined(b) ? b[1] : 'undefined'
}
$rule.getDocument = function (b) {
    b = b.ownerDocument || b.document || b
    return b.defaultView || b.parentWindow
}
$rule.getStyle = function (b) {
    if (3 === b.nodeType) return null
    var e = $rule.getDocument(b)
    b.documentElement && (b = b.documentElement)
    var d =
        e && b !== e && e.getComputedStyle
            ? e.getComputedStyle(b, null)
            : b.currentStyle || b.style
    if (!d && $rule.Client.browser == $rule.Client.type.Chrome && b.style) {
        d = b.style.display
        var m = b.style.position
        b.style.position = 'absolute'
        b.style.display = 'block'
        e = e.getComputedStyle(b, null)
        b.style.display = d
        b.style.position = m
        d = {}
        if (e) for (b = 0; b < e.length; b++) d[b] = e[b]
        d.display = 'none'
    }
    return d
}
$rule.getParentById = function (b, e) {
    return $rule.defined(b)
        ? b.id && b.id == e
            ? b
            : b.parentNode
                ? $rule.getParentById(b.parentNode, e)
                : null
        : null
}
$rule.getParentByTagName = function (b, e, d) {
    $rule.defined(d) || (d = 0)
    return 0 < d && b.tagName && b.tagName == e
        ? b
        : b.parentNode
            ? $rule.getParentByTagName(b.parentNode, e, ++d)
            : null
}
$rule.getChildrenByTagName = function (b, e, d) {
    var m = []
    if (b.childNodes)
        for (var l = 0; l < b.childNodes.length; l++) {
            var q = b.childNodes[l]
            q.tagName && q.tagName == e && m.push(q)
            if (d && q.childNodes && 0 < q.childNodes.length) {
                q = $rule.getChildrenByTagName(q, e, d)
                for (var n = 0; n < q.length; n++) m.push(q[n])
            }
        }
    return m
}
$rule.getChildrenByAttribute = function (b, e, d) {
    var m = []
    if (b.childNodes)
        for (var l = 0; l < b.childNodes.length; l++) {
            var q = b.childNodes[l]
            if (q.tagName && q.getAttribute) {
                var n = q.getAttribute(e)
                !n || ($rule.defined(d) && n != d) || m.push(q)
            }
            if (q.childNodes && 0 < q.childNodes.length)
                for (
                    q = $rule.getChildrenByAttribute(q, e, d), n = 0;
                    n < q.length;
                    n++
                )
                    m.push(q[n])
        }
    return m
}
$rule.StringBuilder = function () {
    var b = []
    this.append = function (e) {
        e = $rule.defined(e)
            ? $rule.getType(e) != $rule.getType(new String())
                ? String(e)
                : e
            : ''
        0 < e.length && (b[b.length] = e)
    }
    this.dump = function () {
        return b.join('')
    }
}
$rule.Point = function (b, e) {
    this.x = b
    this.y = e
}
switch ($rule.Client.browser) {
    case $rule.Client.type.Chrome:
        $rule.getPosition = function (b) {
            if ((b.window && b.window === b) || 9 === b.nodeType)
                return new $rule.Point(0, 0)
            for (var e = 0, d = 0, m = null, l, q = b; q; m = l, q = q.offsetParent) {
                l = $rule.getStyle(q)
                var n = q.tagName ? q.tagName.toUpperCase() : null
                    ; (!q.offsetLeft && !q.offsetTop) ||
                        ('BODY' === n && m && 'absolute' === m.position) ||
                        ((e += q.offsetLeft), (d += q.offsetTop))
            }
            l = (l = $rule.getStyle(b)) ? l.position : null
            if (!l || 'absolute' !== l)
                for (
                    b = b.parentNode;
                    b &&
                    ((n = b.tagName ? b.tagName.toUpperCase() : null),
                        'BODY' !== n &&
                        'HTML' !== n &&
                        (b.scrollLeft || b.scrollTop) &&
                        ((e -= b.scrollLeft || 0), (d -= b.scrollTop || 0)),
                        !(l = (l = $rule.getStyle(b)) ? l.position : null) ||
                        'absolute' !== l);
                    b = b.parentNode
                );
            return new $rule.Point(e, d)
        }
        break
    case $rule.Client.type.Opera:
        $rule.getPosition = function (b) {
            if ((b.window && b.window === b) || 9 === b.nodeType)
                return new $rule.Point(0, 0)
            for (var e = 0, d = 0, m = b; m; m = m.offsetParent)
                (e += m.offsetLeft || 0), (d += m.offsetTop || 0)
            m = (m = b.style.position) && 'static' !== m
            for (b = b.parentNode; b; b = b.parentNode) {
                var l = b.tagName ? b.tagName.toUpperCase() : null
                'BODY' === l ||
                    'HTML' === l ||
                    (!b.scrollLeft && !b.scrollTop) ||
                    !m ||
                    ('scroll' !== b.style.overflow && 'auto' !== b.style.overflow) ||
                    ((e -= b.scrollLeft || 0), (d -= b.scrollTop || 0))
                l = b && b.style ? b.style.position : null
                m = m || (l && 'static' !== l)
            }
            return new $rule.Point(e, d)
        }
        break
    case $rule.Client.type.Firefox:
        $rule.getPosition = function (b) {
            if ((b.window && b.window === b) || 9 === b.nodeType)
                return new $rule.Point(0, 0)
            for (
                var e = 0, d = 0, m = null, l = null, q, n = b;
                n;
                m = n, l = q, n = n.offsetParent
            ) {
                var B = n.tagName ? n.tagName.toUpperCase() : null
                q = $rule.getStyle(n)
                    ; (n.offsetLeft || n.offsetTop) &&
                        ('BODY' !== B || (l && 'absolute' === l.position)) &&
                        ((e += n.offsetLeft), (d += n.offsetTop))
                null !== m &&
                    q &&
                    ('TABLE' !== B &&
                        'TD' !== B &&
                        'HTML' !== B &&
                        ((e += parseInt(q.borderLeftWidth) || 0),
                            (d += parseInt(q.borderTopWidth) || 0)),
                        'TABLE' !== B ||
                        ('relative' !== q.position && 'absolute' !== q.position) ||
                        ((e += parseInt(q.marginLeft) || 0),
                            (d += parseInt(q.marginTop) || 0)))
            }
            q = (q = $rule.getStyle(b)) ? q.position : null
            if (!q || 'absolute' !== q)
                for (b = b.parentNode; b; b = b.parentNode)
                    if (
                        ((B = b.tagName ? b.tagName.toUpperCase() : null),
                            'BODY' !== B &&
                            'HTML' !== B &&
                            (b.scrollLeft || b.scrollTop) &&
                            ((e -= b.scrollLeft || 0),
                                (d -= b.scrollTop || 0),
                                (q = $rule.getStyle(b))))
                    )
                        (e += parseInt(q.borderLeftWidth) || 0),
                            (d += parseInt(q.borderTopWidth) || 0)
            return new $rule.Point(e, d)
        }
        break
    default:
        $rule.getPosition = function (b) {
            if (b.self || 9 === b.nodeType) return new $rule.Point(0, 0)
            var e = { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }
            try {
                e = b.getBoundingClientRect()
            } catch (n) { }
            if (!e) return new $rule.Point(0, 0)
            var d = b.ownerDocument.documentElement,
                m = e.left - 2 + d.scrollLeft
            e = e.top - 2 + d.scrollTop
            try {
                var l = b.ownerDocument.parentWindow.frameElement || null
                if (l) {
                    var q = '0' === l.frameBorder || 'no' === l.frameBorder ? 2 : 0
                    m += q
                    e += q
                }
            } catch (n) { }
            return new $rule.Point(m, e)
        }
}
$rule.getBounds = function (b) {
    var e = $rule.getPosition(b)
    return {
        x: e.x,
        y: e.y,
        width: $rule.getElementWidth(b),
        height: $rule.getElementHeight(b)
    }
}
$rule.topZindex = function (b, e) {
    e = e || 1
    if (b.childNodes)
        for (var d = 0, m, l = b.childNodes.length; d < l; d++)
            (m = b.childNodes[d]),
                m.tagName &&
                m.style &&
                $rule.isInteger(m.style.zIndex) &&
                m.style.zIndex > e &&
                (e = m.style.zIndex + 1),
                0 < m.childNodes.length && (e = $rule.topZindex(m, e))
    return e
}
$rule.Json = function () {
    this.serialize = function (e) {
        var d = new $rule.StringBuilder()
        b(e, d, !1)
        return d.dump()
    }
    this.deserialize = function (b) {
        if (!$rule.defined(b) || 0 == b.length) throw Error('CL2')
        try {
            return eval('(' + b.replace(/\\"/g, '"') + ')')
        } catch (d) {
            throw Error('CL41')
        }
    }
    var b = function (e, d) {
        var m
        switch (typeof e) {
            case 'number':
                isFinite(e) ? d.append(e.toString()) : d.append('null')
                break
            case 'string':
                d.append('"')
                d.append(e)
                d.append('"')
                break
            case 'boolean':
                d.append(e.toString())
                break
            case 'object':
                if ($rule.defined(e))
                    if ($rule.getType(e) == $rule.getType([])) {
                        d.append('[')
                        for (m = 0; m < e.length; ++m) 0 < m && d.append(','), b(e[m], d)
                        d.append(']')
                    } else {
                        var l = [],
                            q = 0
                        for (m in e) l[q++] = m
                        d.append('{')
                        var n = !1
                        for (m = 0; m < q; m++) {
                            var B = e[l[m]]
                            $rule.defined(B) &&
                                'function' !== typeof B &&
                                (n ? d.append(',') : (n = !0),
                                    b(l[m], d),
                                    d.append(':'),
                                    b(B, d))
                        }
                        d.append('}')
                    }
                else d.append('null')
                break
            default:
                d.append('null')
        }
    }
}
$rule.formatDate = function (b, e) {
    function d(d) {
        return 10 > d ? '0' + d : d.toString()
    }
    function m(d, b) {
        for (var c = 0, l = !1, m = 0, e = d.length; m < e; m++) {
            var p = d.charAt(m)
            switch (p) {
                case "'":
                    l ? b.append("'") : c++
                    l = !1
                    break
                case '\\':
                    l && b.append('\\')
                    l = !l
                    break
                default:
                    b.append(p), (l = !1)
            }
        }
        return c
    }
    function l(d) {
        return 10 > d ? '00' + d : 100 > d ? '0' + d : d.toString()
    }
    if (!e || 0 === e.length || 'i' === e) return b.toString()
    e = (function (d) {
        $rule.defined(d) || (d = 'd')
        if (1 == d.length)
            switch (d) {
                case 'F':
                    return 'dddd, MMMM dd, yyyy h:mm:ss tt'
                case 's':
                    return "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
                case 'Y':
                case 'y':
                    return 'MMMM, yyyy'
                case 'M':
                case 'm':
                    return 'MMMM dd'
                case 'd':
                    return 'M/d/yyyy'
                case 'D':
                    return 'dddd, MMMM dd, yyyy'
                case 't':
                    return 'h:mm tt'
                case 'T':
                    return 'h:mm:ss tt'
                default:
                    throw Error('CL61')
            }
        return d
    })(e)
    for (
        var q = new $rule.StringBuilder(),
        n,
        B = 0,
        A = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g;
        ;

    ) {
        var H = A.lastIndex
        n = A.exec(e)
        H = e.slice(H, n ? n.index : e.length)
        H = m(H, q)
        B += H
        if (!n) break
        if (1 === B % 2) q.append(n[0])
        else
            switch (n[0]) {
                case 'MMMM':
                    q.append($rule.monthNames[b.getMonth()])
                    break
                case 'MMM':
                    q.append($rule.abbrMonthNames[b.getMonth()])
                    break
                case 'MM':
                    q.append(d(b.getMonth() + 1))
                    break
                case 'M':
                    q.append(b.getMonth() + 1)
                    break
                case 'dddd':
                    q.append($rule.dayNames[b.getDay()])
                    break
                case 'ddd':
                    q.append($rule.abbrDayNames[b.getDay()])
                    break
                case 'dd':
                    q.append(d(b.getDate()))
                    break
                case 'd':
                    q.append(b.getDate())
                    break
                case 'yyyy':
                    q.append(b.getFullYear())
                    break
                case 'yy':
                    q.append(d(b.getFullYear() % 100))
                    break
                case 'y':
                    q.append(b.getFullYear() % 100)
                    break
                case 'hh':
                    n = b.getHours() % 12
                    0 === n && (n = 12)
                    q.append(d(n))
                    break
                case 'h':
                    n = b.getHours() % 12
                    0 === n && (n = 12)
                    q.append(n)
                    break
                case 'HH':
                    q.append(d(b.getHours()))
                    break
                case 'H':
                    q.append(b.getHours())
                    break
                case 'mm':
                    q.append(d(b.getMinutes()))
                    break
                case 'm':
                    q.append(b.getMinutes())
                    break
                case 'ss':
                    q.append(d(b.getSeconds()))
                    break
                case 's':
                    q.append(b.getSeconds())
                    break
                case 'tt':
                    q.append(12 > b.getHours() ? 'AM' : 'PM')
                    break
                case 't':
                    q.append(12 > b.getHours() ? 'A' : 'P')
                    break
                case 'f':
                    q.append(l(b.getMilliseconds()).charAt(0))
                    break
                case 'ff':
                    q.append(l(b.getMilliseconds()).substr(0, 2))
                    break
                case 'fff':
                    q.append(l(b.getMilliseconds()))
                    break
                case 'z':
                    n = b.getTimezoneOffset() / 60
                    q.append((0 >= n ? '+' : '-') + Math.floor(Math.abs(n)))
                    break
                case 'zz':
                    n = b.getTimezoneOffset() / 60
                    q.append((0 >= n ? '+' : '-') + d(Math.floor(Math.abs(n))))
                    break
                case 'zzz':
                    ; (n = b.getTimezoneOffset() / 60),
                        q.append(
                            (0 >= n ? '+' : '-') +
                            d(Math.floor(Math.abs(n))) +
                            ':' +
                            d(Math.abs(b.getTimezoneOffset() % 60))
                        )
            }
    }
    return q.dump()
}
Function.addDelegate = function (b, e) {
    return function () {
        return e.apply(b, arguments)
    }
}
$rule.Event = function (b) {
    b = b || window.event
    var e = (this.type = b.type.toLowerCase())
    this.rawEvent = b
    'keypress' == e && (this.charCode = b.charCode || b.keyCode)
    b.keyCode
        ? (this.keyCode = 46 == b.keyCode && 'keypress' != e ? 127 : b.keyCode)
        : b.charCode
            ? (this.keyCode = b.charCode)
            : 'undefined' != typeof b.which && (this.keyCode = b.which)
    this.offsetY = b.pageY
        ? b.pageY
        : b.clientY + document.body.scrollTop - document.body.clientTop
    this.target = b.target ? b.target : b.srcElement
    this.ctrlKey = b.ctrlKey
    this.metaKey = b.metaKey || !1
    this.altKey = b.altKey
    this.shiftKey = b.shiftKey
    this.changedTouches = b.changedTouches || null
}
$rule.Event.prototype = {
    preventDefault: function () {
        this.rawEvent.preventDefault
            ? this.rawEvent.preventDefault()
            : window.event && (this.rawEvent.returnValue = !1)
    },
    stopPropagation: function () {
        this.rawEvent.stopPropagation
            ? this.rawEvent.stopPropagation()
            : window.event && (this.rawEvent.cancelBubble = !0)
    }
}
$rule.addHandler = function (b, e, d) {
    b.ceEvents || (b.ceEvents = {})
    var m = b.ceEvents[e]
    m || (b.ceEvents[e] = m = [])
    if (b.addEventListener) {
        var l = function (l) {
            return d.call(b, new $rule.Event(l))
        }
        b.addEventListener(e, l, !1)
    } else
        b.attachEvent &&
            ((l = function () {
                var l = {}
                try {
                    l = $rule.getDocument(b).event
                } catch (n) { }
                return d.call(b, new $rule.Event(l))
            }),
                b.attachEvent('on' + e, l))
    m[m.length] = { handler: d, browserHandler: l }
}
$rule.addHandlers = function (b, e, d) {
    for (var m in e) {
        var l = e[m]
        d && (l = Function.addDelegate(d, l))
        $rule.addHandler(b, m, l)
    }
}
$rule.removeHandlers = function (b) {
    if (b.ceEvents) {
        var e
        for (e in b.ceEvents)
            if (b.ceEvents.hasOwnProperty(e)) {
                var d = b.ceEvents[e]
                if (d.length && 0 < d.length)
                    for (var m = 0, l, q = d.length; m < q; m++)
                        (l = d[m]),
                            l.browserHandler &&
                            (b.removeEventListener
                                ? b.removeEventListener(e, l.browserHandler)
                                : b.detachEvent && b.detachEvent(e, l.browserHandler))
                delete b.ceEvents[e]
            }
        delete b.ceEvents
    }
}
$rule.Context = {
    controls: [],
    addControl: function (b, e) {
        for (var d = 0, m = $rule.Context.controls.length; d < m; d++)
            if ($rule.Context.controls[d].id == b)
                throw Error(
                    'Rule Editor with specified ID already exist in the current context (CL85)'
                )
        $rule.Context.controls.push(new $rule.Context.Item(b, e))
    },
    getControl: function (b) {
        for (var e = 0, d = $rule.Context.controls.length; e < d; e++)
            if ($rule.Context.controls[e].id == b)
                return $rule.Context.controls[e].ref
        return null
    },
    removeControl: function (b) {
        for (var e = [], d = 0, m, l = $rule.Context.controls.length; d < l; d++)
            (m = $rule.Context.controls[d]), m.id != b && e.push(m)
        0 < e.length && ($rule.Context.controls = e)
    },
    clear: function () {
        $rule.Context.controls = []
    }
}
$rule.Context.Item = function (b, e) {
    this.id = b
    this.ref = e
}
var $ce = $rule.Context.getControl
$rule.Menu.Item = function () {
    this.Type = this.Name = this.ID = null
}
$rule.Menu.Control = function (b, e) {
    var d = $rule,
        m,
        l,
        q,
        n,
        B,
        A,
        H = null,
        p = !1,
        r = [],
        c = d.highlight,
        u = d.dim,
        N = d.getElementHeight,
        C = d.defined,
        O = d.Client.browser == d.Client.type.Opera
    this.init = function (c, b) {
        H = c
        B = b
        r = []
        O
            ? d.addHandlers(document, { keydown: F, keypress: Ea }, H)
            : d.addHandlers(document, { keydown: F }, H)
    }
    this.close = function () {
        C(m) && C(m.parentNode) && m.parentNode.removeChild(m)
        p = !1
        r = []
        B && B()
    }
    this.select = function (c) {
        if (m)
            for (
                var d = $rule.getChildrenByTagName(m, 'DIV', !1), b = 0;
                b < d.length;
                b++
            )
                if (
                    0 === d[b].innerHTML.toLowerCase().lastIndexOf(c.toLowerCase(), 0)
                ) {
                    Ia(d[b])
                    break
                }
    }
    this.fill = function (c, b, e, F, H) {
        if (C(b) && 0 != b.length) {
            p = !0
            q = e
            n = H
            A = F
            Qa(c)
            r = []
            l = -1
            e = 0
            for (var na; e < b.length; e++)
                (F = b[e]),
                    (na = document.createElement('DIV')),
                    (na.id = 'ce104' + c.id + e),
                    (na.innerHTML = F.Name),
                    m.appendChild(na),
                    r.push(na),
                    na.setAttribute('ce101', C(F.ID) ? F.ID : ''),
                    na.setAttribute('ce102', C(F.Type) ? F.Type : ''),
                    na.setAttribute('ce103', e),
                    (na.onclick = function (c) {
                        c = c || window.event
                        c.cancelBubble = !0
                        q &&
                            q(
                                this.getAttribute('ce101'),
                                this.getAttribute('ce102'),
                                this.innerHTML
                            )
                    }),
                    (na.onmouseover = function (c) {
                        Ia(this)
                        n && n(this.getAttribute('ce101'))
                    }),
                    (na.onmouseout = function (c) {
                        u(this)
                    })
            12 < b.length &&
                ((b = N(na)),
                    (C(b) && 0 != b) || (b = 22),
                    (m.style.height = 12 * b + 'px'))
            d.position(c, m)
            m.onclick = function (c) {
                c = c || window.event
                c.cancelBubble = !0
                return !1
            }
        } else r = []
    }
    this.alignLeft = function (c) {
        C(m) && C(c) && d.leftAlign(c, m)
    }
    var F = function (c) {
        var d = c.keyCode
        if (!p || !C(m) || 0 == r.length) return !0
        switch (d) {
            case 13:
                ; -1 < l
                    ? q &&
                    q(
                        r[l].getAttribute('ce101'),
                        r[l].getAttribute('ce102'),
                        r[l].innerHTML
                    )
                    : A && A()
                break
            case 32:
                ; -1 < l &&
                    q &&
                    q(
                        r[l].getAttribute('ce101'),
                        r[l].getAttribute('ce102'),
                        r[l].innerHTML
                    )
                break
            case 38:
                ; -1 == l && (l = 0)
                if (0 <= l) {
                    var b = r[l].offsetTop - m.scrollTop < r[0].clientHeight
                    l--
                    0 > l && (l = 0)
                    b && (m.scrollTop = r[l].offsetTop)
                    ta(r)
                }
                break
            case 40:
                ; (b = r[0].clientHeight),
                    (b = m.scrollTop + 11 * b - l * b < b),
                    l++,
                    l > r.length - 1 && (l = r.length - 1),
                    b && (m.scrollTop = r[l - 12 + 1].offsetTop),
                    ta(r)
        }
        O ||
            (8 != d &&
                9 != d &&
                13 != d &&
                32 != d &&
                33 != d &&
                34 != d &&
                35 != d &&
                36 != d &&
                38 != d &&
                40 != d) ||
            (c.preventDefault && c.preventDefault(),
                c.stopPropagation && c.stopPropagation())
    },
        Ea = function (c) {
            if (p && C(m) && 0 != r.length) {
                var d = c.keyCode
                    ; (8 != d &&
                        9 != d &&
                        13 != d &&
                        32 != d &&
                        33 != d &&
                        34 != d &&
                        35 != d &&
                        36 != d &&
                        38 != d &&
                        40 != d) ||
                        c.preventDefault()
                return !1
            }
            return !0
        },
        ta = function () {
            pb()
            0 != r.length && (c(r[l]), n && n(r[l].getAttribute('ce101')))
        },
        Ia = function (d) {
            l = parseInt(d.getAttribute('ce103'), 10)
            pb()
            c(d)
        },
        Qa = function (c) {
            m = document.createElement('DIV')
            m.id = 'ce107' + c.id
            m.style.backgroundColor = '#fff'
            C(b) && (m.className = b)
            m.style.position = 'absolute'
            m.style.padding = '2px'
            m.style.overflow = 'auto'
            m.style.display = 'inline-block'
            e && (m.style.zIndex = $rule.topZindex(document.body))
            document.body.appendChild(m)
        },
        pb = function () {
            for (var c = 0; c < r.length; c++) u(r[c])
        }
}
$rule.Time.Settings = function (b) {
    this.us = -1 < b.indexOf('t')
    this.h = -1 < b.indexOf('h') || -1 < b.indexOf('H')
    this.m = -1 < b.indexOf('m')
    this.s = -1 < b.indexOf('s')
    this.dp = this.h || this.m || this.s
}
$rule.Time.Picker = function (b, e) {
    var d = $rule,
        m = null,
        l,
        q,
        n,
        B,
        A,
        H = !1,
        p = new Date()
    var r = p.getHours()
    var c = p.getMinutes()
    var u = p.getSeconds()
    this.defaultFormat = function () {
        return m ? m.defaultFormat() : 'hh:mm tt'
    }
    this.show = function (b, l, e, m, p) {
        B = b
        n = l
        A = d.defined(e) ? e : 'hh:mm tt'
        H = m
        d.defined(p) &&
            ((r = p.getHours()), (c = p.getMinutes()), (u = p.getSeconds()))
        N()
        O()
    }
    this.hide = function () {
        d.defined(l) && d.defined(l.parentNode) && l.parentNode.removeChild(l)
    }
    this.position = function () {
        O()
    }
    this.getId = function () {
        return d.defined(l) ? l.id : null
    }
    var N = function () {
        l = document.createElement('TABLE')
        l.id = 'ce110' + B.id
        l.insertRow(-1).insertCell(-1)
        d.defined(b) && (l.className = b)
        l.cellSpacing = 0
        l.cellPadding = 2
        l.style.position = 'absolute'
        e && (l.style.zIndex = $rule.topZindex(document.body))
        q = document.createElement('TABLE')
        q.id = 'ce111' + B.id
        q.setAttribute('ce108', 'true')
        q.cellSpacing = 0
        q.cellPadding = 2
        var p = q.insertRow(-1).insertCell(-1)
        p.style.padding = '2px 6px'
        m = new d.Time.Control(p, A, C)
        m.setValue(r, c, u)
        l.rows[0].cells[0].appendChild(q)
        document.body.appendChild(l)
        l.onclick = function (c) {
            c = c || window.event
            c.cancelBubble = !0
            return !1
        }
    },
        C = function () {
            p = m.getRawValue()
            r = p.getHours()
            c = p.getMinutes()
            u = p.getSeconds()
            d.defined(n) && n(m.getValue(), m.getText())
        },
        O = function () {
            d.defined(B) && (d.position(B, l), H && d.leftAlign(B, l))
        }
}
$rule.Time.Control = function (b, e, d) {
    function m(c, d, b) {
        if (A.defined(c) && A.defined(c.options) && 0 != c.options.length) {
            for (var l = !1, e = 0; e < c.options.length; e++)
                if ((!b && c.options[e].text == d) || (b && c.options[e].value == d)) {
                    c.selectedIndex = e
                    l = !0
                    break
                }
            l || (c.selectedIndex = 0)
        }
    }
    function l(c) {
        return A.defined(c) && A.defined(c.options) && -1 != c.selectedIndex
            ? c.options[c.selectedIndex].value
            : null
    }
    function q(c) {
        return A.defined(c) && A.defined(c.options) && -1 != c.selectedIndex
            ? c.options[c.selectedIndex].text
            : null
    }
    function n(c, d, b) {
        var l = document.createElement('OPTION')
        l.text = d
        l.value = b
        A.Client.browser == A.Client.type.IE ? c.options.add(l) : c.appendChild(l)
    }
    function B(c, d, b, l) {
        for (--d; d < b; d++) {
            var e = d + 1
            n(c, l && 10 > e ? '0' + e : e, e)
        }
    }
    var A = $rule
    e = A.defined(e) ? e : 'hh:mm tt'
    var H = new A.Time.Settings(e),
        p = function () {
            if (!H.h) return 0
            if (H.us) {
                var c = parseInt(l(u), 10)
                return 'AM' == l(O) ? (12 == c ? 0 : c) : 12 == c ? c : c + 12
            }
            return parseInt(l(u), 10)
        },
        r = function (c) {
            var d = document.createElement('SELECT')
            d.id = c
            d.style.width = '44px'
            b.appendChild(d)
            B(d, 0, 59, !0)
            return d
        },
        c = function () {
            var c = document.createElement('SPAN')
            c.innerHTML = '<b>:</b>'
            c.style.marginLeft = '2px'
            c.style.marginRight = '2px'
            b.appendChild(c)
        },
        u = null,
        N = null,
        C = null,
        O = null
    H.h &&
        ((u = document.createElement('SELECT')),
            (u.id = 'ce113' + b.id),
            (u.style.width = '44px'),
            b.appendChild(u),
            H.us ? (n(u, '12', 12), B(u, 1, 11, !1)) : B(u, 0, 23, !0))
    H.h && H.m && c()
    H.m && (N = r('ce114' + b.id))
    H.s && (c(), (C = r('ce115' + b.id)))
    H.h &&
        H.us &&
        ((O = document.createElement('SELECT')),
            (O.id = 'ce116' + b.id),
            (O.style.width = '44px'),
            (O.style.marginLeft = '4px'),
            b.appendChild(O),
            n(O, 'AM', 'AM'),
            n(O, 'PM', 'PM'))
        ; (function () {
            var c = document.createElement('INPUT')
            c.id = 'ce112' + b.id
            c.type = 'button'
            c.style.marginLeft = '4px'
            c.value = 'OK'
            b.appendChild(c)
            c.onclick = function (c) {
                c = c || window.event
                c.cancelBubble = !0
                d()
            }
        })()
    this.defaultFormat = function () {
        return 'hh:mm tt'
    }
    this.getRawValue = function () {
        return new Date(
            '1/1/2000 ' + p() + ':' + (H.m ? q(N) : '00') + ':' + (H.s ? q(C) : '00')
        )
    }
    this.getValue = function () {
        return A.formatDate(this.getRawValue(), 'HH:mm:ss')
    }
    this.getText = function () {
        var c =
            (H.h ? q(u) : '00') +
            ':' +
            (H.m ? q(N) : '00') +
            ':' +
            (H.s ? q(C) : '00') +
            (H.h && H.us ? ' ' + q(O) : '')
        return A.formatDate(new Date('1/1/2000 ' + c), e)
    }
    this.setValue = function (c, d, b) {
        if (
            A.defined(c) &&
            A.defined(d) &&
            A.defined(b) &&
            0 != c.length &&
            0 != d.length &&
            0 != b.length
        ) {
            if (H.h)
                if (H.us) {
                    c = parseInt(c, 10)
                    var l = c - 12
                    13 > c ? ((l = 0 == c ? 12 : c), m(O, 'AM', !0)) : m(O, 'PM', !0)
                    m(u, l, !0)
                } else 2 > c.length ? m(u, c, !0) : m(u, c, !1)
            H.m && (2 > d.length ? m(N, d, !0) : m(N, d, !1))
            H.s && (2 > b.length ? m(C, b, !0) : m(C, b, !1))
        } else
            H.h && (u.selectedIndex = 0),
                H.m && (N.selectedIndex = 0),
                H.s && (C.selectedIndex = 0),
                H.h && H.us && (O.selectedIndex = 0)
    }
}
$rule.TextBox.Settings = function (b, e, d, m, l, q, n, B) {
    this.parent = b
    this.id = e
    this.css = d
    this.defCss = m
    this.max = l
    this.placeholder = q
    this.errVal = n
    this.errColor = B
}
$rule.TextBox.Control = function () {
    var b, e
    this.init = function (d) {
        e = d
        b = document.createElement('INPUT')
        b.type = 'text'
        b.id = e.id
        b.className = e.defCss
        b.maxLength = e.max
        b.placeholder = e.placeholder
        e.parent.appendChild(b)
        b.onfocus = function (d) {
            b.className = $rule.trim(b.className.replace(e.errColor, ''))
            b.className = e.css
            b.value.toLowerCase() == e.errVal.toLowerCase() && (b.value = '')
        }
        b.onblur = function (d) {
            d = $rule.trim(b.value)
            if (0 == d.length || d.toLowerCase() == e.errVal.toLowerCase())
                (b.className = $rule.trim(b.className.replace(e.errColor, ''))),
                    (b.className = e.defCss)
        }
    }
    this.getValue = function () {
        return b.value
    }
    this.setValue = function (d) {
        b.value = d
    }
    this.setClass = function (d) {
        b.className = d
    }
}
$rule.Calendar.Css = function () {
    this.container = 'ceCal'
    this.header = 'ceHeader'
    this.day = 'ceDay'
    this.today = 'ceToday'
    this.selected = 'ceSelected'
    this.dayRollover = 'ceRollover'
    this.weekDays = 'ceDays'
}
$rule.Calendar.Control = function (b, e) {
    var d = $rule,
        m,
        l,
        q,
        n,
        B = !1,
        A = d.defined(e) ? e : new d.Calendar.Css(),
        H,
        p,
        r,
        c,
        u = new Date()
    var N = u.getMonth()
    var C = u.getFullYear()
    var O = u.getHours()
    var F = u.getMinutes()
    var Ea = u.getSeconds()
    var ta = u.getDate()
    var Ia = (H = 0)
    this.show = function (c, b, l, e, p) {
        m = c
        q = b
        n = d.defined(l) ? l : 'MMM dd, yyyy'
        B = e
        d.defined(p) &&
            ((ta = p.getDate()),
                (H = C = p.getFullYear()),
                (Ia = N = p.getMonth()),
                (O = p.getHours()),
                (F = p.getMinutes()),
                (Ea = p.getSeconds()))
        nb()
        fb()
        Qa()
    }
    this.hide = function () {
        d.defined(c) && d.defined(c.parentNode) && c.parentNode.removeChild(c)
    }
    this.position = function () {
        fb()
    }
    this.defaultFormat = function () {
        return 'MMM dd, yyyy'
    }
    this.getId = function () {
        return d.defined(c) ? c.id : null
    }
    var Qa = function () {
        var c = d.getChildrenByTagName(p.rows[0].cells[1], 'SPAN', !1)
        c[0].innerHTML = d.abbrMonthNames[N]
        c[1].innerHTML = C
        pb()
    },
        pb = function () {
            var c = new Date(),
                b = new Date(C, N, 1),
                l = c.getFullYear(),
                e = c.getMonth()
            c = c.getDate()
            b = b.getDay()
            var m = 1,
                p = !0
            var q =
                1 == N && ((0 == C % 4 && 0 != C % 100) || 0 == C % 400)
                    ? 29
                    : d.days[N]
            for (var u = 1; u < r.rows.length; u++)
                for (var F = 0; F < r.rows[u].cells.length; F++) {
                    var B = r.rows[u].cells[F]
                    p = !0
                        ; (1 == u && F >= b) || (1 < u && m <= q)
                            ? ((B.innerHTML = m),
                                l == C && e == N && m == c && d.defined(A.today)
                                    ? ((B.className = A.today),
                                        B.setAttribute('ce117', A.today),
                                        (p = !1))
                                    : C == H && N == Ia && m == ta && d.defined(A.selected)
                                        ? ((B.className = A.selected),
                                            B.setAttribute('ce117', A.selected),
                                            (p = !1))
                                        : d.defined(A.day) && (B.className = A.day),
                                p && d.defined(A.day) && B.setAttribute('ce117', A.day),
                                (B.onclick = function (c) {
                                    var b = new d.Time.Settings(n).dp
                                    b || ((c = c || window.event), (c.cancelBubble = !0))
                                    for (var l = 1; l < r.rows.length; l++)
                                        for (var e = 0; e < r.rows[l].cells.length; e++)
                                            (c = r.rows[l].cells[e]),
                                                c.getAttribute('ce117') == A.today
                                                    ? (c.className = A.today)
                                                    : ((c.className = A.day),
                                                        c.setAttribute('ce117', A.day))
                                    ta = parseInt(d.text(this), 10)
                                    this.className != A.today &&
                                        d.defined(A.selected) &&
                                        ((this.className = A.selected),
                                            this.setAttribute('ce117', A.selected))
                                    b || Gb()
                                }),
                                (B.onmouseover = function (c) {
                                    d.defined(A.dayRollover) && (this.className = A.dayRollover)
                                }),
                                (B.onmouseout = function (c) {
                                    c = this.getAttribute('ce117')
                                    d.defined(c) && (this.className = c)
                                }),
                                m++)
                            : (d.defined(A.day) && (B.className = A.day),
                                (B.innerHTML = '&nbsp;'),
                                (B.onclick = B.onmouseover = B.onmouseout = null))
                }
        },
        Gb = function () {
            var c = N + 1 + '/' + ta + '/' + C
            u = new Date(c)
            N = u.getMonth()
            C = u.getFullYear()
            ta = u.getDate()
            Ia = N
            H = C
            if (new d.Time.Settings(n).dp) {
                var b = l.getRawValue()
                O = b.getHours()
                F = b.getMinutes()
                Ea = b.getSeconds()
                c += ' ' + O + ':' + F + ':' + Ea
            }
            d.defined(q) && q(c)
        },
        nb = function () {
            c = document.createElement('TABLE')
            c.id = 'ce120' + m.id
            c.setAttribute('ceCalendarControl', 'true')
            c.cellSpacing = 0
            c.cellPadding = 1
            var e = c.insertRow(-1)
            e = e.insertCell(-1)
            d.defined(A.container) && (c.className = A.container)
            c.style.position = 'absolute'
            b && (c.style.zIndex = $rule.topZindex(document.body))
            p = document.createElement('TABLE')
            p.id = 'ce121' + m.id
            p.setAttribute('ce118', 'true')
            d.defined(A.header) && (p.className = A.header)
            p.cellSpacing = p.cellPadding = 0
            p.style.width = '100%'
            var q = p.insertRow(-1),
                u = q.insertCell(-1)
            u.style.padding = '3px 0px 5px 6px'
            var B = $a(u, 'ce123' + m.id, '&#171;&#171;')
            B.style.marginRight = '4px'
            B.onclick = function (c) {
                c = c || window.event
                c.cancelBubble = !0
                --C
                Qa()
            }
            u = $a(u, 'ce124' + m.id, '&#171;')
            u.style.marginLeft = '2px'
            u.onclick = function (c) {
                c = c || window.event
                c.cancelBubble = !0
                0 == N ? ((N = 11), --C) : --N
                Qa()
            }
            B.style.cursor = u.style.cursor = 'pointer'
            u = q.insertCell(-1)
            u.style.width = '90px'
            u.style.textAlign = 'center'
            u.style.padding = '3px 0px 5px 0px'
            B = $a(u, 'ce125' + m.id, d.abbrMonthNames[N])
            u = $a(u, 'ce126' + m.id, C)
            B.style.marginRight = '2px'
            u.style.marginLeft = '2px'
            B.style.cursor = u.style.cursor = 'default'
            B = q.insertCell(-1)
            B.style.padding = '3px 6px 5px 0px'
            B.style.textAlign = 'right'
            q = $a(B, 'ce127' + m.id, '&#187;')
            q.style.marginRight = '2px'
            q.onclick = function (c) {
                c = c || window.event
                c.cancelBubble = !0
                11 == N ? ((N = 0), ++C) : ++N
                Qa()
            }
            B = $a(B, 'ce128' + m.id, '&#187;&#187;')
            B.style.marginLeft = '4px'
            B.onclick = function (c) {
                c = c || window.event
                c.cancelBubble = !0
                ++C
                Qa()
            }
            B.style.cursor = q.style.cursor = 'pointer'
            e.appendChild(p)
            r = ob()
            document.body.appendChild(c)
            new d.Time.Settings(n).dp &&
                ((e = c.insertRow(-1)),
                    (e = e.insertCell(-1)),
                    (e.style.padding = '0 4px 6px 4px'),
                    (e.style.textAlign = 'center'),
                    (l = new d.Time.Control(e, n, Gb)),
                    l.setValue(O, F, Ea))
        },
        ob = function () {
            var b = document.createElement('TABLE')
            b.id = 'ce148' + m.id
            b.cellSpacing = 1
            b.cellPadding = 0
            b.style.width = '100%'
            for (var l, e, p = 0; 7 > p; p++) {
                l = b.insertRow(-1)
                for (var n = 0; 7 > n; n++)
                    (e = l.insertCell(-1)),
                        0 == p && d.defined(A.weekDays) && (e.className = A.weekDays),
                        (e.innerHTML = '&nbsp;')
            }
            for (l = 0; l < b.rows[0].cells.length; l++)
                b.rows[0].cells[l].innerHTML = d.abbrWeekDayNames[l]
            c.rows[0].cells[0].appendChild(b)
            return b
        },
        $a = function (c, b, l) {
            var e = document.createElement('SPAN')
            d.defined(b) && (e.id = b)
            e.innerHTML = l
            c.appendChild(e)
            return e
        },
        fb = function () {
            d.defined(m) && (d.position(m, c), B && d.leftAlign(m, c))
        }
}
$rule.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
$rule.dayNames = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(
    ' '
)
$rule.abbrDayNames = 'Sun Mon Tue Wed Thu Fri Sat'.split(' ')
$rule.abbrWeekDayNames = 'SMTWTFS'.split('')
$rule.monthNames = 'January February March April May June July August September October November December '.split(
    ' '
)
$rule.abbrMonthNames = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec '.split(
    ' '
)
$rule.init = function (b) {
    data = new $rule.Json().deserialize((b && b.d) || b)
    $rule.defined(data.h) && ($rule.Help = data.h)
    $rule.Errors = data.e
    $rule.Context.addControl(
        data.id,
        new $rule.Control({ element: data.id, asp: !1, z: data.z })
    )
    return $ce(data.id)
}
$rule.Settings = function (b) {
    this.help = b.ui[0]
    this.isEval = b.ui[1]
    this.evalIf = b.ui[2]
    this.execIf = b.ui[3]
    this.tools = b.ui[4]
    this.pb = b.ui[5]
    this.tochki = b.ui[6]
    this.clicks = b.ui[7]
    this.titles = b.ui[8]
    this.right = b.ui[9]
    this.mode = b.ui[10]
    this.tId = b.ui[11]
    this.tUrl = b.ui[12]
    this.tCoId = b.ui[13]
    this.tCoUrl = b.ui[14]
    this.els = b.s
    this.clientFlds = []
}
$rule.Control = function (b) {
    var e = $rule,
        d,
        m,
        l,
        q,
        n,
        B,
        A,
        H,
        p = null,
        r,
        c = null,
        u = null,
        N = [],
        C = [],
        O = [],
        F,
        Ea = [],
        ta = null,
        Ia = null,
        Qa = null,
        pb,
        Gb,
        nb,
        ob,
        $a,
        fb,
        na = null,
        oa,
        Z,
        ua,
        ab,
        Ra,
        yb = null,
        ca = !0,
        pa,
        Ca,
        va = null,
        Sa = 0,
        Gc = !1,
        cc = !1,
        fa = null,
        gb = !1,
        ha = null,
        Fa = !1,
        Q = !1,
        da = !1,
        L = !1,
        qa = 0,
        dc = 0,
        ec = 0,
        R = this,
        h = e.defined,
        qb = new e.Json(),
        Ta,
        fc,
        Mb,
        Hc = e.getChildrenByAttribute,
        y = null,
        Nb,
        Hb,
        Ib,
        gc = !1,
        hc = !1,
        rb = null,
        ic = null,
        jc = null,
        kc = null
    if (!h(b)) throw Error('Params object is expected (CL242)')
    var w = {
        clientOnly: !1,
        container: null,
        form: null,
        field: null,
        id: 'ceDefaultID',
        asp: b.asp || !1,
        useZindex: b.z || !1,
        fieldId: b.h || null
    }
    if (h(b.element))
        if ('string' === typeof b.element) w.id = b.element
        else {
            if ('object' !== typeof b.element)
                throw Error('Invalid value of the main container (CL246)')
            w.container = b.element
            if (h(b.element.id) && 0 < $rule.trim(b.element.id).length)
                w.id = b.element.id
            else throw Error("The editor's container must have id (CL246)")
        }
    else
        throw Error(
            'Pars.element value must be either a DOM element or its id (CL244)'
        )
    R.loadSettings = function (a) {
        Nb = (a && a.d) || a
        Ic()
        return R
    }
    R.loadRule = function (a) {
        Ib = (a && a.d) || a
        if (h(Ib)) return lc(), R
    }
    R.loadInvalids = function (a) {
        Hb = (a && a.d) || a
        if (h(Hb)) return mc(), R
    }
    R.setClientActions = function (a, c, d) {
        ic = d
        jc = c
        kc = a
        return R
    }
    R.getRuleId = function () {
        return fa
    }
    R.isEvaluationType = function () {
        return p ? p.isEval : !0
    }
    R.saved = function (a) {
        function c(a, c) {
            return a.Name.localeCompare(c.Name)
        }
        function d(a, c) {
            return a.n.localeCompare(c.n)
        }
        if (!w.clientOnly) return R
        h(a) && (fa = a)
        h(fa) && fa != a && Jc()
        var k = [],
            b = !1
        if (p.tools) {
            for (var l = 0; l < O.length; l++)
                (a = O[l]),
                    'ceEval' != a.ID &&
                    'ceExec' != a.ID &&
                    (a.ID == fa && ((a.Name = zb(ua.getValue())), (b = !0)),
                        k.push({ ID: a.ID, Name: a.Name }))
            b ||
                ((a = new e.Menu.Item()),
                    (a.ID = fa),
                    (a.Name = zb(ua.getValue())),
                    k.push(a))
            k.sort(c)
            p.els.rls = k
            Kc()
        }
        if (p.isEval) {
            b = !1
            for (k = 0; k < y.fds.length; k++)
                if (((a = y.fds[k]), a.ir && a.v == fa)) {
                    a.n = zb(ua.getValue())
                    b = !0
                    break
                }
            b ||
                ((a = {
                    n: zb(ua.getValue()),
                    v: fa,
                    o: 4,
                    t: 1,
                    ai: 2,
                    ir: !0,
                    l: !1
                }),
                    y.fds.push(a))
            y.fds.sort(d)
        }
        return R
    }
    R.deleted = function (a) {
        for (var c = [], d, k = 0; k < O.length; k++)
            (d = O[k]), d.ID != a && c.push(d)
        O = c
        if (p.isEval) {
            c = []
            for (k = 0; k < y.fds.length; k++) (d = y.fds[k]), d.v != a && c.push(d)
            y.fds = c
        }
        return R
    }
    R.extract = function () {
        rb = 'ceExtract'
        gb = !1
        return qb.serialize(Ob())
    }
    R.clear = function () {
        Lc()
        return R
    }
    R.dispose = function () {
        Ab()
        Pb('ceMenu')
        Pb('ceTime')
        e.removeHandlers(window)
        e.removeHandlers(document)
        h(w.form) && e.removeHandlers(w.form)
        if (h(w.container) && !h(w.form)) {
            var a = e.getChildrenByAttribute(
                document.body,
                'ce',
                'form' + w.container.id
            )
            if (h(a) && 0 < a.length)
                try {
                    var c = a[0]
                    document.body.removeChild(c)
                    var d = document.getElementById(w.fieldId)
                    h(d) && c.removeChild(d)
                } catch (k) { }
        }
        return R
    }
    R.redraw = function () {
        Mc()
        return R
    }
    R.disable = function () {
        Ab()
        r = 9
        return R
    }
    R.enable = function () {
        Ab()
        return R
    }
    R.init = function (a) {
        Nb = a
        e.addHandlers(window, { load: Ic }, R)
    }
    R.load = function (a) {
        h(a) && ((Ib = a), e.addHandlers(window, { load: lc }, R))
    }
    R.invalid = function (a) {
        h(a) && ((Hb = a), e.addHandlers(window, { load: mc }, R))
    }
    R.valid = function () {
        nc()
        wa()
    }
    R.post = function () {
        oc()
    }
    var Ic = function () {
        p = new $rule.Settings(qb.deserialize(Nb))
        Nb = null
        if (!h(p.els.src) || 0 == p.els.src.length) throw Error('CL87')
        d = e.Client.ElementType
        m = e.Client.FunctionType
        A = e.Client.CollectionType
        H = e.Client.SelectionType
        l = e.Models.OperatorType
        q = e.Client.InputType
        n = e.Client.CalculationType
        B = e.Common.ValueInputType
        Ta = $rule.getBounds
        fc = e.Client.browser == e.Client.type.IE
        Mb = e.Client.browser == e.Client.type.Opera
        ec = 0
        w.container = document.getElementById(w.id)
        w.fieldId
            ? (w.field = document.getElementById(w.fieldId))
            : (w.clientOnly = !0)
        M(null)
            ; (h(p.els.str) && p.els.str.length) || (p.els.str = [])
        p.els.ens && 0 < p.els.ens.length ? Nc(p.els.ens, !0) : (p.els.ens = [])
        p.els.mds && 0 < p.els.mds.length ? Nc(p.els.mds, !1) : (p.els.mds = [])
        if (w.clientOnly) {
            if (h(p.tId) && h(p.tUrl)) {
                var a = Hc(document, p.tId)
                0 < a.length && (a[0].href = p.tUrl)
            }
            h(p.tCoId) &&
                h(p.tCoUrl) &&
                ((a = Hc(document, p.tCoId)), 0 < a.length && (a[0].href = p.tCoUrl))
        }
        p.els.ms = p.help && h(e.Help) ? e.Help : {}
        p.els.er = e.Errors
        w.asp ||
            w.clientOnly ||
            ((w.form = e.getParentByTagName(w.container, 'FORM')),
                h(w.form) && e.addHandlers(w.form, { submit: oc }, this))
        a = '_' + w.id
        var c = document.getElementById(a)
        h(c) && (c.innerHTML = '')
        p.tools
            ? (Kc(), rd())
            : ((oa = document.getElementById('ceT' + w.container.id)),
                h(oa) && oa.parentNode.removeChild(oa),
                (oa = null))
        if (p.help)
            if (h(p.els.ms.i101)) {
                var t = 'ceH' + w.container.id
                Z = document.getElementById(t)
                h(Z) && Z.parentNode.removeChild(Z)
                Z = document.createElement('DIV')
                Z.id = t
                Z.className = 'ceHelp'
                w.container.appendChild(Z)
                Z.innerHTML = p.els.ms.i101
            } else Oc()
        else Oc()
        h(c) || ((c = document.createElement('DIV')), (c.id = a))
        c.className = 'ceRule'
        w.container.appendChild(c)
        w.container = c
        Pc()
        r = 2
        F = ''
        Fa = !1
        Pb('ceMenu')
        Pb('ceTime')
        Gc ||
            ((va = new e.Menu.Control('ceMenu', w.useZindex)),
                (pa = new e.Calendar.Control(w.useZindex)),
                (Ca = new e.Time.Picker('ceTime', w.useZindex)),
                e.addHandlers(document, { click: sd }, this),
                e.addHandlers(w.container, { touchstart: td }, this),
                e.addHandlers(w.container, { touchend: ud }, this),
                e.addHandlers(w.container, { touchmove: vd }, this),
                e.addHandlers(w.container, { contextmenu: wd }, this),
                e.addHandlers(document, { keydown: xd, keypress: yd, keyup: zd }, this),
                va.init(this, p.help ? wa : null),
                e.addHandlers(window, { resize: Mc }, this),
                (Gc = !0))
        hc && lc()
        gc && mc()
        gc = hc = !1
    },
        lc = function () {
            if (h(p)) {
                var a = qb.deserialize(Ib)
                if (0 != a.length) {
                    fa = a[0].g
                    p.isEval = a[0].v
                    if (p.tools) {
                        h(fa) && Jc()
                        var g = a[0].n,
                            t = a[0].d
                        h(g) && 0 < g.length
                            ? (ua.setValue(Jb(g)), ua.setClass('ceNameBox'))
                            : (ua.setValue(''), ua.setClass('ceNameBoxDefault'))
                        h(t) && 0 < t.length
                            ? (ab.setValue(Jb(t)), ab.setClass('ceDescriptionBox'))
                            : (ab.setValue(''), ab.setClass('ceDescriptionBoxDefault'))
                    }
                    Sa = a.length + 1
                    Qc()
                    for (
                        var k, b, Ja = null, E = null, z = 0, I = 0, v, w = null, x = 1;
                        x < a.length;
                        x++
                    ) {
                        g = a[x]
                        if (!h(g)) break
                        v = !1
                        if (g.t == d.NewLine) hb(!1, !0)
                        else if (g.t == d.Tab)
                            P({
                                t: g.t,
                                id: null,
                                v: '',
                                n: '&nbsp;',
                                st: null,
                                ct: null,
                                ft: null,
                                fv: !1,
                                it: null,
                                h: !0
                            })
                        else {
                            t = h(g.n) ? g.n : null
                            switch (g.t) {
                                case d.Flow:
                                    b = D(p.els.fls, g.v)
                                    if (!h(b)) {
                                        alert(
                                            'This rule cannot be properly loaded using the current Mode'
                                        )
                                        return
                                    }
                                    switch (g.v) {
                                        case 'if':
                                            k = p.isEval ? p.evalIf : p.execIf
                                            break
                                        case 'elseIf':
                                            k = 4 == p.mode ? (p.isEval ? p.evalIf : p.execIf) : b.n
                                            break
                                        default:
                                            k = b.n
                                    }
                                    break
                                case d.LeftSource:
                                    k = p.els.lbl.ub
                                    break
                                case d.RightSource:
                                    k = p.els.lbl.ue
                                    break
                                case d.LeftParenthesis:
                                    k = p.els.lbl.pb
                                    break
                                case d.RightParenthesis:
                                    k = p.els.lbl.pe
                                    break
                                case d.LeftBracket:
                                    k = p.els.lbl.cb
                                    break
                                case d.RightBracket:
                                    k = p.els.lbl.ce
                                    break
                                case d.Action:
                                case d.Function:
                                    switch (g.f) {
                                        case m.Name:
                                            I = 0
                                            u = null
                                            if (g.d) (z = 0), (k = g.v), (v = !0)
                                            else {
                                                b = D(g.t == d.Action ? y.acs : y.fds, g.v)
                                                if (!h(b)) throw Error('CL11')
                                                k = 0 < b.ps.length ? b.n + '&nbsp;(' : b.n
                                                z = b.ps.length
                                                g.t == d.Function &&
                                                    (b.rt.o == l.Enum
                                                        ? (u = sb(b.rt.e))
                                                        : b.rt.o == l.Numeric && h(b.rt.mds)
                                                            ? (u = ib(b.rt.mds, b.ftr))
                                                            : b.rt.o == l.Date
                                                                ? (Ja = b.rt.f)
                                                                : b.rt.o == l.Time && (E = b.rt.f))
                                            }
                                            break
                                        case m.Param:
                                            if (g.i == q.Field)
                                                (b = D(y.fds, g.v)),
                                                    h(b) ? (k = b.n) : ((k = g.v), (v = !0))
                                            else if (g.o == l.String) k = e.encode(e.decode(g.v))
                                            else if (g.o == l.Numeric)
                                                (b = aa(c)),
                                                    b.ps.length >= I && h(b.ps[I].mds)
                                                        ? ((k = ib(b.ps[I].mds, b.ps[I].ftr)),
                                                            h(k) && 0 < k.length
                                                                ? ((g.i = q.Field),
                                                                    (k = D(k, g.v)),
                                                                    h(k) ? (k = k.Name) : ((k = g.v), (v = !0)))
                                                                : ((v = !0), (k = g.v)))
                                                        : (k = g.v)
                                            else if (g.o == l.Date)
                                                k = e.formatDate(
                                                    new Date(g.v),
                                                    h(g.r) ? g.r : pa.defaultFormat()
                                                )
                                            else if (g.o == l.Time)
                                                k = e.formatDate(
                                                    new Date('1/1/2010 ' + g.v),
                                                    h(g.r) ? g.r : Ca.defaultFormat()
                                                )
                                            else if (g.o == l.Enum)
                                                (k = D(sb(g.e), g.v)),
                                                    h(k) ? (k = k.Name) : ((k = g.v), (v = !0))
                                            else if (g.o == l.Bool) k = Kb(g.v)
                                            else throw Error('CL22')
                                            I++
                                            break
                                        case m.Comma:
                                            k = ','
                                            break
                                        case m.End:
                                            k = 0 < z ? ')' : '&nbsp;'
                                            z = I = 0
                                            break
                                        default:
                                            throw Error('CL36')
                                    }
                                    break
                                case d.Calculation:
                                    switch (g.c) {
                                        case n.Function:
                                            switch (g.f) {
                                                case m.Name:
                                                    I = 0
                                                    u = null
                                                    if (g.d) (z = 0), (k = g.v), (v = !0)
                                                    else {
                                                        b = D(y.fds, g.v)
                                                        if (!h(b)) throw Error('CL11')
                                                        k = 0 < b.ps.length ? b.n + '&nbsp;(' : b.n
                                                        z = b.ps.length
                                                        if (b.rt.o != l.Numeric) throw Error('CL13')
                                                        h(b.rt.mds) && (u = ib(b.rt.mds, b.ftr))
                                                    }
                                                    break
                                                case m.Param:
                                                    if (g.i == q.Field)
                                                        (b = D(y.fds, g.v)),
                                                            h(b) ? (k = b.n) : ((k = g.v), (v = !0))
                                                    else if (g.o == l.String) k = e.encode(e.decode(g.v))
                                                    else if (g.o == l.Numeric)
                                                        (b = aa(c)),
                                                            b.ps.length >= I && h(b.ps[I].mds)
                                                                ? ((k = ib(b.ps[I].mds, b.ps[I].ftr)),
                                                                    h(k) && 0 < k.length
                                                                        ? ((g.i = q.Field),
                                                                            (k = D(k, g.v)),
                                                                            h(k)
                                                                                ? (k = k.Name)
                                                                                : ((k = g.v), (v = !0)))
                                                                        : ((v = !0), (k = g.v)))
                                                                : (k = g.v)
                                                    else if (g.o == l.Date)
                                                        k = e.formatDate(
                                                            new Date(g.v),
                                                            h(g.r) ? g.r : pa.defaultFormat()
                                                        )
                                                    else if (g.o == l.Time)
                                                        k = e.formatDate(
                                                            new Date('1/1/2010 ' + g.v),
                                                            h(g.r) ? g.r : Ca.defaultFormat()
                                                        )
                                                    else if (g.o == l.Enum)
                                                        (k = D(sb(g.e), g.v)),
                                                            h(k) ? (k = k.Name) : ((k = g.v), (v = !0))
                                                    else if (g.o == l.Bool) k = Kb(g.v)
                                                    else throw Error('CL22')
                                                    I++
                                                    break
                                                case m.Comma:
                                                    k = ','
                                                    break
                                                case m.End:
                                                    k = 0 < z ? ')' : '&nbsp;'
                                                    z = I = 0
                                                    break
                                                default:
                                                    throw Error('CL36')
                                            }
                                            break
                                        case n.Field:
                                            b = D(y.fds, g.v)
                                            h(b) ? (k = b.n) : ((k = g.v), (v = !0))
                                            break
                                        case n.Number:
                                            k = g.v
                                            break
                                        case n.LeftParenthesis:
                                            k = p.els.lbl.pb
                                            break
                                        case n.RightParenthesis:
                                            k = p.els.lbl.pe
                                            break
                                        case n.Multiplication:
                                            k = '&#215;'
                                            break
                                        case n.Division:
                                            k = '&#247;'
                                            break
                                        case n.Addition:
                                            k = '&#43;'
                                            break
                                        case n.Subtraction:
                                            k = '&#150;'
                                            break
                                        default:
                                            throw Error('CL90')
                                    }
                                    break
                                case d.Field:
                                    g.d
                                        ? ((k = g.v), (u = Ja = E = null), (v = !0))
                                        : ((b = D(y.fds, g.v)),
                                            h(b)
                                                ? ((u =
                                                    g.o == l.Enum ||
                                                        (g.o == l.Collection && b.co == l.Enum)
                                                        ? h(b.e)
                                                            ? sb(b.e)
                                                            : b.ens
                                                        : (g.o == l.Numeric ||
                                                            (g.o == l.Collection && b.co == l.Numeric)) &&
                                                            h(b.mds)
                                                            ? ib(b.mds, b.ftr)
                                                            : null),
                                                    (Ja = g.o == l.Date && h(b.f) ? b.f : null),
                                                    (E = g.o == l.Time && h(b.f) ? b.f : null),
                                                    (k = b.n))
                                                : ((k = g.v), (u = Ja = E = null)))
                                    break
                                case d.Exists:
                                    h(g.v) || (g.v = g.y == H.DoesNotExist ? 'ce803' : 'ce802')
                                    k = pc(g.v)
                                    break
                                case d.Where:
                                    k = tb(p.els.dsc, 'where')
                                    break
                                case d.Clause:
                                    k = D(p.els.cls, g.v)
                                    if (h(k)) k = D(p.els.cls, g.v).n
                                    else {
                                        alert(
                                            'This rule cannot be properly loaded using the current Mode'
                                        )
                                        return
                                    }
                                    break
                                case d.Setter:
                                    k = tb(p.els.str, g.v)
                                    break
                                case d.Operator:
                                    k = Rc(g.v, g.o)
                                    h(k) ? (k = k.n) : ((k = 'is'), (v = !0))
                                    break
                                case d.Value:
                                    g.o == l.Enum
                                        ? h(u) && 0 != u.length
                                            ? ((b = D(u, g.v)),
                                                h(b)
                                                    ? (k = b.Name)
                                                    : ((b = D(y.fds, g.v)),
                                                        h(b) ? (k = b.n) : ((k = g.v), (v = !0))))
                                            : ((k = '[Unknown]'), (v = !0))
                                        : g.i == q.Field
                                            ? ((b = D(y.fds, g.v)),
                                                h(b) ? (k = b.n) : ((k = g.v), (v = !0)))
                                            : g.o == l.String
                                                ? (k =
                                                    0 == g.v.length
                                                        ? p.els.lbl.em
                                                        : e.encode(e.decode(g.v)))
                                                : g.o == l.Numeric
                                                    ? h(u) && 0 < u.length
                                                        ? ((g.i = q.Field),
                                                            (k = D(u, g.v)),
                                                            h(k) ? (k = k.Name) : ((k = g.v), (v = !0)))
                                                        : (k = g.v)
                                                    : (k =
                                                        g.o == l.Date
                                                            ? e.formatDate(
                                                                new Date(g.v),
                                                                h(Ja) ? Ja : pa.defaultFormat()
                                                            )
                                                            : g.o == l.Time
                                                                ? e.formatDate(
                                                                    new Date('1/1/2010 ' + g.v),
                                                                    h(E) ? E : Ca.defaultFormat()
                                                                )
                                                                : Kb(g.v))
                            }
                            P({
                                t: g.t,
                                id: t,
                                v: g.v,
                                n: k,
                                st: g.o,
                                ct: g.c,
                                co: g.co,
                                cn: g.cn,
                                ft: g.f,
                                it: g.i,
                                h: !0,
                                fv: g.q
                            })
                                ; (g.t != d.LeftSource && g.t != d.RightSource) || M(c)
                            jb(g.t, g.o, g.c, g.i) && ra()
                            v && ((c.className += ' ceWarn'), (w = p.els.er.e107))
                        }
                    }
                    u = Ib = null
                    r = 0
                    Ab()
                    h(w) && alert(w)
                }
            } else hc = !0
        },
        mc = function () {
            if (h(p)) {
                var a = qb.deserialize(Hb)
                if (0 != a.length) {
                    a[0].e &&
                        h(ua) &&
                        (ua.setValue(p.els.er.e104), ua.setClass('ceNameBox ceError'))
                    for (var c = 1; c < a.length; c++) {
                        var d = a[c],
                            k = document.getElementById(d.c || d.ClientID)
                        h(k) &&
                            ((k.className += ' ceHighlight'),
                                (k.title = d.h || d.Hint),
                                N.push(k.id))
                    }
                    p.help &&
                        (1 < a.length
                            ? (ub(p.els.er.e102), (Z.className += ' ceError'))
                            : a[0].e && (ub(p.els.er.e103), (Z.className += ' ceError')))
                    Hb = null
                }
            } else gc = !0
        },
        oc = function () {
            w.clientOnly || ((gb = !1), (w.field.value = qb.serialize(Ob())))
        },
        Ob = function () {
            if (0 < e.getChildrenByTagName(w.container, 'INPUT', !1).length)
                Bb(p.els.er.e114)
            else {
                M(null)
                var a = La(),
                    c = !1,
                    t = new e.Models.RuleModel()
                t.Elements = []
                h(fa) && (t.Id = fa)
                t.IsLoadedRuleOfEvalType = p.isEval
                t.Command = rb
                t.Mode = p.mode
                if (!gb) {
                    if (p.tools) {
                        var k = ua.getValue()
                        t.Name =
                            0 == e.trim(k).length ||
                                e.trim(k).toLowerCase() == p.els.er.e104.toLowerCase()
                                ? null
                                : zb(k)
                        k = ab.getValue()
                        t.Desc =
                            0 == e.trim(k).length ||
                                e.trim(k).toLowerCase() == p.els.er.e104.toLowerCase()
                                ? null
                                : zb(k)
                        t.SkipNameValidation = !1
                    } else t.SkipNameValidation = !0
                    for (var b = 0; b < a.length; b++) {
                        var n = a[b]
                        var E = x(n)
                        if (h(E) && E != d.HtmlTag) {
                            k = new e.Client.Element()
                            k.Type = E
                            k.Name = n.id
                            k.Oper = ba(n, !0)
                            k.FuncType = J(n)
                            k.InpType = za(n)
                            k.CalType = T(n)
                            switch (E) {
                                case d.Field:
                                    k.Value = n.getAttribute('ce208')
                                    k.IsRule = 'true' == n.getAttribute('ce213')
                                    E = D(y.fds, k.Value)
                                    c = h(E) && h(E.mds)
                                    switch (k.Oper) {
                                        case l.String:
                                            h(E) && (k.Max = E.max)
                                            break
                                        case l.Numeric:
                                            h(E) &&
                                                ((k.Dec = E.dec),
                                                    (k.Cal = E.cal),
                                                    (k.Min = E.min),
                                                    (k.Max = E.max),
                                                    h(E.mds) && ((k.InpType = q.Input), (c = !0)))
                                            break
                                        case l.Date:
                                        case l.Time:
                                            h(E) && (k.Format = E.f)
                                            break
                                        case l.Enum:
                                            h(E) && (k.En = E.e)
                                            break
                                        case l.Collection:
                                            if (h(E) && ((k.CollType = E.ct), E.ct == A.Value))
                                                switch (E.co) {
                                                    case l.String:
                                                        k.Max = E.max
                                                        break
                                                    case l.Numeric:
                                                        k.Dec = E.dec
                                                        k.Cal = E.cal
                                                        k.Min = E.min
                                                        k.Max = E.max
                                                        E.co == l.Numeric &&
                                                            h(E.mds) &&
                                                            ((k.InpType = q.Input), (c = !0))
                                                        break
                                                    case l.Date:
                                                    case l.Time:
                                                        k.Format = E.f
                                                        break
                                                    case l.Enum:
                                                        k.En = E.e
                                                }
                                    }
                                    break
                                case d.LeftSource:
                                    M(n)
                                    k.Value = n.getAttribute('ce208')
                                    break
                                case d.RightSource:
                                    M(n)
                                    k.Value = n.getAttribute('ce208')
                                    break
                                case d.Value:
                                    k.Value = $rule.decode(n.getAttribute('ce206'), !0)
                                    k.Oper == l.Numeric &&
                                        c &&
                                        ((E = D(y.fds, k.Value)), h(E) || (k.InpType = q.Input))
                                    c = !1
                                    break
                                case d.Calculation:
                                    h(n.getAttribute('ce206')) &&
                                        (k.Value = n.getAttribute('ce206'))
                                    break
                                case d.Action:
                                case d.Function:
                                    if (E == d.Function && k.FuncType == m.Name)
                                        (k.Value = n.getAttribute('ce208')),
                                            (k.IsFuncValue = 'true' == n.getAttribute('ce216')),
                                            (E = D(y.fds, k.Value)),
                                            (c = h(E) && h(E.rt.mds))
                                    else if (k.FuncType == m.Param) {
                                        var z = n
                                        E = k.Oper
                                        var r = aa(z)
                                        var v = null
                                        h(r) &&
                                            ((z = Wa(z)),
                                                (v =
                                                    0 <= z && r.ps.length >= z && r.ps[z].o == E
                                                        ? r.ps[z]
                                                        : Sc(r, E, 0 > z ? 0 : z)))
                                        r = v
                                        if (k.InpType == q.Input) {
                                            if (h(r))
                                                switch (k.Oper) {
                                                    case l.String:
                                                        k.Max = r.max
                                                        break
                                                    case l.Numeric:
                                                        k.Dec = r.dec
                                                        k.Min = r.min
                                                        k.Max = r.max
                                                        break
                                                    case l.Date:
                                                    case l.Time:
                                                        k.Format = r.f
                                                        break
                                                    case l.Enum:
                                                        k.En = r.e
                                                }
                                            h(n.getAttribute('ce206')) &&
                                                (k.Value = n.getAttribute('ce206'))
                                        } else
                                            (k.Value = n.getAttribute('ce208')),
                                                (E = D(y.fds, k.Value)),
                                                h(r) &&
                                                r.o == l.Numeric &&
                                                h(r.mds) &&
                                                !h(E) &&
                                                (k.InpType = q.Input)
                                    } else
                                        (k.Value = n.getAttribute('ce208')),
                                            E == d.Function &&
                                            ((k.IsFuncValue = 'true' == n.getAttribute('ce216')),
                                                D(y.fds, k.Value))
                                    break
                                case d.Exists:
                                case d.Where:
                                    switch (n.getAttribute('ce208')) {
                                        case 'ce803':
                                            k.SelType = H.DoesNotExist
                                            break
                                        default:
                                            k.SelType = H.Exists
                                    }
                                    E = Xa(n, d.Field)
                                    h(E)
                                        ? ((E = D(y.fds, E.getAttribute('ce208'))),
                                            h(E) ? (k.CollType = E.ct) : (k.CollType = A.Generic))
                                        : (k.CollType = A.Generic)
                                    k.Value = n.getAttribute('ce208')
                                    break
                                default:
                                    k.Value = n.getAttribute('ce208')
                            }
                            t.Elements.push(k)
                        }
                    }
                }
                return t
            }
        },
        vd = function (a) {
            a.preventDefault()
            a.stopPropagation()
            return !1
        },
        wd = function (a) {
            a.preventDefault()
            a.stopPropagation()
            return !1
        },
        td = function (a) {
            if (9 == r) return !1
            Qa = a.target
            ob = nb = fb = 0
            $a = new Date().getTime()
            a.changedTouches &&
                ((a = a.changedTouches[0]), (pb = a.pageX), (Gb = a.pageY))
            na = setTimeout(function () {
                0 === fb &&
                    (h(Qa) && h(Qa.getAttribute('ce202'))
                        ? Tc({ keyCode: 13 })
                        : qc({ keyCode: 32 }))
                na = null
            }, 600)
        },
        ud = function (a) {
            h(na) && clearTimeout(na)
            na = null
            a.changedTouches &&
                ((a = a.changedTouches[0]),
                    (nb = a.pageX - pb),
                    (ob = a.pageY - Gb),
                    250 >= new Date().getTime() - $a &&
                    (60 <= Math.abs(nb) && 30 >= Math.abs(ob)
                        ? (fb = 0 > nb ? 4 : 2)
                        : 60 <= Math.abs(ob) &&
                        30 >= Math.abs(nb) &&
                        (fb = 0 > ob ? 1 : 3)))
            switch (fb) {
                case 2:
                    rc({ keyCode: 127 })
                    break
                case 3:
                    qc({ keyCode: 32 })
                    break
                case 4:
                    rc({ keyCode: 8 })
            }
        },
        Cd = function (a) {
            function g(a) {
                sa(a) ? Ua(a) : (c = G(a))
            }
            function b(a) {
                a = sc(c, m.End)
                h(a) && ((c = G(a)), bb())
            }
            function k(a, g) {
                var k = Ga(c),
                    b = null
                if (k && ((b = X(a.previousSibling)), x(b) == d.Function)) {
                    var t = Cb(b, m.Name)
                    if (!h(t)) return
                    b = X(t.previousSibling)
                }
                t = []
                if (T(c) == n.Function)
                    for (
                        k = Qb(g), K('ce801', l.Numeric, cb(l.Numeric), t), b = 0;
                        b < k.length;
                        b++
                    )
                        t.push(k[b])
                else {
                    t = ba(a, !0)
                    b = !k || (x(b) == d.Setter && 'to' == b.getAttribute('ce208'))
                    var e = D(y.fds, g)
                    if (h(e)) {
                        var ka = h(e.ftr) ? e.ftr : null
                        e = e.t == d.Function ? e.rt : e
                        var z = e.o
                        var q = e.co
                        var r = e.e
                        var E = e.mds
                        h(e.mds) && (ka = null)
                        var u = e.cc
                        var w = e.cl
                        var F = e.cv
                        var Ka = []
                        if (h(e) && 'true' == c.getAttribute('ce216')) {
                            var I = e.t == d.Function ? e.rt.ai : e.ai,
                                C = e.t == d.Function ? e.rt.o : e.o
                                ; (C == l.Numeric && e.t == d.Function ? e.rt.cal : e.cal) &&
                                    K('C', C, p.els.lbl.c, Ka)
                            I == B.All && K('ce801', C, cb(C), Ka)
                        }
                        for (e = 0; e < y.fds.length; e++)
                            (I = y.fds[e]),
                                (I.ir && k) ||
                                (k && h(I.st) && !I.st) ||
                                (I.ir && ((h(fa) && I.v == fa) || t != l.Bool)) ||
                                I.v == g ||
                                ((C = h(I.ftr) ? I.ftr : null),
                                    I.t == d.Function
                                        ? b &&
                                        (I.rt.o != t ||
                                            (z == l.Enum && r != I.rt.e) ||
                                            I.mds != E ||
                                            (null != ka && 'any' != ka && ka != C && 'any' != C) ||
                                            Ka.push(I))
                                        : z == l.Collection && I.o == l.Collection
                                            ? I.ct == A.Reference && I.cc == u && I.cl == w && I.cv == F
                                                ? Ka.push(I)
                                                : I.ct != A.Value ||
                                                I.co != q ||
                                                (q == l.Enum && r != I.e) ||
                                                I.mds != E ||
                                                Ka.push(I)
                                            : I.o != t ||
                                            (z == l.Enum && r != I.e) ||
                                            I.mds != E ||
                                            (null != ka && 'any' != ka && ka != C && 'any' != C) ||
                                            Ka.push(I))
                        t = Ka
                    } else t = []
                }
                0 < t.length
                    ? ((Q = !0), v(t, a, Ja, null))
                    : Ga(c) ||
                    ((da = !1),
                        (k = D(y.fds, g)),
                        h(k) &&
                        (k.t == d.Function
                            ? 0 < k.ps.length
                                ? ((c = G(a)), Va(k))
                                : Db(k)
                            : (k.o == l.Collection && k.ct != A.Value) ||
                            v(db(k), a, Ya, null)))
            }
            function ka(a, g) {
                for (var d = [], k, b = 0; b < y.acs.length; b++)
                    (k = y.acs[b]), k.v != g && d.push(k)
                1 < d.length || (1 == d.length && d[0].v != g)
                    ? ((Q = !0), v(d, a, E, null))
                    : ((da = !1), (d = Rb()), 0 < d.length && v(d, c, Sb, null))
            }
            function Ja(a, g) {
                var k = 'true' == c.getAttribute('ce216'),
                    t = T(c) == n.Function
                x(c) == d.Function || (x(c) == d.Calculation && J(c) == m.Name)
                    ? b(a)
                    : (L = !0)
                if ('ce801' == a)
                    switch (parseInt(g, 10)) {
                        case l.Numeric:
                            Ma({
                                t: t ? d.Calculation : d.Value,
                                v: '',
                                st: l.Numeric,
                                ct: t ? n.Number : n.None,
                                ft: m.None,
                                span: c
                            })
                            break
                        default:
                            Lb(X(c))
                    }
                else if ('C' == a) tc(a)
                else {
                    var h = D(y.fds, a)
                    h.t == d.Function
                        ? Eb({ t: t ? d.Calculation : h.t, m: a, v: k })
                        : t
                            ? ia(n.Field, a)
                            : k
                                ? Uc(h, a, t)
                                : (eb(h, null),
                                    !U() ||
                                    Ga(c) ||
                                    (h.o == l.Collection && h.ct != A.Value) ||
                                    v(db(h), c, Ya, null))
                }
            }
            function E(a) {
                b(a)
                Eb({ t: D(y.acs, a).t, m: a, v: !1 })
            }
            if (9 == r) return !1
            console.log('Edit')
            L = Q = da = Fa = !1
            var z = a.target
            if (h(e.getParentById(z, w.container.id))) {
                M(c)
                    ; ((h(c) && z.id != c.id && 'INPUT' == c.tagName) ||
                        'INPUT' != z.tagName) &&
                        ra()
                qa = 0
                if (6 == r || 8 == r) {
                    va.close()
                    r = Vc() ? 0 : 2
                    return
                }
                if (4 == r) kb(), (r = 0)
                else if (3 == r) lb(), (r = 0)
                else if (2 == r || (1 == r && !h(c)))
                    Qc(),
                        P({
                            t: d.Flow,
                            id: null,
                            v: 'if',
                            n: p.isEval ? p.evalIf : p.execIf,
                            st: null,
                            ct: null,
                            ft: null,
                            it: null,
                            h: !1,
                            fv: !1
                        }),
                        (c = G(c)),
                        v(ja(), c, la, d.LeftParenthesis)
                else {
                    if (a.ctrlKey || a.metaKey)
                        return (
                            'true' == z.getAttribute('ce218')
                                ? ((z.className = e.trim(
                                    z.className.replace('ceSelected', '')
                                )),
                                    z.setAttribute('ce218', 'false'))
                                : ((z.className = e.trim(z.className) + ' ceSelected'),
                                    z.setAttribute('ce218', 'true')),
                            (z = e.getChildrenByAttribute(w.container, 'ce218', 'true')),
                            0 < z.length ? wa('i137') : wa(),
                            !1
                        )
                    Tb()
                    var u = !0
                    if (h(z.getAttribute('ce202'))) {
                        if (0 == r && 'INPUT' == z.tagName) return !0
                        a = T(z)
                        var Ka = za(z),
                            F = ba(z, !0)
                        jb(x(z), F, a, Ka) && Ka != q.Field
                            ? Ma({
                                t: x(z),
                                v: z.getAttribute('ce206'),
                                st: F,
                                ct: a,
                                ft: J(z),
                                span: z,
                                pi: Wa(c)
                            })
                            : g(z)
                    } else {
                        ra()
                        u = !1
                        z = La()
                        F = !1
                        for (
                            var H =
                                e.Client.browser == e.Client.type.IE && 9 > e.Client.version
                                    ? e.getScrollHeight()
                                    : 0,
                            C = 0;
                            C < z.length;
                            C++
                        ) {
                            if (!h(z[C].nextSibling)) {
                                g(z[C])
                                F = !0
                                break
                            }
                            Ka = Ta(
                                x(z[C].nextSibling) == d.HtmlTag
                                    ? z[C].nextSibling.nextSibling
                                    : z[C].nextSibling
                            )
                            if (Ka.y > a.offsetY + H) {
                                g(z[C])
                                F = !0
                                break
                            }
                        }
                        !F && 0 < z.length && g(z[z.length - 1])
                    }
                    da = p.clicks && h(c) && u && !h(c.getAttribute('ce207'))
                    M(c)
                    W()
                    r = 0
                    if (da)
                        switch (((u = c.getAttribute('ce208')), x(c))) {
                            case d.Flow:
                                'else' == u
                                    ? v(Na(), c, Oa, null)
                                    : v(ja(), c, la, d.LeftParenthesis)
                                break
                            case d.Function:
                                switch (J(c)) {
                                    case m.Param:
                                        u = aa(c)
                                        L = Q = !0
                                        Va(u)
                                        break
                                    case m.Name:
                                        k(c, u)
                                        break
                                    case m.End:
                                        sa(c) && k(c.previousSibling, u)
                                }
                                break
                            case d.Field:
                                k(c, u)
                                break
                            case d.LeftParenthesis:
                            case d.LeftSource:
                                v(ja(), c, la, d.LeftParenthesis)
                                break
                            case d.RightParenthesis:
                            case d.RightBracket:
                            case d.RightSource:
                                v(V(), c, S, d.RightParenthesis)
                                break
                            case d.Action:
                                switch (J(c)) {
                                    case m.Param:
                                        u = aa(c)
                                        L = Q = !0
                                        Va(u)
                                        break
                                    case m.Name:
                                        ka(c, u)
                                        break
                                    case m.End:
                                        sa(c) && ka(c.previousSibling, u)
                                }
                                break
                            case d.Setter:
                                'set' == u ? v(vb(), c, wb, null) : Pa(X(c))
                                break
                            case d.LeftBracket:
                                v(Aa(), c, ia, null)
                                break
                            case d.Calculation:
                                a = []
                                switch (T(c)) {
                                    case n.LeftParenthesis:
                                        L = Q = !1
                                        v(Aa(), c, ia, null)
                                        break
                                    case n.RightParenthesis:
                                        L = Q = !1
                                        v(Aa(), c, ia, null)
                                        break
                                    case n.Function:
                                        switch (J(c)) {
                                            case m.Name:
                                                k(c, u)
                                                break
                                            case m.End:
                                                sa(c) && k(c.previousSibling, u)
                                        }
                                        break
                                    case n.Field:
                                        Wc(u)
                                        break
                                    case n.Addition:
                                        K(n.Subtraction, null, '&#150;', a)
                                        K(n.Multiplication, null, '&#215;', a)
                                        K(n.Division, null, '&#247;', a)
                                        L = Q = !0
                                        v(a, c, ia, null)
                                        break
                                    case n.Subtraction:
                                        K(n.Addition, null, '&#43;', a)
                                        K(n.Multiplication, null, '&#215;', a)
                                        K(n.Division, null, '&#247;', a)
                                        L = Q = !0
                                        v(a, c, ia, null)
                                        break
                                    case n.Multiplication:
                                        K(n.Addition, null, '&#43;', a)
                                        K(n.Subtraction, null, '&#150;', a)
                                        K(n.Division, null, '&#247;', a)
                                        L = Q = !0
                                        v(a, c, ia, null)
                                        break
                                    case n.Division:
                                        K(n.Addition, null, '&#43;', a),
                                            K(n.Subtraction, null, '&#150;', a),
                                            K(n.Multiplication, null, '&#215;', a),
                                            (L = Q = !0),
                                            v(a, c, ia, null)
                                }
                                break
                            case d.Operator:
                                a = Da(c)
                                h(a) &&
                                    ((a = D(y.fds, a.getAttribute('ce208'))),
                                        h(a) &&
                                        ((a = db(a, u)),
                                            h(a) && 0 < a.length
                                                ? ((L = Q = !0), v(a, c, Ya, null))
                                                : ((da = !1),
                                                    'isNull' == u || 'isNotNull' == u
                                                        ? v(V(), c, S, d.RightParenthesis)
                                                        : Pa(X(c)))))
                                break
                            case d.Clause:
                                'then' == u
                                    ? v(Na(), c, Oa, null)
                                    : Ga(c)
                                        ? v(Na(), c, Oa, null)
                                        : ((u = Ad(u)),
                                            h(u) && 0 < u.length
                                                ? ((L = Q = !0), v(u, c, S, null))
                                                : v(ja(), c, la, d.LeftParenthesis))
                                break
                            case d.Exists:
                                a = []
                                switch (u) {
                                    case 'ce803':
                                        K('ce802', d.Field, p.els.lbl.h, a)
                                        break
                                    default:
                                        K('ce803', d.Field, p.els.lbl.l, a)
                                }
                                L = Q = !0
                                v(a, c, Bd, null)
                                break
                            case d.Value:
                                T(c) == n.Function
                                    ? Wc(u)
                                    : ((u = ba(c, !0)),
                                        (L = u != l.Date && u != l.Time),
                                        (Q = !0),
                                        Pa(X(c)))
                        }
                }
                wa()
            } else
                8 == r
                    ? (Tb(), ra(), M(c), z.id != Ra.id && (va.close(), (r = 1)), wa())
                    : (Tb(),
                        ra(),
                        (u = pa.getId()),
                        (3 == r && null != u && h(e.getParentById(z, u))) || Ab(),
                        h(w.container) &&
                        h(w.container.childNodes) &&
                        1 < w.container.childNodes.length &&
                        wa('i102'))
            return !0
        },
        Tc = function (a) {
            if (9 == r) return !1
            ca = !0
            L = Q = da = !1
            if (1 == r || 2 == r) return M(), !0
            var g = a.keyCode
            if (16 == g || 17 == g || 18 == g)
                return 6 == r ? va.close() : 3 == r ? lb() : 4 == r && kb(), (r = 0), !0
            a.ctrlKey || a.metaKey ? (F = '') : (Tb(), M(c))
            if (27 == g || (0 != r && (8 == g || 127 == g))) ca = !1
            32 == g && 0 < F.length && (F += ' ')
                ; (6 != r && 8 != r) || 40 != g || dc++
            if ((6 == r || 8 == r) && 37 != g && 39 != g && (38 != g || 0 < dc))
                return !0
            if (4 == r || 3 == r) {
                if (13 == g) return !0
                4 == r ? kb() : lb()
                r = 0
            }
            var b = x(c),
                k = ba(c, !0)
            switch (g) {
                case 9:
                    F = ''
                        ; (b != d.NewLine && b != d.Tab) ||
                            P({
                                t: d.Tab,
                                id: null,
                                v: '',
                                n: '&nbsp;',
                                st: null,
                                ct: n.None,
                                ft: null,
                                it: null,
                                h: !1,
                                fv: !1
                            })
                    ca = !1
                    break
                case 13:
                    F = ''
                    b == d.Calculation && T(c) == n.Number
                        ? h(c.getAttribute('ce207'))
                            ? (ra(), (c = G(c)), W(), U() && v(Aa(), c, ia, null))
                            : (a.ctrlKey || a.metaKey) && za(c) != q.Field
                                ? Ma({
                                    t: b,
                                    v: c.getAttribute('ce206'),
                                    st: k,
                                    ct: n.Number,
                                    ft: J(c),
                                    span: c
                                })
                                : hb(!1)
                        : b == d.Value
                            ? k == l.String || k == l.Numeric
                                ? h(c.getAttribute('ce207'))
                                    ? (ra(),
                                        (c = G(c)),
                                        W(),
                                        U() && v(V(), c, S, d.RightParenthesis))
                                    : (a.ctrlKey || a.metaKey) && za(c) != q.Field
                                        ? Ma({
                                            t: b,
                                            v: c.getAttribute('ce206'),
                                            st: k,
                                            ct: T(c),
                                            ft: J(c),
                                            span: c
                                        })
                                        : hb(!1)
                                : hb(!1)
                            : b == d.Function || b == d.Action
                                ? k == l.String || k == l.Numeric
                                    ? h(c.getAttribute('ce207'))
                                        ? (ra(), (c = G(c)), W(), Va(aa(c)))
                                        : (a.ctrlKey || a.metaKey) &&
                                        za(c) != q.Field &&
                                        Ma({
                                            t: x(c),
                                            v: c.getAttribute('ce206'),
                                            st: ba(c, !0),
                                            ct: T(c),
                                            ft: J(c),
                                            span: c,
                                            pi: Wa(c)
                                        })
                                    : sa(c)
                                        ? (Ua(c), hb(!1))
                                        : J(c) == m.End && hb(!1)
                                : Fb(c) &&
                                (h(c.nextSibling) &&
                                    J(c.nextSibling) == m.End &&
                                    0 == aa(c).ps.length &&
                                    ((b = Ub(c)), h(b) && (c = b)),
                                    hb(!1))
                    ca = !1
                    break
                case 88:
                    if (a.ctrlKey || a.metaKey) return Xc(!0, 'i139'), (ca = !1)
                    break
                case 67:
                    if (a.ctrlKey || a.metaKey) return Xc(!1, 'i138'), (ca = !1)
                    break
                case 86:
                    if ((a.ctrlKey || a.metaKey) && 0 < Ea.length) {
                        6 == r ? va.close() : 3 == r ? lb() : 4 == r && kb()
                        a = h(c) && h(c.nextSibling)
                        g = []
                        b = 0
                        for (var e; b < Ea.length; b++)
                            (e = Ea[b]),
                                (e.id = w.container.id + Sa),
                                Sa++,
                                a
                                    ? w.container.insertBefore(e, c.nextSibling)
                                    : w.container.appendChild(e),
                                (c = G(e)),
                                g.push(c.cloneNode(!0))
                        Ea = g
                        return (ca = !1)
                    }
                    break
                case 34:
                    qa = 0
                    ra()
                    b = La()
                    c = G(b[b.length - 1])
                    b = Ta(c)
                    uc(b.y, b.height)
                    sa(c) && Ua(c)
                    M(c)
                    W()
                    ca = !1
                    break
                case 35:
                    qa = 0
                    ra()
                    b = Xa(c, d.HtmlTag)
                    h(b)
                        ? (c = G(b.previousSibling))
                        : ((b = La()), (c = G(b[b.length - 1])))
                    sa(c) && Ua(c)
                    M(c)
                    W()
                    ca = !1
                    break
                case 33:
                    qa = 0
                    ra()
                    c = G(La()[0])
                    M(c)
                    Vb(Ta(c).y)
                    W()
                    ca = !1
                    break
                case 36:
                    qa = 0
                    ra()
                    b = vc(c, d.NewLine)
                    if (!h(b) && ((b = La()[0]), 'if' != b.getAttribute('ce208')))
                        throw Error('CL02')
                    c = G(b)
                    M(c)
                    W()
                    ca = !1
                    break
                case 38:
                    ; (6 != r && 8 != r) || xa()
                    jb(b, k, T(c), za(c)) &&
                        h(c.getAttribute('ce207')) &&
                        (ra(), (c = G(c)))
                    if (a.ctrlKey || a.metaKey) ta = c.id
                    k = La()
                    var p = Ta(c),
                        E = null
                    0 == qa && (qa = p.x + p.width)
                    var z = !1
                    for (b = k.length - 1; -1 < b; b--)
                        if (z) {
                            var u = k[b]
                            var B = x(u)
                            if (h(E) && (B == d.NewLine || Ha(u))) {
                                c = G(u)
                                Vb(e.y)
                                break
                            }
                            e = Ta(u)
                            if (!(e.y > p.y - parseInt(e.height / 2, 10)))
                                if (
                                    (h(E) || (E = u),
                                        qa > e.x + e.width ||
                                        !h(u.previousSibling) ||
                                        Ta(u.previousSibling).y < e.y)
                                ) {
                                    c = G(u)
                                    Vb(e.y)
                                    break
                                } else if (((B = e.x + parseInt(e.width / 2, 10)), qa > B)) {
                                    Vb(e.y)
                                    c = G(u)
                                    break
                                }
                        } else z = k[b].id == c.id
                    sa(c) && Ua(c)
                    M(c)
                    W()
                    if (a.ctrlKey || a.metaKey)
                        (e = x(c)),
                            e == d.Flow && Ha(c) && ((c = G(Ba(c.nextSibling))), M(c)),
                            Wb(!1),
                            wa('i137')
                    ca = !1
                    break
                case 40:
                    jb(b, k, T(c), za(c)) &&
                        h(c.getAttribute('ce207')) &&
                        (ra(), (c = G(c)))
                    b = !1
                    if (a.ctrlKey || a.metaKey)
                        (e = x(c)),
                            e == d.Flow &&
                            Ha(c) &&
                            ((c = G(Ba(c.nextSibling))), M(c), (b = !0)),
                            (e = X(c)),
                            !Fb(c) &&
                            x(e) == d.Flow &&
                            Ha(e) &&
                            ((c = G(Ba(c.nextSibling))), M(c), (b = !0)),
                            (ta = c.id)
                    if (!b) {
                        b = La()
                        e = Ta(c)
                        0 == qa && (qa = e.x + e.width)
                        E = !1
                        for (u = b.length - 1; -1 < u; u--) {
                            p = b[u]
                            if (p.id == c.id) break
                            k = Ta(p)
                            E || (E = k.y - e.height - parseInt(e.height / 2, 10) < e.y)
                            if (E)
                                if (
                                    ((z = Ta(p.previousSibling)),
                                        qa > k.x + k.width || !h(z) || z.y < k.y)
                                ) {
                                    c = G(p)
                                    uc(k.y, k.height)
                                    break
                                } else if (((z = k.x + parseInt(k.width / 2, 10)), qa >= z)) {
                                    c = G(p)
                                    uc(k.y, k.height)
                                    break
                                }
                        }
                        sa(c) && Ua(c)
                        M(c)
                        W()
                    }
                    if (a.ctrlKey || a.metaKey) Wb(!0), wa('i137')
                    ca = !1
                    break
                case 37:
                    qa = 0
                    ca = !1
                        ; (6 != r && 8 != r) || xa()
                    if ('INPUT' == c.tagName) return !1
                    if (h(c.previousSibling)) {
                        k = !1
                        b = null
                        if (a.ctrlKey || a.metaKey)
                            if (
                                ((p = X(c.previousSibling)), (e = x(p)), e == d.Flow && Ha(p))
                            ) {
                                if (
                                    ((k = !0),
                                        h(c.nextSibling) &&
                                        ((e = x(c)),
                                            e == d.Tab || e == d.NewLine || e == d.HtmlTag))
                                )
                                    (c = G(Ba(c.nextSibling))), M(c)
                            } else ta = c.id
                        !k &&
                            (h(c.previousSibling) &&
                                ((e = x(c.previousSibling)),
                                    (c = G(
                                        e == d.HtmlTag
                                            ? c.previousSibling.previousSibling
                                            : c.previousSibling
                                    )),
                                    M(c)),
                                sa(c) && (J(c) == m.End ? Ua(c) : (c = G(c.previousSibling))),
                                (k = X(c)),
                                (e = x(k)),
                                (a.ctrlKey || a.metaKey) && e == d.Flow && Ha(k)
                                    ? h(c.nextSibling) &&
                                    ((e = Ba(c.nextSibling)), (c = G(e)), M(c))
                                    : M(c),
                                W(),
                                a.ctrlKey || a.metaKey) &&
                            (Wb(!1), (b = 'i137'))
                        wa(b)
                    }
                    break
                case 39:
                    qa = 0
                    ca = !1
                        ; (6 != r && 8 != r) || xa()
                    if (!a.ctrlKey && !a.metaKey)
                        if (b == d.Value && (k == l.String || k == l.Numeric)) {
                            if (h(c.getAttribute('ce207'))) return !1
                            c = G(c)
                            W()
                        } else if (
                            b == d.Calculation &&
                            za(c) == q.Input &&
                            T(c) == n.Number
                        ) {
                            if (h(c.getAttribute('ce207'))) return !1
                            c = G(c)
                            W()
                        } else {
                            if (
                                !(
                                    (b != d.Function && b != d.Action) ||
                                    za(c) != q.Input ||
                                    (k != l.String && k != l.Numeric)
                                )
                            ) {
                                if (h(c.getAttribute('ce207'))) return !1
                                c = G(c)
                                W()
                            }
                        }
                    else if ('INPUT' == c.tagName) return !1
                    if (h(c.nextSibling))
                        if (a.ctrlKey || a.metaKey || !sa(c.nextSibling)) {
                            b = !1
                            if (a.ctrlKey || a.metaKey)
                                (e = x(c)),
                                    e == d.Flow &&
                                    Ha(c) &&
                                    ((c = G(Ba(c.nextSibling))), M(c), (b = !0)),
                                    (e = X(c)),
                                    !Fb(c) &&
                                    x(e) == d.Flow &&
                                    Ha(e) &&
                                    ((c = G(Ba(c.nextSibling))), M(c), (b = !0)),
                                    (ta = c.id)
                            b ||
                                ((c =
                                    x(c.nextSibling) == d.HtmlTag
                                        ? G(c.nextSibling.nextSibling)
                                        : G(c.nextSibling)),
                                    M(c))
                            if (a.ctrlKey || a.metaKey) Wb(!0), wa('i137')
                            else {
                                b = x(c)
                                e = U()
                                if (h(c.nextSibling) || b != d.RightBracket)
                                    if ((b != d.Function && b != d.Action) || !e)
                                        b == d.Flow && e
                                            ? 'else' == c.getAttribute('ce208')
                                                ? v(Na(), c, Oa, null)
                                                : v(ja(), c, la, d.LeftParenthesis)
                                            : (b != d.LeftParenthesis && b != d.LeftSource) || !e
                                                ? (b != d.RightParenthesis &&
                                                    b != d.RightSource &&
                                                    b != d.RightBracket &&
                                                    b != d.Value) ||
                                                    !e
                                                    ? b == d.Field && e
                                                        ? Ga(c) ||
                                                        ((b = c.getAttribute('ce208')),
                                                            D(y.fds, b).ct != A.Reference &&
                                                            v(db(D(y.fds, b)), c, Ya, null))
                                                        : b == d.Exists && e
                                                            ? v(
                                                                wc(Xa(c, d.Field).getAttribute('ce208')),
                                                                c,
                                                                xc,
                                                                null
                                                            )
                                                            : b == d.Setter && e
                                                                ? 'set' == c.getAttribute('ce208')
                                                                    ? v(vb(), c, wb, null)
                                                                    : (Pa(X(c)), Yc() && v(V(), c, S, null))
                                                                : b == d.Operator && e
                                                                    ? 'isNull' == c.getAttribute('ce208') ||
                                                                        'isNotNull' == c.getAttribute('ce208')
                                                                        ? v(V(), c, S, d.RightParenthesis)
                                                                        : (Pa(c, !0),
                                                                            Yc() && v(V(), c, S, d.RightParenthesis))
                                                                    : b == d.Clause && e
                                                                        ? 'then' == c.getAttribute('ce208') || Ga(c)
                                                                            ? v(Na(), c, Oa, null)
                                                                            : v(ja(), c, la, d.LeftParenthesis)
                                                                        : (b != d.LeftBracket && b != d.Calculation) ||
                                                                        !e ||
                                                                        v(Aa(), c, ia, null)
                                                    : v(V(), c, S, d.RightParenthesis)
                                                : (b == d.LeftSource && M(c),
                                                    v(ja(), c, la, d.LeftParenthesis))
                                    else
                                        switch (J(c)) {
                                            case m.End:
                                                Db(aa(c))
                                                break
                                            case m.Name:
                                                ; (b = aa(c)),
                                                    0 < b.ps.length && J(c.nextSibling) == m.End && Va(b)
                                        }
                                else v(V(), c, S, d.RightParenthesis)
                                wa()
                            }
                        } else Ua(c.nextSibling), M(c), W(), Db(aa(c))
            }
            if (Mb) return 8 == g && a.preventDefault(), !1
            if (
                (fc && 13 == g) ||
                (8 == g && !h(c.getAttribute('ce207'))) ||
                9 == g ||
                33 == g ||
                34 == g ||
                35 == g ||
                36 == g ||
                38 == g ||
                39 == g ||
                40 == g
            )
                a.preventDefault && a.preventDefault(),
                    a.stopPropagation && a.stopPropagation()
            return ca
        },
        qc = function (a) {
            if (9 == r) return !1
            var g = a.keyCode
            Fa = !1
            if (!ca)
                return (
                    (ca = !0),
                    Mb
                        ? ((9 != g &&
                            13 != g &&
                            33 != g &&
                            34 != g &&
                            35 != g &&
                            36 != g &&
                            38 != g &&
                            40 != g) ||
                            a.preventDefault(),
                            !1)
                        : !0
                )
            if (1 == r || 2 == r) return !0
            if (((6 == r || 8 == r) && !ma(g)) || ((6 == r || 8 == r) && 38 == g))
                return !1
            if (3 != r && 4 != r) {
                var b = F
                F = ''
                if (8 == r)
                    32 == g
                        ? ((Q = !0), v(O, Ra, Xb, null), (r = 8))
                        : ma(g) &&
                        ((F = b += String.fromCharCode(g)),
                            (Q = !0),
                            Y(O, Ra, Xb, null),
                            (r = 8))
                else {
                    var k = X(c)
                    switch (x(k)) {
                        case d.Flow:
                            'else' == k.getAttribute('ce208')
                                ? 32 == g
                                    ? v(Na(), c, Oa, null)
                                    : ma(g) &&
                                    ((F = b += String.fromCharCode(g)), Y(Na(), c, Oa, null))
                                : 32 == g
                                    ? v(ja(), c, la, d.LeftParenthesis)
                                    : ma(g) &&
                                    ((F = b += String.fromCharCode(g)),
                                        Y(ja(), c, la, d.LeftParenthesis),
                                        (Fa = !0))
                            break
                        case d.Function:
                        case d.Action:
                            if (yc(g))
                                switch (J(k)) {
                                    case m.End:
                                        if (32 == g) Db(aa(k))
                                        else if (ma(g)) {
                                            var e = aa(k)
                                            if (
                                                U() &&
                                                ((b = e.t == d.Function ? db(e) : Rb()), 0 < b.length)
                                            ) {
                                                e = e.t == d.Function ? Ya : Sb
                                                var Ja = Zc(b, F)
                                                0 < Ja.length
                                                    ? v(Ja, c, e, null, !0)
                                                    : v(b, c, e, null, !1)
                                            }
                                        }
                                        break
                                    default:
                                        if (
                                            ((e = ba(k, !0)),
                                                !jb(x(k), e, T(k), za(k)) ||
                                                (e != l.String && e != l.Numeric) ||
                                                !h(k.getAttribute('ce207')))
                                        )
                                            32 == g
                                                ? Va(aa(k))
                                                : ma(g) &&
                                                ((F = b += String.fromCharCode(g)), Va(aa(k)))
                                }
                            break
                        case d.LeftParenthesis:
                        case d.LeftSource:
                            32 == g
                                ? v(ja(), c, la, d.LeftParenthesis)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)),
                                    Y(ja(), c, la, d.LeftParenthesis),
                                    (Fa = !0))
                            break
                        case d.RightSource:
                            M(c)
                            32 == g
                                ? v(V(), c, S, d.RightParenthesis)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)),
                                    Y(V(), c, S, d.RightParenthesis))
                            break
                        case d.RightParenthesis:
                        case d.RightBracket:
                            32 == g
                                ? v(V(), c, S, d.RightParenthesis)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)),
                                    Y(V(), c, S, d.RightParenthesis))
                            break
                        case d.Exists:
                            32 == g
                                ? v(wc(Xa(c, d.Field).getAttribute('ce208')), c, xc, null)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)),
                                    Y(wc(Xa(c, d.Field).getAttribute('ce208')), c, xc, null))
                            break
                        case d.Field:
                            if (32 == g && Ga(k)) {
                                b = h(k.nextSibling) ? Ub(k.nextSibling) : null
                                    ; (b && x(b) == d.Setter && 'to' == b.getAttribute('ce208')) ||
                                        ((b = D(y.fds, k.getAttribute('ce208'))),
                                            h(b) &&
                                            (P({
                                                t: d.Setter,
                                                id: null,
                                                v: 'to',
                                                n: tb(p.els.str, 'to'),
                                                st: b.o,
                                                ct: n.None,
                                                ft: m.None,
                                                it: q.None,
                                                h: !1,
                                                fv: !1
                                            }),
                                                U() && Pa(X(k))))
                                break
                            }
                            e = D(y.fds, k.getAttribute('ce208'))
                            e.ct != A.Reference &&
                                ((e = db(e)),
                                    32 == g
                                        ? v(e, c, Ya, null)
                                        : ma(g) &&
                                        ((F = b += String.fromCharCode(g)), Y(e, c, Ya, null)))
                            break
                        case d.Operator:
                            32 == g
                                ? 'isNull' == k.getAttribute('ce208') ||
                                    'isNotNull' == k.getAttribute('ce208')
                                    ? v(V(), k, S, d.RightParenthesis)
                                    : Pa(k)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)),
                                    'isNull' == k.getAttribute('ce208') ||
                                        'isNotNull' == k.getAttribute('ce208')
                                        ? Y(V(), c, S, d.RightParenthesis)
                                        : h(u) && 0 < u.length
                                            ? Y(u, c, zc, null)
                                            : (h(C.ce) && 0 < C.ce.length) || 0 < C.length
                                                ? Y(C, c, cc ? $c : ad, null)
                                                : Pa(k))
                            break
                        case d.Clause:
                            32 == g
                                ? 'then' == k.getAttribute('ce208') || Ga(k)
                                    ? v(Na(), c, Oa, null)
                                    : v(ja(), c, la, d.LeftParenthesis)
                                : ma(g) &&
                                ((e = 'then' == k.getAttribute('ce208') || Ga(k)),
                                    (F = b += String.fromCharCode(g)),
                                    Y(
                                        e ? Na() : ja(),
                                        c,
                                        e ? Oa : la,
                                        e ? null : d.LeftParenthesis
                                    ),
                                    (Fa = !0))
                            break
                        case d.LeftBracket:
                            32 == g
                                ? v(Aa(), c, ia, null)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)), Y(Aa(), c, ia, null))
                            break
                        case d.Calculation:
                            T(k) == n.Number
                                ? yc(g) &&
                                !h(k.getAttribute('ce207')) &&
                                (32 == g
                                    ? v(Aa(), c, ia, null)
                                    : ma(g) &&
                                    ((F = b += String.fromCharCode(g)), Y(Aa(), c, ia, null)))
                                : 32 == g
                                    ? v(Aa(), c, ia, null)
                                    : ma(g) &&
                                    ((F = b += String.fromCharCode(g)), Y(Aa(), c, ia, null))
                            break
                        case d.Setter:
                            32 == g
                                ? 'set' == k.getAttribute('ce208')
                                    ? v(vb(), c, wb, null)
                                    : Pa(k)
                                : ma(g) &&
                                ((F = b += String.fromCharCode(g)),
                                    'set' == k.getAttribute('ce208')
                                        ? (Y(vb(), c, wb, null), (Fa = !0))
                                        : h(u) && 0 < u.length
                                            ? Y(u, c, zc, null)
                                            : Pa(k))
                            break
                        case d.Value:
                            if (yc(g))
                                if (((e = ba(k)), e == l.String || e == l.Numeric))
                                    h(k.getAttribute('ce207')) ||
                                        (32 == g
                                            ? v(V(), c, S, d.RightParenthesis)
                                            : ma(g) &&
                                            ((F = b += String.fromCharCode(g)),
                                                Y(V(), c, S, d.RightParenthesis)))
                                else if (e == l.Numeric && 32 == g)
                                    h(k.getAttribute('ce207')) || v(V(), c, S, d.RightParenthesis)
                                else if (
                                    e == l.Date ||
                                    e == l.Time ||
                                    e == l.Bool ||
                                    e == l.Enum
                                )
                                    32 == g
                                        ? v(V(), c, S, d.RightParenthesis)
                                        : ma(g) &&
                                        ((F = b += String.fromCharCode(g)),
                                            Y(V(), c, S, d.RightParenthesis))
                    }
                }
            }
            if (Mb)
                return (
                    (8 != g &&
                        9 != g &&
                        32 != g &&
                        33 != g &&
                        34 != g &&
                        35 != g &&
                        36 != g &&
                        38 != g &&
                        40 != g) ||
                    a.preventDefault(),
                    !1
                )
            32 == g
                ? (a.preventDefault &&
                    !h(k.getAttribute('ce207')) &&
                    a.preventDefault(),
                    a.stopPropagation && a.stopPropagation())
                : (8 == g || 9 == g) && a.stopPropagation && a.stopPropagation()
        },
        rc = function (a) {
            if (9 == r) return !1
            if (1 == r || 2 == r) return !0
            a = a.keyCode
            if (16 == a) return !1
            if (8 != r) {
                46 == a && h(c.nextSibling) && (c = Ub(c.nextSibling))
                var g = x(c)
                var b = ba(c, !0)
            }
            switch (a) {
                case 27:
                    F = ''
                    if (8 == r) {
                        xa()
                        break
                    }
                    6 == r ? xa() : 3 == r ? (lb(), (r = 0)) : 4 == r && (kb(), (r = 0))
                    'INPUT' == c.tagName && (ra(), (c = G(c)), W())
                    break
                case 127:
                    F = ''
                    if (8 == r) {
                        xa()
                        break
                    }
                    6 == r && xa()
                    3 == r
                        ? (lb(), (r = 0))
                        : 4 == r
                            ? (kb(), (r = 0))
                            : (jb(g, b, T(c), za(c)) && h(c.getAttribute('ce207'))) ||
                            (h(c.nextSibling)
                                ? x(c.nextSibling) == d.HtmlTag
                                    ? Yb()
                                    : g == d.NewLine
                                        ? (ea(c),
                                            ea(c),
                                            h(c.nextSibling) &&
                                            (h(c.nextSibling) && x(c.nextSibling) == d.Tab && Yb(),
                                                (c = G(h(c.nextSibling) ? c.nextSibling : c)),
                                                M(c)))
                                        : Ha(c)
                                            ? ((c = c.nextSibling), bb())
                                            : (bb(),
                                                h(c.nextSibling) &&
                                                (x(c.nextSibling) == d.HtmlTag && Yb(),
                                                    (c = G(h(c.nextSibling) ? c.nextSibling : c)),
                                                    M(c)))
                                : g == d.NewLine
                                    ? (ea(c), ea(c))
                                    : Ha(c) || bb(),
                                sa(c) && Ua(c))
                    break
                case 8:
                    ; (F = ''),
                        8 == r
                            ? xa()
                            : (6 == r && xa(),
                                3 == r
                                    ? (lb(), (r = 0))
                                    : 4 == r
                                        ? (kb(), (r = 0))
                                        : (jb(g, b, T(c), za(c)) ||
                                            (g == d.RightSource
                                                ? bb()
                                                : !h(c.previousSibling) ||
                                                Ha(c) ||
                                                Ha(c.previousSibling) ||
                                                (x(c) == d.NewLine ||
                                                    x(c.previousSibling) == d.NewLine
                                                    ? ((c = X(c.previousSibling)),
                                                        Yb(),
                                                        (c = G(h(c.nextSibling) ? c.nextSibling : c)),
                                                        M(c))
                                                    : Ha(c.previousSibling) ||
                                                    ((c = c.previousSibling),
                                                        bb(),
                                                        (c = G(h(c.nextSibling) ? c.nextSibling : c)),
                                                        M(c)))),
                                            sa(c) && (Ua(c), M(c))))
            }
            return !1
        },
        Ab = function () {
            if (h(w) && h(w.container) && h(p))
                if (9 == r) r = 1
                else {
                    6 == r
                        ? (va.close(), (r = 1))
                        : 3 == r
                            ? (lb(), (r = 1))
                            : 4 == r
                                ? (kb(), (r = 1))
                                : 0 == r && ((r = 1), h(c) && h(c.getAttribute('ce207')) && ra())
                    Vc() || bd()
                    2 != r && p.help && ub(p.els.ms.i102)
                    nc()
                    F = ''
                    Fa = !1
                    if (
                        h(c) &&
                        ((c.className = $rule.trim(c.className.replace('ceCurrent', ''))),
                            sa(c))
                    ) {
                        var a = Cb(c, m.Name)
                        h(a) &&
                            (a.className = $rule.trim(a.className.replace('ceCurrent', '')))
                    }
                    M(null)
                }
        },
        Eb = function (a) {
            var g = D(a.t == d.Action ? y.acs : y.fds, a.m)
            P({
                t: a.t == d.Calculation ? a.t : g.t,
                id: null,
                v: g.v,
                n: 0 < g.ps.length ? g.n + '&nbsp;(' : g.n,
                st: g.t == d.Action ? null : g.rt.o,
                ct: a.t == d.Calculation ? n.Function : n.None,
                ft: m.Name,
                it: q.None,
                h: !1,
                fv: a.v
            })
            var b = c
            P({
                t: a.t == d.Calculation ? a.t : g.t,
                id: null,
                v: g.v,
                n: 0 < g.ps.length ? ')' : '&nbsp;',
                st: g.t == d.Action ? null : g.rt.o,
                ct: a.t == d.Calculation ? n.Function : n.None,
                ft: m.End,
                it: q.None,
                h: !1,
                fv: a.v
            })
            0 < g.ps.length ? ((c = G(b)), U() && Va(g)) : U() && Db(g)
        },
        Va = function (a) {
            var g = Wa(c)
            if (g >= a.ps.length - 1 && !L) {
                var b = sc(c, m.End)
                h(b) && ((c = G(b)), Db(a))
            } else
                switch (
                ((g += 1), L && --g, (b = a.ps[g]), (a = []), (u = null), b.ai)
                ) {
                    case B.All:
                    case B.Fields:
                        if (b.o == l.Collection) {
                            for (var k = 0; k < y.fds.length; k++) {
                                var e = y.fds[k]
                                    ; (da && c.getAttribute('ce208') == e.v) ||
                                        (e.t == d.Field &&
                                            e.o == l.Collection &&
                                            (b.ct == A.Generic
                                                ? e.cg && a.push(e)
                                                : e.ct == b.ct &&
                                                e.cr == b.cr &&
                                                e.cg == b.cg &&
                                                e.cv == b.cv &&
                                                e.cl == b.cl &&
                                                a.push(e)))
                            }
                            0 < F.length ? Y(a, c, Za, null) : v(a, c, Za, null)
                        } else {
                            a: {
                                k = b.o
                                var p = g
                                g = []
                                var n = Da(c)
                                if (h(n)) {
                                    e = D(y.fds, n.getAttribute('ce208'))
                                    h(e) || (e = D(y.acs, n.getAttribute('ce208')))
                                    if (!h(e)) {
                                        k = g
                                        break a
                                    }
                                    e = e.ps[p]
                                }
                                if (h(e)) {
                                    n = h(e.ftr) ? e.ftr : null
                                    for (var z = 0, q; z < y.fds.length; z++)
                                        if (((p = y.fds[z]), p.t == d.Field && !p.ir && p.o == k)) {
                                            if (e.o == l.Numeric) {
                                                if (
                                                    e.l != p.l ||
                                                    p.min < e.min ||
                                                    p.max > e.max ||
                                                    p.dec != e.dec ||
                                                    p.mds != e.mds
                                                )
                                                    continue
                                            } else if (e.o == l.Enum) {
                                                if (e.e != p.e || e.l != p.l) continue
                                            } else if (e.l != p.l) continue
                                            q = h(p.ftr) ? p.ftr : null
                                                ; (null != n && 'any' != n && n != q && 'any' != q) ||
                                                    g.push(p)
                                        }
                                }
                                k = g
                            }
                            if (0 < k.length) {
                                b.ai == B.All &&
                                    K('ce801', h(b.mds) ? b.mds : b.o, cb(b.o, h(b.mds)), a)
                                b = []
                                for (g = 0; g < k.length; g++)
                                    (e = k[g]),
                                        (da && c.getAttribute('ce208') == e.v) || b.push(e)
                                if (0 < b.length) for (k = 0; k < b.length; k++) a.push(b[k])
                                0 < F.length ? Y(a, c, Za, null) : v(a, c, Za, null)
                            } else h(b.mds) ? Ac(b.mds, b.ftr) : Za('ce801', b.o)
                        }
                        break
                    case B.User:
                        h(b.mds) ? Ac(b.mds, b.ftr) : Za('ce801', b.o)
                        break
                    default:
                        throw Error('CL58')
                }
        },
        Ac = function (a, g) {
            u = ib(a, g)
            var d = []
            if (null != u && 0 < u.length) {
                for (var b = 0; b < u.length; b++) K(u[b].ID, a, u[b].Name, d)
                0 < F.length ? Y(d, c, Za, null) : v(d, c, Za, null)
            } else Za('ce801', l.Numeric)
        },
        Za = function (a, g, d) {
            function b(a, g) {
                if (L) {
                    var d = c
                    L = !1
                } else d = J(c) == m.Name ? c : c.nextSibling
                d = xb(d, g)
                h(d) ? ea(d) : Bc(a)
            }
            function e(a) {
                var g = null,
                    d = a ? l.Date : l.Time
                a = a ? '' : '1/1/2000 '
                try {
                    var b = c
                    if (J(b) != m.Param || ba(b) != d) b = xb(b, d)
                    h(b) && (g = new Date(a + b.getAttribute('ce206')))
                    isNaN(g.getDate()) && (g = null)
                    return g
                } catch (Qd) {
                    return null
                }
            }
            var t = aa(c)
            if ('ce801' == a)
                if (((a = cd(g)), h(a)))
                    (Q = L),
                        (g = null),
                        0 < t.ps.length &&
                        ((g = Wa(c)), 0 > g && (g = 0), (g = t.ps[g].ftr)),
                        Ac(a.Name, g)
                else
                    switch (parseInt(g, 10)) {
                        case l.Numeric:
                            Q = !1
                            Zb(xb(h(c.nextSibling) ? c.nextSibling : c, l.Numeric)) &&
                                ((g = Wa(c)),
                                    g++,
                                    b(t, l.Numeric),
                                    Ma({
                                        t: t.t,
                                        v: '',
                                        st: l.Numeric,
                                        ct: n.None,
                                        ft: m.Param,
                                        pi: g,
                                        span: c
                                    }))
                            break
                        case l.String:
                            Q = !1
                            Zb(xb(h(c.nextSibling) ? c.nextSibling : c, l.String)) &&
                                ((g = Wa(c)),
                                    g++,
                                    b(t, l.String),
                                    Ma({
                                        t: t.t,
                                        v: '',
                                        st: l.String,
                                        ct: n.None,
                                        ft: m.Param,
                                        pi: g,
                                        span: c
                                    }))
                            break
                        case l.Date:
                            va.close()
                            r = 3
                            pa.show(c, Dd, Cc(t, pa.defaultFormat()), L, e(!0))
                            pa.position()
                            break
                        case l.Time:
                            va.close()
                            r = 4
                            Ca.show(c, Ed, Cc(t, Ca.defaultFormat()), L, e(!1))
                            Ca.position()
                            break
                        case l.Enum:
                            a = Wa(c) + (L ? 0 : 1)
                            0 > a && (a = 0)
                            a <= t.ps.length - 1 && ((u = sb(t.ps[a].e)), (Q = L))
                            v(u, c, Fd, null)
                            break
                        case l.Bool:
                            Q = L
                            v(dd(), c, Gd, null)
                            break
                        case l.Collection:
                            break
                        default:
                            throw Error('CL62')
                    }
            else
                'ce804' == a || 'ce805' == a
                    ? ((ha = 'ce805' == a ? 'ce805' : d), (L = !0), v(ja(), c, Za, null))
                    : ((g = ib(g)),
                        h(g)
                            ? (b(t, l.Numeric),
                                P({
                                    t: t.t,
                                    id: null,
                                    v: a,
                                    n: D(g, a).Name,
                                    st: l.Numeric,
                                    ct: n.None,
                                    ft: m.Param,
                                    it: q.Field,
                                    h: !1,
                                    fv: !1
                                }))
                            : ((a = D(y.fds, a)),
                                b(t, a.o),
                                P({
                                    t: t.t,
                                    id: null,
                                    v: a.v,
                                    n: a.n,
                                    st: a.o,
                                    ct: n.None,
                                    ft: m.Param,
                                    it: q.Field,
                                    h: !1,
                                    fv: !1
                                })),
                        (u = null),
                        (c = G(c)),
                        U() && Va(t))
        },
        Gd = function (a) {
            ed(a, l.Bool, Kb(a))
        },
        Fd = function (a) {
            ed(a, l.Enum, D(u, a).Name)
        },
        ed = function (a, g, d) {
            var b = xb(L ? c : c.nextSibling, g),
                e = !1
            h(b) && (va.close(), ea(b), (e = !0), (L = !1))
            b = aa(c)
            e || Bc(b)
            P({
                t: b.t,
                id: null,
                v: a,
                n: d,
                st: g,
                ct: n.None,
                ft: m.Param,
                it: q.Input,
                h: !1,
                fv: !1
            })
            c.setAttribute('ce206', a)
            c = G(c)
            U() && Va(b)
        },
        Dd = function (a) {
            var g = aa(c)
            fd(a, g, l.Date, e.formatDate(new Date(a), Cc(g, pa.defaultFormat())), pa)
        },
        Ed = function (a, g) {
            fd(a, aa(c), l.Time, g, Ca)
        },
        fd = function (a, g, b, k, e) {
            var t = xb(L ? c : c.nextSibling, b),
                l = !1
            h(t) && (ea(t), (l = !0), (L = !1))
            P({
                t: g.t,
                id: null,
                v: a,
                n: k,
                st: b,
                ct: n.None,
                ft: m.Param,
                it: q.Input,
                h: !1,
                fv: !1
            })
            c = G(c)
            e.hide()
            r = 0
            if (!l)
                switch (((a = Ba(c.nextSibling)), J(a))) {
                    case m.Param:
                        a = c
                        P({
                            t: g.t,
                            id: null,
                            v: '',
                            n: ',',
                            st: g.t == d.Action ? null : g.rt.o,
                            ct: n.None,
                            ft: m.Comma,
                            it: q.None,
                            h: !1,
                            fv: !1
                        })
                        c = G(a)
                        break
                    case m.End:
                    case m.Comma:
                        ; (a = c),
                            (b = X(c.previousSibling)),
                            J(b) == m.Param &&
                            1 < aa(c).ps.length &&
                            ((c = b),
                                P({
                                    t: g.t,
                                    id: null,
                                    v: '',
                                    n: ',',
                                    st: g.t == d.Action ? null : g.rt.o,
                                    ct: n.None,
                                    ft: m.Comma,
                                    it: q.None,
                                    h: !1,
                                    fv: !1
                                }),
                                (c = G(a)))
                }
            Q = !1
            W()
            U() && Va(g)
        },
        Bc = function (a) {
            var g = Ba(c.nextSibling)
            switch (J(g)) {
                case m.Comma:
                    c = g
                    Bc(a)
                    break
                case m.Param:
                    P({
                        t: a.t,
                        id: null,
                        v: '',
                        n: ',',
                        st: a.t == d.Action ? null : a.rt.o,
                        ct: n.None,
                        ft: m.Comma,
                        it: q.None,
                        h: !1,
                        fv: !1
                    })
                    c = G(c.previousSibling)
                    break
                case m.End:
                    g = J(c) != m.None ? null : c
                    var b = X(c)
                    J(b) == m.Param &&
                        1 < aa(c).ps.length &&
                        ((c = G(b)),
                            P({
                                t: a.t,
                                id: null,
                                v: '',
                                n: ',',
                                st: a.t == d.Action ? null : a.rt.o,
                                ct: n.None,
                                ft: m.Comma,
                                it: q.None,
                                h: !1,
                                fv: !1
                            }),
                            h(g) && (c = G(g)))
            }
        },
        Wa = function (a) {
            for (var c = -1; h(a) && J(a) != m.Name;)
                J(a) == m.Param && c++, (a = a.previousSibling)
            return c
        },
        Db = function (a) {
            if (h(a) && U())
                if (x(c) == d.Calculation && J(c) == m.End) v(Aa(), c, ia, null)
                else if (a.t == d.Function) {
                    var g = Cb(c, m.Name)
                    h(g)
                        ? 'true' == g.getAttribute('ce216')
                            ? v(V(), c, S, d.RightParenthesis)
                            : v(db(a), c, Ya, null)
                        : v(db(a), c, Ya, null)
                } else (a = Rb()), 0 < a.length && v(a, c, Sb, null)
        },
        aa = function (a) {
            a = Cb(a, m.Name)
            return h(a)
                ? D(x(a) == d.Action ? y.acs : y.fds, a.getAttribute('ce208'))
                : null
        },
        Nc = function (a, c) {
            for (var g = 0, b, d; g < a.length; g++)
                if (((b = a[g]), !h(b.Client) || !b.Client)) {
                    d = new e.StringBuilder()
                    c
                        ? h(b.Ns) &&
                        0 < b.Ns.length &&
                        (CodeEffects.register(b.Ns), d.append(b.Ns), d.append('.'))
                        : d.append('CodeEffects.Rule.')
                    d.append(gd(b.Name))
                    h(eval(d.dump())) ? d.append('.ce = [') : d.append(' = [')
                    if (!h(b.Data) || !b.Data.length || null == b.Data[0])
                        throw Error('Enum or menu data source is empty (CL39)')
                    for (var l = 0, m; l < b.Data.length; l++)
                        (m = b.Data[l]),
                            0 < l && d.append(','),
                            d.append('{"ID":"'),
                            d.append(m.ID),
                            d.append('","Name":"'),
                            d.append(m.Name),
                            h(m.Filter) && (d.append('","Filter":"'), d.append(m.Filter)),
                            d.append('"}')
                    d.append(']')
                    eval(d.dump())
                }
        },
        yc = function (a) {
            switch (a) {
                case 8:
                case 9:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 27:
                case 127:
                    return !1
                default:
                    return !0
            }
        },
        v = function (a, g, b, k, l) {
            h(a.ce) && (a = a.ce)
            va.close()
            var t = []
            if (h(k)) {
                a: {
                    var m = !0
                    x(c) != d.RightSource || h(c.nextSibling) || (m = !1)
                    var n = Xa(h(c.nextSibling) ? c.nextSibling : c, d.RightSource)
                    h(n)
                        ? m && (n = n.previousSibling)
                        : ((n = Xa(c, d.Flow)),
                            h(n)
                                ? (n = n.previousSibling)
                                : ((n = La()), (n = n[n.length - 1])))
                    var q = 0
                    m = 0
                    for (var ka; h(n);) {
                        ka = x(n)
                        if (ka == d.RightSource) {
                            n = Dc(n, d.LeftSource)
                            if (h(n) && h(n.previousSibling)) n = n.previousSibling
                            else {
                                m = n = 0
                                break a
                            }
                            ka = x(n)
                        }
                        if (ka == d.Flow || ka == d.LeftSource) break
                        ka == d.LeftParenthesis && q++
                        ka == d.RightParenthesis && m++
                        n =
                            h(n.previousSibling) && x(n.previousSibling) != d.Flow
                                ? n.previousSibling
                                : null
                    }
                    n = q
                }
                if (k == d.RightParenthesis && n > m) {
                    if (
                        ((k = new e.Menu.Item()),
                            (k.Name = p.els.lbl.pe),
                            (k.Type = d.RightParenthesis),
                            t.push(k),
                            a[0].t == d.Clause)
                    ) {
                        k = []
                        for (n = 0; n < a.length; n++) 'then' != a[n].v && k.push(a[n])
                        a = k
                    }
                } else
                    k == d.LeftParenthesis &&
                        ((k = new e.Menu.Item()),
                            (k.Name = p.els.lbl.pb),
                            (k.Type = d.LeftParenthesis),
                            t.push(k))
            }
            for (n = 0; n < a.length; n++) {
                m = a[n]
                k = new e.Menu.Item()
                k.ID = m.v || m.ID
                k.Name = m.n || m.Name
                if (h(m.t) || h(m.Type)) k.Type = m.t || m.Type
                t.push(k)
            }
            va.fill(g, t, b, Hd, p.help ? Id : null)
            Q && va.alignLeft(g)
            Q = !1
            r = 6
            l || (F = '')
        },
        Y = function (a, c, b, d) {
            a = Zc(a, F)
            if (0 < a.length) {
                var g = F
                v(a, c, b, d, !0)
                va.select(g)
            } else xa()
        },
        Pa = function (a, g) {
            function b(g, b) {
                if ('ce801' == g)
                    switch (parseInt(b, 10)) {
                        case l.Numeric:
                            Ma({
                                t: d.Value,
                                v: '',
                                st: l.Numeric,
                                ct: n.None,
                                ft: m.None,
                                span: c
                            })
                            break
                        default:
                            Lb(X(a))
                    }
                else if ('C' == g) tc(g)
                else {
                    var k = D(y.fds, g)
                    k.t == d.Function ? Eb({ t: k.t, m: g, v: !0 }) : Uc(k, g, !1)
                }
            }
            function k(a) {
                if ('ce801' == a) {
                    a = q()
                    var c = null
                    a.t == d.Function
                        ? h(a.rt.mds) && (c = a.rt.mds)
                        : h(a.mds) && (c = a.mds)
                    e(c, a.ftr)
                } else b(a)
            }
            function e(a, g) {
                u = ib(a, g)
                null != u && ((Q = L), v(u, c, zc, null))
            }
            function q() {
                var a = Da(c)
                return h(a) ? D(y.fds, a.getAttribute('ce208')) : null
            }
            function r(a, g, b, k) {
                for (var e = 0; e < a.length; e++) {
                    var h = a[e]
                        ; (h.t != d.Function && h.v == b.v) || K(h.v, h.o, h.n, g)
                }
                0 < F.length ? Y(g, c, k, null) : v(g, c, k, null)
            }
            var z = q()
            if (h(z)) {
                var w = z.t == d.Function ? z.rt.ai : z.ai,
                    x = hd(z),
                    A = null
                z.t == d.Function
                    ? h(z.rt.mds) && (A = z.rt.mds)
                    : h(z.mds) && (A = z.mds)
                if (h(A)) {
                    var C = Ec(x, z)
                    if (w == B.User || 0 == C.length || (1 == C.length && C[0].v == z.v))
                        e(A, z.ftr)
                    else {
                        var G = []
                        0 < C.length
                            ? (w == B.All && K('ce801', x, cb(x, !0), G), r(C, G, z, k))
                            : e(A, z.ftr)
                    }
                } else
                    w == B.User
                        ? (g && x != l.Enum && x != l.Bool) || Lb(a)
                        : ((A = []),
                            (C = Ec(x, z)),
                            0 < C.length
                                ? 1 == C.length && z.t != d.Function && C[0].v == z.v
                                    ? Lb(a)
                                    : ((x == l.Numeric && z.t == d.Function ? z.rt.cal : z.cal) &&
                                        K('C', x, p.els.lbl.c, A),
                                        w == B.All && K('ce801', x, cb(x), A),
                                        r(C, A, z, b))
                                : g || Lb(a))
            }
        },
        Uc = function (a, g, b) {
            P({
                t: b ? d.Calculation : d.Value,
                id: null,
                v: a.v,
                n: a.n,
                st: a.o,
                ct: b ? n.Field : n.None,
                ft: m.None,
                it: q.Field,
                h: !1,
                fv: !1
            })
            c.setAttribute('ce206', g)
            U() && (b ? v(Aa(), c, ia, null) : v(V(), c, S, d.RightParenthesis))
        },
        Lb = function (a) {
            function g(a) {
                var g = null
                try {
                    var b = c
                    a = a ? '' : '1/1/2000 '
                    x(b) != d.Value && (b = Xa(b, d.Value))
                    h(b) && (g = new Date(a + b.getAttribute('ce206')))
                    isNaN(g.getDate()) && (g = null)
                } catch (Ja) {
                    g = null
                }
                return g
            }
            xa()
            switch (ba(a)) {
                case l.String:
                    Zb(c.nextSibling) &&
                        Ma({
                            t: d.Value,
                            v: '',
                            st: l.String,
                            ct: n.None,
                            ft: m.None,
                            span: null
                        })
                    break
                case l.Date:
                    r = 3
                    a = Da(c)
                    a = h(a) ? D(y.fds, a.getAttribute('ce208')) : null
                    a = h(a) ? (h(a.rt) ? a.rt.f : a.f) : pa.defaultFormat()
                    pa.show(c, Jd, a, L, g(!0))
                    pa.position()
                    break
                case l.Time:
                    r = 4
                    a = Da(c)
                    a = h(a) ? D(y.fds, a.getAttribute('ce208')) : null
                    a = h(a) ? (h(a.rt) ? a.rt.f : a.f) : Ca.defaultFormat()
                    Ca.show(c, Kd, a, L, g(!1))
                    Ca.position()
                    break
                case l.Enum:
                    a = Da(a)
                    h(a) &&
                        (x(a) == d.Function
                            ? ((a = aa(a)), (u = sb(a.rt.e)))
                            : ((a = D(y.fds, a.getAttribute('ce208'))),
                                (u = h(a.e) ? sb(a.e) : a.ens)),
                            (C = u),
                            (cc = !1),
                            (Q = L),
                            v(u, c, ad, null))
                    break
                case l.Bool:
                    C = dd()
                    cc = !0
                    Q = L
                    v(C, c, $c, null)
                    break
                default:
                    ; (a = Da(c)),
                        (a = h(a) ? D(y.fds, a.getAttribute('ce208')) : null),
                        h(a) && (a.cal || (h(a.rt) && a.rt.cal))
                            ? ((a = []),
                                K('C', null, p.els.lbl.c, a),
                                K('ce801', null, cb(l.Numeric), a),
                                v(a, c, tc, null))
                            : Zb(c.nextSibling) &&
                            Ma({
                                t: d.Value,
                                v: '',
                                st: l.Numeric,
                                ct: n.None,
                                ft: m.None,
                                span: null
                            })
            }
        },
        Yc = function () {
            if (6 == r || 3 == r || 4 == r) return !1
            var a = Da(c)
            if (!h(a)) return !1
            a = D(y.fds, a.getAttribute('ce208'))
            if (a.t == d.Function ? a.rt.ai : a.ai != B.User) {
                var g = Ec(a.o, a)
                return 1 < g.length && a.t != d.Function && g[0].v != a.v
            }
            return !1
        },
        Ya = function (a) {
            var g = X(c),
                b = ba(g, !0)
            eb(Rc(a, b), null)
            U()
                ? 'isNull' == a || 'isNotNull' == a
                    ? v(V(), c, S, d.RightParenthesis)
                    : Pa(g)
                : (ca = !1)
        },
        tc = function (a) {
            switch (a) {
                case 'C':
                    P({
                        t: d.LeftBracket,
                        id: null,
                        v: '',
                        n: p.els.lbl.cb,
                        st: null,
                        ct: n.None,
                        ft: m.None,
                        it: q.None,
                        h: !1,
                        fv: !1
                    })
                    a = c
                    P({
                        t: d.RightBracket,
                        id: null,
                        v: '',
                        n: p.els.lbl.ce,
                        st: null,
                        ct: n.None,
                        ft: m.None,
                        it: q.None,
                        h: !1,
                        fv: !1
                    })
                    c = G(a)
                    W()
                    v(Aa(), c, ia, null)
                    break
                default:
                    Ma({
                        t: d.Value,
                        v: '',
                        st: l.Numeric,
                        ct: n.None,
                        ft: m.None,
                        span: c
                    })
            }
        },
        ia = function (a, g) {
            if (a == n.Number)
                (a = parseInt(a, 10)),
                    Ma({
                        t: d.Calculation,
                        v: '',
                        st: l.Numeric,
                        ct: a,
                        ft: m.None,
                        span: Ba(c)
                    }),
                    W()
            else if (a == n.Function) {
                var b = D(y.fds, g)
                if (!h(b)) throw Error('CL46')
                Eb({ t: d.Calculation, m: g, v: !1 })
            } else {
                a = parseInt(a, 10)
                b = ''
                switch (a) {
                    case n.Field:
                        var k = D(y.fds, g)
                        if (!h(k)) throw Error('CL48')
                        b = k.v
                        k = k.n
                        break
                    case n.LeftParenthesis:
                        k = p.els.lbl.pb
                        break
                    case n.RightParenthesis:
                        k = p.els.lbl.pe
                        break
                    case n.Multiplication:
                        k = '&#215;'
                        break
                    case n.Division:
                        k = '&#247;'
                        break
                    case n.Addition:
                        k = '&#43;'
                        break
                    case n.Subtraction:
                        k = '&#150;'
                        break
                    default:
                        throw Error('CL64')
                }
                P({
                    t: d.Calculation,
                    id: null,
                    v: b,
                    n: k,
                    st: null,
                    ct: a,
                    ft: m.None,
                    it: q.None,
                    h: !1,
                    fv: !1
                })
                U() && v(Aa(), c, ia, null)
            }
        },
        Wc = function (a) {
            var g = []
            K(n.Number, null, cb(l.Numeric), g)
            a = Qb(a)
            for (var b = 0; b < a.length; b++)
                K(a[b].t == d.Function ? n.Function : n.Field, a[b].v, a[b].n, g)
            L = Q = !0
            v(g, c, ia, null)
        },
        $c = function (a) {
            P({
                t: d.Value,
                id: null,
                v: a,
                n: Kb(a),
                st: l.Bool,
                ct: null,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
            c.setAttribute('ce206', a)
            U() && v(V(), c, S, d.RightParenthesis)
        },
        ad = function (a) {
            P({
                t: d.Value,
                id: null,
                v: a,
                n: D(u, a).Name,
                st: l.Enum,
                ct: null,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
            u = null
            c.setAttribute('ce206', a)
            U() && v(V(), c, S, d.RightParenthesis)
        },
        la = function (a, g, b) {
            if (h(g) && parseInt(g, 10) == d.LeftParenthesis)
                P({
                    t: d.LeftParenthesis,
                    id: null,
                    v: '(',
                    n: p.els.lbl.pb,
                    st: null,
                    ct: n.None,
                    ft: m.None,
                    it: q.None,
                    h: !1,
                    fv: !1
                }),
                    U() && v(ja(), c, la, d.LeftParenthesis)
            else
                switch (a) {
                    case 'ce802':
                    case 'ce803':
                        ha = null
                        g = []
                        for (b = 0; b < y.fds.length; b++) {
                            var k = y.fds[b]
                            k.t == d.Field &&
                                k.o == l.Collection &&
                                k.ct == A.Reference &&
                                g.push(k)
                        }
                        b = []
                        for (k = 0; k < g.length; k++) K(a, g[k].v, g[k].n, b)
                        v(b, c, Ld, null)
                        break
                    case 'ce804':
                        ha = b
                        v(ja(), c, la, null)
                        Fa && (ha = b)
                        break
                    case 'ce805':
                        ha = 'ce805'
                        v(ja(), c, la, null)
                        Fa && (ha = 'ce805')
                        break
                    default:
                        ; (ha = null),
                            (g = D(y.fds, a)),
                            g.t == d.Function
                                ? Eb({ t: g.t, m: a, v: !1 })
                                : (eb(g, null), U() && v(db(g), c, Ya, null))
                }
        },
        zc = function (a) {
            P({
                t: d.Value,
                id: null,
                v: a,
                n: D(u, a).Name,
                st: l.Numeric,
                ct: n.None,
                ft: m.None,
                it: q.Field,
                h: !1,
                fv: !1
            })
            u = null
            c.setAttribute('ce206', a)
            U() && v(V(), c, S, d.RightParenthesis)
        },
        Ld = function (a, g) {
            var b = D(y.fds, g)
            P({
                t: d.Exists,
                id: null,
                v: a,
                n: pc(a),
                st: null,
                ct: null,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
            eb(b, null)
            P({
                t: d.Where,
                id: null,
                v: a,
                n: tb(p.els.dsc, 'where'),
                st: null,
                ct: null,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
            P({
                t: d.LeftSource,
                id: null,
                v: b.cv,
                n: p.els.lbl.ub,
                st: null,
                ct: n.None,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
            b = c
            P({
                t: d.RightSource,
                id: null,
                v: y.n,
                n: p.els.lbl.ue,
                st: null,
                ct: n.None,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
            c = G(b)
            M(c)
            v(ja(), c, la, d.LeftParenthesis)
        },
        xc = function (a) {
            L = !0
            a = D(y.fds, a)
            var b = Xa(c, d.Field)
            c = G(b)
            eb(a, null)
        },
        Bd = function (a) {
            L = !0
            P({
                t: d.Exists,
                id: null,
                v: a,
                n: pc(a),
                st: null,
                ct: null,
                ft: m.None,
                it: q.None,
                h: !1,
                fv: !1
            })
        },
        wb = function (a, b, e) {
            switch (a) {
                case 'ce804':
                    ha = e
                    v(vb(), c, wb, null)
                    Fa && (ha = e)
                    break
                case 'ce805':
                    ha = 'ce805'
                    v(vb(), c, wb, null)
                    Fa && (ha = 'ce805')
                    break
                default:
                    ; (a = D(y.fds, a)),
                        eb(a, null),
                        P({
                            t: d.Setter,
                            id: null,
                            v: 'to',
                            n: tb(p.els.str, 'to'),
                            st: a.o,
                            ct: null,
                            ft: m.None,
                            it: q.None,
                            h: !1,
                            fv: !1
                        }),
                        U() ? Pa(X(c)) : (ca = !1)
            }
        },
        S = function (a, b) {
            'else' == a || 'elseIf' == a
                ? Sb(a)
                : h(b) && parseInt(b, 10) == d.RightParenthesis
                    ? (P({
                        t: d.RightParenthesis,
                        id: null,
                        v: ')',
                        n: p.els.lbl.pe,
                        st: null,
                        ct: n.None,
                        ft: m.None,
                        it: q.None,
                        h: !1,
                        fv: !1
                    }),
                        U() && v(V(), c, S, d.RightParenthesis))
                    : (eb(D(p.els.cls, a), null),
                        ('then' == a || Ga(c)) && U()
                            ? v(Na(), c, Oa, null)
                            : U() && v(ja(), c, la, d.LeftParenthesis))
        },
        Jd = function (a) {
            var b = Da(c)
            b = h(b) ? D(y.fds, b.getAttribute('ce208')) : null
            b = h(b) ? (h(b.rt) ? b.rt.f : b.f) : pa.defaultFormat()
            var t = !0,
                k = Ba(c)
            h(k) && x(k) == d.Value && ba(k) == l.Date && ((c = G(k)), (t = !1))
            t
                ? P({
                    t: d.Value,
                    id: null,
                    v: a,
                    n: e.formatDate(new Date(a), b),
                    st: l.Date,
                    ct: null,
                    ft: m.None,
                    it: q.None,
                    h: !1,
                    fv: !1
                })
                : (c.setAttribute('ce206', a), e.text(c, e.formatDate(new Date(a), b)))
            pa.hide()
            Q = !1
            r = 0
            W()
            U() && v(V(), c, S, d.RightParenthesis)
        },
        Kd = function (a, b) {
            var g = !0
            if (h(c.nextSibling)) {
                var k = Ba(c.nextSibling)
                h(k) && x(k) == d.Value && ba(k) == l.Time && ((c = G(k)), (g = !1))
            }
            g
                ? P({
                    t: d.Value,
                    id: null,
                    v: a,
                    n: b,
                    st: l.Time,
                    ct: null,
                    ft: m.None,
                    it: q.None,
                    h: !1,
                    fv: !1
                })
                : (c.setAttribute('ce206', a), e.text(c, b))
            Ca.hide()
            Q = !1
            r = 0
            W()
            U() && v(V(), c, S, d.RightParenthesis)
        },
        Oa = function (a) {
            'set' == a
                ? (P({
                    t: d.Setter,
                    id: null,
                    v: 'set',
                    n: tb(p.els.str, 'set'),
                    st: null,
                    ct: null,
                    ft: m.None,
                    it: q.None,
                    h: !1,
                    fv: !1
                }),
                    U() ? v(vb(), c, wb, null) : (ca = !1))
                : Eb({ t: D(y.acs, a).t, m: a, v: !1 })
        },
        Sb = function (a) {
            var b = 'and' == a
            eb(D(b ? p.els.cls : p.els.fls, a), null)
            U() &&
                (b
                    ? v(Na(), c, Oa, null)
                    : 'else' == a
                        ? v(Na(), c, Oa, null)
                        : v(ja(), c, la, d.LeftParenthesis))
        },
        P = function (a) {
            var c = new e.Client.Element()
            c.n = a.n
            c.v = a.v
            c.t = a.t
            c.o = h(a.st) ? a.st : l.None
            c.CalType = h(a.ct) ? a.ct : n.None
            c.FuncType = h(a.ft) ? a.ft : m.None
            c.q = a.fv
            c.InpType = h(a.it) ? a.it : q.None
            eb(c, a.id, a.h)
        },
        eb = function (a, b, e) {
            var g = !(!h(c) || !h(c.nextSibling))
            var t = document.createElement('SPAN')
            t.id = h(b) ? b : w.container.id + Sa
            Sa++
            99999999999 < Sa && (Sa = 0)
            t.setAttribute('ce218', 'false')
            a.t == d.Field && a.o == l.Collection
                ? ((b = D(y.fds, a.v)),
                    b.ct == A.Reference
                        ? h(b.cn)
                            ? (t.innerHTML = b.cn)
                            : (t.innerHTML = a.n)
                        : (t.innerHTML = a.n))
                : (t.innerHTML = a.n)
            a.t == d.Value
                ? (ya(t, 'ceValue'), t.setAttribute('ce206', a.v))
                : a.t == d.Calculation
                    ? (a.CalType != n.Function ||
                        (a.FuncType != m.Name && a.FuncType != m.End) ||
                        ya(t, 'ceValue'),
                        ya(t, 'ceValue'),
                        h(a.v) && t.setAttribute('ce206', a.v),
                        a.CalType == n.RightParenthesis
                            ? ((t.onmouseover = function (a) {
                                $b(this, id)
                            }),
                                (t.onmouseout = function (a) {
                                    ac(this, id)
                                }),
                                (t.style.paddingRight = t.style.paddingLeft = '2px'))
                            : a.CalType == n.LeftParenthesis &&
                            ((t.onmouseover = function (a) {
                                $b(this, jd)
                            }),
                                (t.onmouseout = function (a) {
                                    ac(this, jd)
                                }),
                                (t.style.paddingRight = t.style.paddingLeft = '2px')))
                    : a.t == d.Flow
                        ? ya(t, 'ceFlow')
                        : a.t == d.Field
                            ? ya(t, 'ceField')
                            : a.t == d.Function
                                ? a.FuncType == m.Name || a.FuncType == m.End
                                    ? (t.setAttribute('ce216', a.q ? 'true' : 'false'),
                                        a.q || a.CalType == n.Function
                                            ? ya(t, 'ceValue')
                                            : ya(t, 'ceField'))
                                    : (ya(t, 'ceValue'),
                                        a.InpType == q.Input && h(a.v) && t.setAttribute('ce206', a.v))
                                : a.t == d.Action
                                    ? a.FuncType == m.Name || a.FuncType == m.End
                                        ? ya(t, 'ceAction')
                                        : (ya(t, 'ceValue'),
                                            a.InpType == q.Input && h(a.v) && t.setAttribute('ce206', a.v))
                                    : a.t == d.Operator
                                        ? ya(t, 'ceOperator')
                                        : a.t == d.LeftBracket || a.t == d.RightBracket
                                            ? ya(t, 'ceParenthesis')
                                            : a.t == d.LeftSource || a.t == d.RightSource
                                                ? ya(t, 'ceBrace')
                                                : a.t == d.Clause ||
                                                    a.t == d.Setter ||
                                                    a.t == d.Where ||
                                                    a.t == d.Exists
                                                    ? ya(t, 'ceClause')
                                                    : a.t == d.Tab
                                                        ? ya(t, 'ceTab')
                                                        : a.t == d.NewLine && ya(t, 'ceNewLine')
            a.t == d.Tab
                ? (t.style.paddingRight = t.style.paddingLeft = '8px')
                : (a.t != d.Function && a.t != d.Action && a.t != d.Calculation) ||
                    a.FuncType != m.End
                    ? (a.t == d.RightParenthesis
                        ? ((t.onmouseover = function (a) {
                            $b(this, kd)
                        }),
                            (t.onmouseout = function (a) {
                                ac(this, kd)
                            }),
                            (t.className = 'ceParenthesis'))
                        : a.t == d.LeftParenthesis &&
                        ((t.onmouseover = function (a) {
                            $b(this, ld)
                        }),
                            (t.onmouseout = function (a) {
                                ac(this, ld)
                            }),
                            (t.className = 'ceParenthesis')),
                        (t.style.paddingRight = t.style.paddingLeft = '2px'))
                    : ((b = D(a.t == d.Action ? y.acs : y.fds, a.v)),
                        (h(b) && h(b.ps) && 0 != b.ps.length) ||
                        ((t.style.paddingRight = t.style.paddingLeft = '0'),
                            (t.style.width = '2px')))
            t.style.paddingBottom = '2px'
            t.style.display = 'inline-block'
            t.style.whiteSpace = 'nowrap'
            t.setAttribute('ce202', a.t)
            a.t == d.Field &&
                a.o == l.Bool &&
                (a.ir
                    ? t.setAttribute('ce213', 'true')
                    : ((b = D(y.fds, a.v)),
                        h(b) && h(b.ir) && b.ir && t.setAttribute('ce213', 'true')))
            t.setAttribute('ce203', h(a.CalType) ? a.CalType : n.None)
            t.setAttribute('ce204', h(a.FuncType) ? a.FuncType : m.None)
            t.setAttribute('ce205', h(a.InpType) ? a.InpType : q.None)
            t.setAttribute('ce208', a.v)
            h(a.o) && a.o != l.None
                ? t.setAttribute('ce209', a.o)
                : t.setAttribute('ce209', l.None)
            L && bb()
            L = !1
            if (g) {
                if (
                    ((g = c.nextSibling),
                        w.container.insertBefore(t, c.nextSibling),
                        a.t != d.Tab)
                ) {
                    if (h(g) && x(g) == d.Tab)
                        for (; h(g) && x(g) == d.Tab;)
                            (b = g.nextSibling), w.container.removeChild(g), (g = b)
                    if (h(g)) {
                        if (a.t == d.RightBracket && x(g) == d.LeftBracket) {
                            for (; x(g) != d.RightBracket;)
                                (b = g.nextSibling), w.container.removeChild(g), (g = b)
                            w.container.removeChild(g)
                        }
                        a.t != d.Calculation ||
                            (a.CalType != n.Field && a.CalType != n.Number)
                            ? (a.t == d.Value ||
                                (a.t == d.Operator &&
                                    'isNull' != a.v &&
                                    'isNotNull' != a.v) ||
                                (a.t == d.Clause && 'then' == a.v) ||
                                (a.t == d.Flow && 'else' == a.v)) &&
                            a.t == x(g) &&
                            a.o == ba(g) &&
                            w.container.removeChild(g)
                            : a.t == x(g) && Md(a.CalType, T(g)) && w.container.removeChild(g)
                    }
                }
            } else w.container.appendChild(t)
                ; (a.t != d.Function && a.t != d.Action && a.t != d.Calculation) ||
                    a.FuncType != m.End ||
                    !sa(t)
                    ? (c = e ? t : G(t))
                    : Ua(t, e)
            p.titles && Nd(a)
            da = !1
            W()
        },
        Ma = function (a) {
            xa()
            var b = X(h(a.span) ? a.span : c),
                t = document.createElement('INPUT')
            t.type = 'text'
            t.id = w.container.id + Sa
            Sa++
            99999999999 < Sa && (Sa = 0)
            t.className = 'ceValue'
            t.style.marginRight = t.style.marginLeft = '2px'
            t.style.width = '2px'
            var k = Da(b)
            b = null
            h(k) &&
                ((b = D(y.fds, k.getAttribute('ce208'))),
                    h(b) || (b = D(y.acs, k.getAttribute('ce208'))))
            if (h(b)) {
                k = -9007199254740992
                var u = null,
                    v = null
                b.t == d.Function || b.t == d.Action
                    ? a.ft == m.Param
                        ? h(a.pi) &&
                        h(b.ps[a.pi]) &&
                        ((k = h(b.ps[a.pi].min) ? b.ps[a.pi].min : k),
                            h(b.ps[a.pi].max) && (u = b.ps[a.pi].max),
                            (v = h(b.ps[a.pi].dec) ? b.ps[a.pi].dec : !0))
                        : ((k = h(b.rt.min) ? b.rt.min : k),
                            h(b.rt.max) && (u = b.rt.max),
                            (v = h(b.rt.dec) ? b.rt.dec : !0))
                    : ((k = h(b.min) ? b.min : k),
                        h(b.max) && (u = b.max),
                        (v = h(b.dec) ? b.dec : !0))
                a.st == l.Numeric
                    ? ((t.maxLength = 28),
                        t.setAttribute('ce212', h(u) ? u.toString() : (-1 * k).toString()),
                        t.setAttribute('ce211', k.toString()),
                        t.setAttribute('ce214', v ? '1' : '0'),
                        t.setAttribute('ce215', 0 > k ? '1' : '0'))
                    : ((t.maxLength = h(u) ? u : 256),
                        t.setAttribute('ce212', t.maxLength.toString()))
            } else
                (t.maxLength = 256), t.setAttribute('ce212', t.maxLength.toString())
            h(a.span)
                ? x(a.span) == d.Value ||
                    (x(a.span) == d.Calculation && T(a.span) == n.Number) ||
                    ((x(a.span) == d.Function || x(a.span) == d.Action) &&
                        za(a.span) == q.Input)
                    ? ((yb = a.span.id),
                        (a.span.style.display = 'none'),
                        w.container.insertBefore(t, a.span))
                    : ((yb = null),
                        h(a.span.nextSibling)
                            ? w.container.insertBefore(t, a.span.nextSibling)
                            : w.container.appendChild(t))
                : h(c) && h(c.nextSibling)
                    ? w.container.insertBefore(t, c.nextSibling)
                    : ((yb = null), w.container.appendChild(t))
            t.setAttribute('ce202', a.t)
            t.setAttribute('ce209', h(a.st) ? a.st : l.None)
            t.setAttribute('ce206', a.v)
            t.setAttribute('ce203', h(a.ct) ? a.ct : n.None)
            t.setAttribute('ce204', h(a.ft) ? a.ft : m.None)
            t.setAttribute('ce205', q.Input)
            t.setAttribute('ce208', a.v)
            md(t)
            r = 0
            t.value = h(a.v) ? e.decode(a.v) : ''
            0 < t.value.length && mb(t)
            if (0 == t.value.length)
                try {
                    t.focus()
                } catch (E) { }
            else
                try {
                    t.select()
                } catch (E) { }
            t.onkeydown = function (a) {
                a = new e.Event(a)
                var c = ba(this)
                if (c == l.Numeric && 32 == a.keyCode)
                    return Bb(p.els.er.e112), a.preventDefault(), !1
                if (
                    8 == a.keyCode ||
                    32 == a.keyCode ||
                    127 == a.keyCode ||
                    37 == a.keyCode ||
                    39 == a.keyCode
                )
                    return !0
                if (c == l.Numeric) {
                    c = a.keyCode
                    var b = '1' == this.getAttribute('ce214'),
                        d = '1' == this.getAttribute('ce215')
                    if (!b && (188 == c || 190 == c || 110 == c))
                        return Bb(p.els.er.e110), a.preventDefault(), !1
                    if (!d && (109 == c || 189 == c))
                        return Bb(p.els.er.e111), a.preventDefault(), !1
                    d = ''
                    switch (c) {
                        case 188:
                        case 190:
                        case 110:
                            var g = 188 == c ? ',' : '.'
                            if (0 == this.value.length)
                                return (
                                    (this.value = '0' + g),
                                    mb(this, a.keyCode),
                                    a.preventDefault(),
                                    !1
                                )
                                    ; -1 < this.value.indexOf(',') || -1 < this.value.indexOf('.')
                                        ? Bb(p.els.er.e113)
                                        : ((this.value += g),
                                            this.value == '-' + g && (this.value = '-0' + g),
                                            1 < this.value.length &&
                                            '0' == this.value.substr(0, 1) &&
                                            this.value.substr(1, 1) != g &&
                                            (this.value = this.value.substr(1)),
                                            2 < this.value.length &&
                                            '-0' == this.value.substr(0, 2) &&
                                            this.value.substr(2, 1) != g &&
                                            (this.value = '-' + this.value.substr(2)))
                            a.preventDefault()
                            return !1
                        case 109:
                        case 189:
                            return (
                                0 == this.value.length
                                    ? ((this.value = '-'), mb(this, 109))
                                    : 0 > this.value.indexOf('-') &&
                                    ((this.value = '-' + this.value), mb(this, 109)),
                                a.preventDefault(),
                                !1
                            )
                        default:
                            if ((g = a.rawEvent.key || a.rawEvent['char']))
                                switch (c) {
                                    case 48:
                                        '0' != g && (d = g)
                                        break
                                    case 49:
                                        '1' != g && (d = g)
                                        break
                                    case 50:
                                        '2' != g && (d = g)
                                        break
                                    case 51:
                                        '3' != g && (d = g)
                                        break
                                    case 52:
                                        '4' != g && (d = g)
                                        break
                                    case 53:
                                        '5' != g && (d = g)
                                        break
                                    case 54:
                                        '6' != g && (d = g)
                                        break
                                    case 55:
                                        '7' != g && (d = g)
                                        break
                                    case 56:
                                        '8' != g && (d = g)
                                        break
                                    case 57:
                                        '9' != g && (d = g)
                                }
                            1 > d.length &&
                                (96 <= c && 105 >= c && (c -= 48),
                                    (d = this.value.replace(',', '.') + String.fromCharCode(c)),
                                    1 < d.length &&
                                    '0' == d.substr(0, 1) &&
                                    '.' != d.substr(1, 1) &&
                                    ((this.value = this.value.substr(1, 1)),
                                        (d = d.substr(1, 1))),
                                    2 < d.length &&
                                    '-0' == d.substr(0, 2) &&
                                    '.' != d.substr(2, 1) &&
                                    ((this.value = '-' + this.value.substr(2)),
                                        (d = '-' + d.substr(2))))
                    }
                    if ((b && !e.isNumeric(d)) || (!b && !e.isInteger(d)))
                        return Bb(p.els.er.e112), mb(this), a.preventDefault(), !1
                }
                mb(this, a.keyCode)
                wa()
            }
            t.onkeyup = function (a) {
                a = new e.Event(a)
                    ; (8 != a.keyCode && 32 != a.keyCode && 127 != a.keyCode) || mb(this)
                this.setAttribute('ce206', this.value)
            }
            t.onpaste = function (a) {
                if (ba(this) == l.Numeric) return !1
                var c = this
                setTimeout(function () {
                    mb(c)
                }, 60)
            }
            t.onblur = function (a) {
                ra()
            }
        },
        mb = function (a, c) {
            if (!(h(c) && a.value.length >= a.maxLength)) {
                var b = document.createElement('SPAN')
                b.id = 'ceTxt' + w.container.id
                b.className = 'ceValue'
                b.style.whiteSpace = 'nowrap'
                w.container.appendChild(b)
                b.innerHTML = $rule.encode(
                    a.value + (h(c) ? String.fromCharCode(c) : '')
                )
                var d = Ta(b).width
                w.container.removeChild(b)
                a.style.width = d + 2 + 'px'
            }
        },
        Nd = function (a) {
            function b(a) {
                a = D(y.fds, a)
                h(a) && h(a.d) && (c.title = Jb(a.d))
            }
            switch (a.t) {
                case d.Function:
                case d.Action:
                    switch (a.FuncType) {
                        case m.Name:
                            a = D(a.t == d.Function ? y.fds : y.acs, a.v)
                            h(a) && h(a.d) && (c.title = Jb(a.d))
                            break
                        case m.Param:
                            if (((a = aa(c)), h(a) && 0 < a.ps.length)) {
                                var e = Wa(c)
                                0 <= e && ((a = a.ps[e]), h(a) && h(a.d) && (c.title = Jb(a.d)))
                            }
                    }
                    break
                case d.Field:
                    b(a.v)
                    break
                case d.Value:
                    a.InpType == q.Field && b(a.v)
                    break
                case d.Calculation:
                    a.CalType == n.Field && b(a.v)
            }
        },
        bb = function () {
            x(c) == d.HtmlTag &&
                ((c = G(h(c.nextSibling) ? c.nextSibling : c.previousSibling)), M(c))
            switch (x(c)) {
                case d.Calculation:
                case d.Function:
                case d.Action:
                    switch (J(c)) {
                        case m.Name:
                            for (; J(c) != m.End;) {
                                var a = c.nextSibling
                                w.container.removeChild(c)
                                c = a
                            }
                            ea(c)
                            break
                        case m.End:
                            for (; J(c) != m.Name;) ea(c)
                            ea(c)
                            break
                        case m.Comma:
                            for (ea(c); J(c) != m.Name && J(c) != m.Comma;) ea(c)
                            break
                        case m.Param:
                            a = Ba(c.nextSibling)
                            if (J(a) == m.Comma) (c = a), bb()
                            else for (ea(c); J(c) != m.Name && J(c) != m.Param;) ea(c)
                            break
                        default:
                            ea(c)
                    }
                    break
                case d.Field:
                    a = D(y.fds, c.getAttribute('ce208'))
                    h(a) && a.o == l.Collection && a.ct == A.Reference ? nd(c) : ea(c)
                    break
                case d.LeftBracket:
                    if (!h(c.nextSibling)) throw Error('CL82')
                    for (; x(c) != d.RightBracket;)
                        (a = c.nextSibling), w.container.removeChild(c), (c = a)
                    ea(c)
                    break
                case d.RightBracket:
                    if (!h(c.previousSibling)) throw Error('CL84')
                    for (; x(c) != d.LeftBracket;) ea(c)
                    ea(c)
                    break
                case d.RightSource:
                case d.LeftSource:
                case d.Where:
                case d.Exists:
                    nd(c)
                    break
                default:
                    ea(c)
            }
            W()
        },
        nd = function (a) {
            if (!L) {
                a = x(c) == d.RightSource ? c : od(c, d.RightSource)
                if (!h(a)) {
                    ea(c)
                    return
                }
                for (var b = Dc(a, d.Exists).id, e; a.id != b;)
                    (e = a.previousSibling), w.container.removeChild(a), (a = e)
                c = G(a)
            }
            ea(c)
        },
        ea = function (a) {
            if (h(a.previousSibling)) {
                var b = a.previousSibling
                w.container.removeChild(a)
                c = G(b)
                M(c)
            }
        },
        $b = function (a, b) {
            if (!bc(a)) {
                var d = b(a)
                if (h(d)) {
                    if (1 == r || a.id != c.id) a.className += ' ceHighlight'
                    bc(d) || (1 != r && d.id == c.id) || (d.className += ' ceHighlight')
                }
            }
        },
        ac = function (a, b) {
            if (!bc(a)) {
                var d = b(a)
                if (h(d)) {
                    if (1 == r || a.id != c.id)
                        a.className = $rule.trim(a.className.replace('ceHighlight', ''))
                    bc(d) ||
                        (1 != r && d.id == c.id) ||
                        (d.className = $rule.trim(d.className.replace('ceHighlight', '')))
                }
            }
        },
        bc = function (a) {
            if (!h(N) || 0 == N.length) return !1
            for (var c = 0; c < N.length; c++) if (N[c] == a.id) return !0
            return !1
        },
        kd = function (a) {
            var c = 1
            a = a.previousSibling
            for (var b; h(a);) {
                b = x(a)
                if (b == d.RightSource)
                    if (((a = Dc(a, d.LeftSource)), h(a) && h(a.previousSibling)))
                        (a = a.previousSibling), (b = x(a))
                    else {
                        a = null
                        break
                    }
                b == d.RightParenthesis ? c++ : b == d.LeftParenthesis && c--
                if (0 == c) break
                else if (b == d.LeftSource || b == d.Flow) {
                    a = null
                    break
                } else a = a.previousSibling
            }
            return h(a) ? a : null
        },
        ld = function (a) {
            var c = 1
            a = a.nextSibling
            for (var b; h(a);) {
                b = x(a)
                if (b == d.LeftSource)
                    if (((a = od(a, d.RightSource)), h(a) && h(a.nextSibling)))
                        (a = a.nextSibling), (b = x(a))
                    else {
                        a = null
                        break
                    }
                b == d.RightParenthesis ? c-- : b == d.LeftParenthesis && c++
                if (0 == c) break
                else if (b == d.RightSource || b == d.Flow) {
                    a = null
                    break
                } else a = a.nextSibling
            }
            return h(a) ? a : null
        },
        id = function (a) {
            var c = 1
            for (
                a = a.previousSibling;
                h(a) &&
                (T(a) == n.LeftParenthesis ? c-- : T(a) == n.RightParenthesis && c++,
                    0 != c);

            )
                a = a.previousSibling
            return h(a) && x(a) != d.LeftBracket ? a : null
        },
        jd = function (a) {
            var c = 1
            for (
                a = a.nextSibling;
                x(a) != d.RightBracket &&
                (T(a) == n.RightParenthesis ? c-- : T(a) == n.LeftParenthesis && c++,
                    0 != c);

            )
                a = a.nextSibling
            return h(a) && x(a) != d.RightBracket ? a : null
        },
        Dc = function (a, c) {
            for (var b = 0, g = 0, e; h(a);) {
                e = x(a)
                e == d.LeftSource && b++
                if (b == g && e == c) return a
                e == d.RightSource && g++
                a =
                    h(a.previousSibling) && x(a.previousSibling) != d.Flow
                        ? a.previousSibling
                        : null
            }
            return null
        },
        od = function (a, c) {
            for (var b = 0, g = 0, e; h(a);) {
                e = x(a)
                e == d.RightSource && g++
                if (b == g && e == c) return a
                e == d.LeftSource && b++
                a =
                    h(a.nextSibling) && x(a.nextSibling) != d.Flow ? a.nextSibling : null
            }
            return null
        },
        hb = function (a, b) {
            if (
                !h(c.nextSibling) ||
                x(c.nextSibling) != d.HtmlTag ||
                !h(c.nextSibling.nextSibling.nextSibling) ||
                x(c.nextSibling.nextSibling.nextSibling) != d.HtmlTag
            ) {
                var g = document.createElement('BR')
                g.setAttribute('ce202', d.HtmlTag)
                    ; (h(c) && h(c.nextSibling)) || a
                        ? w.container.insertBefore(g, a ? c : c.nextSibling)
                        : w.container.appendChild(g)
                c = b ? g : G(g)
                P({
                    t: d.NewLine,
                    id: null,
                    v: '',
                    n: p.tochki ? '&#149;&nbsp;' : '&nbsp;&nbsp;',
                    st: null,
                    ct: null,
                    ft: null,
                    fv: !1,
                    it: null,
                    h: b
                })
            }
        },
        bd = function () {
            Pc()
            p.help && ub(p.els.ms.i101)
            qa = 0
            F = ''
            Fa = !1
            r = 2
            M(null)
        },
        Lc = function () {
            if (h(w) && h(w.container) && h(p)) {
                ; (6 != r && 8 != r) || xa()
                bd()
                if (p.tools) {
                    ua.setValue('')
                    ua.setClass('ceNameBoxDefault')
                    ab.setValue('')
                    ab.setClass('ceDescriptionBoxDefault')
                    var a = e.getChildrenByAttribute(oa, 'ce235')
                    0 < a.length && a[0].parentNode.removeChild(a[0])
                }
                fa = null
                r = 1
            }
        },
        Zb = function (a) {
            if (h(a) && ((a = Ba(a)), h(a))) {
                var b = ba(a)
                if (jb(x(a), b, T(a), za(a)) && za(a) != q.Field)
                    return (
                        b != l.String && b != l.Numeric && md(a),
                        (c = G(c)),
                        (L = Q = !1),
                        W(),
                        !1
                    )
            }
            return !0
        },
        nc = function () {
            if (h(N) && 0 < N.length) {
                for (var a, c = 0; c < N.length; c++)
                    (a = document.getElementById(N[c])),
                        h(a) &&
                        ((a.className = $rule.trim(
                            a.className.replace('ceHighlight', '')
                        )),
                            (a.title = ''))
                N = []
            }
            p.help && (Z.className = $rule.trim(Z.className.replace('ceError', '')))
        },
        Tb = function () {
            ta = null
            for (
                var a = e.getChildrenByAttribute(w.container, 'ce218', 'true'),
                c,
                b = 0;
                b < a.length;
                b++
            )
                (c = a[b]),
                    (c.className = e.trim(c.className.replace('ceSelected', ''))),
                    c.setAttribute('ce218', 'false')
        },
        Xc = function (a, b) {
            Ea = []
            sibling = null
            var g = e.getChildrenByAttribute(w.container, 'ce218', 'true')
            if (0 < g.length) {
                for (var k = !1, l = !1, n = 0, p, q; n < g.length; n++) {
                    p = g[n]
                    q = x(p)
                    f = J(p)
                    switch (q) {
                        case d.HtmlTag:
                            k = !0
                            break
                        case d.NewLine:
                        case d.Tab:
                            if (!k) continue
                            break
                        default:
                            k = !1
                    }
                    switch (q) {
                        case d.Function:
                        case d.Action:
                            if (f == m.Name) l = !0
                            else if (!l) continue
                            break
                        case d.Calculation:
                            if (f == m.Name) l = !0
                            else if (f == m.None || l) l = !1
                            else continue
                            break
                        default:
                            l = !1
                    }
                    a &&
                        h(p.previousSibling) &&
                        ((sibling = p.previousSibling),
                            (q = x(sibling)),
                            q == d.HtmlTag || q == d.NewLine) &&
                        (sibling = sibling.previousSibling)
                    q = a ? w.container.removeChild(p) : p.cloneNode(!0)
                    q.className = e.trim(p.className.replace('ceSelected', ''))
                    q.setAttribute('ce218', 'false')
                    Ea.push(q)
                }
                a && h(sibling) && (c = G(sibling))
                wa(b, g.length)
            }
        },
        rd = function (a) {
            a = 'ceT' + w.container.id
            oa = document.getElementById(a)
            h(oa) && oa.parentNode.removeChild(oa)
            oa = document.createElement('DIV')
            oa.id = a
            oa.className = 'ceToolBar'
            a = document.createElement('DIV')
            a.className = 'ceContainer'
            oa.appendChild(a)
            var c = document.createElement('DIV')
            c.className = 'ceRulesMenu'
            a.appendChild(c)
            Ra = document.createElement('SPAN')
            Ra.id = 'ceRl' + w.container.id
            Ra.className = 'ceRulesButton'
            Ra.innerHTML = p.els.lbl.r + '&nbsp;&#9662;'
            c.appendChild(Ra)
            Ra.onclick = function (a) {
                M(null)
                new e.Event(a).stopPropagation()
                Ab()
                Q = !0
                0 < F.length ? Y(O, Ra, Xb, null) : v(O, Ra, Xb, null)
                r = 8
            }
            c = document.createElement('DIV')
            c.className = 'ceControls'
            c.setAttribute('ce234', 'true')
            a.appendChild(c)
            var b = document.createElement('DIV')
            b.className = 'ceInputName'
            c.appendChild(b)
            ua = new e.TextBox.Control()
            ua.init(
                new e.TextBox.Settings(
                    b,
                    'ceTl' + w.container.id,
                    'ceNameBox',
                    'ceNameBoxDefault',
                    50,
                    p.els.lbl.n,
                    p.els.er.e104,
                    'ceError'
                )
            )
            b = document.createElement('DIV')
            b.className = 'ceInputDesc'
            c.appendChild(b)
            ab = new e.TextBox.Control()
            ab.init(
                new e.TextBox.Settings(
                    b,
                    'ceTd' + w.container.id,
                    'ceDescriptionBox',
                    'ceDescriptionBoxDefault',
                    80,
                    p.els.lbl.d,
                    p.els.er.e104,
                    'ceError'
                )
            )
            b = document.createElement('DIV')
            b.className = 'ceSave'
            c.appendChild(b)
            c = document.createElement('SPAN')
            c.className = 'ceSaveButton'
            c.innerHTML = p.els.lbl.a
            b.appendChild(c)
            c.onclick = function (a) {
                ; (6 != r && 8 != r) || xa()
                a = La()
                0 != a.length && (1 != a.length || (h(x(a[0])) && x(a[0]) != d.Flow))
                    ? Fc('ceSave')
                    : alert(p.els.er.e106)
            }
            oa.appendChild(a)
            w.container.appendChild(oa)
        },
        Oc = function () {
            var a = document.getElementById('ceH' + w.container.id)
            h(a) && a.parentNode.removeChild(a)
            Z = null
            p.help = !1
        },
        Fc = function (a) {
            rb = a
            M(null)
            if (w.clientOnly)
                switch (rb) {
                    case 'ceDelete':
                        if (!h(fa)) throw Error('CL31')
                        if (!h(jc)) {
                            alert('The Delete action is not defined')
                            break
                        }
                        gb = !0
                        jc(fa)
                        break
                    case 'ceSave':
                        if (!h(ic)) {
                            alert('The Save action is not defined')
                            break
                        }
                        gb = !1
                        ic(qb.serialize(Ob()))
                        break
                    default:
                        h(kc) ? ((gb = !0), kc(a)) : alert('The Load action is not defined')
                }
            else if (w.asp) {
                gb = 'ceSave' != rb
                try {
                    eval(p.pb + "('" + w.id + "','')")
                } catch (t) {
                    alert('Unexpected order of elements (CL81)')
                }
            } else
                switch (rb) {
                    case 'ceDelete':
                        if (!h(fa)) throw Error('CL32')
                        p.pb && p.pb.d
                            ? (window.location = p.pb.d.replace('_ce_', fa))
                            : alert('The Delete action is not defined')
                        break
                    case 'ceSave':
                        if (!h(w.fieldId)) throw Error('CL33')
                        if (p.pb && p.pb.s)
                            if (h(w.form))
                                oc(),
                                    w.form.action
                                        ? (w.form.action = p.pb.s)
                                        : w.form.setAttribute('action', p.pb.s),
                                    w.form.submit()
                            else {
                                a = document.createElement('FORM')
                                document.body.appendChild(a)
                                a.setAttribute('ce', 'form' + w.container.id)
                                a.action
                                    ? (a.action = p.pb.s)
                                    : a.setAttribute('action', p.pb.s)
                                a.method
                                    ? (a.method = 'post')
                                    : a.setAttribute('method', 'post')
                                var c = document.createElement('INPUT')
                                c.type = 'hidden'
                                c.id = w.fieldId
                                c.name = w.id
                                gb = !1
                                c.value = qb.serialize(Ob())
                                a.appendChild(c)
                                a.submit()
                            }
                        else alert('The Save action is not defined')
                        break
                    default:
                        p.pb && p.pb.l
                            ? (window.location = p.pb.l.replace('_ce_', rb))
                            : alert('The Load action is not defined')
                }
        },
        Id = function (a) {
            if (p.help) {
                var c = D(y.fds, a),
                    b = null
                h(c)
                    ? c.d && (b = c.d)
                    : ((c = D(y.acs, a)),
                        h(c) && c.d
                            ? (b = c.d)
                            : ((c = D(p.els.rls, a)), h(c) && c.d && (b = c.d)))
                h(b) && 0 < b.length ? ub(b) : wa()
            }
        },
        Xb = function (a) {
            'ceEval' == a || 'ceExec' == a
                ? ((p.isEval = 'ceEval' == a), Lc())
                : (va.close(), (r = 1), Fc(a))
        },
        Jc = function () {
            if (!(0 < e.getChildrenByAttribute(oa, 'ce235').length)) {
                var a = document.createElement('DIV')
                a.setAttribute('ce235', 'true')
                a.className = 'ceDelete'
                var c = document.createElement('SPAN')
                c.className = 'ceDeleteButton'
                c.innerHTML = p.els.lbl.u
                a.appendChild(c)
                e.getChildrenByAttribute(oa, 'ce234')[0].appendChild(a)
                c.onclick = function (a) {
                    confirm(p.els.er.e105) && Fc('ceDelete')
                }
            }
        },
        sb = function (a) {
            a = eval(gd(a))
            return h(a.ce) ? a.ce : a
        },
        D = function (a, c) {
            if (h(a)) {
                h(a.ce) && (a = a.ce)
                for (var b, d = 0; d < a.length; d++) {
                    var b = a[d]
                    var customNameEquals = false
                    if (b.n) {
                        var massagedName = b.n.replace(/ /g, '')
                        customNameEquals = massagedName.toLowerCase() == c.toLowerCase()
                    }
                    if (
                        (h(b.v) && b.v == c) ||
                        (h(b.ID) && b.ID == c) ||
                        customNameEquals
                    ) {
                        return b
                    }
                }
            }
            return null
        },
        ja = function () {
            var a = []
            if (y.references) {
                K('ce802', d.Field, p.els.lbl.h, a)
                K('ce803', d.Field, p.els.lbl.l, a)
                for (var c = 0; c < y.fds.length; c++) {
                    var b = y.fds[c]
                    if (b.t == d.Field && b.o == l.Collection) {
                        if (b.ct == A.Generic) throw Error('CL83')
                        b.ct != A.Reference && a.push(b)
                    } else a.push(b)
                }
            } else a = y.fds
            var k = h(fa),
                e = [],
                m = h(ha)
            for (c = 0; c < a.length; c++)
                if (((b = a[c]), !h(b.gtb) || b.gtb))
                    if (!b.ir || !k || b.v != fa) {
                        if (m)
                            if (h(b.grp))
                                if ('ce805' == ha) continue
                                else {
                                    if (b.grp != ha) continue
                                }
                            else if ('ce805' != ha) continue
                        e.push(b)
                    }
            return pd(e, y.references)
        },
        pd = function (a, c) {
            function b(a, c) {
                return a.Name.localeCompare(c.Name)
            }
            if (h(ha)) return (ha = null), a
            for (var d = [], g = !1, e = 0, l; e < a.length; e++)
                (l = a[e]),
                    h(l.grp)
                        ? Od(d, l.grp) || d.push({ ID: 'ce804', Name: l.grp })
                        : (g = !0)
            if (0 < d.length) {
                l = []
                c && (l.push(a[0]), l.push(a[1]))
                d.sort(b)
                for (e = 0; e < d.length; e++) l.push(d[e])
                g && l.push({ ID: 'ce805', Name: p.els.lbl.eg })
                return l
            }
            return a
        },
        Od = function (a, c) {
            for (var b = 0; b < a.length; b++) if (a[b].Name == c) return !0
            return !1
        },
        vb = function () {
            for (var a = [], c = h(ha), b, e = 0; e < y.fds.length; e++)
                if (
                    ((b = y.fds[e]),
                        !(
                            b.ir ||
                            b.t == d.Function ||
                            b.o == l.Collection ||
                            (h(b.st) && !b.st)
                        ))
                ) {
                    if (c)
                        if (h(b.grp))
                            if ('ce805' == ha) continue
                            else {
                                if (b.grp != ha) continue
                            }
                        else if ('ce805' != ha) continue
                    a.push(b)
                }
            return pd(a, !1)
        },
        wc = function (a) {
            for (var c = [], b = D(y.fds, a), d = 0; d < y.fds.length; d++)
                (a = y.fds[d]),
                    a.v != b.v &&
                    a.o == l.Collection &&
                    a.ct == A.Reference &&
                    a.cc == b.cc &&
                    a.cl == b.cl &&
                    a.cv == b.cv &&
                    c.push(a)
            return c
        },
        Na = function () {
            for (var a = [], c = !1, b = 0, e; b < y.fds.length; b++)
                if (
                    ((e = y.fds[b]),
                        e.o != l.Collection &&
                        e.t != d.Function &&
                        !e.ir &&
                        (!h(e.st) || e.st))
                ) {
                    c = !0
                    break
                }
            c && K('set', null, p.els.lbl.w, a)
            for (b = 0; b < y.acs.length; b++) a.push(y.acs[b])
            return a
        },
        V = function () {
            if (Ga(c)) return Rb()
            var a = []
            var b = 0
            for (var e = c, k; h(e);) {
                k = x(e)
                if (k == d.Flow) break
                k == d.LeftSource ? b-- : k == d.RightSource && b++
                e =
                    h(e.previousSibling) && x(e.previousSibling) != d.Flow
                        ? e.previousSibling
                        : null
            }
            b = 0 == b
            for (k = 0; k < p.els.cls.length; k++)
                (e = p.els.cls[k]), ((!p.isEval && b) || 'then' != e.v) && a.push(e)
            return a
        },
        Ad = function (a) {
            for (var c = [], b, d = 0; d < p.els.cls.length; d++)
                (b = p.els.cls[d]), 'then' != b.v && b.v != a && c.push(b)
            return c
        },
        Rc = function (a, c) {
            for (var b = 0; b < p.els.ops.length; b++)
                if (p.els.ops[b].v == a && p.els.ops[b].o == c) return p.els.ops[b]
            return null
        },
        db = function (a, c) {
            var b = []
            if (a.t == d.Function) {
                var g = a.rt.o
                var e = a.rt.l
                var m = h(a.rt.mds)
            } else
                a.ir
                    ? ((e = m = !1), (g = l.Bool))
                    : ((e = a.l), (g = a.o), (m = h(a.mds)))
            for (var n = 0; n < p.els.ops.length; n++) {
                var q = p.els.ops[n]
                if (
                    q.o == g &&
                    (!h(c) || q.v != c) &&
                    (e || ('isNull' != q.v && 'isNotNull' != q.v))
                ) {
                    if (g == l.Numeric && m)
                        if (e) {
                            if (
                                'isNull' != q.v &&
                                'isNotNull' != q.v &&
                                'equal' != q.v &&
                                'notEqual' != q.v
                            )
                                continue
                        } else if ('equal' != q.v && 'notEqual' != q.v) continue
                    b.push(q)
                }
            }
            return b
        },
        dd = function () {
            var a = []
            K('true', null, p.els.lbl.t, a)
            K('false', null, p.els.lbl.f, a)
            return a
        },
        Ec = function (a, b) {
            var g = []
            Ga(c)
            for (
                var e,
                m,
                n,
                p,
                q = b.t == d.Function ? b.rt.e : b.e,
                r = b.t == d.Function ? b.rt.mds : b.mds,
                u = 0;
                u < y.fds.length;
                u++
            )
                if (
                    ((e = y.fds[u]),
                        e.o != l.Collection &&
                        ((m = hd(e)),
                            (p = e.t == d.Function ? e.rt.e : e.e),
                            (n = e.t == d.Function ? e.rt.mds : e.mds),
                            m != l.Enum || (h(q) && q == p)))
                )
                    m != a ||
                        e.ir ||
                        (h(n)
                            ? h(r) && n == r && g.push(e)
                            : h(r) ||
                            (h(b.ftr) &&
                                'any' != b.ftr &&
                                'any' != e.ftr &&
                                b.ftr != e.ftr) ||
                            g.push(e))
            return g
        },
        Qb = function (a) {
            var b = null
            if (h(a)) (e = D(y.fds, a)), h(e) && h(e.ftr) && (b = e.ftr)
            else if (((e = Da(c)), h(e))) {
                var e = D(y.fds, e.getAttribute('ce208'))
                h(e) && h(e.ftr) && (b = e.ftr)
            }
            e = []
            for (var k, m = 0, n; m < y.fds.length; m++)
                (k = y.fds[m]),
                    (n = h(k.ftr) ? k.ftr : null),
                    ((k.t != d.Field ||
                        k.ir ||
                        h(k.mds) ||
                        k.o != l.Numeric ||
                        !k.i ||
                        (h(a) && k.v == a) ||
                        (null != b && 'any' != b && b != n && 'any' != n)) &&
                        (k.t != d.Function ||
                            k.rt.o != l.Numeric ||
                            !k.i ||
                            (h(a) && k.v == a) ||
                            (null != b && 'any' != b && b != n && 'any' != n))) ||
                    e.push(k)
            return e
        },
        ib = function (a, b) {
            var c = cd(a),
                d = null
            null != c &&
                (d = c.Client ? eval(c.Data[0] + '()') : eval('CodeEffects.Rule.' + a))
            if (h(b)) {
                c = []
                for (var g = 0, e; g < d.length; g++)
                    (e = d[g]),
                        (h(e.Filter) && 'any' != b && 'any' != e.Filter && e.Filter != b) ||
                        c.push(e)
                return c
            }
            return d
        },
        cd = function (a) {
            if (!h(p.els.mds)) return null
            for (var b = 0; b < p.els.mds.length; b++)
                if (p.els.mds[b].Name == a) return p.els.mds[b]
            return null
        },
        hd = function (a) {
            if (a.t == d.Function) return a.rt.o
            var b = a.o
            if (b == l.Collection) {
                if (a.ct != A.Value) throw Error('CL71')
                return a.co
            }
            return b
        },
        md = function (a) {
            if (h(Ia)) {
                var b = document.getElementById(Ia)
                h(b) && (b.className = $rule.trim(b.className.replace('ceCurrent', '')))
            }
            h(c) && (c.className = $rule.trim(c.className.replace('ceCurrent', '')))
            a.setAttribute('ce207', 'true')
            c = a
        },
        ra = function () {
            if (h(c)) {
                var a = null
                c.removeAttribute('ce207')
                if ('INPUT' == c.tagName) {
                    var b = ba(c),
                        d = ''
                    if (b == l.Numeric) {
                        if (ba(c) == l.Numeric) {
                            var e = parseInt(c.getAttribute('ce212'), 10),
                                m = parseInt(c.getAttribute('ce211'), 10),
                                n = parseInt(c.value, 10)
                            n < m
                                ? ((a = p.els.er.e109),
                                    (c.value = m.toString()),
                                    c.setAttribute('ce206', c.value))
                                : n > e &&
                                ((a = p.els.er.e108),
                                    (c.value = e.toString()),
                                    c.setAttribute('ce206', c.value))
                        }
                        e = c.getAttribute('ce206')
                        m = parseInt(c.getAttribute('ce211'), 10)
                        try {
                            if (h(e)) {
                                var r = parseFloat(e.replace(',', '.'))
                                d =
                                    h(r) && '-0.' != e && '0.' != e ? r.toString() : m.toString()
                            } else d = m.toString()
                        } catch (z) {
                            d = m.toString()
                        }
                    } else d = $rule.encode(c.value)
                    r = c
                    h(yb)
                        ? ((b = document.getElementById(yb)),
                            h(b) &&
                            ((c = G(b)),
                                (c.innerHTML = 0 == d.length ? p.els.lbl.em : d),
                                c.setAttribute('ce206', d),
                                c.setAttribute('ce205', q.Input),
                                (c.style.display = ''),
                                h(a)
                                    ? ((c.className = 'ceValidationWarning'), (c.title = a))
                                    : ((c.className = 'ceValue ceCurrent'), (c.title = ''))))
                        : (P({
                            t: x(r),
                            id: null,
                            v: d,
                            n: 0 == d.length ? p.els.lbl.em : d,
                            st: b,
                            ct: T(r),
                            ft: J(r),
                            it: q.Input,
                            h: !1,
                            fv: !1
                        }),
                            h(a) && ((c.className = 'ceValidationWarning'), (c.title = a)))
                    yb = null
                    w.container.removeChild(r)
                }
            }
        },
        Rb = function () {
            var a = []
            a.push(D(p.els.cls, 'and'))
            for (var b = La(), e = !1, h = !1, l = 0; l < b.length; l++) {
                if (x(b[l]) == d.Flow && 'else' == b[l].getAttribute('ce208')) {
                    e = !0
                    break
                }
                b[l].id == c.id && (h = !0)
            }
            if (!h && e) return a
            for (b = 0; b < p.els.fls.length; b++)
                'if' == p.els.fls[b].v ||
                    (e && 'else' == p.els.fls[b].v) ||
                    a.push(p.els.fls[b])
            return a
        },
        tb = function (a, b) {
            for (var c, d = 0; d < a.length; d++)
                if (((c = a[d]), c.v == b)) return c.n
            return null
        },
        pc = function (a) {
            return tb(p.els.dsc, 'ce803' == a ? 'doesNotExist' : 'exists')
        },
        Aa = function () {
            function a(a) {
                var b = 0,
                    g = 0,
                    e
                a: {
                    for (e = c; h(e);) {
                        if (x(e) == d.RightBracket) break a
                        e = e.nextSibling
                    }
                    e = null
                }
                for (e = e.previousSibling; h(e) && x(e) != d.LeftBracket;)
                    T(e) == n.LeftParenthesis && b++,
                        T(e) == n.RightParenthesis && g++,
                        (e = e.previousSibling)
                b > g && K(n.RightParenthesis, null, p.els.lbl.pe, a)
                K(n.Addition, null, '&#43;', a)
                K(n.Subtraction, null, '&#150;', a)
                K(n.Multiplication, null, '&#215;', a)
                K(n.Division, null, '&#247;', a)
            }
            var b = []
            switch (x(X(c))) {
                case d.LeftBracket:
                    K(n.LeftParenthesis, null, p.els.lbl.pb, b)
                    K(n.Number, null, cb(l.Numeric), b)
                    for (var e = Qb(), k = 0; k < e.length; k++)
                        K(e[k].t == d.Function ? n.Function : n.Field, e[k].v, e[k].n, b)
                    break
                case d.Value:
                case d.Calculation:
                    e = T(c)
                    e == n.None && (e = T(X(c)))
                    switch (e) {
                        case n.Number:
                        case n.Field:
                        case n.RightParenthesis:
                            a(b)
                            break
                        case n.Function:
                            J(c) == m.End && a(b)
                            break
                        case n.LeftParenthesis:
                        case n.Addition:
                        case n.Subtraction:
                        case n.Multiplication:
                        case n.Division:
                            for (
                                K(n.LeftParenthesis, null, p.els.lbl.pb, b),
                                K(n.Number, null, cb(l.Numeric), b),
                                e = Qb(),
                                k = 0;
                                k < e.length;
                                k++
                            )
                                K(
                                    e[k].t == d.Function ? n.Function : n.Field,
                                    e[k].v,
                                    e[k].n,
                                    b
                                )
                    }
                    break
                default:
                    throw Error('CL80')
            }
            return b
        },
        Cc = function (a, b) {
            if (!h(a) || 0 == a.ps.length) return b
            var d = Wa(c)
            for (0 > d && (d = 0); d < a.ps.length;) {
                if (h(a.ps[d].f)) return a.ps[d].f
                d++
            }
            return b
        },
        K = function (a, b, c, d) {
            var g = new e.Menu.Item()
            g.ID = a
            h(b) && (g.Type = b + '')
            g.Name = c
            d.push(g)
        },
        Md = function (a, b) {
            if (a == n.None || b == n.None) throw Error('CL90')
            switch (a) {
                case n.Field:
                    return b == n.Number || b == n.Field
                case n.Number:
                    return b == n.Field || b == n.Number
                case n.LeftParenthesis:
                    return b == n.LeftParenthesis
                case n.RightParenthesis:
                    return b == n.RightParenthesis
                default:
                    return (
                        b == n.Multiplication ||
                        b == n.Division ||
                        b == n.Addition ||
                        b == n.Subtraction
                    )
            }
        },
        Zc = function (a, b) {
            var c = []
            if (!h(a) || 0 == a.length) return c
            b = b.toLowerCase()
            for (var d, e = 0; e < a.length; e++)
                (d = a[e].n || a[e].Name),
                    d.length >= b.length &&
                    d.substr(0, b.length).toLowerCase() == b &&
                    c.push(a[e])
            return c
        },
        Pd = function () {
            if (!h(c)) return 'i101'
            if (8 == r) return 'i126'
            var a = X(c)
            switch (x(a)) {
                case d.Flow:
                    return 'else' == a.getAttribute('ce208') ? 'i110' : 'i103'
                case d.LeftSource:
                case d.LeftParenthesis:
                    return 'i103'
                case d.RightSource:
                case d.RightParenthesis:
                    return 'i111'
                case d.Field:
                    if (da) return 'i127'
                    a = D(y.fds, a.getAttribute('ce208'))
                    return h(a)
                        ? a.o == l.Collection && a.ct == A.Reference
                            ? 'i124'
                            : 'i104'
                        : 'i124'
                case d.Exists:
                    return da ? 'i136' : 'i135'
                case d.Where:
                    return 'i124'
                case d.LeftBracket:
                    return 'i106'
                case d.RightBracket:
                    return 'i121'
                case d.Calculation:
                    return 'i108'
                case d.Action:
                    switch (J(a)) {
                        case m.End:
                            return sa(a) && da
                                ? 'i128'
                                : 'else' == vc(a, d.Flow).getAttribute('ce208')
                                    ? 'i124'
                                    : 'i125'
                        case m.Name:
                            return da ? 'i128' : 'i123'
                        default:
                            return 'i123'
                    }
                case d.Function:
                    switch (J(a)) {
                        case m.End:
                            return sa(a) && da ? 'i127' : 'i104'
                        case m.Name:
                            return da ? 'i127' : 'i123'
                        default:
                            return 'i123'
                    }
                case d.Operator:
                    if (da) return 'i129'
                    var b = ba(a)
                    return b == l.Numeric
                        ? ((a = Da(a)),
                            (a = h(a) ? D(y.fds, a.getAttribute('ce208')) : null),
                            h(a) && a.cal ? 'i122' : 'i113')
                        : b == l.String
                            ? 'i113'
                            : b == l.Date
                                ? 'i114'
                                : b == l.Time
                                    ? 'i117'
                                    : 'i119'
                case d.Value:
                    return (
                        (b = ba(a)),
                        b == l.String || b == l.Numeric
                            ? h(a.getAttribute('ce207'))
                                ? 'i105'
                                : 'i107'
                            : b == l.Date
                                ? 3 == r
                                    ? 'i109'
                                    : da
                                        ? 'i132'
                                        : 'i115'
                                : b == l.Time
                                    ? 4 == r
                                        ? 'i116'
                                        : da
                                            ? 'i133'
                                            : 'i118'
                                    : da
                                        ? 'i134'
                                        : 'i120'
                    )
                case d.Clause:
                    return 'then' == a.getAttribute('ce208')
                        ? 'i110'
                        : da
                            ? 'i129'
                            : 'i103'
                default:
                    return 'i122'
            }
        },
        cb = function (a, b) {
            switch (a) {
                case l.String:
                    return p.els.lbl.s
                case l.Date:
                    return p.els.lbl.v
                case l.Time:
                    return p.els.lbl.j
                case l.Numeric:
                    return b ? p.els.lbl.e : p.els.lbl.m
                case l.Bool:
                    return p.els.lbl.b
                case l.Enum:
                    return p.els.lbl.e
                default:
                    throw Error('CL45')
            }
        },
        Ga = function (a) {
            var b = h(a.getAttribute('ce202')) ? x(a) : null
            return b == d.Setter || b == d.Action
                ? !0
                : b == d.Flow
                    ? !1
                    : h(a.previousSibling)
                        ? Ga(a.previousSibling)
                        : !1
        },
        Sc = function (a, b, c) {
            if (!h(a) || !h(a.ps)) return null
            for (var d = c; d <= a.ps.length; d++) if (a.ps[d].o == b) return a.ps[d]
            return 0 < c ? Sc(a, b, 0) : null
        },
        Cb = function (a, b) {
            var c = x(a),
                e = J(a)
            return a.getAttribute &&
                h(a.getAttribute('ce204')) &&
                (c == d.Function ||
                    c == d.Action ||
                    (c == d.Calculation && (e == m.Name || e == m.End))) &&
                e == b
                ? a
                : h(a.previousSibling)
                    ? Cb(a.previousSibling, b)
                    : null
        },
        sc = function (a, b) {
            var c = x(a),
                e = J(a)
            return a.getAttribute &&
                h(a.getAttribute('ce204')) &&
                (c == d.Function ||
                    c == d.Action ||
                    (c == d.Calculation && (e == m.Name || e == m.End))) &&
                e == b
                ? a
                : h(a.nextSibling)
                    ? sc(a.nextSibling, b)
                    : null
        },
        vc = function (a, b) {
            return h(a)
                ? a.getAttribute && h(a.getAttribute('ce202')) && x(a) == b
                    ? a
                    : h(a.previousSibling)
                        ? vc(a.previousSibling, b)
                        : null
                : null
        },
        Da = function (a) {
            return h(a)
                ? h(a.getAttribute) &&
                    h(a.getAttribute('ce202')) &&
                    (x(a) == d.Field ||
                        ((x(a) == d.Function || x(a) == d.Action) && J(a) == m.Name) ||
                        (x(a) == d.Calculation && J(a) == m.Name))
                    ? a
                    : h(a.previousSibling)
                        ? Da(a.previousSibling)
                        : null
                : null
        },
        qd = function (a) {
            if (!h(a)) return null
            if (h(a.getAttribute) && h(a.getAttribute('ce202'))) {
                var b = x(a)
                if (b == d.RightSource || b == d.LeftSource) return a
                if (h(a.previousSibling)) return qd(a.previousSibling)
            }
            return null
        },
        Xa = function (a, b) {
            return h(a)
                ? h(a.getAttribute) && h(a.getAttribute('ce202')) && x(a) == b
                    ? a
                    : h(a.nextSibling)
                        ? Xa(a.nextSibling, b)
                        : null
                : null
        },
        Ub = function (a) {
            return a.getAttribute && h(a.getAttribute('ce202')) && x(a) != d.HtmlTag
                ? a
                : h(a.nextSibling)
                    ? Ub(a.nextSibling)
                    : null
        },
        X = function (a) {
            return Fb(a) ? a : h(a.previousSibling) ? X(a.previousSibling) : null
        },
        Ba = function (a) {
            return Fb(a) ? a : h(a.nextSibling) ? Ba(a.nextSibling) : null
        },
        xb = function (a, b) {
            if (!h(a)) return null
            var c = J(a)
            return c == m.End
                ? null
                : c == m.Param && ba(a, !0) == b
                    ? a
                    : h(a.nextSibling)
                        ? xb(a.nextSibling, b)
                        : null
        },
        Kc = function () {
            O = []
            if (h(p.els.lbl.y)) {
                var a = new e.Menu.Item()
                a.ID = 'ceEval'
                a.Name = p.els.lbl.y
                O.push(a)
            }
            h(p.els.lbl.x) &&
                ((a = new e.Menu.Item()),
                    (a.ID = 'ceExec'),
                    (a.Name = p.els.lbl.x),
                    O.push(a))
            if (h(p.els.rls))
                for (var b = 0; b < p.els.rls.length; b++)
                    (a = new e.Menu.Item()),
                        (a.ID = p.els.rls[b].v || p.els.rls[b].ID),
                        (a.Name = p.els.rls[b].n || p.els.rls[b].Name),
                        O.push(a)
        },
        Ua = function (a, b) {
            if (!b) {
                var d = Cb(a, m.Name)
                Ia = d.id
                c = G(d)
            }
            c = c.nextSibling
        },
        M = function (a) {
            y = null
            var b = p.els.src[0].n
            h(a) && ((a = qd(a)), h(a) && (b = a.getAttribute('ce208')))
            for (a = 0; a < p.els.src.length; a++)
                if (p.els.src[a].n == b) {
                    y = p.els.src[a]
                        ; (h(y.fds) && y.fds.length) || (y.fds = [])
                        ; (h(y.acs) && y.acs.length) || (y.acs = [])
                    if (!h(y.references))
                        for (y.references = !1, a = 0; a < y.fds.length; a++)
                            if (
                                ((b = y.fds[a]),
                                    b.t == d.Field && b.o == l.Collection && b.ct == A.Reference)
                            ) {
                                y.references = !0
                                break
                            }
                    break
                }
            if (!h(y)) throw Error('CL91')
        },
        G = function (a) {
            if (h(a)) {
                if (h(Ia)) {
                    var b = document.getElementById(Ia)
                    h(b) &&
                        (b.className = $rule.trim(b.className.replace('ceCurrent', '')))
                }
                h(c) &&
                    (c.className = $rule.trim(
                        c.className.replace('ceCurrent', '').replace('ceHighlight', '')
                    ))
                'INPUT' != a.tagName &&
                    0 > a.className.indexOf('ceCurrent') &&
                    (a.className += ' ceCurrent')
                return a
            }
        },
        sa = function (a) {
            var b = x(a),
                c = J(a)
            return b == d.Function ||
                b == d.Action ||
                (b == d.Calculation && (c == m.Name || c == m.End))
                ? ((a = aa(a)), h(a) && h(a.ps) ? 0 == a.ps.length : !0)
                : !1
        },
        Fb = function (a) {
            return a.getAttribute && h(a.getAttribute('ce202'))
                ? ((a = x(a)), a != d.Tab && a != d.NewLine && a != d.HtmlTag)
                : !1
        },
        jb = function (a, b, c, e) {
            return (
                (a == d.Value && (b == l.String || b == l.Numeric)) ||
                (a == d.Calculation && c == n.Number) ||
                ((a == d.Function || a == d.Action) &&
                    e == q.Input &&
                    (b == l.String || b == l.Numeric))
            )
        },
        ma = function (a) {
            return (
                (31 < a && 40 > a) ||
                (41 < a && 60 > a) ||
                61 == a ||
                (63 < a && 91 > a) ||
                (96 < a && 123 > a) ||
                222 < a
            )
        },
        Vc = function () {
            for (var a = La(), b = 0; b < a.length; b++)
                switch (x(a[b])) {
                    case d.Clause:
                    case d.Function:
                    case d.Field:
                    case d.Operator:
                    case d.Value:
                    case d.Action:
                    case d.LeftParenthesis:
                    case d.RightParenthesis:
                    case d.Calculation:
                        return !0
                }
            return !1
        },
        W = function () {
            nc()
            da || wa()
            3 == r
                ? pa.position()
                : 4 == r
                    ? Ca.position()
                    : (6 == r || 8 == r) && xa()
        },
        U = function () {
            if (h(c.nextSibling)) {
                if (p.right) {
                    var a = x(c.nextSibling)
                    return a != d.NewLine && a != d.Tab
                }
                return !1
            }
            return !0
        },
        Yb = function () {
            if (h(c.nextSibling))
                for (c = c.nextSibling; h(c.nextSibling) && !Fb(c.nextSibling);) {
                    var a = c.nextSibling
                    w.container.removeChild(c)
                    c = a
                }
            bb()
        },
        Mc = function (a) {
            fc && 8 < e.Client.version && window.Modernizr && 3 > ec
                ? ec++
                : ((qa = 0), 1 != r && 2 != r && W())
        },
        Hd = function () {
            if (ca) {
                ; (6 != r && 8 != r) || xa()
                var a = x(c)
                a != d.NewLine && a != d.Tab ? hb(!1) : W()
            }
        },
        xa = function () {
            dc = 0
            F = ''
            C = []
            va.close()
            r = 0
        },
        Pb = function (a) {
            a = $rule.getChildrenByAttribute(document.body, 'class', a)
            if (h(a) && 0 < a.length)
                for (var b = 0, c, d = a.length; b < d; b++)
                    (c = a[b]), h(c.parentNode) && c.parentNode.removeChild(c)
        },
        Pc = function () {
            w.container.innerHTML = ''
            var a = document.createElement('SPAN')
            a.className = 'ceEmpty'
            a.style.paddingBottom = '2px'
            a.style.display = 'inline-block'
            a.style.whiteSpace = 'nowrap'
            a.style.cursor = 'default'
            a.innerHTML = p.els.lbl.g
            w.container.appendChild(a)
            c = null
        },
        Qc = function () {
            h(w.container) &&
                ((w.container.innerHTML = ''), (w.container.style.color = ''))
        },
        Vb = function (a) {
            if (e.getScrollHeight() > a)
                try {
                    window.scroll(e.getScrollWidth(), a)
                } catch (g) { }
        },
        uc = function (a, b) {
            var c = e.getWindowDimensions().height,
                d = e.getScrollHeight()
            if (c + d < a + b)
                try {
                    window.scroll(e.getScrollWidth(), d + (a + b - (c + d)))
                } catch (ka) { }
        },
        zb = function (a) {
            return String(a)
                .replace(/\\/g, '\\\\')
                .replace(/'/g, "'")
                .replace(/"/g, '&quot;')
        },
        Jb = function (a) {
            return String(a)
                .replace(/&#92;/g, '\\')
                .replace(/&#39;/g, "'")
                .replace(/&quot;/g, '"')
        },
        gd = function (a) {
            return h(a) ? a.replace('+', '$') : a
        },
        ba = function (a, b) {
            var d = parseInt(a.getAttribute('ce209'), 10)
            return d != l.Collection || b
                ? d
                : D(y.fds, Da(c).getAttribute('ce208')).co
        },
        ya = function (a, b) {
            if (h(b) && 0 < b.length) {
                var c = e.defined(b) ? b : ''
                a.className = c
            }
        },
        Kb = function (a) {
            return 'true' == a ? p.els.lbl.t : p.els.lbl.f
        },
        wa = function (a, b) {
            if (p.help)
                if (((Z.className = 'ceHelp'), h(b))) {
                    var c = p.els.ms[a].replace('{0}', b)
                    ub(c)
                } else ub(p.els.ms[h(a) ? a : Pd()])
        },
        Ha = function (a) {
            return h(a) && a.getAttribute && 'if' == a.getAttribute('ce208')
        },
        La = function () {
            return e.getChildrenByTagName(w.container, 'SPAN', !1)
        },
        Wb = function (a) {
            if (h(c)) {
                var b = c,
                    d = !1
                do {
                    'true' == b.getAttribute('ce218')
                        ? ((b.className = $rule.trim(
                            b.className.replace('ceSelected', '')
                        )),
                            b.setAttribute('ce218', 'false'))
                        : ((b.className = e.trim(b.className) + ' ceSelected'),
                            b.setAttribute('ce218', 'true'),
                            (d = !0))
                    if (b.id == ta) break
                    b = a ? b.previousSibling : b.nextSibling
                } while (h(b) && b.id != ta)
                h(b) &&
                    ((b.className = $rule.trim(b.className.replace('ceSelected', ''))),
                        b.setAttribute('ce218', 'false'),
                        d &&
                        ((b.className = e.trim(b.className) + ' ceSelected'),
                            b.setAttribute('ce218', 'true')))
            }
        },
        x = function (a) {
            return parseInt(a.getAttribute('ce202'), 10)
        },
        T = function (a) {
            return parseInt(a.getAttribute('ce203'), 10)
        },
        J = function (a) {
            return parseInt(a.getAttribute('ce204'), 10)
        },
        za = function (a) {
            return parseInt(a.getAttribute('ce205'), 10)
        },
        lb = function () {
            pa.hide()
        },
        kb = function () {
            Ca.hide()
        },
        xd = function (a) {
            return Tc(a)
        },
        zd = function (a) {
            return rc(a)
        },
        yd = function (a) {
            return qc(a)
        },
        sd = function (a) {
            Cd(a)
        },
        ub = function (a) {
            h(Z) && h(a) && (Z.innerHTML = a)
        },
        Bb = function (a) {
            p.help &&
                (h(a) || (a = '--------------'),
                    (Z.innerHTML = a),
                    h(Z) && (Z.className += ' ceValueWarn'))
        }
}
