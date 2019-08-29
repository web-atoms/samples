declare var AmdLoader: { instance: { modules: { [key: string]: { name: string, exports: any } } } };

export default function resolveModulePath(require: any, def: any): string {
    const m = AmdLoader.instance.modules;
    for (const key in m) {
        if (m.hasOwnProperty(key)) {
            const element = m[key];
            for (const k in element.exports) {
                if (element.exports.hasOwnProperty(k)) {
                    const ex = element.exports[k];
                    if (ex === def) {
                        return element.name;
                    }
                }
            }
        }
    }
}
