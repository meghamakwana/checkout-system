type PricingRule = (items: Record<string, number>, prices: Record<string, number>) => number;

export const appleTvPricingRule: PricingRule = (items, prices) => {
    const count = items['atv'] || 0;
    const freeItems = Math.floor(count / 3);
    return (count - freeItems) * prices['atv'];
};

export const superIpadPricingRule: PricingRule = (items, prices) => {
    const count = items['ipd'] || 0;
    const price = count > 4 ? 499.99 : prices['ipd'];
    return count * price;
};

export const defaultPricingRule: PricingRule = (items, prices) => {
    let total = 0;
    for (const sku in items) {
        if (sku !== 'atv' && sku !== 'ipd') {
            total += items[sku] * prices[sku];
        }
    }
    return total;
};
