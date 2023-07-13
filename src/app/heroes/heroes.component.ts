import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroes : Hero[] = [];

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
