import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.authService.verificaAutehnticacion().pipe(
      tap((estaAutenticado) => {
        if (!estaAutenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
    /* if (this.authService.auth.id) {
      return true;
    }
    return false; */
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.authService.verificaAutehnticacion().pipe(
      tap((estaAutenticado) => {
        if (!estaAutenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
    /* if (this.authService.auth.id) {
      return true;
    }
    return false; */
  }
}
