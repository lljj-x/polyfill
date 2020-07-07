((constructor) => {
    if (constructor &&
        constructor.prototype &&
        constructor.prototype.children == null) {
        Object.defineProperty(constructor.prototype, 'children', {
            get() {
                return this.childNodes.filter(node => node.nodeType === 1);
            }
        });
    }
})(window.Node || window.Element);