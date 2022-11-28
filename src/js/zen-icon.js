export function ZenIcon(options) {
    options = { ...options }

    this.init = () => {
        let file = options.file,
            revision = options.revision

        if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
            return true

        let isLocalStorage = !!(window['localStorage']),
            request,
            data,
            insertThat = () => {
                document.body.insertAdjacentHTML('beforeend', data)
            },
            insert = () => {
                if (document.body) insertThat()
                else document.addEventListener('DOMContentLoaded', insertThat)
            }

        if (isLocalStorage && localStorage.getItem('inlineSVGrev') === revision) {
            data = localStorage.getItem('inlineSVGdata')
            if (data) {
                insert()
                return true
            }
        }

        request = new XMLHttpRequest()
        request.open('GET', file, true)
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                data = request.responseText
                insert()
                if (isLocalStorage) {
                    localStorage.setItem('inlineSVGdata', data)
                    localStorage.setItem('inlineSVGrev', revision)
                }
            }
        }
        request.send()
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('iconset') === null) {
            this.init()
        }
    })
}
