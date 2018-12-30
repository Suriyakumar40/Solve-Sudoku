import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numerToArray' })

export class NumberToArrayPipe implements PipeTransform {
    transform(value: string): Array<number> {
        const result: Array<number> = new Array<number>();
        if (value && parseInt(value, null) > -1) {
            for (let i = 0; i < parseInt(value, null); i++) {
                const incr = i + 1;
                result.push(incr);
            }
        }
        return result;
    }
}
