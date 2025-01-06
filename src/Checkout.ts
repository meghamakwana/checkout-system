type PricingRule = (items: Record<string, number>, prices: Record<string, number>) => number;

export class Checkout {
    private items: Record<string, number> = {};
    private pricingRules: PricingRule[];

    constructor(pricingRules: PricingRule[]) {
        this.pricingRules = pricingRules;
    }

    scan(item: string): void {
        this.items[item] = (this.items[item] || 0) + 1;
    }

    total(): number {
        const prices: Record<string, number> = {
            'ipd': 549.99,
            'mbp': 1399.99,
            'atv': 109.50,
            'vga': 30.00
        };

        let total = 0;
        for (let rule of this.pricingRules) {
            total += rule(this.items, prices);
        }

        return total;
    }
}
