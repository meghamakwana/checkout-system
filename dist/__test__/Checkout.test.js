"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Checkout_1 = require("../Checkout");
const PricingRules_1 = require("../PricingRules");
test('3 for 2 deal on Apple TVs', () => {
    const pricingRules = [PricingRules_1.appleTvPricingRule, PricingRules_1.superIpadPricingRule, PricingRules_1.defaultPricingRule];
    const co = new Checkout_1.Checkout(pricingRules);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.total()).toBe(249.00);
});
test('$499.99 discount on each with more then 4 Super iPad', () => {
    const pricingRules = [PricingRules_1.appleTvPricingRule, PricingRules_1.superIpadPricingRule, PricingRules_1.defaultPricingRule];
    const co = new Checkout_1.Checkout(pricingRules);
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
    const pricingRules = [PricingRules_1.appleTvPricingRule, PricingRules_1.superIpadPricingRule, PricingRules_1.defaultPricingRule];
    const co = new Checkout_1.Checkout(pricingRules);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).toBe(1209.48);
});
