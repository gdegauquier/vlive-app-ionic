import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'stationFilter'
})
export class StationFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
       let filter = args != null && args.length > 0 ? args[0].toLocaleLowerCase() : null ;
       return filter && filter != null ? value.filter(station=> station.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}