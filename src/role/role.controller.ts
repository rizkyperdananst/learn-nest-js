import { Controller, Get, HttpCode, Res } from '@nestjs/common';

@Controller('role')
export class RoleController {
    @Get()
    index(@Res() response) {
        return response.json([
            {
                id: 1,
                title: 'First Title',
                description: 'ewqdadasdadasdwqdeqeqwddasdadasd'
            },
            {
                id: 2,
                title: 'Second Title',
                description: 'ewqdadasdadasdwqdeqeqwddasdadasd'
            },
            {
                id: 3,
                title: 'Latest Title',
                description: 'ewqdadasdadasdwqdeqeqwddasdadasd'
            },
        ])
    }

    @Get('create')
    @HttpCode(200)
    create(@Res({ passthrough: true }) response) { // jika browser loading atau postman loading aja tambahkan passthrought bernilai true, agar tidak loading aja.
        return 'Ini halaman role create gays';
    }
}
