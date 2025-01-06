"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPricingRule = exports.superIpadPricingRule = exports.appleTvPricingRule = void 0;
const appleTvPricingRule = (items, prices) => {
    const count = items['atv'] || 0;
    const freeItems = Math.floor(count / 3);
    return (count - freeItems) * prices['atv'];
};
exports.appleTvPricingRule = appleTvPricingRule;
const superIpadPricingRule = (items, prices) => {
    const count = items['ipd'] || 0;
    const price = count > 4 ? 499.99 : prices['ipd'];
    return count * price;
};
exports.superIpadPricingRule = superIpadPricingRule;
const defaultPricingRule = (items, prices) => {
    let total = 0;
    for (const sku in items) {
        if (sku !== 'atv' && sku !== 'ipd') {
            total += items[sku] * prices[sku];
        }
    }
    return total;
};
exports.defaultPricingRule = defaultPricingRule;
