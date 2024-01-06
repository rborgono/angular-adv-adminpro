import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) {
    this.titulo = '';
    this.tituloSubs$ = this.getDataRoute()
      .subscribe(({ titulo }) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${titulo}`;
      })
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter(event => (event as ActivationEnd).snapshot.firstChild === null),
        map(event => (event as ActivationEnd).snapshot.data)
      );
  }

}
