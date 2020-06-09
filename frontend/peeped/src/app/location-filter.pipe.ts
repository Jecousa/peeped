import { Pipe, PipeTransform } from '@angular/core';
 import { User } from './models/user'
import { HomePage } from './home/home.page'

 @Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(allUsers: User[], zoom:HomePage) {
    console.log(User[1].location)
    return allUsers.filter(User => User.location < 20);
  }

}
