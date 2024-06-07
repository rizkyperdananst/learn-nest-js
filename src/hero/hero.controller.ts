import { Controller, Get, HttpCode, Post, Req, Res } from "@nestjs/common";

let heros = [
    {
        id: 1,
        name: 'Naruto',
        type: 'Rival',
    },
    {
        id: 2,
        name: 'Sasuke',
        type: 'Rival',
    }
];

@Controller('hero') // ini namanya decorator
export class HeroController {
    @Get("index") // hero/index
    @HttpCode(200)
    index(@Res() response) {
        response.json(heros);
        // return 'Hero index'
        // return {
        //     title: 'Hero index'
        // }
    }

    @Get("create")
    create(@Res({ passthrough: true }) response): string {
        response.cookie('name', 'rizky');
        return 'Hero create';
    }

    @Post("store")
    store(@Req() request, @Res() response) {
        const { id, name, type } = request.body;
        heros.push({ id, name, type });
        return response.json(heros);
        // response.status(201).json(request.body);
    }
}