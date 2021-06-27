import { registerPlugin } from '@capacitor/core';
const IosSwipeBack = registerPlugin('IosSwipeBack', {
    web: () => import('./web').then(m => new m.IosSwipeBackWeb()),
});
export * from './definitions';
export * from './web';
export { IosSwipeBack };
//# sourceMappingURL=index.js.map