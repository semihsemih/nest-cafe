import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla']
        }
    ];

    findAll(): Coffee[] {
        return this.coffees;
    }

    findOne(id: string): Coffee {
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }

        return coffee;
    }

    create(createCoffeDto: any): void {
        this.coffees.push(createCoffeDto);
    }

    update(id: string, updateCoffeeDto: any): void {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            // update existing entity
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
