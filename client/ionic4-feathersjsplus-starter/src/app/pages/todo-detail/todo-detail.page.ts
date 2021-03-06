import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { /* Router, */ ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

import { FeathersService } from '../../services/feathers.service';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit {
  @ViewChild(TodoItemComponent) component: TodoItemComponent;

  protected newItem: boolean; // true if opened without navParams, so it is an "Add" command.
  protected todoId: string;

  constructor(
    private feathersService: FeathersService,
    private activatedRoute: ActivatedRoute,
    // private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.todoId = params.get('todoId') || '';
        this.newItem = !this.todoId;
        console.log('TodoDetailPage got todoId: %s (newItem: %s)', this.todoId, this.newItem); // DEBUG
      });
  }

  ionViewDidEnter() { // IONIC4
    // console.log('ionViewDidEnter TodoDetailPage');
    // Note: IONIC4 sends lifecycle events only to pages. Lifecycle events have to be dispatched manually to child components.
    if (this.component) {
      this.component.ionViewDidEnter();
    }
  }

  // Command completed
  onDone(event) {
    console.log('TodoDetailPage command done. event: %o', event);
    this.toaster(`Task "${event.item.title}" ${event.action}.`);

    // let params = {};
    // IONIC3: this.navCtrl.pop();
    this.navCtrl.back(); // IONIC4 // TODO: (soon) Fix navigation back. Sometimes crashes, never actually works.
    // ? this.router.?
  }

  private toaster(text: string, time: number = 3000) {
    this.toastCtrl.create({
      message: text,
      duration: time,
    }).then(toast => {
      toast.present();
      // setTimeout(() => toast.dismiss(), time);
    });
  }

}
