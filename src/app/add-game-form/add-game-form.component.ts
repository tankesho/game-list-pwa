import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { NgForm } from '@angular/forms';
import { Entry } from '../model/entry';
import { Game } from '../model/game';
import { Router } from '@angular/router';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent {
  @ViewChild('form') form!: NgForm;

  @Input() game!: Game;
  @Input() entry!: Entry;
  userId = WebStorageUtil.get(Constants.LOGGED_USER).id;
  submit!: string;
  logged!: boolean

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private entryService: EntryService,
    private router: Router
    ) {}

  async ngOnInit() {
    this.logged = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
    let userId = 0;
    if (this.logged)
      userId = WebStorageUtil.get(Constants.LOGGED_USER).id;
    let lastId = await this.entryService.getLastEntryId();
    this.entryService
      .getEntryByUserAndGame(userId, this.game.id)
      .then((e: Entry[]) => {
        this.entry = e[0];

        if (this.entry == undefined)
          this.entry = new Entry(lastId + 1, 1, 0, 0, this.game.id, userId);
      })
      .catch(() => {
        alert("Desculpe, não foi possível resgatar as informações da sua lista!")
      })
  }

  async ngOnSubmit() {
    if (this.logged) {
      let exists = await this.entryService.isExist(this.userId, this.game.id);

      if (!exists) {
        this.entryService.save(this.entry)
        .then(() => {
          this.isSuccess = true;
          this.message = 'Jogo adicionado a sua lista com sucesso com sucesso!';
        })
        .catch((e) => {
          this.isSuccess = false;
          this.message = e;
        })
        .finally(() => {
          this.isShowMessage = true;
          this.form.reset;
        });;
      } else {
        this.entryService.update(this.entry)
        .then(() => {
          this.isSuccess = true;
          this.message = 'Jogo atualizado com sucesso com sucesso!';
        })
        .catch((e) => {
          this.isSuccess = false;
          this.message = e;
        }).finally(() => {
          this.isShowMessage = true;
          this.form.reset;
        });
      }
    }
  }

  onDelete() {
    if (this.logged) {
      let confirmation = window.confirm(
        'Quer mesmo remover o jogo de sua lista?'
      );
      if (!confirmation) {
        return;
      }
      this.entryService.delete(this.entry)
      .then(() => {
        this.isSuccess = true;
        this.message = 'Jogo removido sua lista com sucesso com sucesso!';
      })
      .catch(() => {
        this.isSuccess = false;
        this.message = 'Ocorreu um erro na operação, tente novamente mais tarde.!';
      })
      .finally(() => {
        this.router.navigate(['users', this.entry.userId]);
        alert('Jogo removido com sucesso');
      });
    }
  }
}
