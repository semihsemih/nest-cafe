import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery): Coffee[] {
        // const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Coffee {
        return this.coffeeService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body('name') body: any): any {
        return this.coffeeService.create(body);
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any): void {
        return this.coffeeService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {
        return this.coffeeService.remove(id);
    }
}
