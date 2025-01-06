import { Checkout } from './Checkout';
import { appleTvPricingRule, superIpadPricingRule, defaultPricingRule } from './PricingRules';

const pricingRules = [appleTvPricingRule, superIpadPricingRule, defaultPricingRule];
const co = new Checkout(pricingRules);

co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('vga');

console.log(`Total: $${co.total().toFixed(2)}`);
