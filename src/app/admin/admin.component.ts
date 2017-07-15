import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]

})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, position: string, number: number, birthplace: string, image: string) {
    var newPlayer: Player = new Player(name, age, position, number, birthplace, image);
    this.playerService.addPlayer(newPlayer);
  }
}
