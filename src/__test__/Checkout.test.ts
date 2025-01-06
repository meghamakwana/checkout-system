import { Checkout } from '../Checkout';
import { appleTvPricingRule, superIpadPricingRule, defaultPricingRule } from '../PricingRules';
const pricingRules = [appleTvPricingRule, superIpadPricingRule,defaultPricingRule];
test('3 for 2 deal on Apple TVs', () => {
    const co = new Checkout(pricingRules);

    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    expect(co.total()).toBe(249.00);
});
test('$499.99 discount on each with more then 4 Super iPad', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');

    expect(co.total()).toBe(2718.95);
});
test('Default Pricing', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');

    expect(co.total()).toBe(1209.48);
});
test('If More then 3 Apple TV with VGA adapter ', () => {
  
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    expect(co.total()).toBe(468.00);
});