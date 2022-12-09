import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-simple-bootstrap-nav></app-simple-bootstrap-nav>-->
    <app-angular-bootstrap-nav></app-angular-bootstrap-nav>

    <router-outlet></router-outlet>


    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="dateOfBirth">Date of birth</label>
            <div class="input-group">
              <input
                id="dateOfBirth"
                class="form-control"
                placeholder="yyyy-mm-dd"
                name="dp"
                ngbDatepicker
                #dp="ngbDatepicker"
              />
              <button class="btn btn-outline-secondary bi bi-calendar3" (click)="dp.toggle()" type="button"></button>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
      </div>
    </ng-template>

    <button class="btn btn-lg btn-outline-primary" 
      (click)="open(content)">Launch demo modal</button>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing investigation';

  constructor(private modalService: NgbModal) {

  }
  open(content: any) {
    this.modalService.open(content)
      .result.then(
        (result) => {
          alert(result);
        }, 
        (reason) => { 
          alert(reason);
        }
      );

  }
}
