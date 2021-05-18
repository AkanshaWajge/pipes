import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnit:string): unknown {
    console.log(targetUnit)
    if(!value){
      return '';
    }
    switch (targetUnit) {
        case 'm':
        return value*1.6093;
    
        case 'km':
        return value*1.6093*1000;
   
        case 'cm':
        return value*1.6093*1000*1000;
       
       default:
        throw new Error("Target not supported!");
        
    }
  }

}