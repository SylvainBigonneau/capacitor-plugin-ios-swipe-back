import { WebPlugin } from '@capacitor/core';
export class IosSwipeBackWeb extends WebPlugin {
    constructor() {
        super({
            name: 'IosSwipeBack',
            platforms: ['web']
        });
    }
    async enable(options) {
        return options;
    }
    async disable(options) {
        return options;
    }
}
const IosSwipeBack = new IosSwipeBackWeb();
export { IosSwipeBack };
//# sourceMappingURL=web.js.map