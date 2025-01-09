import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnChanges {

  @Input({required: true}) id!: string; //receiving it as i/p& passing it to parent comp
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // simplified way passing as object 
  //  @Input({required: true}) user! : {
  //   id: string,
  //   avatar: string,
  //   name: string
  //  }

  @Output() select = new EventEmitter<string>(); //to output the data by emitting them

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

  ngOnChanges(selectedName: SimpleChanges): void {
    if (selectedName['name']?.currentValue) {
      console.log('Selected Name:', selectedName['name'].currentValue);
    }
  }

}
